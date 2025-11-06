import { Drawer, List, Box, Divider, useMediaQuery, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import SidebarItem from './SidebarItem';

// Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ChurchIcon from '@mui/icons-material/Church';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EventIcon from '@mui/icons-material/Event';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import CakeIcon from '@mui/icons-material/Cake';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DescriptionIcon from '@mui/icons-material/Description';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HistoryIcon from '@mui/icons-material/History';
import BarChartIcon from '@mui/icons-material/BarChart';

const DRAWER_WIDTH = 260;

const menuItems = [
  {
    text: 'Dashboard',
    icon: <DashboardIcon />,
    path: '/',
  },
  {
    text: 'Feligreses',
    icon: <PeopleIcon />,
    children: [
      { text: 'Lista de Feligreses', icon: <PeopleIcon />, path: '/feligreses' },
      { text: 'Familias', icon: <FamilyRestroomIcon />, path: '/familias' },
    ],
  },
  {
    text: 'Sacramentos',
    icon: <ChurchIcon />,
    children: [
      { text: 'Bautismos', icon: <WaterDropIcon />, path: '/sacramentos/bautismos' },
      { text: 'Primera Comunión', icon: <CakeIcon />, path: '/sacramentos/comuniones' },
      { text: 'Confirmación', icon: <VolunteerActivismIcon />, path: '/sacramentos/confirmaciones' },
      { text: 'Matrimonios', icon: <FavoriteIcon />, path: '/sacramentos/matrimonios' },
      { text: 'Certificados', icon: <DescriptionIcon />, path: '/sacramentos/certificados' },
    ],
  },
  {
    text: 'Finanzas',
    icon: <AttachMoneyIcon />,
    children: [
      { text: 'Dashboard', icon: <AssessmentIcon />, path: '/finanzas' },
      { text: 'Ingresos', icon: <TrendingUpIcon />, path: '/finanzas/ingresos' },
      { text: 'Gastos', icon: <TrendingDownIcon />, path: '/finanzas/gastos' },
      { text: 'Reportes', icon: <AssessmentIcon />, path: '/finanzas/reportes' },
      { text: 'Cuentas', icon: <AccountBalanceIcon />, path: '/finanzas/cuentas' },
    ],
  },
  {
    text: 'Eventos',
    icon: <EventIcon />,
    children: [
      { text: 'Calendario', icon: <CalendarMonthIcon />, path: '/eventos/calendario' },
      { text: 'Horarios de Misas', icon: <MapsHomeWorkIcon />, path: '/eventos/misas' },
      { text: 'Reservas', icon: <BookOnlineIcon />, path: '/eventos/reservas' },
    ],
  },
  {
    text: 'Ministerios',
    icon: <GroupsIcon />,
    children: [
      { text: 'Ministerios', icon: <GroupsIcon />, path: '/ministerios' },
      { text: 'Catequesis', icon: <MenuBookIcon />, path: '/catequesis' },
    ],
  },
  {
    text: 'Administración',
    icon: <SettingsIcon />,
    children: [
      { text: 'Usuarios', icon: <PeopleAltIcon />, path: '/admin/usuarios' },
      { text: 'Configuración', icon: <ManageAccountsIcon />, path: '/admin/configuracion' },
      { text: 'Auditoría', icon: <HistoryIcon />, path: '/admin/auditoria' },
      { text: 'Estadísticas', icon: <BarChartIcon />, path: '/admin/estadisticas' },
    ],
  },
];

const Sidebar = ({ open, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const drawer = (
    <Box sx={{ mt: 8 }}>
      <List>
        {menuItems.map((item, index) => (
          <SidebarItem
            key={index}
            item={item}
            onClose={isMobile ? onClose : null}
          />
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Drawer para móvil (temporal) */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{
          keepMounted: true, // Mejor rendimiento en móviles
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: DRAWER_WIDTH,
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Drawer para desktop (permanente) */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
            borderRight: '1px solid rgba(0, 0, 0, 0.12)',
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
export { DRAWER_WIDTH };
