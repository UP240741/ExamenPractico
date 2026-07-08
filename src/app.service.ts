//1.Crea una ruta GET "/saludar/:nombre" que responda "Hola <nombre>"
saludar(nombre: string): string {
  return 'Hola ${nombre}';
}

//2.Crea una ruta PUT "/multiplicar" que lea dos query param llamados "a" y "b" los convierta a numeros y responda el resultado de multiplicar ambos numeros.
multiplicar(a: number, b: number): number {
  return a * b;
}

//3.Crea la ruta PATCH "/mayus" que lea un query param llamado "mensaje" y lo responda en mayusculas (usa el metodo .toUpperCase() disponible para cualquier string)
convertirMayusculas(mensaje: string): string {
  return mensaje.toUpperCase();
}

//4.Crea la ruta POST "/myFriends/:nombre1/:nombre" que regrese los route param nombre1 y nombre2 como un arreglo empezando por nombre2 (usa el metodo .push() disponible en cualquier arreglo o construye un arreglo con la sintaxis [valor2,valor1])
acomodarAmigos(nombre1: string, nombre2: string): string[]{
  return [nombre2, nombre1];
}