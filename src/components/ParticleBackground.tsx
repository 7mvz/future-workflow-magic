
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      className="absolute inset-0 -z-10"
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "connect",
              parallax: {
                enable: false,
                force: 60,
                smooth: 10
              }
            },
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            connect: {
              distance: 180,
              links: {
                opacity: 0.3
              },
              radius: 200
            },
            grab: {
              distance: 180,
              links: {
                opacity: 0.5,
              },
            },
            push: {
              quantity: 4
            }
          },
        },
        particles: {
          color: {
            value: ["#9b87f5", "#b3a3f7", "#7e69ab"],
          },
          links: {
            color: "#9b87f5",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
            triangles: {
              enable: true,
              opacity: 0.05
            }
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 900,
            },
            value: 70,
          },
          opacity: {
            value: {
              min: 0.3,
              max: 0.6,
            },
          },
          shape: {
            type: ["circle", "polygon"],
            polygon: {
              sides: 6
            }
          },
          size: {
            value: { min: 2, max: 5 },
          },
        },
        detectRetina: true,
        polygon: {
          draw: {
            enable: false,
            stroke: {
              color: "#9b87f5",
              width: 0.5,
              opacity: 0.2
            }
          },
          enable: true,
          move: {
            radius: 10
          },
          inline: {
            arrangement: "equidistant"
          },
          scale: 1,
          type: "inside",
          url: ""
        }
      }}
    />
  );
};

export default ParticleBackground;
