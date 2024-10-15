import { Link } from "react-router-dom";

export default function LogoImage() {
  return (
    <Link to="/">
      <span className="text-5xl hover:cursor-pointer select-none">
        <img src="./fevicon.png" alt="" className="h-24 scale-x-150" />
      </span>
    </Link>
  );
}
