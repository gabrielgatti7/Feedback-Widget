import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

// Dependency Inversion Principle
// The code is designed to be flexible and easily adaptable to different implementations of the FeedbacksRepository interface.
// Prisma dependency is inverted, allowing for easy swapping of the implementation without changing the use case logic.
// Nodemailer dependency is also inverted
export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: "New feedback",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        `<p>Feedback type: ${type}</p>`,
        `<p>Comment: ${comment}</p>`,
        screenshot ? `<img src="${screenshot}" alt="Screenshot" />` : ``,
        `</div>`
      ].join('\n'),
    });
  }
}