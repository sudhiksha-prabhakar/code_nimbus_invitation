import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import BrideGroom from "../components/BrideGroom";
import Wishes from "../components/Wishes";
import SendWishes from "../components/SendWishes";
import Schedule from "../components/Schedule";
import Venue from "../components/Venue";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Countdown />
      <BrideGroom />
      <Wishes />
      <SendWishes />
      <Schedule />
      <Venue />
      <Footer />
    </>
  );
}
