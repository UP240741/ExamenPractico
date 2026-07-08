//1.Crea una ruta GET "/saludar/:nombre" que responda "Hola <nombre>"
@Get('saludar/:nombre')
saludar(@Param('nombre') nombre: string){
  return this.appService.saludar(nombre);
}

//2.Crea una ruta PUT "/multiplicar" que lea dos query param llamados "a" y "b" los convierta a numeros y responda el resultado de multiplicar ambos numeros.
@Put('multiplicar')
multiplicar(@Query('a') a:string, @Query('b') b: string) {
  return this.appService.multiplicar(Number(a), Number(b));
}

//3.Crea la ruta PATCH "/mayus" que lea un query param llamado "mensaje" y lo responda en mayusculas (usa el metodo .toUpperCase() disponible para cualquier string)
@Patch('mayus')
mayus(@Query('mensaje') mensaje: string) {
  return this.appService.convertirMayusculas(mensaje);
}

//4.Crea la ruta POST "/myFriends/:nombre1/:nombre" que regrese los route param nombre1 y nombre2 como un arreglo empezando por nombre2 (usa el metodo .push() disponible en cualquier arreglo o construye un arreglo con la sintaxis [valor2,valor1])
@Post('myFriends/:nombre1/:nombre2')
myFriends(@Param('nombre1') nombre1: string, @Param('nombre2') nombre2:string){
  return this.appService.acomodarAmigos(nombre1, nombre2);
}


