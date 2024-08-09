import { useEffect, useRef, useState } from "react";

const useElementOffset = () => {
  const [offsetTop, setOffsetTop] = useState(0);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateOffset = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        setOffsetTop(rect.top + window.scrollY);
      }
    };

    window.addEventListener("resize", updateOffset);
    window.addEventListener("scroll", updateOffset);

    updateOffset();

    return () => {
      window.removeEventListener("resize", updateOffset);
      window.removeEventListener("scroll", updateOffset);
    };
  }, []);

  return { offsetTop, elementRef };
};

export default useElementOffset;
