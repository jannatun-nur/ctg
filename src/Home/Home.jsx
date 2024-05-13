
import Footer from "../Footer/Footer";
import Service from "../Service/Service";

import Weather from "../weather/Weather";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
  
        <Weather/>
        <Banner/>
        <Service/>
      
      <Footer />
    </div>
  );
};

export default Home;
