import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  bmi_list = [];
  weight_list = [];
  height_list = [];
  weight="";
  height="";
  pushCal = function() {
    if(this.weight != "" && this.height != ""){
      this.weight_list.push(this.weight);
      this.height_list.push(this.height);
      this.bmi_list.push((this.weight)/(this.height**2));
      this.weight ="";
      this.height ="";
    }

  }
  removeItem = function(index){
    this.bmi_list.splice(index,1);
    this.weight_list.splice(index,1);
    this.height_list.splice(index,1);
  }
  
}
