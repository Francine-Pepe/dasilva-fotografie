import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavbarProps from "./NavbarProps";
import Hamburger from "../../Icons/Hamburger";

export default function MobileMenu(props: any) {
  const { name, link } = props;

  const theme = createTheme({
    components: {
      MuiMenuItem: {
        styleOverrides: {
          root: {
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "3rem",
            backgroundColor: "#ffffff",
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        },
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            backgroundColor: "#FFFFFF",
          },
        },
      },
    },
  });

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <div className="navbar-mobile">
            <Button
              {...bindTrigger(popupState)}
              sx={{ minWidth: 0, padding: 0 }}
            >
              <Hamburger />
            </Button>
            <ThemeProvider theme={theme}>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close} selected={true}>
                  <NavbarProps name={name} link={link} />
                </MenuItem>
              </Menu>
            </ThemeProvider>
          </div>
        </React.Fragment>
      )}
    </PopupState>
  );
}
