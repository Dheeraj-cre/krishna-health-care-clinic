import Hero from "../components/Hero";
import ServicesPreview from "../components/ServicesPreview";
import WhyChooseUs from "../components/WhyChooseUs";
import AppointmentForm from "../components/AppointmentForm";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      {/* Home Page Sections */}
      <Hero />                 {/* Top section */}
      <ServicesPreview />      {/* Services */}
      <WhyChooseUs />          {/* Why choose us */}
      <AppointmentForm />      {/* Book appointment */}
      <Contact />              {/* Contact info */}
      <Footer />               {/* Footer */}
    </>
  );
}

export default Home;
