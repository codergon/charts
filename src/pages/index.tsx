import { RootStateOrAny, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "./homepage";

import {getTimeSlowly} from "../utils/getTimeSlowly";

import { useMemo, useState } from "react";
const Index = () => {
  const darkThemeEnabled = useSelector(
    (state:RootStateOrAny) => state.preferences.darkThemeEnabled
  );

  const [num, setNum] = useState(1);
  const slowTime = useMemo(() => getTimeSlowly(num), [num]);
  // Changing the Theme from the navbar component
  // does not cause getTimeSlowly to be recalculated i.e It is Memoized

  const getNewTime = () => setNum((prev) => prev + 1);

  return (
    <div
      className="container"
      style={{
        background: darkThemeEnabled ? "#111" : "transparent",
        color: darkThemeEnabled ? "#f1f1f1" : "#000",
        fontSize: darkThemeEnabled ? "14px" : "16px",
        fontVariationSettings: darkThemeEnabled ? '"wght" 400' : '"wght" 500',
      }}
    >
      <Navbar
        darkThemeEnabled={darkThemeEnabled}
        slowTime={slowTime}
        getNewTime={getNewTime}
      />

      <div style={{ minHeight: "100vh", width: "100vw" }}>
        <div className="pg_head">Charts Top Ten</div>
        <Home darkThemeEnabled={darkThemeEnabled} />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
