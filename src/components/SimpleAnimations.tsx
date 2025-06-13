import React, { useEffect, useRef } from 'react';

interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn';
  delay?: number;
}

export const SimpleAnimatedElement: React.FC<AnimationProps> = ({
  children,
  className = '',
  animationType = 'fadeIn',
  delay = 0
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // 使用Intersection Observer替代ScrollTrigger
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add('animate-in');
            }, delay * 1000);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [delay]);

  const animationClasses = {
    fadeIn: 'opacity-0 animate-fade-in',
    slideUp: 'opacity-0 translate-y-8 animate-slide-up',
    slideLeft: 'opacity-0 -translate-x-8 animate-slide-left',
    slideRight: 'opacity-0 translate-x-8 animate-slide-right',
    scaleIn: 'opacity-0 scale-95 animate-scale-in'
  };

  return (
    <div 
      ref={elementRef} 
      className={`transition-all duration-700 ease-out ${animationClasses[animationType]} ${className}`}
    >
      {children}
    </div>
  );
};

export const SimpleStaggeredContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  animationType?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn';
}> = ({ children, className = '', stagger = 0.1, animationType = 'fadeIn' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = container.children;
            Array.from(children).forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-in');
              }, index * stagger * 1000);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, [stagger]);

  const animationClasses = {
    fadeIn: 'opacity-0 animate-fade-in',
    slideUp: 'opacity-0 translate-y-8 animate-slide-up',
    slideLeft: 'opacity-0 -translate-x-8 animate-slide-left',
    slideRight: 'opacity-0 translate-x-8 animate-slide-right',
    scaleIn: 'opacity-0 scale-95 animate-scale-in'
  };

  return (
    <div ref={containerRef} className={className}>
      {Array.from({ length: React.Children.count(children) }, (_, index) => (
        <div 
          key={index}
          className={`transition-all duration-700 ease-out ${animationClasses[animationType]}`}
        >
          {React.Children.toArray(children)[index]}
        </div>
      ))}
    </div>
  );
};

export const SimpleFloatingParticles: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary-400 rounded-full opacity-60 animate-float-1"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400 rounded-full opacity-40 animate-float-2"></div>
      <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-50 animate-float-3"></div>
      <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-cyan-400 rounded-full opacity-30 animate-float-4"></div>
      <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-pink-400 rounded-full opacity-70 animate-float-5"></div>
      <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-yellow-400 rounded-full opacity-40 animate-float-6"></div>
    </div>
  );
};

export const SimpleTextReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              text.classList.add('animate-text-reveal');
            }, delay * 1000);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(text);

    return () => {
      observer.unobserve(text);
    };
  }, [delay]);

  return (
    <div ref={textRef} className={`overflow-hidden ${className}`}>
      <span className="inline-block opacity-0 translate-y-4 transition-all duration-1000 ease-out">
        {children}
      </span>
    </div>
  );
};

export const SimpleMagneticButton: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ children, className = '', onClick }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const moveX = x * 0.05;
      const moveY = y * 0.05;
      
      button.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    const handleMouseLeave = () => {
      button.style.transform = 'translate(0px, 0px)';
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <button 
      ref={buttonRef} 
      className={`transition-transform duration-200 ease-out ${className}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
}; 