import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  addmissionForm!:FormGroup;
  addmissionformDetails:any=[];
  MySkills=['Angular','React','JQuery','Node','VeuJs','Java'];
  Subjects=['Physics','Chemistry','Bio','Maths'];
  checkarr!:FormArray;
  checkarr1!:FormArray;
  edu!:FormArray;
  id:any;
  formdata:any;
  flag=true;
  constructor(private fb:FormBuilder,private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(localStorage.getItem('addmissionformDetails')){
      this.addmissionformDetails=JSON.parse(localStorage.getItem('addmissionformDetails')!);
    }
this.id=this.route.snapshot.params['id']
this.formdata=this.addmissionformDetails[this.id];
console.log(this.formdata);

    this.addmissionForm=this.fb.group({
      FirstName:[this.formdata.FirstName,Validators.required],
      LastName:[this.formdata.LastName,Validators.required],
      Address:[this.formdata.Address,Validators.required],
      MaritalStatus:[this.formdata.MaritalStatus,Validators.required],
      Gender:[this.formdata.Gender,Validators.required],
      skills:this.fb.array([]),
      Education:this.fb.array([]),

    })
     // this.addEducation()
    
for(let i=0;i<this.formdata.Education.length;i++){
  this.edu=this.addmissionForm.controls['Education'] as FormArray;
  this.edu.push(this.fb.group({
    Degree:[this.formdata.Education[i].Degree,Validators.required],
    Percentage:[this.formdata.Education[i].Percentage,Validators.required],
    specialization:[this.formdata.Education[i].specialization,Validators.required],
    subjects:this.fb.array([]),
  }))
}
  }

  UpdateForm(){
    if(this.flag){
      this.checkarr?.value.push(this.formdata.skills)
    }
    
    this.addmissionformDetails[this.id]=this.addmissionForm.value;
    localStorage.setItem('addmissionformDetails',JSON.stringify(this.addmissionformDetails))
console.log(this.addmissionForm.value);

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
       OnChangeCkeckBox(event:any,i:any){
        this.checkarr=this.addmissionForm.controls['skills'] as FormArray
   this.flag=false;
              (this.checkarr.value=="")?this.checkarr.value.push(...this.formdata.skills):"";
              (event.target.checked)?this.checkarr.value.push(event.target.value): this.checkarr.value.splice(i, 1);
        // if(event.target.checked){
        //   this.checkarr.value.push(event.target.value);
        // }else{
        //   this.checkarr.value.find((item:AbortController)=>{
        //     if(event.target.value==item){
        //       this.checkarr.value.splice(i,1);
        //     }
             
        //   })
        // }
          }
}
