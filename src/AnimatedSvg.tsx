import React, { CSSProperties, useEffect } from 'react';

const AnimatedSvg = ({ children, className, style }: { children: JSX.Element; className?: string; style?: CSSProperties }) => {
  const svgRef = React.useRef<HTMLSpanElement>(null);
  const [svgVisible, setSvgVisible] = React.useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.every((entry) => entry.isIntersecting)) {
          if (svgVisible) return;
          setSvgVisible(true);
        } else {
          if (!svgVisible) return;
          setSvgVisible(false);
        }
      },
      {
        threshold: .4,
      }
    );
    observer.observe(svgRef.current!);
    return () => {
      observer.disconnect();
    };
  });
  return (
    <span ref={svgRef} style={{ ...style }} className={`animatedSvg ${className ?? ''} ${svgVisible ? 'visible' : 'hidden'}`}>
      {children}
    </span>
  );
};

export default AnimatedSvg;
