import { useLocation, Link } from "react-router-dom";
import ButtonRedict from "./ButtonRedict";

function NavBar() {
  const location = useLocation();

  return (
    <nav className="bg-transparent p-5 text-white flex gap-7 items-center justify-center ">
      <Link
        to="/"
        className="text-4xl font-extrabold relative before:absolute
          before:-bottom-1 before:left-1/2 before:-translate-x-1/2  before:content-[''] before:w-0 before:h-0.5 before:rounded-md before:bg-blue-500 hover:before:w-full before:transition-all before:duration-300"
      >
        Gestion de Buses
      </Link>
      {location.pathname === "/" && (
        <ButtonRedict name="Crear" path="/formulario" color="blue" />
      )}
    </nav>
  );
}

export default NavBar;
