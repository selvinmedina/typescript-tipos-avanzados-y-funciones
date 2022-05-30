let anyVar: any;

anyVar = true;

anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

anyVar;

let isNew: boolean = anyVar;

let unknowVar: unknown;

// unknowVar.doSomething();

if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase();
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
};

let test = parse('{"test": "HolaMundo"}');

test;

if (typeof unknowVar === 'boolean') {
  let isNew2: boolean = unknowVar;
}
