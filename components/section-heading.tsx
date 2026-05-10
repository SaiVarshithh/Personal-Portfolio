"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
    >
      <Badge className="mb-4">{eyebrow}</Badge>
      <h2 className="text-balance text-3xl font-semibold tracking-normal text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
        {description}
      </p>
    </motion.div>
  );
}
