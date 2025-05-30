import React from "react";
import { motion } from "framer-motion";

interface IProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

const TextMask = ({ text, delay = 0, speed = 0.06, className = "" }: IProps) => {
  const letters = text.split("");
  return (
    <span className={`inline-flex overflow-hidden ${className}`}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            delay: delay + i * speed,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="inline-block will-change-transform"
          style={{ display: char === " " ? "inline-block" : undefined }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export default TextMask;
