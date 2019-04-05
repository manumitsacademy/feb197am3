import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms'
import { formControlBinding } from '@angular/forms/src/directives/ng_model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {

  constructor(public fb:FormBuilder,public http:HttpClient) { }

  ngOnInit() {
    this.studentForm.valueChanges.subscribe(()=>{console.log("value changes called")})
  }
  url="https://api.mlab.com/api/1/databases/manumits/collections/courses?"
  apiKey="ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz";
  studentForm = new FormGroup({
    firstname : new FormControl("",[Validators.required],[]),
    lastname: new FormControl(""),
    course:new FormControl("")
  })

  courseForm = this.fb.group({
    courseName:["",[Validators.required,Validators.minLength(3),this.abc.bind(this)],[this.xyz.bind(this)]],
    courseCost:[],
    courseDuration:[]
  })
  courseFormReset(){
    this.courseForm.reset();
  }
  xyz(v){
    return this.http.get(`${this.url}q={'coursename':'${v.value}'}&apiKey=${this.apiKey}`).toPromise().then((res)=>{
      if(res['length']!=0) {
        return Promise.resolve({'error':'blah blah'})
      }
      else{
        return Promise.resolve(null)
      }
    })
  }

  abc(v){
    if(v.value.indexOf(" ")!=-1){
      console.log(this.courseForm)
      return {'spaceError':'Course Name Should not consist spaces'}
    }    
    else{
      return null;
    }
  }

  addStudent(){
    console.log(this.studentForm)
  }

  addCourse(){
    console.log(this.courseForm)
  }
}
