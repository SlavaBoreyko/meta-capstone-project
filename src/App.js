import { Nav } from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/*     <Route path="/booking" element={<BookingPage />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
