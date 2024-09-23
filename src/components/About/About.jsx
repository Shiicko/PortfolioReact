import { useState, useEffect } from "react";
import * as s from "./AboutStyled";
import { Skeleton } from "@mui/material";

export const About = () => {
  const [loading, setLoading] = useState(true);

  // Simula una carga de contenido
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500); // Ajusta el tiempo según tus necesidades
  }, []);

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
    <s.container id="About">
      {loading ? skeletonContent : realContent}
    </s.container>
  );
};
