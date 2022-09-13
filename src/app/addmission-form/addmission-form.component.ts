import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addmission-form',
  templateUrl: './addmission-form.component.html',
  styleUrls: ['./addmission-form.component.scss']
})
export class AddmissionFormComponent implements OnInit {
  addmissionForm!:FormGroup; 
  MySkills=['Angular','React','JQuery','Node','VeuJs','Java'];
  Subjects=['Physics','Chemistry','Bio','Maths']
  checkarr!:FormArray;
   checkarr1!:FormArray;
  edu!:FormArray;
  arr=[1,2];
  addmissionformDetails:any[]=[];
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    if(localStorage.getItem('addmissionformDetails')){
      this.addmissionformDetails=JSON.parse(localStorage.getItem('addmissionformDetails')!);
    }
    this.addmissionForm=this.fb.group({
      FirstName:['',Validators.required],
      LastName:['',Validators.required],
      Address:['',Validators.required],
      MaritalStatus:['',Validators.required],
      Gender:['',Validators.required],
      skills:this.fb.array([]),
      Education:this.fb.array([]),

    })
    
      this.addEducation()
    
  }
  
  OnChangeCkeckBox(event:any,i:any){
this.checkarr=this.addmissionForm.controls['skills'] as FormArray
if(event.target.checked){
  this.checkarr.value.push(event.target.value);
}else{
  this.checkarr.value.find((item:AbortController)=>{
    if(event.target.value==item){
      this.checkarr.value.splice(i,1);
    }
     
  })
}
  }
  
  SubmitForm(){
    console.log(this.addmissionForm.value);
    this.addmissionformDetails.push(this.addmissionForm.value)
    localStorage.setItem('addmissionformDetails',JSON.stringify(this.addmissionformDetails));
    this.addmissionForm.reset();
    }
    
    addEducation(){
 this.edu=this.addmissionForm.controls['Education'] as FormArray;
this.edu.push(this.fb.group({
  Degree:['',Validators.required],
  Percentage:['',Validators.required],
  specialization:['',Validators.required],
  subjects:this.fb.array([]),
}))
    }
    ed(){
      return this.addmissionForm.controls['Education'] as FormArray;
    }
  
    OnChangeSubject(eve:any,i:any,j:any){
      
      this.checkarr1=this.ed().at(i).get('subjects') as FormArray;
  if(eve.target.checked){
   this.checkarr1.value.push(eve.target.value)
  }else{
    this.checkarr1?.value.splice(j,1);
  }
    }

   
}
