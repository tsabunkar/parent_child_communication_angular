import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-panel',
  templateUrl: './display-panel.component.html',
  styleUrls: ['./display-panel.component.css']
})
export class DisplayPanelComponent implements OnInit {

 /*  @Input() itemObj: { name: string, content: string }; */
  //This is not the value for itemObj property/variable, 
  //it is the datatype of itemObj property, saying itemObj is of type Object,
  // which has name and content property
  //but refactor way wuld be by creating a class which has this property and 
  //then assiging this itemObj property with that class type
  //Now we want to pass this itemObj property from displayPanelCompo (child comp)
  // to inputPanelComponent (Parent comp), which can be done by @Input() decorator
  //@Input() -> is property level decorator
  //@Component() -> is class level decorator 
  //@Input() -> allows the inform(itemObj value) to flow from Parnet Compon to
  //Child Compon 


  @Input("childCompo_Property") itemObj: { name: string, content: string };//Assigning the Alias to Custome properties

  constructor() { }

  ngOnInit() {
  }

}
