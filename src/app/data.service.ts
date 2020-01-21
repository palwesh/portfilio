import { Injectable } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts=[
    
    {id:1,name:"nawaz",description:'contact-data',email:'shiva@gmail.com'},
    {id:2,name:"bande",description:'contact 1 data',email:'mohan@gmail.com'}
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