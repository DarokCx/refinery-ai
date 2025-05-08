"use client";

import { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleAction = async (action: "rewrite" | "summarize" | "formalize") => {
    const response = await fetch("/api/rewrite", {
      method: "POST",
      body: JSON.stringify({ text, action }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div className="flex flex-col gap-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to rewrite..."
        className="w-full p-2 border rounded-md min-h-[150px] text-black dark:text-white dark:bg-black dark:border-white"
      />
      <div className="flex gap-2">
        <button onClick={() => handleAction("rewrite")} className="btn-primary">Rewrite</button>
        <button onClick={() => handleAction("summarize")} className="btn-primary">Summarize</button>
        <button onClick={() => handleAction("formalize")} className="btn-primary">Formalize</button>
      </div>
      {result && (
        <div className="p-4 border rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white">
          <h2 className="text-lg font-bold mb-2">Result:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}
