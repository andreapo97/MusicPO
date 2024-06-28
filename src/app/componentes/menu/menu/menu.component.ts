import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

listasReproduccion = [
{
  id: 1,
  nombre: "salsa",
  imagen: "https://musicandote.com/wp-content/uploads/2014/04/salsa.jpg"
},
{
  id: 2,
  nombre: "rock",
  imagen: "https://musicandote.com/wp-content/uploads/2014/04/salsa.jpg"
},
{
  id: 3,
  nombre: "tecno",
  imagen: "https://musicandote.com/wp-content/uploads/2014/04/salsa.jpg"},
{
  id: 1,
  nombre: "valada",
  imagen: "https://musicandote.com/wp-content/uploads/2014/04/salsa.jpg"},
{
  id: 1,
  nombre: "valada",
  imagen: "https://musicandote.com/wp-content/uploads/2014/04/salsa.jpg"},
{
  id: 1,
  nombre: "valada",
  imagen: "https://musicandote.com/wp-content/uploads/2014/04/salsa.jpg"},
{
  id: 1,
  nombre: "valada",
  imagen: "https://musicandote.com/wp-content/uploads/2014/04/salsa.jpg"},
{
  id: 1,
  nombre: "valada",
  imagen: "https://musicandote.com/wp-content/uploads/2014/04/salsa.jpg"},
{
  id: 1,
  nombre: "valada",
  imagen: "https://musicandote.com/wp-content/uploads/2014/04/salsa.jpg"},
{
  id: 1,
  nombre: "valada",
  imagen: "https://musicandote.com/wp-content/uploads/2014/04/salsa.jpg"},
{
  id: 1,
  nombre: "valada",
  imagen: "https://musicandote.com/wp-content/uploads/2014/04/salsa.jpg"},
]


constructor(private router : Router){

}

cerrarsesion(){
this.router.navigate(['/'])
}

}
