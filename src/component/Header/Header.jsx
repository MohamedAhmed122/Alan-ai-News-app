import React, { Fragment } from "react";
import { AppBar, Toolbar, Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import MenuBookIcon from "@material-ui/icons/MenuBook";

const Header = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Tabs className={classes.tab}>
            <MenuBookIcon style={{ marginTop: "0.3rem" }} fontSize="large" />
            <Tab
              style={{ fontSize: "1.3rem" }}
              label="News paper reader"
              component={Link}
              to="/"
            />
          </Tabs>
        </Toolbar>
      </AppBar>
      <div className={classes.ToolbarMargin} />
    </Fragment>
  );
};
export default Header;
