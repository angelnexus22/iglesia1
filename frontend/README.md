# Sistema de Gestión Parroquial - Frontend

Sistema integral para la gestión administrativa, pastoral y financiera de una parroquia católica.

## 🚀 Características Principales

- **Dashboard** - Vista general con estadísticas y actividades
- **Feligreses** - Gestión completa de feligreses y familias
- **Sacramentos** - Registro de bautismos, comuniones, confirmaciones, matrimonios y certificados
- **Finanzas** - Control de ingresos, gastos, cuentas y reportes
- **Eventos** - Calendario, horarios de misas y reservas
- **Ministerios** - Gestión de ministerios y catequesis
- **Administración** - Usuarios, configuración y auditoría

## 🛠️ Tecnologías

- **React 19** - Biblioteca principal
- **Vite 7** - Build tool y dev server
- **Material-UI v7** - Framework de componentes
- **React Router v7** - Navegación
- **React Hook Form** - Manejo de formularios
- **Yup** - Validación de esquemas
- **Axios** - Cliente HTTP
- **date-fns** - Manejo de fechas
- **recharts** - Gráficos
- **react-toastify** - Notificaciones

## 📋 Requisitos Previos

- Node.js 18 o superior
- npm 9 o superior

## 🔧 Instalación

1. Navegar al directorio del frontend:
```bash
cd frontend
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear archivo de variables de entorno:
```bash
cp .env.example .env.local
```

## 🚀 Ejecución

### Modo Desarrollo
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Credenciales de Demo
- **Email**: admin@parroquia.com
- **Password**: admin123

### Build para Producción
```bash
npm run build
```

### Vista Previa del Build
```bash
npm run preview
```

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Genera build de producción
- `npm run preview` - Vista previa del build
- `npm run lint` - Ejecuta ESLint
- `npm run lint:fix` - Ejecuta ESLint y corrige errores automáticamente
- `npm run format` - Formatea el código con Prettier
- `npm run format:check` - Verifica el formateo del código

## 📁 Estructura del Proyecto

```
src/
├── api/                    # Servicios API
├── assets/                 # Recursos estáticos
├── components/
│   ├── common/            # Componentes reutilizables
│   ├── layout/            # Componentes de layout
│   └── forms/             # Componentes de formularios
├── context/               # Context API
├── features/              # Módulos por funcionalidad
│   ├── auth/
│   ├── dashboard/
│   ├── feligreses/
│   ├── sacramentos/
│   ├── finanzas/
│   ├── eventos/
│   ├── ministerios/
│   └── admin/
├── hooks/                 # Custom hooks
├── routes/                # Configuración de rutas
├── theme/                 # Tema de Material-UI
├── utils/                 # Utilidades
├── App.jsx
└── main.jsx
```

## 🎨 Características de UI

- **Diseño Responsive** - Funciona en móvil, tablet y desktop
- **Tema Personalizado** - Colores litúrgicos tradicionales
- **Navegación Intuitiva** - Sidebar colapsable con menú jerárquico
- **Autenticación** - Sistema de login con protección de rutas
- **Notificaciones** - Toast notifications para feedback

## 📖 Documentación Adicional

- **ARQUITECTURA.md** - Arquitectura completa del sistema
- **PLAN_FRONTEND.md** - Plan detallado de implementación

## 🔒 Seguridad

- Protección de rutas privadas
- Autenticación con JWT (preparado para backend)
- Validación de formularios
- Sanitización de datos

## 🚧 Estado Actual

✅ **Fase 1 Completada** - Estructura base y arquitectura
- Setup completo del proyecto
- Layout y navegación funcionales
- Páginas placeholder para todos los módulos
- Sistema de autenticación (UI)

🔨 **Próximas Fases**:
- Fase 2: Implementación de componentes y funcionalidad completa
- Fase 3: Integración con backend
- Fase 4: Testing y optimización

## 👥 Contribución

Este es un proyecto privado de gestión parroquial.

## 📄 Licencia

Todos los derechos reservados © 2025
