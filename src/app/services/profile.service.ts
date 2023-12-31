import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private nameSubject = new BehaviorSubject<string | null>(null);
  public name$ = this.nameSubject.asObservable();

  constructor() { }

  public saveName(name: string){
    const message =  `Hi ${name}`
    this.nameSubject.next(message);
  }
}
