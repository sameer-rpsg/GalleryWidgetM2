"use client";
import React, { useEffect, useRef } from "react";
import styles from "@/components/GalletyWidget2.module.css";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryData = [
  {
    title: "Fashion",
    desc:"celeb",
    imageUrl:
      "https://assets.vogue.in/photos/68b0286f5db6cec5662cebf5/master/w_1600,c_limit/Copy%20of%20Anjali%20Bhimrajka%202022%200412.jpg",
    link: "/sunset",
  },
  {
    title: "Fashion",
    desc:"celeb",
    imageUrl:
      "https://assets.vogue.in/photos/68b917307f9fcb50122e3a1c/1:1/pass/undefined",
    link: "/forest",
  },
  {
    title: "Fashion",
    desc:"celeb",
    imageUrl:
      "https://assets.vogue.in/photos/68ad92d095a1bc0c6918fccb/master/w_1600,c_limit/Mehta&Sons2025%2000858%20.jpg",
    link: "/city",
  },
  {
    title: "Fashion",
    desc:"celeb",
    imageUrl:
      "https://assets.vogue.in/photos/68ad92c3261e0a054c000504/master/w_1600,c_limit/Mehta&Sons2025%2000248%20(1).jpg",
    link: "/mountains",
  },
  {
    title: "Fashion",
    desc:"celeb",
    imageUrl:
      "https://assets.vogue.in/photos/6847ef640285e99a325555bf/2:3/w_1920,c_limit/Sharon_4155%20Blur%20CMYK%20copy.jpg",
    link: "/ocean",
  },
  {
    title: "Fashion",
    desc:"celeb",
    imageUrl:
      "https://media.ceros.com/cn-india/images/2025/06/09/1c79c8bd84b4980ca93ecbf575fd837c/sharon-4653-blur.jpg?imageOpt=1&fit=bounds&width=540",
    link: "/desert",
  },
];

const GalleryWidget2 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll(
      `.${styles.GalleryListCntr}`
    );

    elements.forEach((el) => {
      const imgContainer = el.querySelector(`.${styles.GalleryImgCntr}`);

      gsap.fromTo(
        imgContainer,
        {
          scale: 0.25,
        },
        {
          scale: 1,
          //   duration:1.2,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 100%",
            scrub: 2,
          },
        }
      );
    });
  }, []);
useEffect(() => {
  const cursor = document.getElementById("custom-cursor");
  const imgElements = containerRef.current.querySelectorAll(`.${styles.GalleryImgCntr}`);

  let mouse = { x: 0, y: 0 };
  let pos = { x: 0, y: 0 };
  let isHovering = false;
  let raf;

  const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

  const animate = () => {
    pos.x = lerp(pos.x, mouse.x, 0.15);
    pos.y = lerp(pos.y, mouse.y, 0.15);
    cursor.style.left = `${pos.x}px`;
    cursor.style.top = `${pos.y}px`;
    raf = requestAnimationFrame(animate);
  };

  const handleMouseEnter = () => {
    isHovering = true;
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    raf = requestAnimationFrame(animate);
  };

  const handleMouseLeave = () => {
    isHovering = false;
    cursor.style.transform = "translate(-50%, -50%) scale(0)";
    cancelAnimationFrame(raf);
  };

  const handleMouseMove = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };

  imgElements.forEach((el) => {
    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("mousemove", handleMouseMove);
  });

  return () => {
    imgElements.forEach((el) => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("mousemove", handleMouseMove);
    });
    cancelAnimationFrame(raf);
  };
}, []);



  return (
    <div className={styles.GalleryWidget2Wrapper}>
      <div className={styles.GalleryWidget2Inner}>
        <div className={styles.GalleryCardListWrapper} ref={containerRef}>
          <div className={styles.customCursor} id="custom-cursor">
            <span className={styles.arrow}>&rarr;</span>
          </div>
          {galleryData.map((item, idx) => (
            <div className={styles.GalleryListCntr} key={idx}>
              <div className={styles.GalleryListCntrLeftText}>
                {/* <h1>{item.title}</h1> */}
                <div className={styles.Gallerytextcntrinner}>
                  <h2 className={styles.galleyTitle}>{item.title}</h2>
                  <p className={styles.gallerypara}>{item.desc}</p>
                </div>
                <div className={styles.ViewgalleryBtnWrapper}>
                  <Link href={""} className={styles.ViewgalleryBtnInner}>
                    <div className={styles.ViewgalleryBtnInnercntr}>
                      <div className={styles.btnDot}></div>
                      <span className={styles.btnText}>View</span>
                    </div>
                  </Link>
                </div>
              </div>
              <Link href={item.link} className={styles.GalleryImgCntr}>
                <div className={styles.GalleryImgCntrInner}>
                  <img src={item.imageUrl} alt={item.title} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryWidget2;
