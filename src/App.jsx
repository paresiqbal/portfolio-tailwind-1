// Icons
import {
  MoonIcon,
  UserIcon,
  ChatBubbleBottomCenterIcon,
  CommandLineIcon,
} from "@heroicons/react/24/solid";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function App() {
  return (
    <div className="min-h-screen bg-white px-10 font-poppins text-neutral-800">
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

      <main className="text-center p-10">
        <div>
          <h2 className="text-5xl py-2 text-teal-500 font-medium">
            Pahreza Iqbal Prastowo
          </h2>
          <h3 className="text-2xl py-2">Full Stack Web Developer</h3>
          <p className="text-md py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            excepturi ab consequuntur fuga sequi, debitis ad obcaecati nihil
            iste nobis.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3">
          <AiFillInstagram />
          <AiFillGithub />
          <AiFillLinkedin />
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
          <h1>
            <UserIcon />
          </h1>
        </div>
      </main>

      <section>
        <div>
          <h3 className="text-3xl py-1">Services i offer</h3>
          <p className="text-md py-2 leading-8">
            Lorem ipsum dolor sit amet
            <span className="text-cyan-500"> consectetur</span> adipisicing
            elit. Eveniet illo libero cupiditate, quaerat dicta
            <span className="text-cyan-500"> consequatur</span>.
          </p>
        </div>
        <div>
          <div>
            <ChatBubbleBottomCenterIcon width={70} />
            <h3>Consultant</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At,
              perspiciatis.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
