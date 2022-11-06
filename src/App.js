import { Brands, Footer, Navbar } from "./components";
import { Home, Users, Features, Team, Market } from "./containers";

function App() {
  return (
    <div className="bg-[#070416] text-white text-md overflow-hidden">
      <Navbar />
      <Home />
      <Brands />
      <Users />
      <Features />
      <Team />
      <Market />
      <Footer />
    </div>
  );
}

export default App;
