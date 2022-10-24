import { DOCUMENT } from '@angular/common';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  a:string='Ahalya';
  b='21';
  status=true;
  mobiles=['redmi','iphone','samsung'];
  name1='sravani';
  name2='ahalya';
  money=2333;
  perfomance=5;
  todaydate=new Date();
  document:any;
  constructor(@Inject(DOCUMENT)document:Document,private testserv:TestService){
    this.document=document;
  }

   name:undefined;
   
  ngOnInit(): void {
    
    // confirm ('hello this is from homecomponent oninit');
    alert(this.testserv.gettodaysdate());
    
  }

 // printdata(event:any){
   // alert(this.name);
    //alert(this.document.getElementById('doctest').value);

    printdata(event:any){
      alert(this.testserv.getMyName());
    }
    
  }




