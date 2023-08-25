import React from "react";
import form_image from "../../images/forms.png";
import { FiStar, FiSettings } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { IconButton } from "@mui/material";
import avatarimage from "../../images/mohan.jpg";
import { IoMdFolderOpen } from "react-icons/io";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import "./Formheader.css";
import { useStateValue } from "../store/StateProvider";
import { useNavigate } from "react-router-dom";

const Formheader = () => {
  const navigate = useNavigate();
  const [{doc_name}, dispatch] = useStateValue();
  function navigates(){
    navigate("/response")
  }
  return (
    <div className="form_header">
      <div className="form header left">
        <img src={form_image} style={{ height: "45px", width: "40px" }} alt="form"/>
        <input
          type="text"
          placeholder="Untitled form"
          className="form_name"
          value={doc_name}
        ></input>
        <IoMdFolderOpen
          className="form_header_icon"
          style={{ marginRight: "10px" }}
        ></IoMdFolderOpen>
        <FiStar className="form_header_icon" style={{ marginRight: "10px" }} />
        <span style={{ fontsize: "12px", fontweight: "600" }}>
          All changes saved in Drive
        </span>
      </div>
      <div className="form_header_right">
        <IconButton>
          <ColorLensIcon fontSize="small" className="form_header_icon" />
        </IconButton>
        <IconButton onClick={navigates}>
          <AiOutlineEye className="form_header_icon" />
        </IconButton>
        <IconButton>
          <FiSettings className="form_header_icon" />
        </IconButton>
        <Button variant="contained" color="primary" href="#contained-buttons">Send</Button>
        <IconButton>
          <MoreVertIcon className="form_header_icon" />
        </IconButton>
        <IconButton>
          <Avatar style={{ height: "30px", width: "30px" }} src={avatarimage} />
        </IconButton>
      </div>
    </div>
  );
};

export default Formheader;
