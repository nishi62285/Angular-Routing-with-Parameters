import { Component } from '@angular/core';
import {ActivatedRoute} from  '@angular/router';
@Component({
    selector: 'my-student',
    templateUrl: 'student.component.html'
})

export class StudentComponent {

    studentId  : any
    filteredStudents : any[]
constructor(private act: ActivatedRoute){
    debugger
    act.params.subscribe(x=>{
        debugger
        this.studentId = x['id']
        this.filteredStudents = this.students.filter(item=>item.id==this.studentId);
    })
    //this.filteredStudents = this.students.filter(item=>item.id==this.studentId);
}   

students : any[] =[
{
id : 1,
name:'Sam'
},
{
    id : 1,
    name:'Mac'
},
{
    id : 2,
    name:'John'
},
{
    id : 3,
    name:'Brad'
}
]
}