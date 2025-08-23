/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import * as s from "./ProyectoStyled";
import { Skeleton } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LazyImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ position: "relative", height: "180px", width: "100%" }}>
      {!loaded && (
        <div
          style={{
            backgroundColor: "#ddd",
            filter: "blur(8px)",
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            borderRadius: "20px",
            transition: "opacity 0.3s ease",
          }}
        />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "20px",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.5s ease",
          display: "block",
        }}
      />
    </div>
  );
};

export const Proyectos = () => {
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.from(
        gsap.utils.toArray(
          sectionRef.current.querySelectorAll(".project-card")
        ),
        {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, [loading]);

  const skeletons = Array(6)
    .fill(null)
    .map((_, index) => (
      <s.Card key={index}>
        <Skeleton variant="rectangular" width="100%" height={180} />
        <Skeleton width="60%" style={{ marginTop: 12, marginBottom: 12 }} />
        <Skeleton variant="rectangular" width="40%" height={32} />
      </s.Card>
    ));

  const projects = [
    {
      href: "https://www.gym-flow.site/",
      img: "/assets/profile.png",
      alt: "Gym Flow",
      title: "Fluidez... Gym-Flow",
    },
    {
      href: "https://heisenbar.vercel.app/",
      img: "/assets/heisenbar.png",
      alt: "Heisenbar",
      title: "HeisenBar.",
    },
    {
      href: "https://joelium.vercel.app/",
      img: "/assets/mockup.png",
      alt: "Crypto",
      title: "La nueva era de Crypto...",
    },
    {
      href: "https://moodify-tau.vercel.app/",
      img: "/assets/moodify.avif",
      alt: "Moodify",
      title: "Canciones para vos...",
    },
    {
      href: "https://gym-rosy-two.vercel.app/",
      img: "/assets/gym.avif",
      alt: "Gym",
      title: "Tu cuerpo es tu templo...",
    },
    {
      href: "https://tech-shop-silk.vercel.app/",
      img: "/assets/img.avif",
      alt: "Tech Shop",
      title: "Arma la pc de tus sueños...",
    },
    {
      href: "https://departamentos-jet.vercel.app/",
      img: "/assets/Playa.avif",
      alt: "Departamentos",
      title: "La señal que esperabas...",
    },
    {
      href: "https://nucbaharley.vercel.app/index.html",
      img: "/assets/Harley.webp",
      alt: "Harley",
      title: "No es solo una moto...",
    },
    {
      href: "https://logistica-theta.vercel.app/",
      img: "/assets/camion.avif",
      alt: "Logística",
      title: "A tiempo, como nadie más...",
    },
  ];

  const content = projects.map(({ href, img, alt, title }, index) => (
    <s.Card key={index} className="project-card">
      <s.ImageWrapper>
        <a href={href} target="_blank" rel="noreferrer">
          <LazyImage src={img} alt={alt} />
          <s.Overlay>
            <s.Button>Ver Proyecto</s.Button>
          </s.Overlay>
          <s.ProjectTitle>{title}</s.ProjectTitle>
        </a>
      </s.ImageWrapper>
    </s.Card>
  ));

  return (
    <s.Wrapper id="Proyectos" ref={sectionRef}>
      <s.Header>Mis Proyectos</s.Header>
      <s.Container>{loading ? skeletons : content}</s.Container>
      <s.Header style={{ marginTop: "100px", marginBottom: "20px" }}>
        Plantillas web
      </s.Header>
      <s.Container
        style={{
          width: "350px",
          justifySelf: "center",
        }}
      >
        <s.Card className="project-card">
          <s.ImageWrapper>
            <a
              href="https://plantillas-six.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/assets/pf.webp" alt="Logo" />
              <s.Overlay>
                <s.Button>Ver diseños</s.Button>
              </s.Overlay>
            </a>
          </s.ImageWrapper>
        </s.Card>
      </s.Container>
    </s.Wrapper>
  );
};
