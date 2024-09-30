import React from "react";
import AnimateCard from "./AnimateCard";

function Section2() {
  return (
    <div className="w-full bg-slate-950 p-4 flex md:flex-row flex-col gap-4 justify-around">
      <div className="box1 w-full flex flex-col gap-10">
        <h1 className="md:text-2xl text-white capitalize font-bold font-mono">
          Unlock Your{" "}
          <span
            style={{
              background: "linear-gradient(90deg, red, green, orange)",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
            coding potential
          </span>{" "}
          with <br />
          our online courses
        </h1>
        <p className=" text-ellipsis text-pretty capitalize">
          Our courses are designed and taught by industry experts who have years
          of experience in coding and are passionate about sharing their
          knowledge with you.
        </p>

        <div className="btns flex mt-10 w-96 justify-around">
          <button className="btn btn-warning capitalize hover:scale-90">
            try yourSelf
          </button>
          <button className="btn btn-info capitalize hover:scale-90">
            Learn More
          </button>
        </div>
      </div>
      <div className="box2 w-full border rounded-lg border-white">
       <AnimateCard />
      </div>
    </div>
  );
}

export default Section2;
