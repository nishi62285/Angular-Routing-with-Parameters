import {Injectable,OnInit} from '@angular/core'
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router'

@Injectable()
export class AuthService {

    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    {
    debugger
    return this.canload(route.params['id'])        
    }

    students : any[] =[
        {
        id : 1,
        name:'Sam',
        load :true

        },
        {
            id : 1,
            name:'Mac',
            load :true
        },
        {
            id : 2,
            name:'John',
            load :true
        },
        {
            id : 3,
            name:'Brad',
            load :true
        }
        ]
    canload(val):boolean{
       //const input = window.confirm('want to navigate?')
        return this.students.find(x=>x.id == val).load
    }
}
