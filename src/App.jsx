// Icons
import { MoonIcon } from "@heroicons/react/24/solid";

function App() {
  return (
    <div className="min-h-screen bg-white px-10">
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-semibold">PahrezaIqbal</h1>
        <ul className="flex items-center">
          <li>
            <MoonIcon width={24} height={24} className="cursor-pointer" />
          </li>
          <li>
            <a
              href="#"
              className="bg-gradient-to-t from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
