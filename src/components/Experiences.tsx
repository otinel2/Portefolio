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

import drone33 from "../assets/companies/drone33.png";
import objectiv from "../assets/companies/lOGO-OBJECTIV-blanc.svg";

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
    role: "Stage intégrateur web / SEO",
    period: "2022 - 2023",
    context:
      "Refonte de pages stratégiques et amélioration de la visibilité organique du site.",
    description: [
      "Refonte des pages services du site avec une intégration plus claire, une structure éditoriale optimisée et une meilleure expérience utilisateur.",
      "Optimisation SEO on-site : hiérarchie des contenus, balises, lisibilité, maillage interne et enrichissement sémantique.",
      "Contribution directe à l’amélioration de la présence en ligne et des performances SEO du site.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Wordpress", "SEO"],
    image: drone33,
  },
  {
    id: 2,
    company: "OBJECTIV",
    role: "Stage chef de projet digital / intégrateur web",
    period: "2024",
    context:
      "Pilotage de la refonte d’un site WordPress pour un organisme de formation.",
    description: [
      "Gestion de projet digital de la conception à la refonte, avec coordination des besoins et suivi de l’avancement.",
      "Intégration de contenus et optimisation SEO des pages : structure, mots-clés, maillage interne et cohérence éditoriale.",
      "Collaboration avec une équipe pluridisciplinaire réunissant développement, direction artistique et communication.",
    ],
    stack: ["Wordpress", "SEO", "Gestion de projet", "UX", "Content"],
    image: objectiv,
  },
];

const Experiences = () => {
  return (
    <section className="py-20">
      <Title title="Mes expériences" />
      <p className="mx-auto mb-12 max-w-3xl text-center text-sm md:text-base opacity-80">
        Des expériences mêlant développement, SEO et coordination de projets,
        avec une approche orientée impact, performance et qualité d’exécution.
      </p>

      <div className="grid gap-8 lg:grid-cols-[340px_minmax(0,1fr)] lg:items-start">
        <div className="rounded-3xl bg-base-200 p-6 shadow-xl">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Stack
            </p>
            <h2 className="mt-2 text-2xl font-bold">Technologies maîtrisées</h2>
            <p className="mt-2 text-sm opacity-80">
              Des outils utilisés pour concevoir des interfaces fiables,
              améliorer le référencement et livrer des projets web concrets.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col items-center justify-center rounded-2xl bg-base-100 p-3 text-center shadow"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent/30 bg-base-200 p-3">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="mt-3 text-xs font-medium md:text-sm">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {experiences.map((experience) => (
            <article
              key={experience.id}
              className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral p-3 shadow-md">
                    <img
                      src={experience.image}
                      alt={experience.company}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                      {experience.company}
                    </p>
                    <h3 className="text-xl font-bold md:text-2xl">
                      {experience.role}
                    </h3>
                    <p className="mt-1 text-sm opacity-70">{experience.period}</p>
                  </div>
                </div>

                <div className="badge badge-outline badge-accent self-start px-4 py-3 text-xs font-semibold">
                  Expérience {experience.id}
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 opacity-80 md:text-base">
                {experience.context}
              </p>

              <ul className="mt-5 space-y-3">
                {experience.description.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent"></span>
                    <span className="text-sm leading-6 md:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {experience.stack.map((item) => (
                  <span key={item} className="badge badge-neutral badge-outline px-3 py-3">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
