import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';

// Type for SplitText result
interface SplitTextResult {
  chars: HTMLElement[];
  words?: HTMLElement[];
  lines?: HTMLElement[];
  split(params?: { type?: string }): void;
}

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}
//fade animation
export const fadeAnimation = () => {
  gsap.utils.toArray<HTMLElement>(".tp_fade_anim").forEach((item) => {
    const tp_fade_offset = item.dataset.fadeOffset ? parseInt(item.dataset.fadeOffset) : 40;
    const tp_duration_value = item.dataset.duration ? parseFloat(item.dataset.duration) : 0.75;
    const tp_fade_direction = item.dataset.fadeFrom || "bottom";
    const tp_onscroll_value = item.dataset.onScroll !== "0";
    const tp_delay_value = item.dataset.delay ? parseFloat(item.dataset.delay) : 0.15;
    const tp_ease_value = item.dataset.ease || "power2.out";

    const tp_anim_setting: gsap.TweenVars = {
      opacity: 0,
      ease: tp_ease_value,
      duration: tp_duration_value,
      delay: tp_delay_value,
      x: (tp_fade_direction === "left" ? -tp_fade_offset : (tp_fade_direction === "right" ? tp_fade_offset : 0)),
      y: (tp_fade_direction === "top" ? -tp_fade_offset : (tp_fade_direction === "bottom" ? tp_fade_offset : 0)),
    };

    if (tp_onscroll_value) {
      tp_anim_setting.scrollTrigger = {
        trigger: item,
        start: 'top 85%',
      };
    }

    gsap.from(item, tp_anim_setting);
  });
}

// character animation
export const charAnimation = () => {
  const charElements = document.querySelectorAll<HTMLElement>(".tp-char-animation");

  if (charElements.length > 0) {
    const animationItems = gsap.utils.toArray<HTMLElement>(".tp-char-animation");

    animationItems.forEach((splitTextLine) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: false,
          markers: false,
          toggleActions: 'play none none none'
        }
      });

      // Type assertion for SplitText result
      const itemSplitted = new SplitText(splitTextLine, {
        type: "chars, words"
      }) as unknown as SplitTextResult;

      gsap.set(splitTextLine, { perspective: 300 });
      itemSplitted.split({ type: "chars, words" });

      tl.from(itemSplitted.chars, {
        duration: 1,
        delay: 0.5,
        x: 100,
        autoAlpha: 0,
        stagger: 0.05
      });
    });
  }
}

//  Text reveal animation
export function textRevealAnimation() {

  const elements = document.querySelectorAll<HTMLElement>('.tp-text-revel-anim');

  elements.forEach(element => {
    // Helper function to safely get and parse attributes
    const getNumberAttribute = (attr: string, defaultValue: number): number => {
      const value = element.getAttribute(attr);
      return value ? parseFloat(value) : defaultValue;
    };

    const getStringAttribute = (attr: string, defaultValue: string): string => {
      return element.getAttribute(attr) || defaultValue;
    };

    const duration = getNumberAttribute('data-duration', 1);
    const onScroll = getNumberAttribute('data-on-scroll', 1);
    const stagger = getNumberAttribute('data-stagger', 0.02);
    const delay = getNumberAttribute('data-delay', 0.05);
    const ease = getStringAttribute('data-ease', 'circ.out');

    const split = new SplitText(element, {
      type: "lines,words,chars",
      linesClass: "tp-revel-line"
    });

    const animationProps = {
      duration,
      delay,
      ease,
      y: 80,
      stagger,
      opacity: 0,
    };

    if (onScroll === 1) {
      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
        },
        ...animationProps,
      });
    } else {
      gsap.from(split.chars, animationProps);
    }
  });
};

// Text paragraph animation
export function animationParagraph() {
  const paragraphs = gsap.utils.toArray<HTMLElement>('.tp_text_anim p');
  paragraphs.forEach((paragraph) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: paragraph,
        start: 'top 90%',
        end: 'bottom 60%',
        scrub: false,
        markers: false,
        toggleActions: 'play none none none'
      }
    });

    const splitText = new SplitText(paragraph, { type: "lines" });
    gsap.set(paragraph, { perspective: 400 });
    tl.from(splitText.lines, {
      duration: 1,
      delay: 0.2,
      opacity: 0,
      rotationX: -80,
      force3D: true,
      transformOrigin: "top center -50",
      stagger: 0.1
    });
  });
}

