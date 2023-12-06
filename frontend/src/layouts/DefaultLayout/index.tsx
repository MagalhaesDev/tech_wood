import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

export function DefaultLayout() {
  return (
    <div className="flex ">
      <Header />
      <div className="mx-10">
       <Outlet />
      </div>
    </div>
  );
}
