// Icons
import { MoonIcon } from "@heroicons/react/24/solid";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function App() {
  return (
    <div className="min-h-screen bg-white px-10 font-poppins">
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-semibold font-roboto">PahrezaIqbal</h1>
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

      <main>
        <div>
          <h2>Pahreza Iqbal Prastowo</h2>
          <h3>Full Stack Web Developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            excepturi ab consequuntur fuga sequi, debitis ad obcaecati nihil
            iste nobis.
          </p>
        </div>
        <div>
          <AiFillInstagram />
          <AiFillGithub />
          <AiFillLinkedin />
        </div>
      </main>
    </div>
  );
}

export default App;
