import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import SocialMedia from "./components/SocialMedia";
import Testomonial from "./components/Testomonial";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = '65b3a22c01d900e96c4219ae';
        const response = await axios.get(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userId}`);
        console.log(response.data.user);
        setUserData(response.data.user);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <div className="flex items-center justify-center mt-40"><img class="w-20 h-20 animate-spin" src="https://www.svgrepo.com/show/70469/loading.svg" alt="Loading icon"></img></div>;
  }
  return (
    <div className="">
      <Navbar />
      <Hero userData={userData}/>
      <Services userData={userData}/> 
      <Projects userData={userData}/> 
      <Skills userData={userData}/>
      <Testomonial userData={userData}/> 
      <SocialMedia userData={userData}/> 
    </div>
  );
}

export default App;
