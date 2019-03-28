import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }
  name;
  gst;
  price;
  quantity;
  discount;
  cart=[];
  addToBill(){
   var product = {
      name:'',
      gst:'',
      price:'',
      quantity:'',
      discount:'',
      value:''
    }
    product.name=this.name;
    product.price=this.price;
    product.quantity=this.quantity;
    product.discount=this.discount;
    product.gst=this.gst;
    var b=this.price*this.quantity;
    this.cart.push(product);
    console.log(this.cart)
  }
  ngOnInit() {
  }

}
