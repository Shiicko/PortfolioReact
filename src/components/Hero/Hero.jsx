import { useState, useEffect } from "react";
import * as s from "./HeroStyled";
import { Skeleton } from "@mui/material";

export const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <s.FontImport />
      <s.Section>
        <s.Container>
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
                <s.Button href="/Cv.pdf" download>
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
