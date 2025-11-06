import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// Layouts
import MainLayout from '../components/layout/MainLayout';
import AuthLayout from '../components/layout/AuthLayout';

// Lazy loading de páginas para optimizar el rendimiento
// Auth
const LoginPage = lazy(() => import('../features/auth/pages/LoginPage'));
const ForgotPasswordPage = lazy(() => import('../features/auth/pages/ForgotPasswordPage'));

// Dashboard
const DashboardPage = lazy(() => import('../features/dashboard/pages/DashboardPage'));

// Feligreses
const FeligresesPage = lazy(() => import('../features/feligreses/pages/FeligresesPage'));
const FeligresDetailPage = lazy(() => import('../features/feligreses/pages/FeligresDetailPage'));
const NewFeligresPage = lazy(() => import('../features/feligreses/pages/NewFeligresPage'));
const EditFeligresPage = lazy(() => import('../features/feligreses/pages/EditFeligresPage'));
const FamiliasPage = lazy(() => import('../features/feligreses/pages/FamiliasPage'));

// Sacramentos
const BautismosPage = lazy(() => import('../features/sacramentos/pages/BautismosPage'));
const ComunionesPage = lazy(() => import('../features/sacramentos/pages/ComunionesPage'));
const ConfirmacionesPage = lazy(() => import('../features/sacramentos/pages/ConfirmacionesPage'));
const MatrimoniosPage = lazy(() => import('../features/sacramentos/pages/MatrimoniosPage'));
const CertificadosPage = lazy(() => import('../features/sacramentos/pages/CertificadosPage'));

// Finanzas
const FinanzasDashboard = lazy(() => import('../features/finanzas/pages/FinanzasDashboard'));
const IngresosPage = lazy(() => import('../features/finanzas/pages/IngresosPage'));
const GastosPage = lazy(() => import('../features/finanzas/pages/GastosPage'));
const ReportesPage = lazy(() => import('../features/finanzas/pages/ReportesPage'));
const CuentasPage = lazy(() => import('../features/finanzas/pages/CuentasPage'));

// Eventos
const CalendarioPage = lazy(() => import('../features/eventos/pages/CalendarioPage'));
const MisasPage = lazy(() => import('../features/eventos/pages/MisasPage'));
const ReservasPage = lazy(() => import('../features/eventos/pages/ReservasPage'));

// Ministerios
const MinisteriosPage = lazy(() => import('../features/ministerios/pages/MinisteriosPage'));
const MinisterioDetailPage = lazy(() =>
  import('../features/ministerios/pages/MinisterioDetailPage')
);
const CatequesisPage = lazy(() => import('../features/ministerios/pages/CatequesisPage'));

// Admin
const UsuariosPage = lazy(() => import('../features/admin/pages/UsuariosPage'));
const ConfiguracionPage = lazy(() => import('../features/admin/pages/ConfiguracionPage'));
const AuditoriaPage = lazy(() => import('../features/admin/pages/AuditoriaPage'));
const EstadisticasPage = lazy(() => import('../features/admin/pages/EstadisticasPage'));

// Loading component
const PageLoader = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '60vh',
    }}
  >
    <CircularProgress />
  </Box>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Rutas públicas */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <AuthLayout>
                <LoginPage />
              </AuthLayout>
            </PublicRoute>
          }
        />
        <Route
          path="/recuperar-password"
          element={
            <PublicRoute>
              <AuthLayout>
                <ForgotPasswordPage />
              </AuthLayout>
            </PublicRoute>
          }
        />

        {/* Rutas privadas */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <MainLayout />
            </PrivateRoute>
          }
        >
          {/* Dashboard */}
          <Route index element={<DashboardPage />} />

          {/* Feligreses */}
          <Route path="feligreses">
            <Route index element={<FeligresesPage />} />
            <Route path="nuevo" element={<NewFeligresPage />} />
            <Route path=":id" element={<FeligresDetailPage />} />
            <Route path=":id/editar" element={<EditFeligresPage />} />
          </Route>
          <Route path="familias" element={<FamiliasPage />} />

          {/* Sacramentos */}
          <Route path="sacramentos">
            <Route path="bautismos" element={<BautismosPage />} />
            <Route path="comuniones" element={<ComunionesPage />} />
            <Route path="confirmaciones" element={<ConfirmacionesPage />} />
            <Route path="matrimonios" element={<MatrimoniosPage />} />
            <Route path="certificados" element={<CertificadosPage />} />
          </Route>

          {/* Finanzas */}
          <Route path="finanzas">
            <Route index element={<FinanzasDashboard />} />
            <Route path="ingresos" element={<IngresosPage />} />
            <Route path="gastos" element={<GastosPage />} />
            <Route path="reportes" element={<ReportesPage />} />
            <Route path="cuentas" element={<CuentasPage />} />
          </Route>

          {/* Eventos */}
          <Route path="eventos">
            <Route path="calendario" element={<CalendarioPage />} />
            <Route path="misas" element={<MisasPage />} />
            <Route path="reservas" element={<ReservasPage />} />
          </Route>

          {/* Ministerios */}
          <Route path="ministerios">
            <Route index element={<MinisteriosPage />} />
            <Route path=":id" element={<MinisterioDetailPage />} />
          </Route>
          <Route path="catequesis" element={<CatequesisPage />} />

          {/* Administración */}
          <Route path="admin">
            <Route path="usuarios" element={<UsuariosPage />} />
            <Route path="configuracion" element={<ConfiguracionPage />} />
            <Route path="auditoria" element={<AuditoriaPage />} />
            <Route path="estadisticas" element={<EstadisticasPage />} />
          </Route>
        </Route>

        {/* Ruta 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
