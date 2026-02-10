"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function CreateShorts() {
  const [topic, setTopic] = useState("");
  const [rows, setRows] = useState<
    { time: string; script: string; visual: string }[]
  >([]);
  const [loading, setLoading] = useState(false);

  async function generate() {
    if (!topic) return alert("Enter topic first");

    setRows([]);
    setLoading(true);

    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({ topic }),
    });

    const reader = res.body?.getReader();
    const decoder = new TextDecoder();

    let buffer = "";

    if (!reader) return;

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        const parts = line.split("|");

        if (parts.length === 3) {
          setRows((prev) => [
            ...prev,
            {
              time: parts[0].trim(),
              script: parts[1].trim(),
              visual: parts[2].trim(),
            },
          ]);
        }
      }
    }

    setLoading(false);
  }

  return (
    <main className="p-6 max-w-5xl">

      <h1 className="text-2xl font-bold mb-4">
        Short Video Script Generator
      </h1>

      {/* Input */}
      <div className="flex gap-3 mb-4">

        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter topic..."
          className="border px-3 py-2 rounded w-full"
        />

        <button
          onClick={generate}
          className="bg-black text-white px-5 rounded"
        >
          Generate
        </button>

      </div>

      {/* Loading */}
      {loading && (
        <div className="flex items-center gap-2 text-gray-500">
          <Loader2 className="animate-spin" />
          AI is writing your short...
        </div>
      )}

      {/* Table */}
      {rows.length > 0 && (
        <table className="mt-6 w-full border">

          <thead className="bg-black-800">
            <tr>
              <th className="border p-5">Time</th>
              <th className="border p-2">Script</th>
              <th className="border p-2">Visual</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td className="border p-2">{r.time}</td>
                <td className="border p-2">{r.script}</td>
                <td className="border p-2">{r.visual}</td>
              </tr>
            ))}
          </tbody>

        </table>
      )}

    </main>
  );
}
