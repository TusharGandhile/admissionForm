import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displaylist',
  templateUrl: './displaylist.component.html',
  styleUrls: ['./displaylist.component.scss']
})
export class DisplaylistComponent implements OnInit {
  addmissionformDetails:any[]=[];
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('addmissionformDetails')){
      this.addmissionformDetails=JSON.parse(localStorage.getItem('addmissionformDetails')!);
    }
  }
  DeleteFormDetails(){

  }
  EditFormDetails(index:number){
this.router.navigate(['editform/',index])
  }
}
