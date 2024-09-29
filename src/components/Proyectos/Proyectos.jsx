import { useState, useEffect } from "react";
import * as s from "./ProyectoStyled";
import { Skeleton } from "@mui/material";

export const Proyectos = () => {
  const [loading, setLoading] = useState(true);

  // Simula una carga de contenido
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const skeletons = Array(6)
    .fill(null)
    .map((_, index) => (
      <div key={index}>
        <Skeleton variant="rectangular" width={210} height={118} />
        <Skeleton width={210} />
      </div>
    ));

  const content = (
    <>
      <div>
        <a href="https://heisenbar.vercel.app/" target="blank">
          <img src="/assets/heisenbar.png" alt="Heisenbar" />
        </a>
        <span>HeisenBar.</span>
      </div>
      <div>
        <a href="https://tech-shop-silk.vercel.app/" target="blank">
          <img src="/assets/img.jpg" alt="" />
        </a>
        <span>Arma la pc de tus sueños...</span>
      </div>
      <div>
        <a href="https://gym-rosy-two.vercel.app/" target="blank">
          <img src="/assets/gym.avif" alt="Gym" />
        </a>
        <span>Tu cuerpo es tu templo...</span>
      </div>
      <div>
        <a href="https://departamentos-jet.vercel.app/" target="blank">
          <img src="/assets/Playa.jpg" alt="" />
        </a>
        <span>La señal que esperabas...</span>
      </div>
      <div>
        <a href="https://nucbaharley.vercel.app/index.html" target="blank">
          <img src="/assets/Harley.jpg" alt="Harley" />
        </a>
        <span>No es solo una moto...</span>
      </div>
      <div>
        <a href="https://www.google.com/" target="blank">
          <img src="/assets/cs.jpg" alt="" />
        </a>
        <span>Pronto...</span>
      </div>
      <div>
        <a href="https://www.google.com/" target="blank">
          <img src="/assets/cs.jpg" alt="" />
        </a>
        <span>Pronto...</span>
      </div>{" "}
      <div>
        <a href="https://www.google.com/" target="blank">
          <img src="/assets/cs.jpg" alt="" />
        </a>
        <span>Pronto...</span>
      </div>{" "}
      <div>
        <a href="https://www.google.com/" target="blank">
          <img src="/assets/cs.jpg" alt="" />
        </a>
        <span>Pronto...</span>
      </div>
    </>
  );

  return (
    <s.Wrapper id="Proyectos">
      <s.Title>Mis Proyectos</s.Title>
      <s.Container>{loading ? skeletons : content}</s.Container>
    </s.Wrapper>
  );
};
