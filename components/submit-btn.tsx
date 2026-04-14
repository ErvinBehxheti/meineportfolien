"use client";

import { Send } from "lucide-react";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-[var(--accent)] text-white text-sm font-medium transition-all hover:bg-[var(--accent-hover)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? (
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      ) : (
        <>
          Send message
          <Send
            size={14}
            className="opacity-80 transition-transform group-hover:translate-x-0.5"
          />
        </>
      )}
    </button>
  );
}
