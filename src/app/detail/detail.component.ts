import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { User } from '../user';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  user:User[]=[];

  constructor(private testserv:TestService) { }


  ngOnInit(): void {
    alert(this.testserv.gettodaysdate());
  }
  getalluserinformation(){
    this.testserv.getallusers().subscribe(user=>{
      this.user=user;
    });
  }

}
