import avatar from "../../assets/avatar.svg";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="default avatar" />
      <p className="sidebar__username">Terrance Tegegne</p>
    </div>
  );
}

export default Sidebar;
