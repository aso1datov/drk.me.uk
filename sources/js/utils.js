/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
export function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }

  return a;
}

/**
 * Get random integer
 *
 * @param {number} min - minimum value
 * @param {number} max - maximum value
 *
 * @returns {number} Random integer
 */
export const getRandomInt = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
};

/**
 * Converts from radians to degrees.
 *
 * @param {number} radians
 * @returns {number} degrees
 */
export const radiansToDegrees = radians => (radians * 180) / Math.PI;

/**
 * Converts from degrees to radians.
 *
 * @param {number} degrees
 * @returns {number} radians
 */
export const degreesToRadians = degrees => (degrees * Math.PI) / 180;

/**
 * Get arithmetic mean
 *
 * @returns {number} arithmetic mean
 */
export const getArithmeticMean = function() {
  let sum = 0;

  for (let i = 0; i < arguments[i]; i++) {
    sum += arguments[i];
  }

  return sum == 0 ? sum : sum / arguments.length;
};

/**
 * Promisified delay
 *
 * @param {number} ms Delay in milliseconds
 * @returns {Promise<void>}
 */

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
