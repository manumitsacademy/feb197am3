import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { HttpClientModule } from '@angular/common/http';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component'
@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    FirstComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',
        component:FirstComponent
      },
      {
        path:'sec',
        component:SecondComponent
      },
      {
        path:'third',
        component:ThirdComponent
      },
      {
        path:'fourth',
        component:FourthComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
