import Title from "./Title";
import img from "../assets/img.jpeg";
import { LetterText, Presentation, Sprout } from "lucide-react";

const aboutSections = [
  {
    id: 1,
    title: "Développement web et mobile",
    description:
      "Conception et développement d’interfaces web et mobiles performantes, en utilisant des technologies modernes (Vue.js, React, React Native, Wordpress) avec une attention particulière à l’UX et à la qualité du code.",
    icon: <LetterText className="text-accent scale-150" />,
  },
  {
    id: 2,
    title: "SEO et content marketing",
    description:
      "Création et optimisation de contenus web orientés SEO : structuration des pages, rédaction optimisée, maillage interne et analyse de performance pour améliorer la visibilité et la conversion.",
    icon: <Sprout className="text-accent scale-150" />,
  },
  {
    id: 3,
    title: "Chefferie de projet digital",
    description:
      "Gestion et coordination de projets digitaux en méthodologie agile : cadrage des besoins, suivi des tâches, collaboration avec les parties prenantes et pilotage des performances.",
    icon: <Presentation className="text-accent scale-150" />,
  },
];

const About = () => {
  return (
    <div className="bg-base-300 py-20 p-10 mb-10 md:mb-32">
      <Title title="À propos" />
      <div className="md:h-screen flex justify-center items-center">
        <div className="hidden md:block">
          <img
            src={img}
            alt="mon-profil"
            className="w-96 object-cover rounded-xl"
          ></img>
        </div>
        <div className="md:ml-4 space-y-4">
          {aboutSections.map((section) => (
            <div key={section.id} className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl">
              <div className="mb-2 md:mb-0">{section.icon}</div>
              <div className="md:ml-4 text-center md:text-left">
                <h2 className="text-xl font-bold mb-1">{section.title}</h2>
                <p className="text-sm">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
