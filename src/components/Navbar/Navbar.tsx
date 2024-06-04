// CORE
import { Link } from 'react-router-dom';
import React from 'react';

// UI
import { Menu, MenuProps } from 'antd';
import { MenuInfo } from 'rc-menu/es/interface';

const Navbar: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = React.useState<string[]>(["home"]);
    
  const handleMenuClick = (e: MenuInfo) => {
      setSelectedKeys([e.key]);
  };

  type MenuItem = Required<MenuProps>['items'][number];
      
  const items: MenuItem[] = [
    {
      key: 'home',
        label: (
          <Link to="/">Home</Link>
        ),
      },
      {
        key: 'settings',
        label: (
          <Link to="/settings">Settings</Link>
        ),
      },
    ];

  return (
    // TODO: Fix bug with highlighting wrong menu option after refreshing. Consider using Enums.
    <Menu onClick={handleMenuClick} theme="dark" mode="horizontal" selectedKeys={selectedKeys} items={items}/>
  );
};

export default Navbar;

