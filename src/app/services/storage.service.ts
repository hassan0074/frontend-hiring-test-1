import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setStorage(item : any,name : string){
    localStorage.setItem(name,item)
  }
  getStorage(name : string){
    return localStorage.getItem(name)
  }
  removeStorage(name :string){
    localStorage.removeItem(name)
  }
}
