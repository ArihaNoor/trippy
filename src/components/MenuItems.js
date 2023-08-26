import React from '@mui/icons-material';
import { Home, PermContactCalendar, SupportAgent, Lightbulb } from '@mui/icons-material';

export const MenuItems = [
    {
        title: 'Home',
        url: '/',
        icon: <Home />,
    },
    {
        title: 'About',
        url: '/about',
        icon: <Lightbulb />,
    },
    {
        title: 'Service',
        url: '/service',
        icon: <SupportAgent />,
    },
    {
        title: 'Contact',
        url: '/contact',
        icon: <PermContactCalendar />,
    },
];
