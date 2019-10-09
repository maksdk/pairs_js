const getFactors = (number) => {
   let factor = 2;
   const factors = [];

   while (factor <= number) {
      while (number % factor === 0) {
         number = number / factor;
         factors.push(factor);

         if (number === 1) break;
      }

      factor += 1;
   }

   return factors;
};

const getCountFactor = (factors, value) => {
   return factors.filter(factor => factor === value).length;
};

export const cons = (num1, num2) => 2 ** num1 * 3 ** num2;

export const car = (number) => {
   const factors = getFactors(number);
   const value = getCountFactor(factors, 2);
   return value;
};

export const cdr = (number) => {
   const factors = getFactors(number);
   const value = getCountFactor(factors, 3);
   return value;
};