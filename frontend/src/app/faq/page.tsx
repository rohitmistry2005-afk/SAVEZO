"use client"

import { useState } from "react"
import { ChevronDown, MessageCircle } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    q: "What is Savezo?",
    a: "Savezo is an AI-powered social media platform that detects deepfakes, explicit content, and harmful signals before content is published.",
  },
  {
    q: "How does Savezo detect harmful content?",
    a: "Savezo uses multiple AI models including deepfake detection, nudity classification, and NLP-based mental health analysis to ensure content safety in real-time.",
  },
  {
    q: "Can Savezo detect deepfake videos?",
    a: "Yes. Savezo integrates advanced deepfake detection models (like Xception and ViT) to analyze visual inconsistencies and detect manipulated media.",
  },
  {
    q: "Does Savezo block inappropriate content automatically?",
    a: "Yes. Content that violates safety thresholds is automatically blocked and flagged with a detailed AI risk report.",
  },
  {
    q: "Is my data safe on Savezo?",
    a: "Absolutely. Savezo follows strict privacy and security protocols to ensure all user data and uploaded content remain secure.",
  },
  {
    q: "Can I use Savezo for real-time content analysis?",
    a: "Yes. Savezo performs sub-second AI analysis, allowing real-time moderation before content is published.",
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-20">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4">
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">
            Questions
          </span>
        </h1>

        <p className="text-muted-foreground text-lg">
          Learn more about how Savezo keeps your community safe
        </p>

        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-6 rounded-full" />
      </div>

      {/* FAQ LIST */}
      <div className="max-w-3xl mx-auto space-y-5">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i

          return (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex justify-between px-6 py-5"
              >
                <span className="text-lg font-semibold text-foreground">
                  {faq.q}
                </span>

                <ChevronDown
                  className={`transition-transform ${
                    isOpen ? "rotate-180 text-primary" : "text-muted-foreground"
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-5 text-muted-foreground text-sm">
                  {faq.a}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* CONTACT SUPPORT */}
      <div className="max-w-3xl mx-auto mt-16 text-center">
        <div className="rounded-2xl bg-card border border-border p-10 shadow-sm">

          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center text-white">
            <MessageCircle />
          </div>

          <h2 className="text-2xl font-bold mb-3">
            Still have questions?
          </h2>

          <p className="text-muted-foreground mb-6">
            We're here to help! Our support team is ready to assist you.
          </p>

          <Link href="/support">
            <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition">
              Contact Support
            </button>
          </Link>

        </div>
      </div>

    </div>
  )
}