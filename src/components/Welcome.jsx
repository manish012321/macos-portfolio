import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const renderText = (text, className, baseWeight = 100) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const setUpTextHover = (container, type) => {
  if (!container) return () => {};

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHTS[type]; // ← FIXED

  const animateLetters = (letter, weight, duration = 0.25) => {
    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`,
    });
  };

  const handleMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 20000);

      animateLetters(letter, min + (max - min) * intensity);
    });
  };

  const handleMouseLeave = () =>
    letters.forEach((letter) => animateLetters(letter, base, 0.3)); 

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove); 
    container.removeEventListener("mouseleave", handleMouseLeave); 
  };
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);

  useGSAP(() => {
    const titleCleanUp = setUpTextHover(titleRef.current, "title");
    const subtitleCleanUp = setUpTextHover(subTitleRef.current, "subtitle");

    return () => {
      subtitleCleanUp && subtitleCleanUp();
      titleCleanUp && titleCleanUp();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={subTitleRef}>
        {renderText(
          "Hey, I'm Manish welcome to my",
          "text-3xl font-georama",
          100
        )}
      </p>

      <h1 ref={titleRef} className="mt-7">
        {renderText("Portfolio", "text-9xl italic font-georama")}
      </h1>

      <div className="small-screen">
        <p>This Portfolio is designed for big screen</p>
      </div>
    </section>
  );
};

export default Welcome;
