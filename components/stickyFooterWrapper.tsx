import React, { useRef, useLayoutEffect, useState } from "react";

interface IProps {
  children: React.ReactNode;
}

const StickyFooterWrapper = ({ children }: IProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useLayoutEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.offsetHeight);
    }
  }, [children]);

  return (
    <footer
      className="relative"
      style={{
        height: height ? `${height}px` : undefined,
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
    >
      <div className="fixed bottom-0 w-full">
        <div ref={contentRef}>{children}</div>
      </div>
    </footer>
  );
};

export default StickyFooterWrapper;
