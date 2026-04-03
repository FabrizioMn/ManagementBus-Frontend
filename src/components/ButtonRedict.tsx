import { Link } from "react-router-dom";

type ButtonRedictProps = {
  name: string;
  path: string;
  color: "blue" | "red" | "green";
};

function ButtonRedict({ name, path, color }: ButtonRedictProps) {
  const colorVariants = {
    blue: "bg-blue-500 hover:bg-blue-600",
    red: "bg-red-500 hover:bg-red-600",
    green: "bg-green-500 hover:bg-green-600",
  };

  return (
    <Link
      to={path}
      className={`${colorVariants[color]} hover:scale-105 active:scale-95 px-5 py-2 text-lg text-white font-semibold rounded-lg inline-block transition-all`}
    >
      {name}
    </Link>
  );
}

export default ButtonRedict;
