import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas-pro";
import { Loading } from "./Loading";
import { useState } from "react";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTaken: (screenshot: string | null) => void;
}

export function ScreenshotButton({ screenshot, onScreenshotTaken }: ScreenshotButtonProps){
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot(){
    setIsTakingScreenshot(true);

    // html2canvas() returns a promise that resolves to a canvas element
    const canvas = await html2canvas(document.querySelector("html")!);   
    // canvas.toDataURL() returns a data URL containing a representation of the image in the format specified by the type parameter 
    const base64Image = canvas.toDataURL("image/png");

    onScreenshotTaken(base64Image);
    
    setIsTakingScreenshot(false);
  }

  if (screenshot){
    return(
      <button
        type="button"
        onClick={() => onScreenshotTaken(null)}
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"  
        style={{
          backgroundImage: `url(${screenshot})`, 
          backgroundSize: "cover", 
          backgroundPosition: "right bottom"
        }}
      >
        <Trash weight="fill" />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6"/>}
    </button>
  )
}