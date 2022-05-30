// Selvin => [S,e,l,v,i,n]
// [S,e,l,v,i,n] => Selvin

export function parseStr(input: string): string[];

export function parseStr(input: string[]): string;

export function parseStr(input: number): boolean;

// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join('');
//   } else {
//     return input.split('');
//   }
// }

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('');
  } else if (typeof input === 'string') {
    return input.split('');
  } else if (typeof input === 'number') {
    if (input > 10) return true;
    else return false;
  }
}

const respuestaArray = parseStr('selvin');
const respuestaString = parseStr(['s', 'e', 'l', 'v', 'i', 'n']);
const respuestaNumber = parseStr(101);

respuestaArray;
respuestaString;
respuestaNumber;

if (Array.isArray(respuestaArray)) {
  let test = respuestaArray.reverse();
  test;
}

if (typeof respuestaString === 'string') {
  let test = respuestaString.toUpperCase();
  test;
}
