"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { ReactNode, useEffect, useRef } from "react";

type FramerMotionWrapperProps = {
  children: ReactNode;
  variant: "fromBottom" | "fromTop" | "fromRight" | "fromLeft";
  className?: string;
  duration?: number;
};

const FramerMotionWrapper: React.FC<FramerMotionWrapperProps> = ({
  children,
  variant,
  className,
  duration,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className={`overflow-hidden w-full ${className}`}>
      <motion.div
        variants={{
          fromBottom: { y: 200, opacity: 0 },
          fromTop: { y: -200, opacity: 0 },
          fromLeft: { x: -200, opacity: 0 },
          fromRight: { x: 200, opacity: 0 },
          visible: { y: 0, x: 0, opacity: 1 },
        }}
        animate={mainControls}
        transition={{ duration: duration || 1.2 }}
        initial={variant}
      >
        {children}
      </motion.div>
    </div>
  );
};
export default FramerMotionWrapper;
