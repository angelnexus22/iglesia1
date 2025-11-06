import { useState, useEffect } from 'react';

/**
 * Hook personalizado para debounce
 * Útil para búsquedas en tiempo real
 * @param {any} value - Valor a hacer debounce
 * @param {number} delay - Delay en milisegundos
 * @returns {any} Valor con debounce
 */
export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Actualizar el valor con debounce después del delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cancelar el timeout si el valor cambia (también en cleanup)
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
