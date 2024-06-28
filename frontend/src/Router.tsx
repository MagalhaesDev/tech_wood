import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { HelpDesk } from "./pages/HelpDesk";
import { Graphics } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HelpDesk />} />
        <Route path="/graficos" element={<Graphics />} />
      </Route>
    </Routes>
  );
}
