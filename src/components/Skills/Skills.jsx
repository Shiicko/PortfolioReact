import { useState, useEffect } from "react";
import * as s from "./SkillsStyled";
import { Skeleton } from "@mui/material";

const skills = [
  { name: "HTML", src: "/icons/html.png" },
  { name: "CSS", src: "/icons/css.png" },
  { name: "JavaScript", src: "/icons/Js.png" },
  { name: "React", src: "/icons/react.png" },
  { name: "Bootstrap", src: "/icons/boostrap.png" },
  { name: "Tailwind", src: "/icons/tailwind.png" },
];

export const Skills = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const skeletons = skills.map((_, index) => (
    <s.SkillItem key={index}>
      <Skeleton variant="circular" width={60} height={60} />{" "}
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
      {loading ? <s.SkillsGrid>{skeletons}</s.SkillsGrid> : content}
    </s.Container>
  );
};
