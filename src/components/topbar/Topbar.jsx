import "./topbar.scss";
import { MdOutlinePersonOutline, MdOutlineMail } from "react-icons/md";

import { IconContext } from "react-icons";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <IconContext.Provider value={{ color: "", size: "" }}>
          <div className="left">
            <a href="#intro" className="icon">
              genious.
            </a>
            <div className="itemContainer">
              <MdOutlinePersonOutline className="materialIcon" />
              <span>+44 924 12 74</span>
            </div>

            <div className="itemContainer">
              <MdOutlineMail className="materialIcon" />
              <span>jesica@gmail.com</span>
            </div>
          </div>

          <div className="right">
            <div className="hamberger">
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}
