import { Injectable, EventEmitter } from "@angular/core";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import * as signalR from "@aspnet/signalr";
export interface sendMessageDTO {
  MessageContext: string;
}
@Injectable({
  providedIn: "root"
})
export class MessageService {
  messageReceived = new EventEmitter<Message>();
  connectionEstablished = new EventEmitter<Boolean>();

  private connectionIsEstablished = false;
  private _hubConnection: signalR.HubConnection;
  sendMessageDTO: sendMessageDTO;
  constructor() {}
  createConnection() {
    this._hubConnection = new signalR.HubConnectionBuilder()
      .withUrl("https://www.tripper.site/realtime/messageHub")
      .configureLogging(signalR.LogLevel.Information)
      .build();
  }

  startConnection(): void {
    this._hubConnection
      .start()
      .then(() => {
        this.connectionIsEstablished = true;
        console.log("Hub connection started");
        this.connectionEstablished.emit(true);
      })
      .catch(err => {
        console.log("Error while establishing connection, retrying...", err);
        setTimeout(function() {
          this.startConnection();
        }, 5000);
      });
  }
  message: any = "";
  messageEmits: any = "";
  registerOnServerEvents(): void {
    this._hubConnection.on("ReceiveMessage", (FullName: any, gender: any,os:any,browser:any,color:any) => {
      // message = user + "-" + message + "-" + type;
      // this.messageReceived.emit(message);
      // this.messageEmits = ``;
      //console.log(FullName, gender, os, browser);
      this.message = FullName + "-" + gender + "-" + os+"-"+browser+"-"+color;  
      this.messageReceived.emit(this.message);
    });
  }
  OnConnectedDisconnectedPeople():void{
    this._hubConnection.on("OnConnectedDisconnectedPeople", (ConnectedUserCount:any) => { 
      console.log(ConnectedUserCount);
    });
  }
  sendMessage(FullName: any, gender: any,os:any,browser:any,color:any) { 
    this._hubConnection.invoke("SendMessage", FullName, gender, os, browser,color);
  }
}
