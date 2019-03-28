import { Component } from '@angular/core';
import { ArthService } from '../arth.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent{

  num1;
  num2;
  constructor(public arthService:ArthService){}
  
  abc(){
    console.log(this.arthService.add(this.num1,this.num2));
  }

  minus(){
    this.arthService.sub(this.num1,this.num2,function(res){console.log(res)});
    console.log("Im in minus last line");
  }

  mul(){
    this.arthService.multiply(this.num1,this.num2).then(function(res){
      var r = res % 100;
      var n = res/100;
      if(n==2){
        console.log("two hundred")
      }
      n=r/10;
      if(n==16){
        console.log("sixteen")
      }
    });
    console.log("Im in multiplication function last line");    
  }
}
