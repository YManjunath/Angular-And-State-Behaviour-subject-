import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  name$ = this.profileService.name$;

  constructor(private profileService: ProfileService){}

  ngOnInit(){
  }

  saveName(name:string){
    console.log('My name is _____', name);
    this.profileService.saveName(name)
  }

}
