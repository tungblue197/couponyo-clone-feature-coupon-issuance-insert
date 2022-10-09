import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from 'next/image';
import Copyright from '@base/Copyright';
import Loading from '../../Loading';
import { theme } from '@styles/theme';
import { AppBar, Drawer, DrawerHeader, Contanier } from './Styled';
import MainMenuList from '@base/menu';
import { useUiState } from '@hooks/useUiState';

export default function BaseLayout({ children }: WithChildren): JSX.Element {
  const { openMainDrawer, setOpenMainDrawer } = useUiState();
  const [isLoading, setLoading] = useState(true);

  const handleDrawerOpen = () => {
    setOpenMainDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenMainDrawer(false);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={openMainDrawer} color="secondary">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(openMainDrawer && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Admin
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={openMainDrawer}>
          <DrawerHeader>
            <Image src="/images/pr_logo1.png" width={77} height={29} alt="요기요" />
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List dense>
            <MainMenuList />
          </List>
          <Divider />
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: '100vh',
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
          }}
        >
          <DrawerHeader />
          <Contanier maxWidth={false} showDrawer={true}>
            {isLoading ? (
              <Loading />
            ) :(
              children
            )}
            <Box pt={2}>
              <Copyright />
            </Box>
          </Contanier>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
