import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  welcomeMessage:string = "Welcome to ToDo";
  studentName:any;
  studentSex:any;
  studentContact:any;

  studentArray: any = [  
    {"name":"ashraf","sex":'male',"contact": "12345"},
    {"name":"sumayya","sex":'female',"contact": "12346"},
    {"name":"zidan","sex":'male',"contact": "12347"}
   ]

   deleteStudent(i:any){
     console.log(i)
     this.studentArray.splice(i,1)

   }

   createStudent(){
     var newStudent = {"name":this.studentName,"sex":this.studentSex,"contact":this.studentContact};
     this.studentArray.push(newStudent);
   }
}
