import { AvatarDemo } from "./components/Avatar";
import { SearchInput } from "./components/Search";

export function Home() {
  return (
    <>
      <div className="flex items-center justify-between w-[80vw] mt-4">
        <div className="flex justify-center items-center gap-3">
          <div>
            <AvatarDemo />
          </div>
          <h1>
            Olá, <strong className="text-green-400">Mateus Magalhães</strong>
          </h1>
        </div>
        <div>
          <SearchInput />
        </div>
      </div>

      <div>
        <h1 className="text-2xl m-8">
          Perfomance Geral
        </h1>
      </div>
    </>
  );
}
