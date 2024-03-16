// "use client";
// import Image from "next/image";
import img from "../assets/react.svg";
export const AboutMe = () => {
  return (
    <>
      <div className="flex mt-20 justify-evenly items-center">
        <div className="">
          <img src={img} alt="" />
        </div>
        <div className="">
          <h2>Heding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui culpa, architecto fugit quos omnis unde, veniam, quibusdam nostrum
            exercitationem vel est eligendi! Excepturi vitae magnam ut esse atque tempora reiciendis.
          </p>
        </div>
      </div>
    </>
  );
};
