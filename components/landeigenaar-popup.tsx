"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const POPUP_KEY = "landeigenaar-popup-dismissed"

export function LandeigenaarPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    const dismissed = sessionStorage.getItem(POPUP_KEY)
    if (dismissed) return
    const timer = setTimeout(() => setIsVisible(true), 800)
    return () => clearTimeout(timer)
  }, [isMounted])

  const close = () => {
    setIsVisible(false)
    sessionStorage.setItem(POPUP_KEY, "true")
  }

  if (!isVisible) return null

  return (
    <a
      href="https://landeigenaar.nl"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex max-w-md gap-5 rounded-xl border border-border bg-card p-5 shadow-lg transition-shadow hover:shadow-xl animate-in slide-in-from-bottom-4 fade-in duration-300"
      aria-label="Ga naar Landeigenaar.nl – al het aanbod agrarische grond"
    >
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          close()
        }}
        className="absolute right-2 top-2 z-10 rounded p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        aria-label="Sluiten"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="relative flex-shrink-0">
        <Image
          src="/images/landeigenaar-logo.svg"
          alt=""
          width={80}
          height={80}
          className="h-16 w-16 object-contain"
        />
      </div>
      <div className="pr-8 pt-1">
        <p className="text-base leading-relaxed text-foreground">
          Benieuwd naar Al het aanbod agrarische grond? Neem een kijkje op{" "}
          <span className="text-accent font-semibold underline underline-offset-2">
            Landeigenaar.nl
          </span>
        </p>
      </div>
    </a>
  )
}
