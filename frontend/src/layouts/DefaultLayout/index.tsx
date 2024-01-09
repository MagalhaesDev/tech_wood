import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

export function DefaultLayout() {
  return (
    <div className="flex ">
      <div className="w-16">
        <Header />
      </div>
      <div className="mx-10 w-full">
       <Outlet />
      </div>
    </div>
  );
}
