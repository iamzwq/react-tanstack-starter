import { useMatches } from "@tanstack/react-router";
import { motion } from "motion/react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const matches = useMatches();
  const childMatch = matches[matches.length - 1];

  return (
    <motion.div
      key={childMatch.id}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 60, opacity: 0 }}
      transition={{ type: "spring", stiffness: 150, damping: 10 }}
    >
      {children}
    </motion.div>
  );
}
