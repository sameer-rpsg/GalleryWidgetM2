"use client";
import React, { useEffect, useRef } from "react";
import styles from "@/components/GalletyWidget2.module.css";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryData = [
  {
    title: "Emerald and Diamond Collar by Renu Oberoi Luxury Jewellery",
    desc:"celeb",
    imageUrl:
      "https://www.manifestmagazine.in/_next/image?url=https%3A%2F%2Fcdn.manifestmagazine.in%2F2024%2F12%2FROJ0042_1-1-683x1024.jpg&w=1920&q=75",
    link: "/sunset",
  },
  {
    title: "Ruby and Diamond Earrings by Renu Oberoi Luxury Jewellery",
    desc:"celeb",
    imageUrl:
      "https://www.manifestmagazine.in/_next/image?url=https%3A%2F%2Fcdn.manifestmagazine.in%2F2024%2F12%2FRenu-O-23rd-April_6-1-1024x1024.jpg&w=1920&q=75",
    link: "/forest",
  },
  {
    title: "South Sea Pearl and Diamond Collar and Earrings by Renu Oberoi Luxury Jewellery",
    desc:"celeb",
    imageUrl:
      "https://www.manifestmagazine.in/_next/image?url=https%3A%2F%2Fcdn.manifestmagazine.in%2F2024%2F12%2FROJ0048_1-1-683x1024.jpg&w=1920&q=75",
    link: "/city",
  },
  {
    title: "Yellow Sapphire and Diamond Earrings by Renu Oberoi Luxury Jewellery",
    desc:"celeb",
    imageUrl:
      "https://www.manifestmagazine.in/_next/image?url=https%3A%2F%2Fcdn.manifestmagazine.in%2F2024%2F12%2FROJ0149_1-1-1024x1024.jpg&w=1920&q=75",
    link: "/mountains",
  },
  {
    title: "Emerald and Diamond Cuff by Renu Oberoi Luxury Jewellery",
    desc:"celeb",
    imageUrl:
      "https://www.manifestmagazine.in/_next/image?url=https%3A%2F%2Fcdn.manifestmagazine.in%2F2024%2F12%2FRenu-O28th-Oct_14-1-1024x1024.jpg&w=1920&q=75",
    link: "/ocean",
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
