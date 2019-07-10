/**
 * Utils
 */

import { getArithmeticMean } from '@/utils';

/**
 * Interfaces
 */

import { ICanteens } from './interfaces';

const canteens: ICanteens = {
  'Дальняя у Собора': getArithmeticMean(8, 8, 6, 9),
  'С бесплатным компотом': getArithmeticMean(7, 5, 4, 4),
  'На измайловском': getArithmeticMean(8, 8, 9, 8),
  'У вокзала': getArithmeticMean(5, 9, 6, 7),
  'За 190': getArithmeticMean(2, 10, 0.5, 3),
  Варшавский: getArithmeticMean(5, 7, 7, 6),
  МЧС: getArithmeticMean(6, 5, 4, 8),
  Дальняя: getArithmeticMean(8, 9, 9, 7),
};

export default canteens;
