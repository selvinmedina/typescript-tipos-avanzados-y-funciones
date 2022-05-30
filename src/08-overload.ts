// Selvin => [S,e,l,v,i,n]
// [S,e,l,v,i,n] => Selvin

export function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('');
  } else {
    return input.split('');
  }
}

const respuestaArray = parseStr('selvin');
const respuestaString= parseStr(['s','e','l','v','i','n']);

respuestaArray
respuestaString

if(Array.isArray(respuestaArray)){
  let test = respuestaArray.reverse()
  test
}

if(typeof respuestaString === 'string'){
  let test = respuestaString.toUpperCase();
  test
}
