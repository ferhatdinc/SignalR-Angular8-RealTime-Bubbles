import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  info: any = {}; 
    
    constructor(private deviceService: DeviceDetectorService,private messageService:MessageService) { }

  ngOnInit() {
    this.epicFunction();  
  }
  Cinsiyet = "true";
  name="";
  color="#F99200";
  send(){
    var gender;
    switch (this.Cinsiyet) {
      case "true":
        gender=true;
        break;
        case "false":
          gender=false;
          break;
      default:
        break;
    }
    console.log(gender);
    this.messageService.sendMessage(this.name,gender,this.info.os,this.info.browser,this.color);
  }
  changeColor(color){
    this.color=color;
    console.log(this.color);
  }
  epicFunction() { 
    this.info = {
      deviceInfo: this.deviceService.getDeviceInfo(),
      isMobile: this.deviceService.isMobile(),
      isTablet: this.deviceService.isTablet(),
      isDesktopDevice: this.deviceService.isDesktop(),
      os:this.deviceService.os,
      browser:this.deviceService.browser
    };
    console.log(this.info)
  }
}
