import { Injectable } from '@angular/core';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArthService {

  constructor() { }

  add(x,y){
    return parseFloat(x)+parseFloat(y);
  }
  
  sub(x,y,cb){
    setTimeout(function(){
      var z = x-y;
      cb(z);
    },1);    
  }

  multiply(x,y){
    var z = x*y;
    return Promise.resolve(z);
  }
  
  divide(x,y){
    var z =x/y;
    return of(z);
  }
  
}