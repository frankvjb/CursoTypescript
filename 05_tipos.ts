{
  let cadena: string;
  let numero: number;
  let isOk: boolean;
  let nada: undefined;
  let algo: any;

  cadena = '';
  // cadena = 22;  da error
  numero =  22;
  isOk = true;
  nada = undefined;
  algo = 'Algo';
}

// Inferencia de tipos
{
  let cadena = 'Pepe';
  cadena += ' Perez';
  // cadena = 22 Da error
  console.log(cadena);
}

// Arrays
{
  const aDatos: any[] = [];
// tslint:disable-next-line: array-type
  const aMasDatos: Array<any> = [];
  const aNumbers1: number[] = [];
// tslint:disable-next-line: array-type
  const aNumbers2: Array<number> = [];

  aDatos.push('Pepe', 87, true)
  aMasDatos.push('Pepe', 67, false);
  aNumbers1.push(1, 2, 3);
  aNumbers2.push(1, 2, 4);
}

// Tuplas (Arrays de n items fijos)
{
  let aTupla: [number, number, number]
  aTupla = [1 , 3, 9];
}

// Tipos Objeto
{
  let oDatos: object;
  oDatos = {nombre: 'Pepe'};
  oDatos = new Date();
  // oDatos = 22 esto da error
  let obj: object = {};
  obj = {nombre: 'Pepe'};
  // obj = 22; // da un erorr
  obj = {edad: 22};

  let oFechas: Date;
  oFechas = new Date();
}

// Tipos unión
{
  let id: string | number;
  id = '007';
  id = 444;
  // id = true // Da error
}

// Alias y tipos propios (e.g semántico)
{
  type ID = string | number;
  type NombrePropio = string;
  let id: ID;
  let nombre: NombrePropio;
}