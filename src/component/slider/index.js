import {
  UserOutlined,
  ContactsOutlined,
  ExperimentOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import "./slider.css";
const sliderMenu = [
  {
    icon: <HomeOutlined />,
    title: "Home",
    to: "/home",
  },
  {
    icon: <UserOutlined />,
    title: "About Me",
    to: "/about",
  },
  {
    icon: <ExperimentOutlined />,
    title: "Skill",
    to: "/skill",
  },
  {
    icon: <ExperimentOutlined />,
    title: "Product",
    to: "/product",
  },
  {
    icon: <ContactsOutlined />,
    title: "Contact",
    to: "/contact",
  },
];
let activeStyle = {
  color: "red",
};
let noActiveStyle = {
  color: "#1ab394",
};
function Slider() {
  return (
    <div className="text-center text-lg font-bold sliderCss">
      {sliderMenu.map((item) => (
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
          key={item.title}
          className="flex py-3 cursor-pointer text-white"
          to={item.to}
        >
          <div className="w-[20%] icon">{item.icon}</div>
          <div className="pt-1">{item.title}</div>
        </NavLink>
      ))}
    </div>
  );
}
export default Slider;
