import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bs-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  private book = {
    title: "dummy title",
    description: "dummy description",
    unitCost: "123",
    nbOfPages:"234",
    imageURL: "http://ecx.images-amazon.com/images/I/51baRLwlufL._SL160_.jpg",
    language: "English"
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  create() {
    this.router.navigate(['/book-list']);
  }

}
