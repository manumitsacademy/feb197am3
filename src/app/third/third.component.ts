import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  databases;

  constructor(public httpClient:HttpClient) { }
 
  ngOnInit() {

  }
  url="https://api.mlab.com/api/1/databases/feb197amajs/collections/employee?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz";
  abc(){
    this.httpClient.get(this.url).subscribe((res)=>{
      this.databases = res;
      console.log(res);
    });
  }
  xyz(myEmployee){   
    console.dir(myEmployee);
    /*this.httpClient.post(this.url,myEmployee).subscribe((res)=>{
      console.log(res);
      this.abc();
    })*/
  }
  del(i){
    this.httpClient
    .delete("https://api.mlab.com/api/1/databases/feb197amajs/collections/employee/"+i+"?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz")
    .subscribe((res)=>{
      console.log(res);
      this.abc();
    });
  }
  ppq(){
    console.log("SUbmitted")
  }
}
