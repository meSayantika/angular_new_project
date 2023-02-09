import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce-site';
  show:any ;
  color: any;
  selectedItem: any;
  chooseItem: any;
  effect:any;
  selectItem:any;
  decItem:any;
  incItem:any;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
 itemList=[{
  id:1,
  img:"https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp",
  title: "Phone" ,
  subtitle:"title",
  description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  like: false,
  incart: 0
 },
 {
  id:2,
  img:"https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp",
  title: "Fashion jewellery" ,
  subtitle:"title",
  description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  like: false,
  incart: 0
 },
 {
  id:3,
  img:"https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp",
  title: "Ethnic sets" ,
  subtitle:"title",
  description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  like: false,
  incart: 0
 },
 {
  id:4,
  img:"https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp",
  title: "Gadgets" ,
  subtitle:"title",
  description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  like: false,
  incart: 0
 },
 {
  id:5,
  img:"https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp",
  title: "Tv and application" ,
  subtitle:"title",
  description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  like: false,
  incart: 0
 }]
  mystyle(){
   if(this.show==""){
    this.show=true
}else{
  this.show=false
}
  }
  likeAct(id:any){
    // console.log(id);
var color =this.itemList.findIndex((item:any)=>item.id==id) 
this.selectedItem=this.itemList[color]
this.selectedItem.like = !this.selectedItem.like
// console.log(this.selectedItem)
  }
  cartAct(id:any){
        // console.log(id);
        var store= this.itemList.findIndex((item:any)=>item.id==id)
        // console.log(store)
        this.chooseItem=this.itemList[store]
       this.chooseItem.incart= ++this.chooseItem.incart
      //  console.log(this.chooseItem);

  }
  addminus(id:any){
    var minus= this.itemList.findIndex((item:any)=>item.id==id)
    this.decItem=this.itemList[minus]
    this.decItem.incart= --this.decItem.incart
  
  }
  addplus(id:any){
    var plus= this.itemList.findIndex((item:any)=>item.id==id)
    this.incItem=this.itemList[plus]
    this.incItem.incart= ++this.incItem.incart
  }
  eyeAct(id:any){
    // console.log(id);
    var effect=this.itemList.findIndex((item:any)=>item.id==id)
    this.selectItem=this.itemList[effect]
    console.log(this.selectItem);

  }
}
