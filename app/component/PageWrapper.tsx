"use client";

import { HTMLMotionProps, motion } from "framer-motion";

const PageWrapper = (props: HTMLMotionProps<"div">) => {
  return (
    <div className="bg-[#0E0F11]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        {...props}
      />
    </div>
  );
};

export default PageWrapper;
