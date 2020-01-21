import { Injectable } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts=[
    
    {id:1,name:"Robot 1",description:'contact-data',email:'robo@gmail.com'},
    {id:2,name:"xyz",description:'contact d1 data',email:'xyz@gmail.com'},
    {id:2,name:"ps",description:'contact 1dd data',email:'psps@gmail.com'},
    {id:2,name:"pspss",description:'contact s1 data',email:'ps@gmail.com'}
  ];




  


  constructor() { }
  public getContacts():Array<{id, name, description, email}>
  {
    return this.contacts;
  }
 

  public createContact(contact: {id,name,description,email })
  {
    this.contacts.push(contact);
  }




}