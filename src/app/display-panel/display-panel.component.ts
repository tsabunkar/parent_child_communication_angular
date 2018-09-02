import {
  Component, OnInit, Input, OnChanges, SimpleChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy, ViewChild, ElementRef
} from '@angular/core';

@Component({
  selector: 'app-display-panel',
  templateUrl: './display-panel.component.html',
  styleUrls: ['./display-panel.component.css']
})
export class DisplayPanelComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterContentInit, AfterViewChecked, OnDestroy {

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


  //  #################### LIFE-CYCLE HOOK ##########################

  //Life cycle hook called in below order :- 

  constructor() {
    console.log('constructor called !!');
  }


  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('ngOnChanges called');
    console.log(changes);//gives the current state of web pages
    //this func can used if we want to do state management of an elemt
  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('ngOnInit called');
    console.log('Text content is : ', this.headingVara.nativeElement.textContent);//we wont be able to 
    //access the text value here in ngOnInit() method
  }

  ngDoCheck() {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('ngDoCheck called'); //Whenever angular checks for any changes then this functon is invoked
  }

  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('ngAfterContentInit called');

  }

  ngAfterContentChecked() {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('ngAfterContentChecked called');//it is called after any change is detected by angular
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('ngAfterViewInit called');
    console.log('Text content is : ', this.headingVara.nativeElement.textContent);//In this method ngAfterViewInit()
    //we will be getting the value for headingVara variable
    //Thus, After view init method [ ngAfterViewInit() ] we get access to template / html elements,
    //but before this life-cycle hook we can access any html elements
  }

  ngAfterViewChecked() {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void { //This won't be called untill & unless we called it explicity by emitting an event
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('ngOnDestroy called');
  }

  //headingVara value can only be accessed after ngAfterViewInit() method is called/ivoked by angular
  @ViewChild('divHeading') headingVara: ElementRef;
}
