import { FC } from "react";
import {Mode}  from '../constant';
import { useDispatch } from "react-redux";

interface Props {
  darkThemeEnabled: boolean,
  slowTime: string,
  getNewTime: any,
}


const Navbar: FC<Props> = ({ darkThemeEnabled, slowTime, getNewTime }) => {
  const dispatch = useDispatch();

  return (
    <>
      <nav
        style={{
          background: darkThemeEnabled ? "#1f1f1f" : "transparent",
          borderColor: darkThemeEnabled ? "#333" : "#ccc",
          color: darkThemeEnabled ? "#fff" : "#000",
        }}
      >
        <div
          className="logo"
          style={{
            fontVariationSettings: darkThemeEnabled
              ? '"wght" 450'
              : '"wght" 550',
          }}
        >
          <i className="uil uil-desert"></i>&nbsp;Charts
        </div>
        <div className="nav_rt nav_rt1">
          <div
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={getNewTime}
          >
            <i className="uil uil-refresh" style={{ fontSize: "17px" }}></i>
          </div>

          {slowTime}
        </div>
        <div
          className="nav_rt nav_rt2"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (!darkThemeEnabled) {
              dispatch({ type: Mode.DARK })
            } else {
              dispatch({ type: Mode.LIGHT })
            }
          }}
        >
          Change Theme
          <i className={darkThemeEnabled ? "uil uil-sun" : "uil uil-moon"}></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
