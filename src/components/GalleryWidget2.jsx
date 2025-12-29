"use client";
import React, { useEffect, useRef } from "react";
import styles from "@/components/GalletyWidget2.module.css";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryData = [
  {
    title: "Rhythm of Us",
    desc:"Inspired by wave-like contours, Rhythm of Us reflects bonds that evolve gradually and instinctively find their way back to balance. Designed for couples whose connection deepens with time, movement, and shared growth.",
    imageUrl:
      "/Assets/gallery2images/Rhythm of Us.webp",
    link: "#",
  },
  {
    title: "Us Until Infinity",
    desc:"Featuring an infinity motif that completes only when placed together, this design captures continuity and shared direction. A quiet promise rendered in form, meant to be understood by two.",
    imageUrl:
      "/Assets/gallery2images/Us until Infinity.webp",
    link: "#",
  },
  {
    title: "Looped in Love",
    desc:"A flowing spiral design paired with a matte-finished band reflects effortless understanding. Created for relationships where communication exists beyond words, gestures, or explanations.",
    imageUrl:
      "/Assets/gallery2images/Looped in Love.webp",
    link: "#",
  },
  {
    title: "Twin Flames",
    desc:"Flame-shaped motifs symbolise two distinct energies in harmony. Designed to celebrate individuality while acknowledging the power of alignment and mutual pull.",
    imageUrl:
      "/Assets/gallery2images/Twin Flames.webp",
    link: "#",
  },
  {
    title: "The Lasting Embrace",
    desc:"Overlapping swirls convey reassurance and presence. A design that reflects support, constancy, and the comfort of knowing you are never navigating life alone.",
    imageUrl:
      "/Assets/gallery2images/The Lasting Embrace.webp",
    link: "#",
  },
  {
    title: "Blended in Love",
    desc:"Dual-tone ridged finishes represent openness and belonging. Different yet perfectly aligned, the bands reflect relationships built on acceptance and shared space.",
    imageUrl:
      "/Assets/gallery2images/Blended in Love.webp",
    link: "#",
  },
  {
    title: "In Perfect Sync",
    desc:"Clean, structured lines and near-identical forms mirror alignment in thought and action. Designed for couples who move through life as true partners. Unified by platinum’s inherent strength and resistance to change, these love bands are crafted to hold meaning, character, and form over time. A reflection of commitment that is modern, considered, and unmistakably rare.",
    imageUrl:
      "/Assets/gallery2images/In Perfect Sync.webp",
    link: "#",
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
  // const cursor = document.getElementById("custom-cursor");
  const imgElements = containerRef.current.querySelectorAll(`.${styles.GalleryImgCntr}`);

  // let mouse = { x: 0, y: 0 };
  // let pos = { x: 0, y: 0 };
  // let isHovering = false;
  // let raf;

  // const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

  // const animate = () => {
  //   pos.x = lerp(pos.x, mouse.x, 0.15);
  //   pos.y = lerp(pos.y, mouse.y, 0.15);
  //   cursor.style.left = `${pos.x}px`;
  //   cursor.style.top = `${pos.y}px`;
  //   raf = requestAnimationFrame(animate);
  // };

  // const handleMouseEnter = () => {
  //   isHovering = true;
  //   cursor.style.transform = "translate(-50%, -50%) scale(1)";
  //   raf = requestAnimationFrame(animate);
  // };

  // const handleMouseLeave = () => {
  //   isHovering = false;
  //   cursor.style.transform = "translate(-50%, -50%) scale(0)";
  //   cancelAnimationFrame(raf);
  // };

  // const handleMouseMove = (e) => {
  //   mouse.x = e.clientX;
  //   mouse.y = e.clientY;
  // };

  imgElements.forEach((el) => {
    // el.addEventListener("mouseenter", handleMouseEnter);
    // el.addEventListener("mouseleave", handleMouseLeave);
    // el.addEventListener("mousemove", handleMouseMove);
  });

  return () => {
    imgElements.forEach((el) => {
      // el.removeEventListener("mouseenter", handleMouseEnter);
      // el.removeEventListener("mouseleave", handleMouseLeave);
      // el.removeEventListener("mousemove", handleMouseMove);
    });
    cancelAnimationFrame(raf);
  };
}, []);



  return (
    <div className={styles.GalleryWidget2Wrapper}>
      <div className={styles.GalleryWidget2Inner}>
        <div className={styles.GalleryCardListWrapper} ref={containerRef}>
          {/* <div className={styles.customCursor} id="custom-cursor">
            <span className={styles.arrow}>&rarr;</span>
          </div> */}
          {galleryData.map((item, idx) => (
            <div className={styles.GalleryListCntr} key={idx}>
              <div className={styles.GalleryListCntrLeftText}>
                {/* <h1>{item.title}</h1> */}
                <div className={styles.Gallerytextcntrinner}>
                  <h2 className={styles.galleyTitle}>{item.title}</h2>
                  <p className={styles.gallerypara}>{item.desc}</p>
                </div>
                {/* <div className={styles.ViewgalleryBtnWrapper}>
                  <Link href={""} className={styles.ViewgalleryBtnInner}>
                    <div className={styles.ViewgalleryBtnInnercntr}>
                      <div className={styles.btnDot}></div>
                      <span className={styles.btnText}>View</span>
                    </div>
                  </Link>
                </div> */}
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
