# Plan de Implementación del Frontend - Sistema de Gestión Parroquial

## Resumen Ejecutivo

Este documento detalla el plan de implementación de la **Fase 1** del Sistema de Gestión Parroquial, enfocándose exclusivamente en el desarrollo del frontend con React.

## Stack Tecnológico Frontend

### Core
- **React 18.3+** - Biblioteca principal
- **Vite 5+** - Build tool y dev server
- **React Router 6** - Navegación

### UI & Styling
- **Material-UI (MUI) v5** - Framework de componentes
  - Ya incluye sistema de temas
  - Componentes profesionales pre-construidos
  - Sistema de grid y responsive
  - Iconos integrados
- **Emotion** - CSS-in-JS (viene con MUI)

### Gestión de Estado
- **React Context API** - Estado global ligero (auth, theme)
- **React Hook Form** - Manejo de formularios
- **Yup** - Validación de esquemas

### Utilidades
- **date-fns** - Manejo de fechas (más ligero que moment)
- **axios** - Cliente HTTP (preparado para backend)
- **react-toastify** - Notificaciones
- **recharts** - Gráficos y visualizaciones

### Desarrollo
- **ESLint** - Linting
- **Prettier** - Formateo de código

## Estructura de Carpetas Detallada

```
frontend/
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   └── assets/
│       └── images/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button/
│   │   │   │   ├── Button.jsx
│   │   │   │   └── index.js
│   │   │   ├── Input/
│   │   │   │   ├── TextField.jsx
│   │   │   │   ├── Select.jsx
│   │   │   │   ├── DatePicker.jsx
│   │   │   │   └── index.js
│   │   │   ├── Modal/
│   │   │   │   ├── Modal.jsx
│   │   │   │   ├── ConfirmDialog.jsx
│   │   │   │   └── index.js
│   │   │   ├── Table/
│   │   │   │   ├── DataTable.jsx
│   │   │   │   ├── TablePagination.jsx
│   │   │   │   └── index.js
│   │   │   ├── Card/
│   │   │   │   ├── Card.jsx
│   │   │   │   ├── StatsCard.jsx
│   │   │   │   └── index.js
│   │   │   ├── Loading/
│   │   │   │   ├── Spinner.jsx
│   │   │   │   ├── Skeleton.jsx
│   │   │   │   └── index.js
│   │   │   └── index.js
│   │   │
│   │   ├── layout/
│   │   │   ├── Header/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── UserMenu.jsx
│   │   │   │   └── index.js
│   │   │   ├── Sidebar/
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   ├── SidebarMenu.jsx
│   │   │   │   ├── SidebarItem.jsx
│   │   │   │   └── index.js
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── index.js
│   │   │   ├── MainLayout/
│   │   │   │   ├── MainLayout.jsx
│   │   │   │   └── index.js
│   │   │   ├── AuthLayout/
│   │   │   │   ├── AuthLayout.jsx
│   │   │   │   └── index.js
│   │   │   └── index.js
│   │   │
│   │   └── forms/
│   │       ├── FormField.jsx
│   │       ├── FormSection.jsx
│   │       └── index.js
│   │
│   ├── features/
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   │   ├── LoginForm.jsx
│   │   │   │   └── ForgotPasswordForm.jsx
│   │   │   ├── pages/
│   │   │   │   ├── LoginPage.jsx
│   │   │   │   └── ForgotPasswordPage.jsx
│   │   │   ├── hooks/
│   │   │   │   └── useAuth.js
│   │   │   └── index.js
│   │   │
│   │   ├── dashboard/
│   │   │   ├── components/
│   │   │   │   ├── StatsOverview.jsx
│   │   │   │   ├── RecentActivity.jsx
│   │   │   │   ├── UpcomingEvents.jsx
│   │   │   │   └── QuickActions.jsx
│   │   │   ├── pages/
│   │   │   │   └── DashboardPage.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── feligreses/
│   │   │   ├── components/
│   │   │   │   ├── FeligresList.jsx
│   │   │   │   ├── FeligresCard.jsx
│   │   │   │   ├── FeligresForm.jsx
│   │   │   │   ├── FeligresDetail.jsx
│   │   │   │   ├── FamilyTree.jsx
│   │   │   │   └── SearchFilters.jsx
│   │   │   ├── pages/
│   │   │   │   ├── FeligresesPage.jsx
│   │   │   │   ├── FeligresDetailPage.jsx
│   │   │   │   ├── NewFeligresPage.jsx
│   │   │   │   ├── EditFeligresPage.jsx
│   │   │   │   └── FamiliasPage.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── sacramentos/
│   │   │   ├── components/
│   │   │   │   ├── SacramentoForm.jsx
│   │   │   │   ├── SacramentoList.jsx
│   │   │   │   ├── CertificadoPreview.jsx
│   │   │   │   └── SacramentoFilters.jsx
│   │   │   ├── pages/
│   │   │   │   ├── BautismosPage.jsx
│   │   │   │   ├── ComunionesPage.jsx
│   │   │   │   ├── ConfirmacionesPage.jsx
│   │   │   │   ├── MatrimoniosPage.jsx
│   │   │   │   └── CertificadosPage.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── finanzas/
│   │   │   ├── components/
│   │   │   │   ├── FinancialSummary.jsx
│   │   │   │   ├── TransactionForm.jsx
│   │   │   │   ├── TransactionList.jsx
│   │   │   │   ├── IncomeChart.jsx
│   │   │   │   ├── ExpenseChart.jsx
│   │   │   │   └── CuentasList.jsx
│   │   │   ├── pages/
│   │   │   │   ├── FinanzasDashboard.jsx
│   │   │   │   ├── IngresosPage.jsx
│   │   │   │   ├── GastosPage.jsx
│   │   │   │   ├── ReportesPage.jsx
│   │   │   │   └── CuentasPage.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── eventos/
│   │   │   ├── components/
│   │   │   │   ├── Calendar.jsx
│   │   │   │   ├── EventForm.jsx
│   │   │   │   ├── EventCard.jsx
│   │   │   │   ├── MisasSchedule.jsx
│   │   │   │   └── ReservaForm.jsx
│   │   │   ├── pages/
│   │   │   │   ├── CalendarioPage.jsx
│   │   │   │   ├── MisasPage.jsx
│   │   │   │   └── ReservasPage.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── ministerios/
│   │   │   ├── components/
│   │   │   │   ├── MinisterioCard.jsx
│   │   │   │   ├── MinisterioForm.jsx
│   │   │   │   ├── MiembrosList.jsx
│   │   │   │   └── CatequesisGroups.jsx
│   │   │   ├── pages/
│   │   │   │   ├── MinisteriosPage.jsx
│   │   │   │   ├── MinisterioDetailPage.jsx
│   │   │   │   └── CatequesisPage.jsx
│   │   │   └── index.js
│   │   │
│   │   └── admin/
│   │       ├── components/
│   │       │   ├── UserForm.jsx
│   │       │   ├── UsersList.jsx
│   │       │   ├── RoleSelector.jsx
│   │       │   ├── ConfigForm.jsx
│   │       │   └── AuditoriaTable.jsx
│   │       ├── pages/
│   │       │   ├── UsuariosPage.jsx
│   │       │   ├── ConfiguracionPage.jsx
│   │       │   ├── AuditoriaPage.jsx
│   │       │   └── EstadisticasPage.jsx
│   │       └── index.js
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useLocalStorage.js
│   │   ├── useDebounce.js
│   │   ├── useModal.js
│   │   ├── usePagination.js
│   │   └── index.js
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── ThemeContext.jsx
│   │   └── index.js
│   │
│   ├── routes/
│   │   ├── AppRoutes.jsx
│   │   ├── PrivateRoute.jsx
│   │   ├── PublicRoute.jsx
│   │   └── index.js
│   │
│   ├── api/
│   │   ├── axios.config.js
│   │   ├── auth.api.js
│   │   ├── feligreses.api.js
│   │   ├── sacramentos.api.js
│   │   ├── finanzas.api.js
│   │   ├── eventos.api.js
│   │   ├── ministerios.api.js
│   │   ├── admin.api.js
│   │   └── index.js
│   │
│   ├── utils/
│   │   ├── validators.js
│   │   ├── formatters.js
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   └── index.js
│   │
│   ├── theme/
│   │   ├── theme.js
│   │   ├── colors.js
│   │   └── typography.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env.example
├── .env.local (gitignored)
├── .eslintrc.cjs
├── .prettierrc
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Componentes Comunes a Desarrollar

### 1. Componentes de Input
- **TextField**: Input de texto con validación
- **Select**: Selector dropdown
- **DatePicker**: Selector de fecha
- **FilePicker**: Selector de archivos
- **SearchBar**: Barra de búsqueda

### 2. Componentes de Layout
- **Header**: Encabezado con logo y menú de usuario
- **Sidebar**: Menú lateral navegable
- **Footer**: Pie de página
- **MainLayout**: Layout principal de la app
- **AuthLayout**: Layout para páginas de autenticación

### 3. Componentes de Datos
- **DataTable**: Tabla con paginación, ordenamiento y filtros
- **StatsCard**: Tarjeta de estadísticas
- **Card**: Tarjeta genérica
- **List**: Lista personalizable

### 4. Componentes de UI
- **Modal**: Modal genérico
- **ConfirmDialog**: Diálogo de confirmación
- **Spinner**: Indicador de carga
- **Skeleton**: Placeholder de carga
- **Alert**: Alertas y mensajes
- **Breadcrumbs**: Migas de pan

### 5. Componentes de Formulario
- **FormField**: Campo de formulario con etiqueta y error
- **FormSection**: Sección de formulario
- **FormActions**: Botones de acción de formulario

## Páginas Principales a Desarrollar

### Autenticación
1. **LoginPage** - Inicio de sesión
2. **ForgotPasswordPage** - Recuperar contraseña

### Dashboard
3. **DashboardPage** - Página principal con resumen

### Feligreses (5 páginas)
4. **FeligresesPage** - Lista de feligreses
5. **NewFeligresPage** - Crear nuevo feligrés
6. **FeligresDetailPage** - Ver detalle
7. **EditFeligresPage** - Editar feligrés
8. **FamiliasPage** - Gestión de familias

### Sacramentos (5 páginas)
9. **BautismosPage**
10. **ComunionesPage**
11. **ConfirmacionesPage**
12. **MatrimoniosPage**
13. **CertificadosPage**

### Finanzas (5 páginas)
14. **FinanzasDashboard**
15. **IngresosPage**
16. **GastosPage**
17. **ReportesPage**
18. **CuentasPage**

### Eventos (3 páginas)
19. **CalendarioPage**
20. **MisasPage**
21. **ReservasPage**

### Ministerios (3 páginas)
22. **MinisteriosPage**
23. **MinisterioDetailPage**
24. **CatequesisPage**

### Administración (4 páginas)
25. **UsuariosPage**
26. **ConfiguracionPage**
27. **AuditoriaPage**
28. **EstadisticasPage**

**Total: 28 páginas principales**

## Configuración de Rutas

```javascript
// Estructura de rutas
/
├── /login
├── /recuperar-password
├── / (Dashboard) - Protegido
├── /feligreses
│   ├── /feligreses
│   ├── /feligreses/nuevo
│   ├── /feligreses/:id
│   ├── /feligreses/:id/editar
│   └── /familias
├── /sacramentos
│   ├── /sacramentos/bautismos
│   ├── /sacramentos/comuniones
│   ├── /sacramentos/confirmaciones
│   ├── /sacramentos/matrimonios
│   └── /sacramentos/certificados
├── /finanzas
│   ├── /finanzas
│   ├── /finanzas/ingresos
│   ├── /finanzas/gastos
│   ├── /finanzas/reportes
│   └── /finanzas/cuentas
├── /eventos
│   ├── /eventos/calendario
│   ├── /eventos/misas
│   └── /eventos/reservas
├── /ministerios
│   ├── /ministerios
│   ├── /ministerios/:id
│   └── /catequesis
└── /admin
    ├── /admin/usuarios
    ├── /admin/configuracion
    ├── /admin/auditoria
    └── /admin/estadisticas
