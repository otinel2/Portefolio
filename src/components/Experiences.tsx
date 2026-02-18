import Title from "./Title";
import imgHTML from "../assets/techno/html.png";
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgReact from "../assets/techno/react.png";
import imgNodeJS from "../assets/techno/node-js.png";
import imgTS from "../assets/techno/typescript.svg";
import imgGit from "../assets/techno/git.png";
import imgWordpress from "../assets/techno/wordpress.png";
import imgTailwind from "../assets/techno/tailwind.png";

import drone33 from "../assets/companies/drone33.png"
import objectiv from "../assets/companies/lOGO-OBJECTIV-blanc.svg"

const skills = [
  { id: 1, name: "HTML", image: imgHTML },
  { id: 2, name: "CSS", image: imgCSS },
  { id: 3, name: "JavaScript", image: imgJS },
  { id: 4, name: "React", image: imgReact },
  { id: 5, name: "Node.js", image: imgNodeJS },
  { id: 6, name: "TypeScript", image: imgTS },
  { id: 7, name: "Git", image: imgGit },
  { id: 8, name: "Wordpress", image: imgWordpress },
  { id: 9, name: "Tailwind", image: imgTailwind },
];

const experiences = [
  {
  id: 1,
  company: "Drone33",
  role: "STAGE Intégrateur web / SEO",
  période: "2022 - 2023",
  description: [
    "Refonte des pages services du site web (intégration, structuration des contenus et amélioration de l’UX).",
    "Optimisation SEO on-site : structuration des pages, optimisation des balises, amélioration de la lisibilité et du maillage interne.",
    "Contribution à l’amélioration de la visibilité en ligne et des performances SEO du site."
  ],
  image: drone33
},
{
  id: 2,
  company: "OBJECTIV",
  role: "STAGE Chef de projet digital / Intégrateur web",
  période: "2024",
  description: [
    "Gestion de projet digital pour la conception et la refonte d’un site WordPress d’organisme de formation.",
    "Intégration de contenus web, optimisation SEO (structure des pages, mots-clés, maillage interne).",
    "Travail en collaboration avec une équipe pluridisciplinaire (développeurs, direction artistique, communication)."
  ],
  image: objectiv
},
]


const Experiences = () => {
  return (
    <div>
      <Title title="Mes expériences" />
      <div>
        <div className="flex flex-wrap gap-4 justify-center items-center md: w-1/3 mt-4 md:mt-0 ">
          {skills.map((skill) => (
            <div key={skill.id} className="flex justify-center items-center flex-col">
              <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="object-cover rounded-full h-full w-full"
                />
              </div>
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
        <div className="md:ml-4 flex flex-col space-y-4 ">
          {experiences.map((experience) => (
            <div key={experience.id}>
              <div className="flex items-center">
                <img src={experience.image} alt={experience.company} className="object-contain h-10 w-10" />
                <div className="ml-4">
                  <h1>{experience.role} , {experience.company}</h1>
                </div>
              </div>
              <ul></ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
