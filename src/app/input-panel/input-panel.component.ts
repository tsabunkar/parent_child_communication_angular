import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-panel',
  templateUrl: './input-panel.component.html',
  styleUrls: ['./input-panel.component.css']
})
export class InputPanelComponent implements OnInit {

  newServerName: string = "";

  constructor() { }

  ngOnInit() {
  }


  onAddServer() {

   /*  this.serverElement.push(
      {
        'name': 'Server',
        'content': this.newServerName
      }
    ) */

  }

}
