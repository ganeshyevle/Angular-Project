import { Component } from '@angular/core';

@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.css']
})
export class MainbodyComponent {
  movies: any[] = [
    {
      title: 'The Avengers ',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDPCGTMVY07hgEM3ied7pc7q1HxPzWGCv0Lw&usqp=CAU',
      chores: ['Taking out the trash when its full', 'Taking the trash out for pickup if required.'],
    },
    {
      title: 'GUARDIANS OF THE GALAXY',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4bXY4exM8dLa5dT9jlxCanlHHYdQUOK-lSw&usqp=CAU',
      chores: ['Taking out the trash when its full', 'Taking the trash out for pickup if required.'],
    },
    {
      title: 'Tiger 3',
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMbte8TXJVVgyUQeJ6hFymzdS9l0cBGVhh1g&usqp=CAU',
      chores: ['Sweeping the kitchen floor', 'wiping down countertops.'],
    },
    
    
  ];
  movies2: any[] = [
    {
      title: 'The Avengers ',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDPCGTMVY07hgEM3ied7pc7q1HxPzWGCv0Lw&usqp=CAU',
      chores: ['Taking out the trash when its full', 'Taking the trash out for pickup if required.'],
    },
    {
      title: 'GUARDIANS OF THE GALAXY',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4bXY4exM8dLa5dT9jlxCanlHHYdQUOK-lSw&usqp=CAU',
      chores: ['Taking out the trash when its full', 'Taking the trash out for pickup if required.'],
    },
    {
      title: 'Tiger 3',
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMbte8TXJVVgyUQeJ6hFymzdS9l0cBGVhh1g&usqp=CAU',
      chores: ['Sweeping the kitchen floor', 'wiping down countertops.'],
    },
    
    
  ];
}
