import { useEffect, useState } from "react";
import Card from "./Cards";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  return (
    <>
      <Navbar />
      <br />
      <br /> <br />
      <div className="bg-slate-600 flex  lg:flex-row lg:justify-between lg:items-start md:flex-row md:justify-center md:items-start sm:flex-col  sm:justify-center sm:items-center xs:items-center xs:flex-col gap-4 container w-full  mx-auto">
        <div className="box1 bg-red-50">
          <Profile />
        </div>

        <div className="box2 flex w-full ">
          <div className="cards flex justify-around  flex-wrap gap-4  w-full">
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
