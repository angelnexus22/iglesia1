/**
 * Genera un ID único
 * @returns {string} ID único
 */
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

/**
 * Debounce function para optimizar búsquedas
 * @param {Function} func - Función a ejecutar
 * @param {number} wait - Tiempo de espera en ms
 * @returns {Function} Función debounced
 */
export const debounce = (func, wait = 300) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Descarga un archivo
 * @param {Blob} blob - Blob a descargar
 * @param {string} filename - Nombre del archivo
 */
export const downloadFile = (blob, filename) => {
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

/**
 * Convierte un objeto a query string
 * @param {object} params - Parámetros a convertir
 * @returns {string} Query string
 */
export const objectToQueryString = (params) => {
  return Object.keys(params)
    .filter((key) => params[key] !== null && params[key] !== undefined && params[key] !== '')
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
};

/**
 * Obtiene las iniciales de un nombre
 * @param {string} name - Nombre completo
 * @returns {string} Iniciales
 */
export const getInitials = (name) => {
  if (!name) return '';
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
};

/**
 * Ordena un array de objetos por una propiedad
 * @param {Array} array - Array a ordenar
 * @param {string} property - Propiedad por la que ordenar
 * @param {string} order - Orden: 'asc' o 'desc'
 * @returns {Array} Array ordenado
 */
export const sortByProperty = (array, property, order = 'asc') => {
  return [...array].sort((a, b) => {
    const valueA = a[property];
    const valueB = b[property];

    if (valueA === valueB) return 0;

    if (order === 'asc') {
      return valueA > valueB ? 1 : -1;
    } else {
      return valueA < valueB ? 1 : -1;
    }
  });
};

/**
 * Filtra un array de objetos por múltiples propiedades
 * @param {Array} array - Array a filtrar
 * @param {string} searchTerm - Término de búsqueda
 * @param {Array} properties - Propiedades en las que buscar
 * @returns {Array} Array filtrado
 */
export const filterByProperties = (array, searchTerm, properties) => {
  if (!searchTerm) return array;

  const lowerSearchTerm = searchTerm.toLowerCase();

  return array.filter((item) => {
    return properties.some((property) => {
      const value = item[property];
      if (value === null || value === undefined) return false;
      return value.toString().toLowerCase().includes(lowerSearchTerm);
    });
  });
};

/**
 * Obtiene un color basado en un string (para avatares)
 * @param {string} str - String del que generar el color
 * @returns {string} Color en hexadecimal
 */
export const stringToColor = (str) => {
  if (!str) return '#1976d2';

  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const colors = [
    '#1976d2',
    '#388e3c',
    '#d32f2f',
    '#7b1fa2',
    '#f57c00',
    '#0288d1',
    '#c2185b',
    '#5d4037',
  ];

  return colors[Math.abs(hash) % colors.length];
};

/**
 * Calcula la edad a partir de una fecha de nacimiento
 * @param {string|Date} birthDate - Fecha de nacimiento
 * @returns {number} Edad
 */
export const calculateAge = (birthDate) => {
  if (!birthDate) return 0;
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
};

/**
 * Obtiene el mensaje de error de una respuesta de API
 * @param {Error} error - Error de la petición
 * @returns {string} Mensaje de error
 */
export const getErrorMessage = (error) => {
  if (error.response) {
    // Error de respuesta del servidor
    return error.response.data?.message || 'Error en el servidor';
  } else if (error.request) {
    // Error de red
    return 'Error de conexión. Verifique su conexión a internet.';
  } else {
    // Otro tipo de error
    return error.message || 'Ha ocurrido un error inesperado';
  }
};

/**
 * Copia texto al portapapeles
 * @param {string} text - Texto a copiar
 * @returns {Promise<boolean>} True si se copió correctamente
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Error al copiar al portapapeles:', error);
    return false;
  }
};

/**
 * Valida si un objeto está vacío
 * @param {object} obj - Objeto a validar
 * @returns {boolean} True si está vacío
 */
export const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0;
};

/**
 * Espera un tiempo determinado (para testing o animaciones)
 * @param {number} ms - Milisegundos a esperar
 * @returns {Promise} Promesa que se resuelve después del tiempo
 */
export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
