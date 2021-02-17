export interface Human {
  firstNames: string;
  lastName: string;
}

function pickCard<T extends string>(
  a: T
): typeof a extends "ert" ? true : false;

function pickCard(a: string) {
  if (a === "ert") return true;
  else return false;
}

const d = pickCard("ert" as const);
console.log(d);
