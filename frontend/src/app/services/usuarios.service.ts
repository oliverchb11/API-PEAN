import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  usuarios: Usuarios[];
  usuariosSelect: Usuarios;
  readonly URL_API = 'http://localhost:4000/usuario/';
  constructor(private http: HttpClient) {
    this.usuariosSelect = new Usuarios();
  }

  getUsuarios() {
    return this.http.get(this.URL_API);
  }
  postUsuarios(usuario: Usuarios) {
    return this.http.post(this.URL_API, usuario);
  }
  updateUsuarios(usuario: Usuarios) {
    return this.http.put(this.URL_API, usuario);
  }
  deleteUsuarios(id: number) {
    return this.http.delete(this.URL_API + `${id}`);
  }
}
