import { useState, useEffect } from "react";
import * as s from "./HeroStyled";
import { Skeleton } from "@mui/material";

export const Hero = () => {
  const [loading, setLoading] = useState(true);

  // Simula una carga de contenido
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <s.Container>
      <s.Content>
        <s.textContent>
          {loading ? (
            <>
              <Skeleton variant="text" width={300} height={40} />
              <Skeleton variant="text" width={200} height={30} />
              <Skeleton variant="text" width={50} height={30} />
            </>
          ) : (
            <>
              <h2>Hola, mi nombre es Joel</h2>
              <span>Soy Desarrollador Frontend</span>
              <span>
                <a
                  href="https://www.linkedin.com/in/brian-elias-perfil/"
                  target="blank"
                ></a>
              </span>
            </>
          )}
        </s.textContent>
      </s.Content>
      <s.Content>
        {loading ? (
          <Skeleton variant="rectangular" width={150} height={150} />
        ) : (
          <img src="public/assets/profile.svg" alt="Profile" />
        )}
      </s.Content>
    </s.Container>
  );
};
