import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reto01',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reto01.component.html',
  styleUrl: './reto01.component.css'
})
export class Reto01Component {
Email:string = " ";
Password:string = " ";
Repetirpswd:String = " ";
mensaje: String = ""
Validacion():void{
  if(this.Password == this.Repetirpswd){
    this.mensaje = "Bienvenido"
  }else{
    this.mensaje= "Usuario o contraseña invalida"
  }
}
}
