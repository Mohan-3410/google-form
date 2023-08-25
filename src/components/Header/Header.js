import "./Header.css";
import { IconButton } from "@mui/material";
import formImage from "../../images/forms.png";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import avartarImage from "../../images/mohan.jpg";
import Sidebar from "../Sidebar/Sidebar";


const Header = () => {
  return (
    <div className="header">
      <div className="header_info">
        <Sidebar />
        <img
          src={formImage}
          style={{ height: "40px", marginLeft: "5px"}}
          alt="google-form-png"
        />
        <div className="info">Forms</div>
      </div>

      <div className="header_search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" name="search" placeholder="search" />
      </div>
      <div className="header_right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <Avatar src={avartarImage} />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
