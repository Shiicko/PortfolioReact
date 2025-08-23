import { useState, useEffect, useRef } from "react";
import * as s from "./AboutStyled";
import { Skeleton } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }
  }, [loading]);

  const skeletonContent = (
    <>
      <Skeleton
        variant="text"
        width={200}
        height={40}
        style={{ marginBottom: 20 }}
      />
      <Skeleton variant="text" width={600} height={100} />
    </>
  );

  const realContent = (
    <>
      <s.Title>SOBRE MI</s.Title>
      <s.Text>
        Como desarrollador web, cuento con una sólida formación académica con
        una diplomatura en la
        <a
          href="https://www.frre.utn.edu.ar/"
          target="blank"
          rel="noopener noreferrer"
        >
          Universidad Tecnológica Nacional
        </a>
        (UTN FRRE)&nbsp;y una carrera en desarrollo web en
        <a
          href="https://www.nucba.com.ar/"
          target="blank"
          rel="noopener noreferrer"
        >
          NUCBA
        </a>
        , donde he completado el frontend y actualmente estoy cursando el
        backend.
      </s.Text>
    </>
  );

  return (
    <s.container id="About" ref={sectionRef}>
      <div ref={contentRef}>{loading ? skeletonContent : realContent}</div>
    </s.container>
  );
};
