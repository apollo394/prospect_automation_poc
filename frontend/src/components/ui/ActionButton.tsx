"use client";

import { Check, Loader2 } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { type ReactNode, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Phase = "idle" | "saving" | "success";

type ActionButtonProps = {
  idleLabel: string;
  busyLabel?: string;
  successLabel?: string;
  idleIcon?: ReactNode;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  /** Already completed from saved state — show success without replaying. */
  done?: boolean;
  onAction: () => Promise<void>;
  /** Fires after the success beat (nav, reveal next CTA, etc.). */
  onCelebrated?: () => void;
};

export function ActionButton({
  idleLabel,
  busyLabel = "Working…",
  successLabel = "Done",
  idleIcon,
  className,
  disabled,
  fullWidth,
  done = false,
  onAction,
  onCelebrated,
}: ActionButtonProps) {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>(done ? "success" : "idle");
  const [played, setPlayed] = useState(done);

  useEffect(() => {
    if (done) setPhase("success");
  }, [done]);

  const celebrate = phase === "success";
  const busy = phase === "saving";

  async function handleClick() {
    if (busy || celebrate || disabled) return;
    setPhase("saving");
    try {
      await onAction();
      setPhase("success");
      setPlayed(false);
      window.setTimeout(() => {
        setPlayed(true);
        onCelebrated?.();
      }, reduceMotion ? 120 : 900);
    } catch {
      setPhase("idle");
    }
  }

  return (
    <motion.div
      animate={celebrate && !reduceMotion && !played ? { scale: [1, 1.04, 1] } : { scale: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn("inline-flex", fullWidth && "w-full")}
    >
      <Button
        type="button"
        disabled={Boolean(disabled) || busy || celebrate}
        onClick={handleClick}
        className={cn(celebrate && "!bg-sc-accent hover:!bg-sc-accent", fullWidth && "w-full", className)}
        aria-live="polite"
      >
        <AnimatePresence mode="wait" initial={false}>
          {celebrate ? (
            <motion.span
              key="success"
              className="inline-flex items-center gap-2"
              initial={reduceMotion || played ? false : { opacity: 0, y: 6, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
            >
              <motion.span
                initial={reduceMotion || played ? false : { scale: 0.4, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 420, damping: 18 }}
              >
                <Check className="h-4 w-4" strokeWidth={2.5} />
              </motion.span>
              {successLabel}
            </motion.span>
          ) : busy ? (
            <motion.span
              key="saving"
              className="inline-flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Loader2 className="h-4 w-4 animate-spin" />
              {busyLabel}
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              className="inline-flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
            >
              {idleIcon}
              {idleLabel}
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
    </motion.div>
  );
}
