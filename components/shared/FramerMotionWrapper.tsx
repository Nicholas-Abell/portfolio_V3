"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { ReactNode, useEffect, useRef } from "react";

type FramerMotionWrapperProps = {
  children: ReactNode;
  variant: "fromBottom" | "fromRight" | "fromLeft";
};

const FramerMotionWrapper: React.FC<FramerMotionWrapperProps> = ({
  children,
  variant,
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
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        variants={{
          fromBottom: { y: 200, opacity: 0 },
          fromLeft: { y: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        animate={mainControls}
        transition={{ duration: 1.5 }}
        initial={variant}
      >
        {children}
      </motion.div>
    </div>
  );
};
export default FramerMotionWrapper;