// Portfolio title zoom animation function
export function portfolioTitleAnimation() {
  const pm = gsap.matchMedia();

  pm.add("(min-width: 1200px)", () => {
    const portfolioArea = document.querySelector('.st-portfolio-area');
    if (!portfolioArea) return;

    const projectText = gsap.timeline({
      scrollTrigger: {
        trigger: portfolioArea,
        start: 'top 5%',
        end: "bottom 55%",
        pin: ".st-portfolio-heading",
        markers: false,
        pinSpacing: false,
        scrub: 1,
      }
    });

    projectText
      .set(".st-portfolio-title", {
        scale: 0.9,
        duration: 2
      })
      .to(".st-portfolio-title", {
        scale: 1.2,
        duration: 2
      })
      .to(".st-portfolio-title", {
        scale: 1.2,
        duration: 2
      }, "+=2");

    // Cleanup function
    return () => {
      projectText.kill();
    };
  })
}

//startup agency cta section animation
export const ctaAnimation = () => {
  const blogArea = document.querySelector('.st-blog-area');
  if (!blogArea) return;

  gsap.to(".st-cta-bg-circle", {
    scrollTrigger: {
      trigger: ".st-cta-area",
      scrub: 0.2,
      start: "top 70%",
      end: "bottom 100%",
    },
    duration: 2,
    scaleX: 1,
    borderRadius: "1100px 1100px 0 0",
    transformOrigin: "top center",
    ease: "none",
  });
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
};

// product banner animation
export function productBannerAnimation() {
  const shop_thumb = gsap.matchMedia();
  const wrap = document.querySelector('.tp-shop-product-area');

  shop_thumb.add("(min-width: 1200px)", () => {
    if (wrap) {
      ScrollTrigger.create({
        trigger: ".tp-shop-product-area",
        start: "top 15px",
        end: "bottom 103%",
        pin: ".tp-shop-product-banner",
        pinSpacing: true,
      });
    }
  });

  return () => {
    shop_thumb.revert();
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}

// Button bounce animation
export const buttonBounceAnimation = () => {
  gsap.set(".tp-bounce", { y: -80, opacity: 0 });
  const mybtn = gsap.utils.toArray(".tp-bounce") as HTMLElement[];

  mybtn.forEach((btn) => {
    const tp_delay_value = btn.getAttribute("data-delay") || 1;
    const triggerElement = btn.closest(".tp-bounce-trigger");

    gsap.to(btn, {
      scrollTrigger: {
        trigger: triggerElement,
        start: "top center",
        markers: false,
      },
      duration: 1.5,
      delay: tp_delay_value,
      ease: "bounce.out",
      y: 0,
      opacity: 1,
    });
  });
};

//portfolio showcase animation
export const portfolioShowcaseAnimation = () => {
  const pr = gsap.matchMedia();
  const tl = gsap.timeline();

  pr.add("(min-width: 767px)", () => {
    const otherSections = document.querySelectorAll('.showcase-portfolio-panel')
    otherSections.forEach((section) => {
      gsap.set(otherSections, {
        scale: 1,
      });
      tl.to(section, {
        scale: .8,
        scrollTrigger: {
          trigger: section,
          pin: section,
          scrub: 1,
          start: 'top 5%',
          end: "bottom 100%",
          endTrigger: '.showcase-portfolio-wrap',
          pinSpacing: false,
          markers: false,
        },
      })
    })
  });
};

//tp-gsap-bg animation
export const contactBgAnimation = () => {
  gsap.set(".tp-gsap-bg", { scaleX: 1 });
  const mm = gsap.matchMedia();
  mm.add("(min-width:1400px)", () => {
    gsap.to(".tp-gsap-bg", {
      scrollTrigger: {
        trigger: ".tp-gsap-bg",
        scrub: 0.2,
        start: "top 90%",
        end: "bottom 100%",
      },
      scaleX: 0.85,
      borderRadius: "60px",
      transformOrigin: "center center",
      ease: "none",
    });
  });
};
