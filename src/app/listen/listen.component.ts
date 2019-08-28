import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.css']
})
export class ListenComponent implements OnInit {
ende:number ;
liste: Array<number> ;

  constructor() {
    
   }

  ngOnInit() {

  }
  zaehle(){
    this.liste = [];

    for(let i = 0; i <= this.ende; i=i+1){
      this.liste.push(i);
    }
   this.liste = this.liste.reverse();

    this.liste.pop();
  }



}