import { useState, useEffect, useRef } from "react";
import * as s from "./HeroStyled";
import { Skeleton } from "@mui/material";
import gsap from "gsap"; // Asegúrate de tener gsap instalado

export const Hero = () => {
  const [loading, setLoading] = useState(true);
  const contentRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      // Animación de GSAP después de que el contenido se carga
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2, // Anima cada elemento con un pequeño retraso
        ease: "power2.out",
      });
    }
  }, [loading]);

  return (
    <>
      <s.FontImport />
      <s.Section>
        <s.Container ref={contentRef}>
          {loading ? (
            <>
              <Skeleton
                variant="text"
                width="50%"
                height={50}
                style={{ margin: "0 auto 20px" }}
              />
              <Skeleton
                variant="text"
                width="30%"
                height={35}
                style={{ margin: "0 auto 20px" }}
              />
              <Skeleton
                variant="text"
                width="70%"
                height={28}
                style={{ margin: "0 auto 40px" }}
              />
              <Skeleton
                variant="rectangular"
                width={140}
                height={42}
                style={{ margin: "0 auto" }}
              />
            </>
          ) : (
            <>
              <s.Title>Hola, soy Brian</s.Title>
              <s.Subtitle>Desarrollador Frontend</s.Subtitle>
              <s.Description>
                Creo experiencias digitales profesionales y modernas con diseño
                limpio y funcional.
              </s.Description>
              <s.ButtonsRow>
                <s.Button
                  href="https://www.linkedin.com/in/brian-elias-perfil/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </s.Button>
                <s.Button href="/Curriculum.pdf" download>
                  Descargar CV
                </s.Button>
              </s.ButtonsRow>
            </>
          )}
        </s.Container>
      </s.Section>
    </>
  );
};
