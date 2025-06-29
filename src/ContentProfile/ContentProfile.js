import React from "react";

import {  Outlet, NavLink } from "react-router";

export function ContentProfile() {
  const [value, setValue] = React.useState(0);

  return (
    <React.Fragment>
      {/* <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="About" icon={<SentimentSatisfiedAltIcon />} to="/"/>
          <BottomNavigationAction label="Resume" icon={<WorkHistoryIcon />} to="/resume" />
          <BottomNavigationAction label="Portfolio" icon={<WebIcon />} to="/portfolio"/>
          <BottomNavigationAction label="Contact" icon={<ContactMailIcon />} />
        </BottomNavigation>


      </Box> */}
      


    <nav>
      <NavLink to="/" end>
        About
      </NavLink>
      <NavLink to="/resume" end>
        Resume
      </NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
    </nav>
    <Outlet/>
    </React.Fragment>
  );
}
