import { AppBar, Toolbar } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import Logo from './Logo';

const MainNavbar = (props) => (
  <AppBar
    elevation={0}
    {...props}
  >
    <Toolbar sx={{ height: 64 }}>
      <RouterLink to="/dashboard">
        <Logo />
      </RouterLink>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;
