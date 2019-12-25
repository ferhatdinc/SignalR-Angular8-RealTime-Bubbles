import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { DeviceDetectorService } from "ngx-device-detector"; 
import * as bubbles from '../../assets/bubbles.js' 
import { MessageService } from '../services/message.service';
@Component({
  selector: 'app-bubbles',
  templateUrl: './bubbles.component.html',
  styleUrls: ['./bubbles.component.scss']
})
export class BubblesComponent implements OnInit {

  constructor(
    private deviceService: DeviceDetectorService,
    private messageService:MessageService,
    private _ngZone: NgZone
  ) {
    this.subscribeToEvents();
   }
  info: any = {}; 
  ngOnInit() {  
    bubbles.bubbles();  
    this.epicFunction();  
  }   
  ekleNode(label:any, color:any){ 
    bubbles.addNode(label,color);  
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
  message: any = {}; 
  private subscribeToEvents(): void {
    this.messageService.messageReceived.subscribe((message: any) => {
      this._ngZone.run(() => {  
        this.ekleNode(message.split("-",5)[0],message.split("-",5)[4]);
        console.log(message.split("-",5)[4]);
      });
    });
  } 
}
