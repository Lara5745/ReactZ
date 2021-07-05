import React from "react";
import { Link } from "react-router-dom";

import { Menu, Segment } from "semantic-ui-react";

const NavBar = ({name}) => {

  return (
    <>
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item>
            <h1>App Movies</h1>
          </Menu.Item>
          <Menu.Item position="right" as={Link} to="/" name="Movies List" active={name==="home"}/>
          <Menu.Item as={Link} to="/favs" name="Favs List" active={name==="favorites"} />
        </Menu>
      </Segment>
    </>
  );
};

export default NavBar;
