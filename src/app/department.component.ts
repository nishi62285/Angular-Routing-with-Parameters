import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
    selector: 'my-department',
    templateUrl: 'department.component.html'
})

export class DepartmentComponent {

    constructor(private router :Router ){

    }
    departmentClick(val){
        this.router.navigate(["/students",val])
    }
    public departments: any[] = [
        {
            id: 1,
            name: 'Information techonology',
            studentId : 1,
            load : true
        },
        {
            id: 2,
            name: 'Computer Science',
            studentId : 2,
            load : true
        },
        {
            id: 3,
            name: 'Data Science',
            studentId : 3,
            load : false
        },
        {
            id: 4,
            name: 'Math',
            studentId : 1,
            load : false
        },
        {
            id: 5,
            name: 'Cybersecurity',
            studentId : 2,
            load : false
        }
    ]

}