import { Container } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-center md:justify-between items-center p-4">
      <a
        href="#"
        className="flex items-center font-bold text-3xl md:text-xl gap-2"
      >
        <Container className="mr-2" />
        OLY OTINEL <span className="text-accent">KLA</span>
      </a>
      <ul className="hidden md:flex space-x-4">
        <li>
          <a href="#" className="btn btn-sm btn-ghost">
            acceuil
          </a>
        </li>
        <li>
          <a href="#" className="btn btn-sm btn-ghost">
            A propos
          </a>
        </li>
        <li>
          <a href="#" className="btn btn-sm btn-ghost">
            Mes experiences
          </a>
        </li>
        <li>
          <a href="#" className="btn btn-sm btn-ghost">
            Mes projets
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
