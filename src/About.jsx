import img from "./assets/react.svg";
export default function About() {
  return (
    <>
      <div className="flex flex-row items-center justify-evenly ">
        <div className="flex flex-col w-1/4">
          <h1 className="text-3xl	font-sans font-bold">
            Forented React <br />
            Developer
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem id dignissimos, distinctio atque explicabo corporis non debitis
            repudiandae nemo, dolorum officia eum nesciunt hic consectetur, dicta quibusdam? Doloribus, aperiam. Repudiandae.
          </p>
          <a href="https://github.com/mdaktarhossen">
            <img src={img} alt="" />
          </a>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className="mr-48">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="mt-10 flex space-x-7 ml-44">
        <p>Teack stack | </p>
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
      </div>
    </>
  );
}
