import { Link, Outlet } from "react-router-dom";
import headerLogo from "@/assets/LOGO.svg";

export const Layout = () => {
  return (
    <>
      <header className="flex w-full flex-row items-center justify-between gap-4 p-10">
        <Link to={"/"} className="w-32">
          <img src={headerLogo} className="object-contain" />
        </Link>
        <div className="flex flex-row  gap-4">
          <Link to={"/todo"}>TODO</Link>
        </div>
      </header>
      <Outlet />
    </>
  );
};