```

## Tema y Diseño

### Paleta de Colores
```javascript
primary: {
  main: '#1976d2', // Azul católico tradicional
  light: '#42a5f5',
  dark: '#1565c0',
}
secondary: {
  main: '#9c27b0', // Púrpura litúrgico
  light: '#ba68c8',
  dark: '#7b1fa2',
}
success: '#2e7d32', // Verde
error: '#d32f2f',   // Rojo
warning: '#ed6c02', // Naranja
info: '#0288d1',    // Azul claro
```

### Tipografía
- **Fuente principal**: Roboto (default de MUI)
- **Fuente secundaria**: Inter o Open Sans

### Layout
- Sidebar colapsable
- Header fijo
- Responsive breakpoints:
  - Mobile: < 600px
  - Tablet: 600px - 960px
  - Desktop: > 960px

## Datos Mock para Desarrollo

### Mock de Feligreses
```javascript
const mockFeligreses = [
  {
    id: 1,
    nombre: 'Juan',
    apellidos: 'Pérez García',
    fechaNacimiento: '1985-03-15',
    telefono: '555-1234',
    email: 'juan.perez@email.com',
    direccion: 'Calle Principal 123',
    estadoCivil: 'Casado',
    sacramentos: ['Bautismo', 'Comunión', 'Confirmación', 'Matrimonio']
  },
  // ... más registros
];
```

### Mock de Sacramentos
```javascript
const mockBautismos = [
  {
    id: 1,
    feligresId: 1,
    fecha: '1985-04-20',
    parroco: 'P. José Martínez',
    padrino: 'Carlos López',
    madrina: 'María Rodríguez',
    libro: '5',
    pagina: '123',
    numero: '456'
  },
  // ... más registros
];
```

### Mock de Transacciones
```javascript
const mockTransacciones = [
  {
    id: 1,
    tipo: 'ingreso',
    categoria: 'Donación',
    monto: 1000,
    fecha: '2024-11-01',
    descripcion: 'Donación anónima',
    recibo: 'REC-001'
  },
  // ... más registros
];
```

## Validaciones de Formularios

### Feligrés
```javascript
const feligresSchema = yup.object().shape({
  nombre: yup.string().required('El nombre es requerido').min(2),
  apellidos: yup.string().required('Los apellidos son requeridos').min(2),
  fechaNacimiento: yup.date().required('La fecha de nacimiento es requerida').max(new Date()),
  telefono: yup.string().matches(/^[0-9-+() ]+$/, 'Teléfono inválido'),
  email: yup.string().email('Email inválido'),
  identificacion: yup.string().required('La identificación es requerida')
});
```

### Sacramento
```javascript
const sacramentoSchema = yup.object().shape({
  feligresId: yup.number().required('Debe seleccionar un feligrés'),
  fecha: yup.date().required('La fecha es requerida'),
  parroco: yup.string().required('El párroco es requerido'),
  libro: yup.string().required('El libro es requerido'),
  pagina: yup.string().required('La página es requerida')
});
```

### Transacción
```javascript
const transaccionSchema = yup.object().shape({
  tipo: yup.string().oneOf(['ingreso', 'gasto']).required(),
  categoria: yup.string().required('La categoría es requerida'),
  monto: yup.number().positive('El monto debe ser positivo').required('El monto es requerido'),
  fecha: yup.date().required('La fecha es requerida'),
  descripcion: yup.string().min(5, 'Mínimo 5 caracteres')
});
```

## Funcionalidades Clave por Módulo

### Dashboard
- Resumen de estadísticas (total feligreses, sacramentos del mes, balance financiero)
- Gráfico de ingresos vs gastos (últimos 6 meses)
- Próximos eventos (calendario)
- Acciones rápidas (registrar sacramento, nueva donación, etc.)

### Feligreses
- Tabla con búsqueda y filtros
- Exportar a Excel/PDF
- Importar desde Excel
- Vista de detalle con historial sacramental
- Árbol familiar visual
- Fotografía del feligrés

### Sacramentos
- Formularios específicos por tipo de sacramento
- Búsqueda por múltiples criterios
- Vista previa de certificado
- Generación de certificado PDF
- Libro de registros digital

### Finanzas
- Dashboard financiero con gráficos
- Registro rápido de transacciones
- Categorización automática
- Reportes mensuales/anuales
- Balance general
- Gráficos de ingresos y gastos

### Eventos
- Calendario visual (mensual/semanal)
- Creación de eventos
- Gestión de horarios de misas
- Sistema de reservas de espacios
- Notificaciones de eventos próximos

### Ministerios
- Lista de ministerios activos
- Gestión de miembros
- Grupos de catequesis
- Asistencia y participación
- Cronograma de actividades

### Administración
- CRUD de usuarios
- Asignación de roles y permisos
- Configuración general de la parroquia
- Logs de auditoría
- Estadísticas generales

## Performance y Optimización

### Code Splitting
```javascript
// Lazy loading de páginas
const DashboardPage = lazy(() => import('./features/dashboard/pages/DashboardPage'));
const FeligresesPage = lazy(() => import('./features/feligreses/pages/FeligresesPage'));
// ... etc
```

### Memoización
- Usar `React.memo()` para componentes que no cambian frecuentemente
- `useMemo()` para cálculos costosos
- `useCallback()` para funciones pasadas como props

### Virtualización
- Usar `react-window` o `react-virtualized` para listas largas de feligreses

## Testing (Opcional en Fase 1)

### Herramientas
- **Vitest** - Testing framework
- **React Testing Library** - Testing de componentes
- **MSW** - Mock Service Worker para API

### Tipos de Tests
- Tests unitarios de componentes
- Tests de integración de páginas
- Tests de hooks personalizados
- Tests de utilidades

## Documentación

### README.md
- Descripción del proyecto
- Instalación y setup
- Scripts disponibles
- Estructura del proyecto
- Convenciones de código

### Comentarios en Código
- JSDoc para funciones complejas
- Comentarios explicativos en lógica compleja
- PropTypes o TypeScript interfaces (si se usa TS)

## Próximos Pasos para Implementación

1. ✅ **Setup inicial del proyecto**
   - Crear proyecto con Vite
   - Instalar todas las dependencias
   - Configurar ESLint y Prettier
   - Configurar rutas

2. ✅ **Crear estructura de carpetas**
   - Crear todas las carpetas necesarias
   - Archivos index.js para exports

3. ✅ **Implementar sistema de temas y configuración**
   - Configurar MUI theme
   - Context de tema
   - Context de autenticación

4. ✅ **Desarrollar Layout**
   - Header
   - Sidebar con navegación
   - Footer
   - MainLayout
   - AuthLayout

5. ✅ **Crear componentes comunes**
   - Botones, inputs, modals
   - Tablas, cards
   - Loading, alerts

6. ✅ **Implementar autenticación (UI)**
   - Página de login
   - Lógica de autenticación (mock)
   - Rutas protegidas

7. ✅ **Desarrollar módulos principales**
   - Dashboard
   - Feligreses (completo)
   - Sacramentos (completo)
   - Finanzas (completo)
   - Eventos
   - Ministerios
   - Administración

8. ✅ **Datos mock y API mock**
   - Crear datos de prueba
   - Funciones API mock (simulando backend)

9. ✅ **Responsive y polish**
   - Ajustar diseño responsive
   - Mejorar UX
   - Pulir detalles visuales

10. ✅ **Testing y documentación**
    - Tests básicos
    - Documentación README
    - Comentarios en código

---

**Tiempo estimado total**: 2-3 semanas
**Complejidad**: Media-Alta
**Prioridad**: Alta

**Estado actual**: ✅ Listo para comenzar implementación
