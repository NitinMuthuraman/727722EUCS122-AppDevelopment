import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import { Menu, User } from 'lucide-react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIcon from '@mui/icons-material/Assignment';
import '../assets/Calendar.css';

const UserHome = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  const sidebarItems = [
    { text: 'Dashboard', icon: <AssignmentIcon />, link: '/user' },
    { text: 'Calendar', icon: <CalendarTodayIcon />, link: '/user/calendar' },
    // { text: 'Staff', icon: <PeopleIcon />, link: '/user/staff' },
    // { text: 'Settings', icon: <SettingsIcon />, link: '/user/settings' },
    { text: 'Requests', icon: <AssignmentIcon />, link: '/user/requests' },
  ];

  const sideList = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {sidebarItems.map((item) => (
          <ListItem button key={item.text} component={Link} to={item.link}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="app-container">
      <AppBar position="static" sx={{ backgroundColor: '#1976d2', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 16px' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ marginRight: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            User Dashboard
          </Typography>
          <div className="ProfileContainer">
            <Button
              sx={{
                backgroundColor: 'white',
                marginLeft: 'auto',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
              onClick={toggleProfileDropdown}
            >
              <User />
            </Button>
            {profileDropdownOpen && (
              <div className="ProfileDropdown">
                <Link to="/profile" className="ProfileDropdownItem">Profile</Link>
                <Link to="/" className="ProfileDropdownItem">Log Out</Link>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {sideList()}
      </Drawer>

      <Box className="content">
        <Outlet />
      </Box>
    </div>
  );
};

export default UserHome;
