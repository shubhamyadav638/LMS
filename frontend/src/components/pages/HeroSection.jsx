import Card from "./Cards";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

import TypeCard from "./TypeCard";
import Section2 from "../Section2";
import Section3 from "../Section3";
import Section_4 from "../Section4";

const HeroSection = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <main className="lg:p-4 md:p-2">
        <section
          className="hero-section section1 w-full p-4"
         >
          <div className="flex flex-col gap-4 justify-center items-center text-white">
            <h1 className="pt-4 lg:text-4xl capitalize md:text-2xl md:font-bold lg:font-bold">
              product and services
            </h1>
            <marquee
              behavior="scroll"
              direction="up"
              className="lg:w-[800px] md:w-[600px] text-orange-100 lg:text-xl md:text-xl capitalize text-center  md:block">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
              nam, est tenetur delectus sint molestias omnis rerum ad ipsa vel
              accusantium odit amet! Iure velit tenetur voluptatum, quae
              corrupti molestias. lorem
            </marquee>
          </div>

          <div className="flex sm:flex-col sm:justify-center sm:items-center md:flex-row xs:flex-col xs:justify-center xs:items-center lg:flex-row md:justify-between gap-4 px-4 pt-4">
            <div className="box1 text-white capitalize flex flex-col gap-4 lg:items-center lg:justify-around">
              <h1 className="lg:text-4xl md:text-2xl xs:text-center md:text-start text-xl font-bold sm:text-center tracking-widest md:font-bold ">
                GROW & SHINE
              </h1>
              <TypeCard />
              <h2 className="lg:text-2xl md:text-xl">
                Win With Grow And Shine!
              </h2>
              <h3 className="lg:text-xl md:text-xl">learn coding for free</h3>

              <div className="itelic lg:text-end">
                <i>
                  Purchase Grow and Shine today! <br />
                  Buy 10 Get 6 Free is the Best Value!
                </i>
              </div>

              <div className="lg:text-center">
                Grow and Shine is a melatonin supplement used <br />
                to improve hair texture and skin. Melatonin is also known for{" "}
                <br />
                it's calming effects. <br />
                For more info on Grow and Shine visit our <br />
                products page........
              </div>

              <div className="btn btn-outline hover:bg-orange-500 cursor-pointer w-full hover:scale-[0.9] text-white hover:text-black">
                <Link
                  to="/signup"
                  className="font-bold text-lg ">
                  register here
                </Link>
              </div>
            </div>

            <div className="box2">
              <div className="img md:w-[450px] sm:w-full rounded-xl">
                <img
                  src="../teacher.png"
                  alt=""
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-2 bg-white p-2">
          <Section2 />
        </section>

        <section className="section-3">
          <Section3 />
        </section>

        <Section_4 />

        <section className="card-section mx-w-[1200px] bg-slate-950 lg:flex lg:flex-wrap lg:justify-center pt-4 gap-4 md:flex md:flex-wrap md:justify-between md:px-2 sm:flex sm:flex-wrap sm:justify-center xs:text-center xs:flex xs:flex-wrap xs:items-center xs:justify-center p-4">
          <Card />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HeroSection;
