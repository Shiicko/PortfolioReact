import { useState, useEffect } from "react";
import * as s from "./ContactStyled";
import { Skeleton } from "@mui/material";

const contactLinks = [
  {
    href: "mailto:joelias228@gmail.com",
    src: "/redes/gmail.png",
    alt: "Gmail",
  },
  {
    href: "https://www.linkedin.com/in/brian-elias-perfil/",
    src: "/icons/linkedin.png",
    alt: "LinkedIn",
  },
];

export const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const skeletons = contactLinks.map((link) => (
    <s.ContactIcon key={link.alt}>
      <Skeleton variant="circular" width={40} height={40} />
    </s.ContactIcon>
  ));

  const content = (
    <s.ContactIcons>
      {contactLinks.map((link) => (
        <s.ContactIcon
          key={link.alt}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <s.Icon src={link.src} alt={link.alt} />
        </s.ContactIcon>
      ))}
    </s.ContactIcons>
  );

  return (
    <s.Section id="Contact">
      <s.Container>
        <s.Title>Comunícate conmigo</s.Title>
        <s.Description>
          Encuentra los enlaces de contacto a continuación:
        </s.Description>
        {loading ? <s.ContactIcons>{skeletons}</s.ContactIcons> : content}
      </s.Container>
    </s.Section>
  );
};
