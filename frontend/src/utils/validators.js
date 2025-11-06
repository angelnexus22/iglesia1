/**
 * Valida que un email sea válido
 * @param {string} email - Email a validar
 * @returns {boolean} True si es válido
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Valida que un teléfono sea válido
 * @param {string} phone - Teléfono a validar
 * @returns {boolean} True si es válido
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^[0-9-+() ]{7,}$/;
  return phoneRegex.test(phone);
};

/**
 * Valida que una cédula sea válida (Ecuador)
 * @param {string} cedula - Cédula a validar
 * @returns {boolean} True si es válida
 */
export const isValidCedula = (cedula) => {
  if (!cedula || cedula.length !== 10) return false;

  const digits = cedula.split('').map(Number);
  const provinceCode = parseInt(cedula.substring(0, 2));

  if (provinceCode < 1 || provinceCode > 24) return false;

  const coefficients = [2, 1, 2, 1, 2, 1, 2, 1, 2];
  let sum = 0;

  for (let i = 0; i < 9; i++) {
    let product = digits[i] * coefficients[i];
    if (product >= 10) product -= 9;
    sum += product;
  }

  const verifier = sum % 10 === 0 ? 0 : 10 - (sum % 10);
  return verifier === digits[9];
};

/**
 * Valida que una contraseña sea fuerte
 * @param {string} password - Contraseña a validar
 * @returns {object} Objeto con validez y mensaje
 */
export const validatePassword = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const errors = [];

  if (password.length < minLength) {
    errors.push(`Debe tener al menos ${minLength} caracteres`);
  }
  if (!hasUpperCase) {
    errors.push('Debe contener al menos una mayúscula');
  }
  if (!hasLowerCase) {
    errors.push('Debe contener al menos una minúscula');
  }
  if (!hasNumbers) {
    errors.push('Debe contener al menos un número');
  }
  if (!hasSpecialChar) {
    errors.push('Debe contener al menos un carácter especial');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Valida que un RUC sea válido (Ecuador)
 * @param {string} ruc - RUC a validar
 * @returns {boolean} True si es válido
 */
export const isValidRUC = (ruc) => {
  if (!ruc || ruc.length !== 13) return false;

  const type = ruc.substring(2, 3);

  // Persona natural
  if (type === '0' || type === '1' || type === '2' || type === '3' || type === '4' || type === '5') {
    return isValidCedula(ruc.substring(0, 10));
  }

  // Sociedad privada
  if (type === '9') {
    const coefficients = [4, 3, 2, 7, 6, 5, 4, 3, 2];
    const digits = ruc.split('').map(Number);
    let sum = 0;

    for (let i = 0; i < 9; i++) {
      sum += digits[i] * coefficients[i];
    }

    const verifier = 11 - (sum % 11);
    const calculatedVerifier = verifier === 11 ? 0 : verifier;

    return calculatedVerifier === digits[9];
  }

  // Sociedad pública
  if (type === '6') {
    const coefficients = [3, 2, 7, 6, 5, 4, 3, 2];
    const digits = ruc.split('').map(Number);
    let sum = 0;

    for (let i = 0; i < 8; i++) {
      sum += digits[i] * coefficients[i];
    }

    const verifier = 11 - (sum % 11);
    const calculatedVerifier = verifier === 11 ? 0 : verifier;

    return calculatedVerifier === digits[8];
  }

  return false;
};

/**
 * Valida que una fecha sea válida
 * @param {string|Date} date - Fecha a validar
 * @returns {boolean} True si es válida
 */
export const isValidDate = (date) => {
  if (!date) return false;
  const dateObj = new Date(date);
  return dateObj instanceof Date && !isNaN(dateObj);
};

/**
 * Valida que una fecha esté en el pasado
 * @param {string|Date} date - Fecha a validar
 * @returns {boolean} True si está en el pasado
 */
export const isDateInPast = (date) => {
  if (!isValidDate(date)) return false;
  const dateObj = new Date(date);
  return dateObj < new Date();
};

/**
 * Valida que una fecha esté en el futuro
 * @param {string|Date} date - Fecha a validar
 * @returns {boolean} True si está en el futuro
 */
export const isDateInFuture = (date) => {
  if (!isValidDate(date)) return false;
  const dateObj = new Date(date);
  return dateObj > new Date();
};
