import { Mail } from "lucide-react";
import img from "../assets/img.jpeg";

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
      <div className="flex flex-col">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
          Bienvenue, <br /> je suis{" "}
          <span className="text-accent">OLY OTINEL KLA</span>
        </h1>
        <p className="my-4 text-md text-center md:text-left">
          Étudiant en <span className="font-bold">transformation digitale</span>
          ,
          <br />
          je crée des{" "}
          <span className="font-bold">expériences web performantes</span> à la
          croisée de <span className="font-bold">l’UI/UX</span>, du{" "}
          <span className="font-bold">SEO</span> et du{" "}
          <span className="font-bold">développement web et mobile</span>. <br />
          Curieux et orienté résultats, je m’investis sur des{" "}
          <span className="font-bold">
            projets concrets en développement web, content marketing et growth
          </span>
          ,<br /> avec une attention particulière aux enjeux responsables et à
          l’innovation digitale.
        </p>
        <a href="" className="btn btn-accent md:w-fit">
          <Mail className="w-5 h-5" />
          Contactez-moi
        </a>
      </div>

      <div className="md:ml-60">
        <img
          src={img}
          alt="mon-profil"
          className="w-full max-w-[320px] md:max-w-[420px] h-auto object-cover border-8 border-accent shadow-xl"
          style={{
            borderRadius: "57% 43% 51% 49% / 100% 0% 100% 0% ",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
