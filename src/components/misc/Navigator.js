import React from 'react';
import { Link } from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react'
import navImage from './nav-image.jpg'

const Navigator = () => {
  const avatar = {backgroundImage: `url(${navImage})`};
  return (
    <div>
      <Menu secondary vertical>
      <Link to="/">
        <Menu.Item className="nav-bar-item" >
          <div id="nav-avatar" style={avatar}/>
        </Menu.Item>
        </Link>
        <Link to="/news">
          <Menu.Item className="nav-bar-item"
            name='News'
          />
        </Link>
        <a href="https://www.facebook.com/groups/472011266648500/events/">
          <Menu.Item className="nav-bar-item"
            name='Races'
          />
        </a>
        <Dropdown item text='About Us' className="nav-bar-item">
          <Dropdown.Menu>
            <Link to="/about/rlag">
              <Dropdown.Item>RLAG</Dropdown.Item>
            </Link>
            <Link to="/about/elle">
              <Dropdown.Item>Elle</Dropdown.Item>
            </Link>
            <Link to="/about/amy">
              <Dropdown.Item>Amy</Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
        <Link to="/sponsors">
          <Menu.Item className="nav-bar-item"
            name='sponsors'
          />
        </Link>
        <Link to="/kit-shop">
          <Menu.Item className="nav-bar-item"
            name='Kit Shop'
          />
        </Link>
      </Menu>
    </div>
  )
};

export default Navigator;