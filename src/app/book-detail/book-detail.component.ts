import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bs-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  private book = {
    title: "dummy title",
    description: "dummy description",
    unitCost: "123",
    isbn: "1234-3456-34564",
    nbOfPages:"234",
    language: "English"
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  delete() {
    // Invoke HTTP DELETE
    this.router.navigate(['book-list']);
  }

}
