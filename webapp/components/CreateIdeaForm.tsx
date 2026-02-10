"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TOTAL_STEPS = 4;

export default function CreateIdeaForm() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    title: "",
    platform: "",
    category: "",
    length: "",
    audience: "",
    language: "",
    tone: "",
    hook: "",
    cta: "",
    keywords: "",
    idea: "",
    reference: "",
  });

  function update(name: string, value: string) {
    setForm({ ...form, [name]: value });
  }

  function next() {
    if (step < TOTAL_STEPS) setStep(step + 1);
  }

  function back() {
    if (step > 1) setStep(step - 1);
  }

  function submit() {
    console.log("FINAL CREATOR BRIEF:", form);
    alert("Smart Content Brief Ready 🚀");
  }

  return (
    <div className="max-w-2xl mx-auto p-6 border rounded-xl bg-card">

      {/* HEADER */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">
          Create Smart Content Brief
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Step {step} of {TOTAL_STEPS}
        </p>

        {/* Progress bar */}
        <div className="w-full h-1 bg-muted rounded mt-3">
          <div
            className="h-1 bg-primary rounded transition-all"
            style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          />
        </div>
      </div>

      {/* STEP CONTENT */}
      {step === 1 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Content Basics</h3>

          <div>
            <Label>Title</Label>
            <Input
              placeholder="AI se paisa kaise kamaye"
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
            />
          </div>

          <div>
            <Label>Platform</Label>
            <Select onValueChange={(v) => update("platform", v)}>
              <SelectTrigger>
                <SelectValue placeholder="Select platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="youtube">YouTube</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="shorts">YouTube Shorts</SelectItem>
                <SelectItem value="linkedin">LinkedIn</SelectItem>
                <SelectItem value="blog">Blog</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Category</Label>
              <Input
                placeholder="Tech / Finance"
                value={form.category}
                onChange={(e) => update("category", e.target.value)}
              />
            </div>

            <div>
              <Label>Length</Label>
              <Input
                placeholder="60 sec / 10 min"
                value={form.length}
                onChange={(e) => update("length", e.target.value)}
              />
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Audience & Style</h3>

          <div>
            <Label>Target Audience</Label>
            <Input
              placeholder="Beginners / Freelancers"
              value={form.audience}
              onChange={(e) => update("audience", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Language</Label>
              <Select onValueChange={(v) => update("language", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hindi">Hindi</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="hinglish">Hinglish</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Tone</Label>
              <Select onValueChange={(v) => update("tone", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select tone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="motivational">Motivational</SelectItem>
                  <SelectItem value="funny">Funny</SelectItem>
                  <SelectItem value="serious">Serious</SelectItem>
                  <SelectItem value="story">Storytelling</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Hook, CTA & SEO</h3>

          <div>
            <Label>Opening Hook</Label>
            <Input
              placeholder="90% creators yeh galti karte hain..."
              value={form.hook}
              onChange={(e) => update("hook", e.target.value)}
            />
          </div>

          <div>
            <Label>Call To Action</Label>
            <Input
              placeholder="Subscribe / Follow"
              value={form.cta}
              onChange={(e) => update("cta", e.target.value)}
            />
          </div>

          <div>
            <Label>SEO Keywords</Label>
            <Input
              placeholder="AI tools, earn online"
              value={form.keywords}
              onChange={(e) => update("keywords", e.target.value)}
            />
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Idea & References</h3>

          <div>
            <Label>Main Idea (Detail)</Label>
            <Textarea
              rows={4}
              placeholder="Explain full idea clearly for AI..."
              value={form.idea}
              onChange={(e) => update("idea", e.target.value)}
            />
          </div>

          <div>
            <Label>Reference (Optional)</Label>
            <Textarea
              rows={2}
              placeholder="YouTube link / competitor"
              value={form.reference}
              onChange={(e) => update("reference", e.target.value)}
            />
          </div>
        </div>
      )}

      {/* FOOTER BUTTONS */}
      <div className="flex justify-between mt-6">
        <Button
          variant="outline"
          disabled={step === 1}
          onClick={back}
        >
          Back
        </Button>

        {step < TOTAL_STEPS ? (
          <Button onClick={next}>
            Next
          </Button>
        ) : (
          <Button onClick={submit}>
            Generate Smart Script 🚀
          </Button>
        )}
      </div>
    </div>
  );
}
