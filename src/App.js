import { Nav } from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { BookingPage } from "./pages/BookingPage";
import { ConfirmedPage } from "./pages/ConfirmedPage";
// import useExternalScripts from "./hooks/useExternalScripts";
// import { Helmet } from "react-helmet";
import Safe from "react-safe";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <>
      {/* <Helmet>
        <script
          src="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"
          type="text/javascript"
        />
      </Helmet> */}
      <Safe.script src="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"></Safe.script>
      {/* <Safe.script>
        {`try{Typekit.load({ async: true });}catch(e){}`}
      </Safe.script> */}
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmed-booking" element={<ConfirmedPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
