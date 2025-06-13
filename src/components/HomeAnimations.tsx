import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 注册ScrollTrigger插件
gsap.registerPlugin(ScrollTrigger);

interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'rotateIn' | 'bounceIn';
  delay?: number;
  duration?: number;
  stagger?: number;
  trigger?: string;
}

export const AnimatedElement: React.FC<AnimationProps> = ({
  children,
  className = '',
  animationType = 'fadeIn',
  delay = 0,
  duration = 0.6,
  stagger = 0,
  trigger = 'top 85%'
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animations = {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 }
      },
      slideUp: {
        from: { opacity: 0, y: 30 },
        to: { opacity: 1, y: 0 }
      },
      slideLeft: {
        from: { opacity: 0, x: -30 },
        to: { opacity: 1, x: 0 }
      },
      slideRight: {
        from: { opacity: 0, x: 30 },
        to: { opacity: 1, x: 0 }
      },
      scaleIn: {
        from: { opacity: 0, scale: 0.9 },
        to: { opacity: 1, scale: 1 }
      },
      rotateIn: {
        from: { opacity: 0, rotation: -90, scale: 0.8 },
        to: { opacity: 1, rotation: 0, scale: 1 }
      },
      bounceIn: {
        from: { opacity: 0, scale: 0.5, y: 50 },
        to: { opacity: 1, scale: 1, y: 0 }
      }
    };

    const animation = animations[animationType];
    
    // 设置初始状态
    gsap.set(element, animation.from);
    
    // 使用更简单的动画触发
    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: trigger,
      onEnter: () => {
        gsap.to(element, {
          ...animation.to,
          duration,
          delay,
          ease: 'power2.out'
        });
      }
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [animationType, delay, duration, trigger]);

  return (
    <div ref={elementRef} className={`overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export const StaggeredContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  animationType?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn';
}> = ({ children, className = '', stagger = 0.1, animationType = 'fadeIn' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.children;
    const animations = {
      fadeIn: { opacity: 0 },
      slideUp: { opacity: 0, y: 30 },
      slideLeft: { opacity: 0, x: -30 },
      slideRight: { opacity: 0, x: 30 },
      scaleIn: { opacity: 0, scale: 0.9 }
    };

    // 设置初始状态
    gsap.set(children, animations[animationType]);

    const scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(children, {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 0.6,
          stagger,
          ease: 'power2.out'
        });
      }
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [stagger, animationType]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export const FloatingParticles: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const particles = particlesRef.current;
    if (!particles) return;

    const particleElements = particles.children;
    
    // 简化的浮动动画
    Array.from(particleElements).forEach((particle, index) => {
      const randomY = Math.random() * 15 + 5;
      const randomDuration = Math.random() * 4 + 3;
      
      gsap.to(particle, {
        y: -randomY,
        duration: randomDuration,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        delay: index * 0.5
      });
    });

    return () => {
      gsap.killTweensOf(particleElements);
    };
  }, []);

  return (
    <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary-400 rounded-full opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400 rounded-full opacity-40"></div>
      <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-50"></div>
      <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-cyan-400 rounded-full opacity-30"></div>
      <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-pink-400 rounded-full opacity-70"></div>
      <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-yellow-400 rounded-full opacity-40"></div>
    </div>
  );
};

export const TextReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    // 分割文本为字符
    const textContent = text.textContent || '';
    text.innerHTML = textContent.split('').map(char => 
      char === ' ' ? ' ' : `<span class="inline-block">${char}</span>`
    ).join('');

    const chars = text.querySelectorAll('span');
    
    // 设置初始状态
    gsap.set(chars, { opacity: 0, y: 20 });
    
    const scrollTrigger = ScrollTrigger.create({
      trigger: text,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(chars, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.02,
          delay,
          ease: 'power2.out'
        });
      }
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [delay]);

  return (
    <div ref={textRef} className={`overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export const ParallaxSection: React.FC<{
  children: React.ReactNode;
  className?: string;
  speed?: number;
}> = ({ children, className = '', speed = 0.3 }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;
        const yPercent = -30 * speed * progress;
        gsap.set(section, { yPercent });
      }
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [speed]);

  return (
    <div ref={sectionRef} className={`overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export const MagneticButton: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ children, className = '', onClick }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    let isAnimating = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (isAnimating) return;
      
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // 限制移动范围
      const maxMove = 3;
      const moveX = Math.max(-maxMove, Math.min(maxMove, x * 0.05));
      const moveY = Math.max(-maxMove, Math.min(maxMove, y * 0.05));
      
      isAnimating = true;
      gsap.to(button, {
        x: moveX,
        y: moveY,
        duration: 0.2,
        ease: 'power2.out',
        onComplete: () => {
          isAnimating = false;
        }
      });
    };

    const handleMouseLeave = () => {
      isAnimating = true;
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.2,
        ease: 'power2.out',
        onComplete: () => {
          isAnimating = false;
        }
      });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <button ref={buttonRef} className={`overflow-hidden ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}; 