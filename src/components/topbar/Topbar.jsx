import "./topbar.scss";
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { IconContext } from "react-icons";
export default function Topbar() {
  return (
    <IconContext.Provider value={{ color: "blue", size: "4rem" }}>
      <div className="topbar">
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="icon">
              genious.
              <MdOutlinePersonOutline />
              <MdOutlineMail />
            </a>
          </div>

          <div className="right">this is right</div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
