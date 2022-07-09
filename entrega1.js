
class Usuario{
    constructor (nombre, apellido, libros, mascotas) {
 this.nombre = nombre;
 this.apellido = apellido;
 this.libros = libros;
 this.mascotas = mascotas;
}
getFullName(){
    return `${this.nombre} ${this.apellido}`;
}
addMascotas(mascota){
    this.mascotas.push(mascota);
}
countMasctotas(){
    return this.mascotas.length; 
}
addBook(nombre, autor){
    this.libros.push({
        nombre,
        autor
    });
}
getBookNames() {
    return this.libros.map(libro => libro.nombre);
}
}
 
const usuario = new Usuario('luna', 'gatica',[{nombre:'la batalla del futuro', autor:'Mateo & Augusto Salvatto'}], ['toto','nestor'])

console.log('lista de nombres de libros previo', usuario.getBookNames())
  usuario.addBook('It','Stephen King');
  usuario.addBook('Rayuela','Julio Cortázar');
console.log('lista de nombres de libros posterior', usuario.getBookNames())
console.log('cantidad de mascotas previo', usuario.countMasctotas());
  usuario.addMascotas('enzo')
console.log('cantidad de mascotas finales', usuario.countMasctotas());
console.log('nombre completo', usuario.getFullName());

