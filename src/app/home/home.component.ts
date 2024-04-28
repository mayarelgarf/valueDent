import { Component } from '@angular/core';
export interface product{
  name: string,
  image: string,
  price?:number
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent {
products:product[]=[
  {
    name:'Gown',
    image:'../../assets/gown.png'
  },
  {
    name:'Micro Applicator',
    image:'../../assets/micro applicator.png'
  },
  {name:'Saliva Ejector',
  image:'../../assets/Saliva  Ejector.JPG'
  },
  {
    name:'Barrier Film',
    image:'../../assets/Barrier Film.png'
  },
  {
    name:'Dental Cups',
    image:'../../assets/Dental Cups.png'
  },
  {
    name:'Napkins',
    image:'../../assets/Napkins.jpg'
  },
  {
    name:'Over Shoes',
    image:'../../assets/Over Shoes.png'
  },
  {
    name:'Head Cap',
    image:'../../assets/Head Cap.png'
  },
  {
    name:'Latex Gloves',
    image:'../../assets/Latex Gloves.png'
  }
]
}
