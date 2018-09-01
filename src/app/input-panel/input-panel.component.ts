import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-panel',
  templateUrl: './input-panel.component.html',
  styleUrls: ['./input-panel.component.css']
})
export class InputPanelComponent implements OnInit {

  newServerContent: string = "";

  constructor() { }

  ngOnInit() {
  }

  @Output('parentComp_Event') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  //creating our own event emitter, which shld be imported form @angular/core and which accepts partcilar 
  //data type as specified in generics.
  // Thus, EventEmitter is an Object in angular which allow us to emitt our own/custome events.
  //@Output() -> passing data/inform out of the compon (in specific outside of child compo)
  // giving alias name for this custome event as -> parentComp_Event

  //When Add Server btn is clicked then this func will be triggered,Now we want to pass the infor from this
  //child compo(InputPanelComponent) to parent compo(AppComponent)
  onAddServerChildComp() {
    this.serverCreated.emit({ serverName: 'Server1', serverContent: this.newServerContent });
    //This line of code -> will emit the event , Also when this custome event is
    //emitted we r passing some inform/data inside the argument (thus this inform is passed from child compo
    //to parent compo)

  }
}
