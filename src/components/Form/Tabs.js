import React from "react";
// import { makeStyles } from "@mui/material/styles";
import { styled } from "@mui/system"
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const useStyles = styled({
  root: {
    flexGrow: 1,
  },
  tab: {
    fontSize: 12,
    color: "#5f6368",
    textTransform: "capitalize",
    height: 10,
    fontweight: "600",
    fontFamily: "Google Sans, Roboto, Arial,sans-serif",
  },
  tabs: {
    height: 10,
  },
});
function Centeredtabs() {
    const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Tabs className={classes.tabs} textColor="primary" indicateColor="primary" centered>
        <Tab className={classes.tab} label="Questions"></Tab>
        <Tab className={classes.tab} label="Responses"></Tab>
      </Tabs>
    </Paper>
  );
}
export default Centeredtabs;
