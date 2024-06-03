// CORE
import { Link } from 'react-router-dom';
import React from 'react';

// UI
import { Menu, MenuProps } from 'antd';

const MainNav: React.FC = () => {
    const [selectedKeys, setSelectedKeys] = React.useState<string[]>(["home"]);
    
    const handleMenuClick = (e: any) => { // TODO: find proper type from andt but it shouldn't be "any" here.
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

export default MainNav;

