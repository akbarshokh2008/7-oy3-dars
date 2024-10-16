import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
// Pages
const Home = lazy(() => import("./assets/pages/Home"));
const About = lazy(() => import("./assets/pages/About"));
const Contact = lazy(() => import("./assets/pages/Contact"));

import { BarLoader } from "react-spinners";
function App() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="fixed top-[45%] left-[45%]">
            <BarLoader
              color="#00ebff"
              cssOverride={{}}
              height={8}
              speedMultiplier={1}
              width={300}
            />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
