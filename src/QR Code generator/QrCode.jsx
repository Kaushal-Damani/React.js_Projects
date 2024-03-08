import QRCode from "qrcode.react";
import React from "react";
import { useState } from "react";

export default function QrCode() {
  const [text, setText] = useState("");
  const [scannedText, setScannedText] = useState("");

  const handlerSubmit = () => {
    setScannedText(text);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-indigo-100 min-h-screen">
        <input
          className="text-black font-bold text-xl px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          placeholder="Enter text to generate QR code"
        />
        <button
          onClick={handlerSubmit}
          className=" ml-1 border-2 rounded-md px-4 py-2 text-white font-bold text-xl focus:outline-none focus:border-blue-500"
        >
          Generate
        </button>
        <QRCode className="mt-[100px] mb-[100px]" value={text} />
        
         <p>Scanned Text: {scannedText}</p>
      </div>
    </>
  );
}
