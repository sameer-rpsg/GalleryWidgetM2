"use client";
import React, { useEffect, useRef } from "react";
import styles from "@/components/GalletyWidget2.module.css";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryData = [
  {
    title: "Tirumala Pure Silver Bracelet: Venketeshwara Edition, Tarakesh",
    desc:"celeb",
    imageUrl:
      "https://www.manifestmagazine.in/_next/image?url=https%3A%2F%2Fcdn.manifestmagazine.in%2Feditor-images%2F2025-09-23T08%253A20%253A29.439Z-IMG_0760_3000x_6_11zon.jpeg&w=3840&q=75",
    link: "#",
  },
  {
    title: "Bodhi Mangala Silver Necklace, Moha by Geetanjali",
    desc:"celeb",
    imageUrl:
      "https://www.manifestmagazine.in/_next/image?url=https%3A%2F%2Fcdn.manifestmagazine.in%2Feditor-images%2F2025-09-23T08%253A16%253A54.009Z-Bodhi_Mangala_Silver_Necklace_by_MOHA1_11zon.jpeg&w=1920&q=75",
    link: "#",
  },
  {
    title: "Sleek Eeshta Earrings, Sheetal Zaveri",
    desc:"celeb",
    imageUrl:
      "https://www.manifestmagazine.in/_next/image?url=https%3A%2F%2Fcdn.manifestmagazine.in%2Feditor-images%2F2025-09-23T08%253A13%253A06.803Z-23123szh31-1.jpg&w=1920&q=75",
    link: "#",
  },
  {
    title: "Fascination Necklace, Shaya by CaratLane",
    desc:"celeb",
    imageUrl:
      "https://www.manifestmagazine.in/_next/image?url=https%3A%2F%2Fcdn.manifestmagazine.in%2Feditor-images%2F2025-09-23T08%253A05%253A50.733Z-a3aad26AL00559-SS0000_2_2_11zon.jpeg&w=1920&q=75",
    link: "#",
  },
  {
    title: "Dhenu Necklace, Meera Jaipur",
    desc:"celeb",
    imageUrl:
      "https://www.manifestmagazine.in/_next/image?url=https%3A%2F%2Fcdn.manifestmagazine.in%2Feditor-images%2F2025-09-23T08%253A05%253A33.502Z-DSC_4077-min_3_11zon.jpeg&w=1920&q=75",
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
