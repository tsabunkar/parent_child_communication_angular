import { Component, ViewChild, ElementRef } from '@angular/core';

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
  serverElement: any = [{ name: 'Server', content: "Hi" }];

  onAddServer(severData: { serverName: string, serverContent: string }) {
    this.serverElement.push(
      {
        'name': severData.serverName,
        'content': severData.serverContent
      }
    )
  }

  @ViewChild('mylocalReferVaraCheckBox') mylocalReferProp: ElementRef; //@ViewChild()  decorator -> for this decorator we shld 
  //pass argument as selector (or) name of the local reference vara as string (or) component class Name
  // when local refer vara pass as argum in viewchild decorator it has data type of : ElementRef 

  //This @ViewChild decorator provide way to access the html element inside typescipt (.ts) file
  onChangeOfCheckBox() {
    console.log(this.mylocalReferProp);
    console.log(this.mylocalReferProp.nativeElement);
    console.log(this.mylocalReferProp.nativeElement.checked);
  }

}
