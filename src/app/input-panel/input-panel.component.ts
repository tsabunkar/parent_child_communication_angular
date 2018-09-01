import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input-panel',
  templateUrl: './input-panel.component.html',
  styleUrls: ['./input-panel.component.css'],
  encapsulation: ViewEncapsulation.Emulated //View Encpulation is enabled, u can see angular adding attribute like _ngcontent-c2,_ngcontent-c1 etc
  // encapsulation : ViewEncapsulation.None //View Encpulation is disabled/removed 
  // encapsulation : ViewEncapsulation.Native //It uses shadow dom technology i.e- same as Emulated (View Encpulation is enabled but only for browser which supprt shadow DOM)
})
export class InputPanelComponent implements OnInit {

  newServerContent: string = "";

  constructor() { }

  ngOnInit() {
  }

  @Output('childComp_Event') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  //creating our own event emitter, which shld be imported form @angular/core and which accepts partcilar 
  //data type as specified in generics.
  // Thus, EventEmitter is an Object in angular which allow us to emit our own/custome events.
  //@Output() -> passing data/inform out of the compon (in specific outside of this child compo)
  // giving alias name for this custome event as -> childComp_Event

  //When Add Server btn is clicked then this func will be triggered,Now we want to pass the infor from this
  //child compo(InputPanelComponent) to parent compo(AppComponent)
  onAddServerChildComp(localReferVaraForInputElem) {
    console.log(localReferVaraForInputElem);
    console.log(localReferVaraForInputElem.value);

    // this.serverCreated.emit({ serverName: 'Server1', serverContent: this.newServerContent });
    this.serverCreated.emit({ serverName: 'Server1', serverContent: localReferVaraForInputElem.value });
    //This line of code -> will emit the event , Also when this custome event is
    //emitted we r passing some inform/data inside the argument (thus this inform is passed from child compo
    //to parent compo)

  }
}
