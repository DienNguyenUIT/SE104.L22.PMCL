import {
  AppBar, Badge, IconButton, Toolbar, Typography
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoHome from "../../assets/commerce.png";
import logoHoodie from "../../assets/hoodie.png";
import logoLogin from "../../assets/login_icon.png";
import logoLogout from "../../assets/logout_icon.png";
import logoShirt from "../../assets/shirt_icon.png";
import logoSweater from "../../assets/sweater_icon.png";
import useStyles from "./styles";


const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logoHome}
              alt="Commerce.js"
              height="25 pixel"
              className={classes.image}
            />
            E-shopping
          </Typography>
          <Typography
            component={Link}
            to="/shirts"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logoShirt}
              alt="Commerce.js"
              height="25 pixel"
              className={classes.image}
            />
            T-Shirt
          </Typography>
          <Typography
            component={Link}
            to="/hoodies"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logoHoodie}
              alt="Commerce.js"
              height="25 pixel"
              className={classes.image}
            />
            Hoodie
          </Typography>

          <Typography
            component={Link}
            to="/sweaters"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logoSweater}
              alt="Commerce.js"
              height="25 pixel"
              className={classes.image}
            />
            Sweater
          </Typography>
          <Typography
            component={Link}
            to="/sign-in"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logoLogin}
              alt="Commerce.js"
              height="25 pixel"
              className={classes.image}
            />
            Sign in
          </Typography>
          <Typography
            component={Link}
            to="/sweaters"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logoLogout}
              alt="Commerce.js"
              height="25 pixel"
              className={classes.image}
            />
            Sign up
          </Typography>

          <div className={classes.grow} />
          {/* (location.pathname === "/" || location.pathname === "/hoodies") */}
          {location.pathname !== "/cart" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                ria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
