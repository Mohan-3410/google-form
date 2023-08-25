import React from "react";
import "./Sidebar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
// import { makeStyles } from "@mui/material";
// import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system"
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListItemText } from "@mui/material";
import { Divider } from "@mui/material";
import forms from "../../images/forms.png";
import docs from "../../images/docs.png";
import sheets from "../../images/sheets.png";
import drives from "../../images/drive.png";
import slides from "../../images/slides.png";
import { FiSettings } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";

const useStyle = styled({
  listItem: {
    marginLeft: "20px",
    fontSize: "14px",
    fontWeight: "500",
    color: "grey",
  },
  slideImages: {
    height: "20px",
    width: "20px",
  },
});

const Sidebar = () => {
  const classes = useStyle();
  const [state, setState] = React.useState({ left: false });
  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div style={{ width: "250px" }} role="presentation">
      <Divider />
      <List>
        <ListItem>
          <ListItemText style={{ fontSize: "48px", marginLeft: "5px" }}>
            <span
              style={{
                color: "blue",
                fontWeight: "700",
                fontSize: "22px",
                fontFamily: "Product Sans', Arial, sans-serif",
              }}
            >
              G
            </span>
            <span
              style={{
                color: "red",
                fontweight: "500",
                fontSize: "22px",
                fontFamily: "Product Sans', Arial, sans-serif",
              }}
            >
              o
            </span>
            <span
              style={{
                color: "yellow",
                fontweight: "500",
                fontSize: "22px",
                fontFamily: "Product Sans', Arial, sans-serif",
              }}
            >
              o
            </span>
            <span
              style={{
                color: "blue",
                fontweight: "500",
                fontSize: "22px",
                fontFamily: "Product Sans', Arial, sans-serif",
              }}
            >
              g
            </span>
            <span
              style={{
                color: "green",
                fontweight: "500",
                fontSize: "22px",
                fontFamily: "Product Sans', Arial, sans-serif",
              }}
            >
              l
            </span>
            <span
              style={{
                color: "red",
                fontweight: "500",
                fontSize: "22px",
                marginRight: "10px",
                fontFamily: "Product Sans', Arial, sans-serif",
              }}
            >
              e
            </span>
            <span
              style={{
                color: "#5f6368",
                fontweight: "500",
                fontSize: "22px",
                fontFamily: "Product Sans', Arial, sans-serif",
              }}
            >
              {" "}
              Docs
            </span>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List
        style={{ marginLeft: "08px", marginRight: "8px", marginTop: "15px" }}
      >
        <ListItem className="list_item">
          <img src={docs} className={classes.slideImages} alt="docs" />
          <div className={classes.listItem}> Docs </div>
        </ListItem>
        <ListItem className="list_item">
          <img src={sheets} className={classes.slideImages} alt="sheets" />
          <div className={classes.listItem}> Sheets </div>
        </ListItem>
        <ListItem className="list_item">
          <img src={slides} className={classes.slideImages} alt="slides" />
          <div className={classes.listItem}> Slides </div>
        </ListItem>
        <ListItem className="list_item">
          <img src={forms} className={classes.slideImages} alt="forms" />
          <div className={classes.listItem}> Forms </div>
        </ListItem>
      </List>
      <Divider />
      <List
        style={{ marginLeft: "08px", marginRight: "08px", marginTop: "15px" }}
      >
        <ListItem className="list_item">
          <FiSettings />
          <div style={{ marginLeft: "20px", fontSize: "14px" }}> Settings </div>
        </ListItem>
        <ListItem className="list_item">
          <BsQuestionCircle />
          <div
            style={{
              marginLeft: "20px",
              fontSize: "14px",
              fontWeight: "500",
              color: "grey",
            }}
          >
            {" "}
            Help & Feedback{" "}
          </div>
        </ListItem>
      </List>
      <Divider />
      <List
        style={{ marginLeft: "08px", marginRight: "08px", marginTop: "15px" }}
      >
        <ListItem className="list_item">
          <img src={drives} style={{ height: "20px", width: "20px" }} alt="drives"/>
          <div style={{ marginLeft: "20px", fontSize: "14px" }}> Drive</div>
        </ListItem>{" "}
      </List>
      <Divider />
    </div>
  );
  return (
    <div>
      <IconButton onClick={toggleDrawer("left", true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        open={state.left}
        onClose={toggleDrawer("left", false)}
        anchor={"left"}
      >
        {list("left")}
      </Drawer>
    </div>
  );
};

export default Sidebar;
