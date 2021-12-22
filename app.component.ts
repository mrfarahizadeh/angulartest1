import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tamrin1';
  username:string='';
  password:string='';
  retypepassword:string='';
  ispasswordmatch:boolean=false;
  public onUsernameInputChanged(e:Event){
    this.username=(<HTMLInputElement>e.target).value;
  }
  public onPasswordInputChanged(e:Event){
    this.password=(<HTMLInputElement>e.target).value;
  }
  public onRetypePasswordInputChanged(e:Event){
    this.retypepassword=(<HTMLInputElement>e.target).value;
    this.ispasswordmatch=this.password !== this.retypepassword ? false : true;
  }
}
