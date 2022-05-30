const withoutEnd = () => {
  while (true) {
    console.log('Nunca parar de aprender');
  }
};

const fail = (message: string): never => {
  throw new Error(message);
};

// fail("")

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string';
  } else if (Array.isArray(input)) {
    return 'es un array';
  } else {
    return fail('not match');
  }
};

console.log(example([]));

const tedst = 'f';
tedst;
