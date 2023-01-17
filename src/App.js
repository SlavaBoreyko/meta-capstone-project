import { Nav } from "./components/Nav";
import { PageContainer } from "./components/PageContainer";
import { HeroSection } from "./components/HeroSection";
import { Specials } from "./components/Specials";
import { Chicago } from "./components/Chicago";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    // <PageContainer>
    <>
      <Nav />
      <HeroSection />
      <Specials />
      <Testimonials />
      <Chicago />
    </>
    // </PageContainer>
  );
}

export default App;
