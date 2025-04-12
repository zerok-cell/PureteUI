import { typesVariable } from '@purete-ui/types';

export const typeAffiliation = (
  variable: unknown,
  type: typesVariable,
  equal = false
) => {
  const actualType = typeof variable; // Определяем тип переменной

  if (!equal) {
    if (actualType !== type) {
      throw new Error(`Invalid. Expected ${type}, but got ${actualType}`);
    }
  } else {
    if (actualType === type) {
      throw new Error(`Invalid. Equal to ${type}`);
    }
  }
};
