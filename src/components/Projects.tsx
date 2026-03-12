import { BriefcaseBusiness, Code2, GraduationCap, Lightbulb } from "lucide-react";
import Title from "./Title";

import project1 from "../assets/projects/1.png";
import project2 from "../assets/projects/2.png";
import project3 from "../assets/projects/3.png";
import project4 from "../assets/projects/4.png";

const projects = [
  {
    id: 1,
    title: "Création d’un site WordPress",
    type: "Projet professionnel",
    description:
      "Création d’un site WordPress complet pour un organisme de formation professionnelle durant mon stage, avec un objectif de refonte, de clarté de navigation et d’amélioration de l’expérience utilisateur.",
    technologies: [
      "WordPress",
      "PHP",
      "HTML",
      "CSS",
      "Astra Theme",
      "Max Mega Menu",
    ],
    contributions: [
      "Mise en place de l’environnement WordPress et de la structure du projet.",
      "Conception de l’architecture du site, de la navigation et des pages de formation.",
      "Implémentation d’un Mega Menu pour faciliter l’accès aux contenus.",
      "Vérification du responsive, de l’accessibilité et intégration des formulaires de contact.",
    ],
    learnings: [
      "La structure et l’organisation d’un vrai projet WordPress.",
      "L’importance de la réflexion UX pour des services de formation.",
      "La gestion des contenus et de la navigation pour une organisation réelle.",
    ],
    image: project1,
    icon: <BriefcaseBusiness className="h-5 w-5" />,
  },
  {
    id: 2,
    title: "Prototype web design",
    type: "Projet UI/UX",
    description:
      "Création d’un prototype UI/UX pour un site web et une application mobile sur Figma, avec une attention particulière portée aux parcours utilisateurs et aux écrans orientés conversion.",
    technologies: ["Figma", "UX Design", "Wireframing", "User Flow"],
    contributions: [
      "Conception de plusieurs maquettes d’interfaces pour le web et le mobile.",
      "Création de parcours utilisateurs et d’une structure de navigation claire.",
      "Design de formulaires et de landing pages optimisés pour la conversion.",
    ],
    learnings: [
      "Les principes fondamentaux de l’UX design.",
      "La capacité à prototyper et penser une interface avant le développement.",
      "La conception de layouts responsive pour plusieurs supports.",
    ],
    image: project2,
    icon: <Lightbulb className="h-5 w-5" />,
  },
  {
    id: 3,
    title: "Développement d’application mobile",
    type: "Projet académique",
    description:
      "Développement d’une application mobile avec Expo et React Native afin d’apprendre l’architecture mobile, la navigation entre écrans et l’implémentation concrète d’interfaces.",
    technologies: ["JavaScript", "Expo", "React Native", "UI mobile"],
    contributions: [
      "Développement de l’interface mobile et de composants d’écran réutilisables.",
      "Mise en place de la navigation entre les écrans et les vues de l’application.",
      "Tests de l’application sur mobile pour valider l’ergonomie.",
    ],
    learnings: [
      "Les bases de la structure d’une application mobile.",
      "Les fondamentaux de React Native et de la logique composant.",
      "La conception et les tests d’interfaces mobile-first.",
    ],
    image: project3,
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    id: 4,
    title: "Projets pratiques en développement web",
    type: "Projets de formation",
    description:
      "Ensemble de petits projets réalisés durant ma formation pour renforcer ma logique de programmation, ma pratique du frontend et mes bases en backend.",
    technologies: ["JavaScript", "PHP", "HTML", "CSS", "Algorithmes"],
    contributions: [
      "Création de petites applications web pour pratiquer des workflows de développement concrets.",
      "Travail sur des algorithmes et des exercices de résolution de problèmes.",
      "Apprentissage des bases du backend avec PHP et de l’interaction frontend/backend.",
    ],
    learnings: [
      "La logique de programmation et la décomposition des problèmes.",
      "La communication entre frontend et backend.",
      "Le débogage et un workflow de développement plus structuré.",
    ],
    image: project4,
    icon: <Code2 className="h-5 w-5" />,
  },
];

const Projects = () => {
  return (
    <section className="py-20">
      <Title title="Mes projets" />
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
          Sélection de projets
        </p>
        <p className="mt-4 text-sm leading-6 opacity-80 md:text-base">
          Une sélection de projets professionnels, académiques et pratiques qui
          illustrent mes compétences en développement web, développement mobile,
          réflexion UX et structuration de contenus.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="relative h-52 overflow-hidden bg-base-200">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-content shadow-lg">
                    {project.icon}
                  </span>
                  <span className="badge badge-outline border-white/50 px-3 py-3 text-white">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm leading-6 opacity-80 md:text-base">
                {project.description}
              </p>

              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                  Technologies utilisées
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="badge badge-neutral badge-outline px-3 py-3"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-base-200 p-5">
                  <h4 className="text-lg font-bold">Ce que j’ai fait</h4>
                  <ul className="mt-4 space-y-3">
                    {project.contributions.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
                        <span className="text-sm leading-6">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-base-200 p-5">
                  <h4 className="text-lg font-bold">Ce que j’ai appris</h4>
                  <ul className="mt-4 space-y-3">
                    {project.learnings.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
                        <span className="text-sm leading-6">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
