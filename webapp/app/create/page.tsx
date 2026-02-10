"use client";

import { useEffect, useState } from "react";
import {
  Check,
  Loader2,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/* Steps */
const STEPS = [
  "Basic",
  "Audience",
  "Idea",
  "Generate",
  "Reading",
  "Preview",
  "Final",
];

export default function Home() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    title: "",
    platform: "",
    duration: "",
    audience: [] as string[],
    location: [] as string[],
    language: "",
    tone: "",
    idea: "",
  });

  const [loadingText, setLoadingText] = useState("");

  /* Helpers */
  function update(k: string, v: string | string[]) {
    setForm({ ...form, [k]: v });
  }

  function toggle(arr: string[], val: string) {
    return arr.includes(val)
      ? arr.filter((i) => i !== val)
      : [...arr, val];
  }

  /* Fake Loading */
  useEffect(() => {
    if (step === 5) {
      const txt = [
        "Reading your brief...",
        "Understanding audience...",
        "Structuring script...",
      ];

      let i = 0;

      const id = setInterval(() => {
        setLoadingText(txt[i]);
        i = (i + 1) % txt.length;
      }, 800);

      setTimeout(() => {
        clearInterval(id);
        setStep(6);
      }, 2500);
    }
  }, [step]);

  /* ================= UI ================= */

  return (
    <main className="min-h-screen bg-background">

      {/* STEP BAR */}
      <div className="sticky top-0 z-20 bg-background border-b">

        <div className="max-w-7xl mx-auto px-6 py-4">

          <div className="flex items-center justify-between">

            {STEPS.map((s, i) => {
              const n = i + 1;
              const done = step > n;
              const active = step === n;

              return (
                <div
                  key={s}
                  className="flex items-center flex-1"
                >
                  <div
                    className={`
                      h-9 w-9 rounded-full flex items-center justify-center text-sm font-medium
                      ${
                        done
                          ? "bg-primary text-white"
                          : active
                          ? "border-2 border-primary text-primary"
                          : "border text-muted-foreground"
                      }
                    `}
                  >
                    {done ? <Check size={16} /> : n}
                  </div>

                  <span
                    className={`ml-2 text-sm hidden md:block
                      ${
                        active
                          ? "text-primary font-medium"
                          : "text-muted-foreground"
                      }
                    `}
                  >
                    {s}
                  </span>

                  {i < STEPS.length - 1 && (
                    <div className="flex-1 h-px bg-border mx-2" />
                  )}
                </div>
              );
            })}

          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* STEP 1 */}
        {step === 1 && (
          <section className="space-y-6">

            <h1 className="text-2xl font-bold">
              Basic Details
            </h1>

            <Input
              placeholder="Title"
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
            />

            <Select onValueChange={(v) => update("platform", v)}>
              <SelectTrigger>
                <SelectValue placeholder="Platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="youtube">YouTube</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
              </SelectContent>
            </Select>

            <Input
              placeholder="Duration"
              value={form.duration}
              onChange={(e) => update("duration", e.target.value)}
            />

            <Button
              size="lg"
              className="w-full"
              onClick={() => setStep(2)}
            >
              Continue →
            </Button>
          </section>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <section className="space-y-6">

            <h1 className="text-2xl font-bold">
              Audience & Style
            </h1>

            <div>
              <p className="font-medium mb-2">Audience</p>

              <div className="flex flex-wrap gap-2">
                {["Students", "Creators", "Freelancers"].map(
                  (a) => (
                    <Button
                      key={a}
                      variant={
                        form.audience.includes(a)
                          ? "default"
                          : "outline"
                      }
                      size="sm"
                      onClick={() =>
                        update(
                          "audience",
                          toggle(form.audience, a)
                        )
                      }
                    >
                      {a}
                    </Button>
                  )
                )}
              </div>
            </div>

            <Select onValueChange={(v) => update("language", v)}>
              <SelectTrigger>
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hindi">Hindi</SelectItem>
                <SelectItem value="english">English</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={(v) => update("tone", v)}>
              <SelectTrigger>
                <SelectValue placeholder="Tone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="funny">Funny</SelectItem>
                <SelectItem value="serious">Serious</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setStep(1)}
              >
                ← Back
              </Button>

              <Button
                size="lg"
                onClick={() => setStep(3)}
              >
                Continue →
              </Button>
            </div>
          </section>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <section className="space-y-6">

            <h1 className="text-2xl font-bold">
              Content Idea
            </h1>

            <Textarea
              rows={6}
              placeholder="Explain your idea..."
              value={form.idea}
              onChange={(e) => update("idea", e.target.value)}
            />

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setStep(2)}
              >
                ← Back
              </Button>

              <Button
                size="lg"
                onClick={() => setStep(4)}
              >
                Generate →
              </Button>
            </div>
          </section>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <section className="text-center py-20">

            <Sparkles className="mx-auto mb-3 text-primary" />

            <h2 className="text-xl font-semibold">
              Ready to Generate?
            </h2>

            <Button
              size="lg"
              className="mt-4"
              onClick={() => setStep(5)}
            >
              Start AI 🚀
            </Button>
          </section>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <section className="text-center py-20">

            <Loader2 className="mx-auto animate-spin mb-4" />

            <p>{loadingText}</p>
          </section>
        )}

        {/* STEP 6 */}
        {step === 6 && (
          <section className="text-center py-20">

            <h2 className="text-xl font-semibold">
              Preview Coming...
            </h2>

            <Button
              className="mt-6"
              onClick={() => setStep(7)}
            >
              View Preview →
            </Button>
          </section>
        )}

        {/* STEP 7 */}
        {step === 7 && (
          <section className="space-y-6">

            <h1 className="text-2xl font-bold">
              Preview
            </h1>

            <Textarea
              rows={12}
              defaultValue="0-3s: Hook...
3-10s: Intro...
10-30s: Body..."
            />

            <Button
              size="lg"
              className="w-full"
              onClick={() => setStep(8)}
            >
              Finalize ✅
            </Button>
          </section>
        )}

        {/* STEP 8 */}
        {step === 8 && (
          <section className="text-center py-24">

            <Check
              size={64}
              className="mx-auto text-green-500 mb-4"
            />

            <h2 className="text-2xl font-bold">
              Script Ready 🎉
            </h2>

            <Button
              size="lg"
              className="mt-6"
              onClick={() => setStep(1)}
            >
              Create New
            </Button>
          </section>
        )}

      </div>
    </main>
  );
}
