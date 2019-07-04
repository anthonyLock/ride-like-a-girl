import React from 'react';
import { Link } from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react'

const Navigator = () => (
    <div>
        {/* <div>Hello World Navigator</div>
        <Link to="/blog/hello-welcome-to-test-1">About</Link> */}
    <Menu secondary vertical>
        <Menu.Item
          name='account'
          active={true}
        />
        <Menu.Item
          name='settings'
          active={false}
        />
        <Dropdown item text='Display Options'>
          <Dropdown.Menu>
            <Dropdown.Header>Text Size</Dropdown.Header>
            <Dropdown.Item>Small</Dropdown.Item>
            <Dropdown.Item>Medium</Dropdown.Item>
            <Dropdown.Item>Large</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    </div>
);

export default Navigator;