import { Box, Container, Paper, Typography } from '@mui/material';
import ChurchIcon from '@mui/icons-material/Church';
import PropTypes from 'prop-types';

const AuthLayout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 3,
          }}
        >
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              backgroundColor: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2,
            }}
          >
            <ChurchIcon sx={{ fontSize: 32, color: 'white' }} />
          </Box>
          <Typography
            component="h1"
            variant="h5"
            sx={{
              mb: 1,
              fontWeight: 600,
              textAlign: 'center',
              color: 'primary.main',
            }}
          >
            Sistema de Gestión Parroquial
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mb: 3,
              textAlign: 'center',
              color: 'text.secondary',
            }}
          >
            Administración integral para tu parroquia
          </Typography>
          {children}
        </Paper>
        <Typography
          variant="body2"
          sx={{
            mt: 3,
            textAlign: 'center',
            color: 'white',
          }}
        >
          © {new Date().getFullYear()} Sistema de Gestión Parroquial
        </Typography>
      </Container>
    </Box>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
