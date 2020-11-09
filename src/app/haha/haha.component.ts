
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-haha',
  templateUrl: './haha.component.html',
  styleUrls: ['./haha.component.css']
})
export class HahaComponent implements OnInit {

@Input() test

i:number=0;

test1:string[]=["fadafafa","gfgfrgrg","kuikikik"];
test2:string;
jojo:any;
form: FormGroup;
frage:string[];

  constructor() { 

    this.form= new FormGroup({
      test2: new FormControl()
      
    })

  }

  ngOnInit(): void {
    this.test2=this.test1[0];
    console.log("ja"+this.test);
  }


  push(){
    if(this.test1.length>this.i){
      this.test2=this.test1[this.i];
      this.i=this.i+1;

      console.log(this.jojo=this.form.value.test2)
      if(this.form.value.test2=="nein"){
        console.log("push db")//false
      }
      else{//true
      }
   }else{
     console.log("ende")
   }
  }
}
