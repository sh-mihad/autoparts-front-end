import { Link } from "react-router-dom";

const SideMenubar = () => {
  return (
    <div className="text-white m-3">
      <li className="hover:bg-white hover:text-rose-500 border-b list-none p-2 hover:rounded-md duration-300">
        <Link className="px-4" to="/">
          Home
        </Link>
      </li>

      <li className="hover:bg-white hover:text-rose-500 border-b list-none p-2 hover:rounded-md duration-300">
        <Link className="px-4" to="/about">
          Login
        </Link>
      </li>
      <li className="hover:bg-white hover:text-rose-500 border-b list-none p-2 hover:rounded-md duration-300">
        <Link className="px-4" to="">
          Google Map
        </Link>
      </li>
      <li className="hover:bg-white hover:text-rose-500 border-b list-none p-2 hover:rounded-md duration-300">
        <Link className="px-4" to="">
          Home
        </Link>
      </li>
    </div>
  );
};

export default SideMenubar;
