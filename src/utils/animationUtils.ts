import { gsap } from 'gsap';

// 优化的缓动函数
export const smoothEase = 'power2.out';
export const bounceEase = 'back.out(1.7)';
export const elasticEase = 'elastic.out(1, 0.3)';

// 防抖函数，避免频繁触发动画
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// 节流函数，限制动画触发频率
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// 优化的动画配置
export const animationDefaults = {
  duration: 0.8,
  ease: smoothEase,
  clearProps: 'all' as const,
};

// 创建平滑的滚动动画
export function createSmoothScrollAnimation(
  element: HTMLElement,
  options: {
    trigger?: string;
    start?: string;
    end?: string;
    scrub?: number;
    onUpdate?: (progress: number) => void;
  } = {}
) {
  const {
    trigger = element,
    start = 'top bottom',
    end = 'bottom top',
    scrub = 1,
    onUpdate
  } = options;

  return gsap.timeline({
    scrollTrigger: {
      trigger,
      start,
      end,
      scrub,
      onUpdate: (self) => {
        if (onUpdate) {
          onUpdate(self.progress);
        }
      },
      // 添加性能优化
      fastScrollEnd: true,
      preventOverlaps: true,
    }
  });
}

// 创建错开动画
export function createStaggeredAnimation(
  elements: HTMLElement[],
  options: {
    stagger?: number;
    duration?: number;
    ease?: string;
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
  } = {}
) {
  const {
    stagger = 0.1,
    duration = 0.8,
    ease = smoothEase,
    from = { opacity: 0, y: 50 },
    to = { opacity: 1, y: 0 }
  } = options;

  // 设置初始状态
  gsap.set(elements, from);

  return gsap.to(elements, {
    ...to,
    duration,
    stagger,
    ease,
    clearProps: 'all'
  });
}

// 创建浮动动画
export function createFloatingAnimation(
  element: HTMLElement,
  options: {
    distance?: number;
    duration?: number;
    ease?: string;
  } = {}
) {
  const {
    distance = 20,
    duration = 3,
    ease = 'power1.inOut'
  } = options;

  return gsap.to(element, {
    y: -distance,
    duration,
    ease,
    yoyo: true,
    repeat: -1
  });
}

// 创建磁性效果
export function createMagneticEffect(
  element: HTMLElement,
  options: {
    strength?: number;
    maxDistance?: number;
  } = {}
) {
  const {
    strength = 0.1,
    maxDistance = 5
  } = options;

  let currentAnimation: gsap.core.Tween | null = null;

  const handleMouseMove = throttle((e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const moveX = Math.max(-maxDistance, Math.min(maxDistance, x * strength));
    const moveY = Math.max(-maxDistance, Math.min(maxDistance, y * strength));
    
    if (currentAnimation) {
      currentAnimation.kill();
    }
    
    currentAnimation = gsap.to(element, {
      x: moveX,
      y: moveY,
      duration: 0.3,
      ease: smoothEase
    });
  }, 16); // 约60fps

  const handleMouseLeave = () => {
    if (currentAnimation) {
      currentAnimation.kill();
    }
    
    currentAnimation = gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: smoothEase
    });
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    if (currentAnimation) {
      currentAnimation.kill();
    }
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
}

// 清理所有动画
export function cleanupAnimations() {
  gsap.killTweensOf('*');
  gsap.globalTimeline.clear();
}

// 设置GSAP全局配置
export function configureGSAP() {
  // 启用性能优化
  gsap.config({
    nullTargetWarn: false,
    autoSleep: 60,
    force3D: true
  });
} 