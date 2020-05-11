import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuarios } from 'src/app/models/usuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  formulario: FormGroup;
  usuario: Usuarios[];
  constructor(
    private formBuilder: FormBuilder,
    public userService: UsuariosService
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      telefono: ['', Validators.required],
    });
    this.getUsuarios();
  }

  postUsuarios(usuarioForm: NgForm) {
    this.userService.postUsuarios(usuarioForm.value).subscribe((res) => {
      this.getUsuarios();
      this.resetForm(usuarioForm);
      console.log(res);
    });
  }
  getUsuarios() {
    this.userService.getUsuarios().subscribe((res) => {
      this.usuario = this.userService.usuarios = res as Usuarios[];
      console.log(res);
    });
  }
  updateUsuarios(usuario: Usuarios) {
    this.userService.usuariosSelect = usuario;
    this.userService.updateUsuarios(usuario).subscribe((res) => {
      console.log('usuario actualizado correctamente');
    });
  }
  deleteUsuario(id: number) {
    this.userService.deleteUsuarios(id).subscribe((res) => {
      console.log('usuario emiliminado correctamente');
      console.log(res);
    });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.userService.usuariosSelect = new Usuarios();
    }
  }
}
