import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {



  usuariosRegistrados = [
    {
        usuario: "nalaberata",
        password: "09381254Nala*",
        email: "nala@gmail.com"
    },
    {
        usuario: "conan123",
        password: "123456778Conan*",
        email: "conan@gmail.com"
    },
    {
        usuario: "guffyt",
        password: "98263489Guffy*",
        email: "guffy@gmail.com"
    },
    {
        usuario: "musicacool",
        password: "98612836Ms*",
        email: "musica@gmail.com"
    },
    {
        usuario: "pepito",
        password: "43874268Pepe*",
        email: "Pepe@gmail.com"
    }
]
token: string = 'FCTYDXCJYCUY56187LK9O964181851IHOHOIHO15819981515JUHUJ4'


  formularioRegistro: FormGroup = this.fb.group({
    userName: ['', Validators.required],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/
        ),
      ],
    ],
  });

  formularioSesion: FormGroup = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });




  constructor(private fb: FormBuilder,private router : Router) {}

  get fc() {
    return this.formularioRegistro.controls;
  }

  get fv() {
    return this.formularioRegistro.value;
  }

  registro() {
   

    if(this.formularioRegistro.valid){
      let usuarioname = this.formularioRegistro.get('userName')?.value
      let contraseña = this.formularioRegistro.get('password')?.value
      let correo =this.formularioRegistro.get('email')?.value
      
      
      let nuevoUsuario = {
        usuario : usuarioname,
        password : contraseña,
        email : correo
      }
      
      console.log(nuevoUsuario)
      this.usuariosRegistrados.push(nuevoUsuario)
      console.log(this.usuariosRegistrados)
      this.formularioRegistro.reset()
      console.log('Registrado con exito')

    }


  }

  iniciarsesion(){

    
    
    if(this.formularioSesion.valid){

      let usuario = this.formularioSesion.get('userName')?.value
      let contraseña = this.formularioSesion.get('password')?.value

      console.log(usuario, contraseña)

      let usuarioEncontrado = this.usuariosRegistrados.find(usuarioRegistrado => usuarioRegistrado.usuario == usuario && usuarioRegistrado.password == contraseña)

      console.log(usuarioEncontrado)
      if(usuarioEncontrado){
        sessionStorage.setItem('token', this.token)
        sessionStorage.setItem('usuario', JSON.stringify(usuarioEncontrado) )
        this.router.navigate(['/home'])
      }

    }else{
      console.log('Digite usuario y contraseña')
    }
  }
}
