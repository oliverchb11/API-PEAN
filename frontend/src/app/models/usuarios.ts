export class Usuarios {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  constructor(id = 0, nombre = '', apellido = '', email = '', telefono = '') {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.telefono = telefono;
  }
}
