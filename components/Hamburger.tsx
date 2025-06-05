import { Dispatch, SetStateAction } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface HamburgerProps {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  direction?: "left" | "right";
}

export const Hamburger = ({ isActive, setIsActive, direction = "right" }: HamburgerProps) => {
  return (
    <motion.div
      className="h-5 w-8 flex-col flex justify-between cursor-pointer hover:opacity-85 relative"
      onClick={() => setIsActive((prev) => !prev)}
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <motion.div
          key={index}
          className={cn("h-1 bg-navbar-primary-foreground rounded")}
          initial={false}
          animate={
            index === 1
              ? {
                x: isActive ? (direction === "left" ? "-100%" : "100%") : 0,
                opacity: isActive ? 0 : 1,
              }
              : index === 0
                ? {
                  y: isActive ? "150%" : 0,
                  rotate: isActive ? 45 : 0,
                }
                : {
                  y: isActive ? "-250%" : "0%",
                  rotate: isActive ? -45 : 0,
                }
          }
          transition={{ duration: 0.3 }}
          style={{ width: "100%" }}
        />
      ))}
    </motion.div>
  );
};
