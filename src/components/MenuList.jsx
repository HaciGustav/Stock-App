import React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InventoryIcon from '@mui/icons-material/Inventory';
import StoreIcon from '@mui/icons-material/Store';
import StarsIcon from '@mui/icons-material/Stars';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const MenuList = () => {
    const icons = [
        {
            icon: <DashboardIcon />,
            title: 'Dashboard',
            url: '/stock/',
        },
        {
            icon: <ShoppingCartIcon />,
            title: 'Purchases',
            url: '/purchases/',
        },
        {
            icon: <AttachMoneyIcon />,
            title: 'Sales',
            url: '/sales/',
        },
        {
            icon: <StoreIcon />,
            title: 'Firms',
            url: '/firms/',
        },
        {
            icon: <StarsIcon />,
            title: 'Brands',
            url: '/brands/',
        },
        {
            icon: <InventoryIcon />,
            title: 'Products',
            url: '/products/',
        },
        {
            icon: <SupervisorAccountIcon />,
            title: 'Admin Panel',
            url: 'https://14154.fullstack.clarusway.com/admin',
        },
    ];

    return (
        <List>
            {icons.map((item) => (
                <ListItem key={item.url} disablePadding>
                    {item.url.includes('https') && (
                        <ListItemButton to={item.url}>
                            <ListItemIcon>{item.icon} </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    )}
                    {!item.url.includes('https') && (
                        <ListItemButton to={item.url}>
                            <ListItemIcon>{item.icon} </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    )}
                </ListItem>
            ))}
        </List>
    );
};

export default MenuList;
