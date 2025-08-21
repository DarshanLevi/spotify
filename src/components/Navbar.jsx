import "./Navbar.css";
import { FaSpotify, FaRegArrowAltCircleDown } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { LuBoomBox } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { HiOutlineUserGroup, HiOutlineBell  } from "react-icons/hi";
import { TbCircleLetterMFilled } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="nav-btn2">
        <FaSpotify className="logo" />
        </button>
      </div>

      <div className="home-search">
        <button className="nav-btn">
          <GoHomeFill />
        </button>

        <div className="navbar-center">
          <div className="icon-search">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="What do you want to play?"
            className="search-input"
          />
          </div>
          <div className="divide-box">
          <div className="divider"></div>
          <LuBoomBox className="boom-box" />
          </div>
        </div>
      </div>

      <div className="navbar-right">
        <div className="joiner">
        <div className="nav-texts">Explore Premium</div>

        <div className="down-install">
        <FaRegArrowAltCircleDown className="download-icon"/>
        <div className="nav-texts1">Install App</div>
        </div>
        </div>
       
       <div className="joiner1">
        <button className="nav-icon">
          <HiOutlineBell />
        </button>
        <button className="nav-icon">
          <HiOutlineUserGroup />
        </button>
        <button className="nav-btn1">
          <TbCircleLetterMFilled className="m-icon"/>
        </button>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
