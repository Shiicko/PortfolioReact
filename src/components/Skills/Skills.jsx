import { useState, useEffect } from "react";
import * as s from "./SkillsStyled";
import { Skeleton } from "@mui/material";

const skills = [
  { name: "HTML", src: "/icons/html.png" },
  { name: "CSS", src: "/icons/css.png" },
  { name: "JavaScript", src: "/icons/Js.png" },
  { name: "React", src: "/icons/react.png" },
  { name: "Angular", src: "/icons/angular.png" },
  { name: "Bootstrap", src: "/icons/boostrap.png" },
  { name: "Tailwind", src: "/icons/tailwind.png" },
];

export const Skills = () => {
  const [loading, setLoading] = useState(true);

  // Simula una carga de contenido
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500); // Ajusta el tiempo según tus necesidades
  }, []);

  const skeletons = skills.map((_, index) => (
    <s.SkillItem key={index}>
      <Skeleton variant="circular" width={60} height={60} />{" "}
      {/* Asegúrate de que el tamaño sea el mismo que el de tus iconos */}
    </s.SkillItem>
  ));

  const content = (
    <s.SkillsGrid>
      {skills.map((skill) => (
        <s.SkillItem key={skill.name}>
          <s.Icon src={skill.src} alt={skill.name} />
        </s.SkillItem>
      ))}
    </s.SkillsGrid>
  );

  return (
    <s.Container>
      <s.Title>Habilidades</s.Title>
      {loading ? (
        <s.SkillsGrid>{skeletons}</s.SkillsGrid> // Usa el mismo contenedor para los Skeletons
      ) : (
        content
      )}
    </s.Container>
  );
};
