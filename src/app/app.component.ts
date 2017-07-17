import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string = 'Office UI Fabric test component';
  textFieldValue: string = 'Testing text field';
  anotherTextFieldValue: string = 'Testing another value';
  
  button1Click() {
    alert("button1 clicked!");
  }

  button2Click() {
    alert("button2 clicked!");
  }

  messageBannerActionButtonClick() {
    alert("message banner button clicked!");
  }

  messageBannerActionButton2Click() {
    alert("message banner button #2 clicked!");
  }

  messageBannerCloseButtonClick() {
    alert("Banner close button clicked!");
  }

  dropdownValues: {value: string, text: string}[] = [
    {'value': 'mø', 'text': 'moo'},
    {'value': 'mjau', 'text': 'meow'},
    {'value': 'voff', 'text': 'woof'}
  ];
  dropdownSelected = this.dropdownValues[1].value;
  dropdownPlaceholder = 'Please select a sound...';
  dropdownPlaceHolderSelected = '-1';
  

  radioValuesWithDisabled: {value: string, text: string, disabled: boolean}[] = [
    {'value': 'banan', 'text': 'Banana', 'disabled': false},
    {'value': 'eple', 'text': 'Apple', 'disabled': false},
    {'value': 'druer', 'text': 'Grapes', 'disabled': true},
    {'value': 'ananas', 'text': 'Pineapple', 'disabled': false}
  ];
    radioValues: {value: string, text: string}[] = [
    {'value': 'grønn', 'text': 'Green'},
    {'value': 'rød', 'text': 'Red'},
    {'value': 'blå', 'text': 'Blue'},
    {'value': 'gul', 'text': 'Yellow'}
  ];

  radioLabel: string = 'Select color:'
  radioSelected = this.radioValues[1].value;
  radioSelectedFruit = '';
  
  messageBarText = 'Some random, medium length text for the message bar here. Feel free to add <i>html</i> formatting as well. Some random, medium length text for the message bar here. Feel free to add <i>html</i> formatting as well';
  
  constructor() {}

  ngOnInit() {

  }

}



