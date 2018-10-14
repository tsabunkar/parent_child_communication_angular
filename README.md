# Prarentchildcommunication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

===================================================================================================
Note : In general ->All property , functions in the Component (class) are only accessable by that component only. It cannot access by any other component(i.e-parent,child,etc).
Therefore we need to be explict/Specific which property , func we want to expose to outside/other compo by using @Input(), @Output() decorator
Thus, to make property , function accessable outside the component, we shld use @Input(), @Output() decorator


-----------------------------------------------------------------------------------------------------
# Two components can communicate to each other using 2 ways -
`Parent-child communication`
`Injecting Service (Creating a shared service class)`

CASE SCENARIO : like communication b/w two sibbling compo then , If we do parent-child communication 
its okay but bcomes complex bcoz - If child1 want to communicate to child2 then first child1 need to
communicate to parent then parent need to communicate to child2.
So in this scenario ideal way of communication would be creating a shared service. Using which both the
child1 and child2 can communicate.


-----------------------------------------------------------------------------------------------------
In general if we define css , then it should be applied to all the html element which are using that css
property.
for ex - 
p{
    color : blue;
}
then <p> element defined in any component should be applied with blue color but, In Angular it doesnot
happen ;) 
In Angular, CSS property define in one component belongs to that component only !!
If css defined for parent compo then child compo cannot have that css property, even vice-versa 
holds true.
Thus, Css property defined inside a compo is only applied to that particular component, not to other compo.
This is called "View Encapsulation in Angular"
This feature is similiar to SHADOW DOM.
Shadow dom is a technology which is not supported by all the browser,In shadow dom - each html elem has its
own shadow element behind it.
F12> Element (and then inspect html element u will find) =>
<p _ngcontent-ejo-2 >
</p>
_ngcontent-ejo-2 -> this is set by angular, which helps angular to apply css property only the elem which 
belongs its component.


Note : We can override this view encapsulation provide by angular
@Component({
   -----
  styleUrls: ['./input-panel.component.css'],
  encapsulation : ViewEncapsulation.Emulated //View Encpulation is enabled, u can see angular adding                                                    //attribute like _ngcontent-c2,_ngcontent-c1 etc
})

encapsulation : ViewEncapsulation.Emulated -> View Encpulation is enabled
encapsulation : ViewEncapsulation.None     -> View Encpulation is disabled/removed 
encapsulation : ViewEncapsulation.Native   -> It uses shadow dom technology i.e- same as Emulated (View                                                   Encpulation is enabled but only for browser which supprt                                                    shadow DOM)
By default Angular view encplaution is enabled i.e- ViewEncapsulation.Emulated



-----------------------------------------------------------------------------------------------------
Local Reference variable in Template -> Angular provides a way to declare a refernce variable in Template
/html page. A local reference variable can be placed on any html element ex -
Sytnax (declaring local reference vara) ->  #user_define_name (placed as attribute in any html element)
<div #myVara> </div>
<input #serverName>
This reference vaiable which is declared inside html element will give value as -> The complete html element (all the attribue, properties of that html element).
Note : This refernce variable declared can ONLY be used in Template/html page. It cannot be used in ur (.ts)file


---------------------------------------------------------------------------------------------------------
@ViewChild() decorator ->  for this decorator we shld pass argument as - selector (or) name of the local     reference vara as string (or) component class Name. 
 When local refer vara pass as argum in viewchild decorator it has data type of : ElementRef 

This @ViewChild decorator provide way to access the complete html element inside typescipt (.ts) file.

Thus there r 2 ways to access the complete html element inside the (.ts) typescipt file -
1)Using local Reference variable in Template and passing refernce vara value inside some custome function
2)Using local Reference variable in Template and passing value as argument inside @ViewChild() decorator


---------------------------------------------------------------------------------------------------------
<ng-content></ng-content> -> is the directive, it is called ng-content hook


---------------------------------------------------------------------------------------------------------
Angular Life-cycle hook :-

ngOnChanges() -> (is called after a bound input property changes) It is executed at the start when a compo is created. It also called multiple times when one of our bound input property changes (i.e - property decorated with @input() decorator)

ngOnInit() -> (is called once the component is initalized). It runs after the constructor {}  is executed

ngDoCheck() -> (is called during every changes detection run) It will check/run/executed if any property value changed from .ts file so as to display in Template, or any event occured on the template so as to invoke the respective func,....and soon ...
Thus, this func is executed when event occurs, when observable was resolved, timer was fired ,property was changed, etc..
[This is method runs at background in Angular to detect any changes as specifed above]

ngAfterContentInit() -> (is called after content(ng-content) has been projected into view) this func is invoked when we use concept of <ng-content>

ngAfterContentChecked() > (is called every time the projected content has been changed)

ngAfterViewInit() -> (is called after the component's view (and child views) has been initalized)

ngAfterViewChecked() -> (is called every time the view(and child views) has been checked )

ngOnDestory() -> (is called once the component is about to be destoryed)


---------------------------------------------------------------------------------------------------------


