import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <div className="mx-16">
        <Outlet />
      </div>
    </>
  );
}
