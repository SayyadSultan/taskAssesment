import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {


  myForm!: FormGroup;

  Textarea = new FormControl();

  showDropdown: boolean = false;
  defaultvalue: any = '@';

  inputValue=''

  filterOptions:any=[]

  constructor() {}

  arrayData: any = [
    `Gina Williams`,
    `Jake Williams`,
    `Jamie John`,
    `John Doe`,
    `Jeff Stewart`,
    `Paula M. Keith`,
  ];

  ngOnInit(): void {
    // this.Textarea.valueChanges.subscribe((value: any) => {
    //   console.log('value', value);

    //   if (value.includes(this.defaultvalue)) {
    //     this.showDropdown = true;
    //     console.log('this.showDropdown', this.showDropdown)
    //   }
    // });

  }

  onInputChange(){
if(this.inputValue.includes('@')){
  this.showDropdown=true
  const searchTerm=this.inputValue.split('@')[1]
  this.filterOptions=this.arrayData.filter((option:any)=>option.includes(searchTerm))
}else{
  this.showDropdown=false
}
  }

  onSelect(e:any){
    console.log('e', e.target.value)
    this.inputValue=e.target.value
    this.showDropdown=false
  }

}
