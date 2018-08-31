import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*  
   newServerName: string = "";
   serverElement: any = [];
   onAddServer() {
 
     this.serverElement.push(
       {
         'name': 'Server',
         'content': this.newServerName
       }
     )
 
   } */
  // Refactoring the code the Big component into Several Small Component 
  serverElement: any = [{name :'Server', content :"Hi"}];

}
