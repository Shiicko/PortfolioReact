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
    href: "https://api.whatsapp.com/send?phone=5493543300701&text=Hola%21%20Hola%20Joel,%20me%20comunico%20para",
    src: "/redes/whatsapp.png",
    alt: "WhatsApp",
  },
  {
    href: "https://www.instagram.com/joel_elias.19/",
    src: "/redes/instagram.png",
    alt: "Instagram",
  },
];

export const Contact = () => {
  const [loading, setLoading] = useState(true);

  // Simula una carga de contenido
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500); // Ajusta el tiempo según tus necesidades
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
