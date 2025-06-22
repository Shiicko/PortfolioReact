/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import * as s from "./ProyectoStyled";
import { Skeleton } from "@mui/material";

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
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowContent(true), 100);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

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
      href: "https://gym-rosy-two.vercel.app/",
      img: "/assets/gym.avif",
      alt: "Gym",
      title: "Tu cuerpo es tu templo...",
    },
    {
      href: "https://tech-shop-silk.vercel.app/",
      img: "/assets/img.jpg",
      alt: "Tech Shop",
      title: "Arma la pc de tus sueños...",
    },
    {
      href: "https://departamentos-jet.vercel.app/",
      img: "/assets/Playa.jpg",
      alt: "Departamentos",
      title: "La señal que esperabas...",
    },
    {
      href: "https://nucbaharley.vercel.app/index.html",
      img: "/assets/Harley.jpg",
      alt: "Harley",
      title: "No es solo una moto...",
    },
    {
      href: "https://logistica-theta.vercel.app/",
      img: "/assets/camion2.jpg",
      alt: "Logística",
      title: "A tiempo, como nadie más...",
    },
    {
      href: "https://www.google.com/",
      img: "/assets/cs.jpg",
      alt: "Pronto",
      title: "Pronto...",
    },
  ];

  const content = projects.map(({ href, img, alt, title }, index) => (
    <s.Card key={index}>
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
    <s.Wrapper id="Proyectos">
      <s.Header>Mis Proyectos</s.Header>
      <s.Container
        style={{
          opacity: loading ? 0.5 : showContent ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        {loading ? skeletons : content}
      </s.Container>
    </s.Wrapper>
  );
};
