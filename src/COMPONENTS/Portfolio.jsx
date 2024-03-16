import linkedin from "../assets/1 linkedin.webp";
import github from "../assets/2 github.webp";
import profile from "../assets/akter.png";
import react from "../assets/react.svg";
import todo from "../assets/todo1.jpg";
import { NavbarComponent } from "./NavBar";

export default function Portfolio() {
  return (
    <>
      <NavbarComponent />
      {/* ---------- */}
      <div>
        <div className="w-2/3 m-auto ">
          {/* hero section */}
          <section className="flex items-center space-x-20">
            <div className="w-1/2">
              <div>
                <h1 className="text-3xl font-bold ">
                  Fron-Ent React <br /> Developer
                </h1>
                <p className="text-gray-700 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ab sed blanditiis consequatur, tempora ex! Consectetur, nihil
                  odio exercitationem quis quia similique nam! Recusandae aliquam voluptatum tenetur nobis corrupti optio?
                </p>
              </div>
              <div className="space-x-2 mt-3 flex items-center ">
                <a href="https://www.linkedin.com/in/md-akter-hosen-345464215/">
                  <img className="size-7" src={linkedin} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/md-akter-hosen-345464215/">
                  <img className="size-6" src={github} />
                </a>
              </div>
            </div>
            <div>
              <img className="rounded-full" src={profile} alt="" />
            </div>
          </section>
          {/* Teach section */}
          <section className="mt-20 flex space-x-4">
            <h3>Teach Stack |</h3>
            <img src={react} alt="" />
            <img src={react} alt="" />
            <img src={react} alt="" />
            <img src={react} alt="" />
          </section>
          {/* About section */}
          <section className="flex mt-20 space-x-12 justify-between">
            <div>
              <img className="h-full  w-fit" src={profile} alt="" />
            </div>
            <div>
              <h2 className="text-purple-900 font-bold">ABOUT ME</h2>
              <h1 className="font-bold font-sans text-2xl ">A Dadicated Fronted web developer</h1>
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, pariatur nobis amet sunt repellat totam delectus doloremque iure
                tempore voluptas magnam officia eaque, adipisci, consequuntur doloribus commodi repudiandae. Eaque, mollitia!
              </p>
            </div>
          </section>
          {/* project section */}
          <section className="mt-28">
            <h1 className="text-yellow-500 font-bold">PORTFOLIO</h1>
            <h2 className="font-italic text-2xl">Eash Portfoli is unique</h2>
            <div className="mt-5 w-5/6 m-auto flex space-x-10">
              <div className="w-2/">
                <img className="h-full w-full" src={todo} alt="" />
              </div>
              <div className="text-center ">
                <h1 className="font-bold">CAR RANTEL</h1>
                <p className=" mt-5 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquid saepe dignissimos laborum culpa autem expedita numquam earum
                  quam dolores, mollitia dolorum non illo, harum odit nesciunt eaque officiis reiciendis.
                </p>
                <div className="space-x-4 mt-5">
                  <span>React</span>
                  <span>Sass</span>
                </div>
                <div className="flex space-x-16 justify-center mt-5">
                  <div className="flex space-x-3 rounded">
                    <a href="https://github.com/mdaktarhossen/lws-Reactjs-project-2-Tasker" target="_blank">
                      Code
                    </a>
                    <img className="size-6 rounded-full" src={github} alt="" />
                  </div>
                  <div className="flex space-x-3">
                    <a href="https://github.com/mdaktarhossen/lws-Reactjs-project-2-Tasker" target="_blank">
                      Code
                    </a>
                    <img className="size-6 rounded-full" src={github} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
