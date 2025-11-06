// Constantes de la aplicación

// Roles de usuario
export const USER_ROLES = {
  ADMIN: 'admin',
  PARROCO: 'parroco',
  VICARIO: 'vicario',
  SECRETARIA: 'secretaria',
  TESORERO: 'tesorero',
  CATEQUISTA: 'catequista',
  COORDINADOR: 'coordinador',
  READONLY: 'readonly',
};

// Estados civiles
export const ESTADOS_CIVILES = [
  { value: 'soltero', label: 'Soltero/a' },
  { value: 'casado', label: 'Casado/a' },
  { value: 'viudo', label: 'Viudo/a' },
  { value: 'divorciado', label: 'Divorciado/a' },
  { value: 'union_libre', label: 'Unión Libre' },
];

// Tipos de identificación
export const TIPOS_IDENTIFICACION = [
  { value: 'cedula', label: 'Cédula' },
  { value: 'pasaporte', label: 'Pasaporte' },
  { value: 'ruc', label: 'RUC' },
  { value: 'otro', label: 'Otro' },
];

// Tipos de sacramento
export const TIPOS_SACRAMENTO = {
  BAUTISMO: 'bautismo',
  COMUNION: 'comunion',
  CONFIRMACION: 'confirmacion',
  MATRIMONIO: 'matrimonio',
  UNCION: 'uncion',
  ORDEN: 'orden',
};

// Tipos de transacción financiera
export const TIPOS_TRANSACCION = {
  INGRESO: 'ingreso',
  GASTO: 'gasto',
};

// Categorías de ingresos
export const CATEGORIAS_INGRESO = [
  { value: 'donacion', label: 'Donación' },
  { value: 'diezmo', label: 'Diezmo' },
  { value: 'ofrenda', label: 'Ofrenda de Misa' },
  { value: 'sacramento', label: 'Sacramento (Limosna)' },
  { value: 'alquiler', label: 'Alquiler de Espacio' },
  { value: 'evento', label: 'Evento Especial' },
  { value: 'otro', label: 'Otro' },
];

// Categorías de gastos
export const CATEGORIAS_GASTO = [
  { value: 'servicios', label: 'Servicios Básicos' },
  { value: 'mantenimiento', label: 'Mantenimiento' },
  { value: 'salarios', label: 'Salarios' },
  { value: 'liturgico', label: 'Suministros Litúrgicos' },
  { value: 'caridad', label: 'Caridad y Ayuda Social' },
  { value: 'pastoral', label: 'Actividades Pastorales' },
  { value: 'otro', label: 'Otro' },
];

// Métodos de pago
export const METODOS_PAGO = [
  { value: 'efectivo', label: 'Efectivo' },
  { value: 'transferencia', label: 'Transferencia' },
  { value: 'cheque', label: 'Cheque' },
  { value: 'tarjeta', label: 'Tarjeta' },
];

// Tipos de evento
export const TIPOS_EVENTO = [
  { value: 'misa', label: 'Misa' },
  { value: 'sacramento', label: 'Sacramento' },
  { value: 'retiro', label: 'Retiro' },
  { value: 'charla', label: 'Charla/Conferencia' },
  { value: 'procesion', label: 'Procesión' },
  { value: 'reunion', label: 'Reunión' },
  { value: 'social', label: 'Evento Social' },
  { value: 'otro', label: 'Otro' },
];

// Días de la semana
export const DIAS_SEMANA = [
  { value: 'lunes', label: 'Lunes' },
  { value: 'martes', label: 'Martes' },
  { value: 'miercoles', label: 'Miércoles' },
  { value: 'jueves', label: 'Jueves' },
  { value: 'viernes', label: 'Viernes' },
  { value: 'sabado', label: 'Sábado' },
  { value: 'domingo', label: 'Domingo' },
];

// Paginación
export const ITEMS_PER_PAGE = 10;
export const PAGE_SIZE_OPTIONS = [5, 10, 25, 50, 100];

// Configuración de fecha
export const DATE_FORMAT = 'dd/MM/yyyy';
export const DATE_TIME_FORMAT = 'dd/MM/yyyy HH:mm';

// Rutas de la aplicación
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  FORGOT_PASSWORD: '/recuperar-password',

  // Feligreses
  FELIGRESES: '/feligreses',
  FELIGRESES_NEW: '/feligreses/nuevo',
  FELIGRESES_DETAIL: '/feligreses/:id',
  FELIGRESES_EDIT: '/feligreses/:id/editar',
  FAMILIAS: '/familias',

  // Sacramentos
  BAUTISMOS: '/sacramentos/bautismos',
  COMUNIONES: '/sacramentos/comuniones',
  CONFIRMACIONES: '/sacramentos/confirmaciones',
  MATRIMONIOS: '/sacramentos/matrimonios',
  CERTIFICADOS: '/sacramentos/certificados',

  // Finanzas
  FINANZAS: '/finanzas',
  FINANZAS_INGRESOS: '/finanzas/ingresos',
  FINANZAS_GASTOS: '/finanzas/gastos',
  FINANZAS_REPORTES: '/finanzas/reportes',
  FINANZAS_CUENTAS: '/finanzas/cuentas',

  // Eventos
  EVENTOS_CALENDARIO: '/eventos/calendario',
  EVENTOS_MISAS: '/eventos/misas',
  EVENTOS_RESERVAS: '/eventos/reservas',

  // Ministerios
  MINISTERIOS: '/ministerios',
  MINISTERIOS_DETAIL: '/ministerios/:id',
  CATEQUESIS: '/catequesis',

  // Admin
  ADMIN_USUARIOS: '/admin/usuarios',
  ADMIN_CONFIG: '/admin/configuracion',
  ADMIN_AUDITORIA: '/admin/auditoria',
  ADMIN_ESTADISTICAS: '/admin/estadisticas',
};

export default {
  USER_ROLES,
  ESTADOS_CIVILES,
  TIPOS_IDENTIFICACION,
  TIPOS_SACRAMENTO,
  TIPOS_TRANSACCION,
  CATEGORIAS_INGRESO,
  CATEGORIAS_GASTO,
  METODOS_PAGO,
  TIPOS_EVENTO,
  DIAS_SEMANA,
  ITEMS_PER_PAGE,
  PAGE_SIZE_OPTIONS,
  DATE_FORMAT,
  DATE_TIME_FORMAT,
  ROUTES,
};
