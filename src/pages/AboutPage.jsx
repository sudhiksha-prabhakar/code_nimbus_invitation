import OurStory from "../components/OurStory";
import MeetFamilies from "../components/MeetFamilies";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="page-spacer" />
      <OurStory />
      <MeetFamilies />
      <Footer />
    </div>
  );
}
