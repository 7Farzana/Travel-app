import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://tripjive.com/wp-content/uploads/2024/01/Belgium-vs-Netherlands-which-country-offers-a-better-travel-experience.jpg"
        title=""
        text="Don't be Afraid to fly in the sky for a great trip!"
        buttonText="Let's start travel"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
