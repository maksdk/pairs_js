const mapping = {
   "1": null,
   "2": null,
   "3": null
};

export const make = (vul1, vul2, vul3) => {
   mapping["1"] = vul1;
   mapping["2"] = vul2;
   mapping["3"] = vul3;

   return (key) => mapping[key];
};

export const get1 = (func) => func("1");
export const get2 = (func) => func("2");
export const get3 = (func) => func("3");