const cons = (a, b) => (message) => {
   switch (message) {
      case 'car':
         return a;
      case 'cdr':
         return b;
   }
};

const car = (pair) => pair('car');
const cdr = (pair) => pair('cdr');