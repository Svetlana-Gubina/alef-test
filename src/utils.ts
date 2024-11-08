export const parseAge = (age: number): string => {
  let result;
  let number = age % 100;
  if (number >= 5 && number <= 20) {
    result = 'лет';
  } else {
    number = number % 10;
    if (number == 1) {
      result = 'год';
    } else if (number >= 2 && number <= 4) {
      result = 'года';
    } else {
      result = 'лет';
    }
  }
  return result;
};
