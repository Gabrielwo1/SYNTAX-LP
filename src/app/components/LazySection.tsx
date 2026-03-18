import { useState, useEffect, useRef, ReactNode } from 'react';

export function LazySection({ children, fallback, id }: { children: ReactNode, fallback?: ReactNode, id?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px 0px', threshold: 0.01 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} id={id}>
      {isVisible ? children : (fallback || <div className="min-h-[40vh] bg-[#020202]" />)}
    </div>
  );
}