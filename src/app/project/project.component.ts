import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  pageTitle: String = 'Add Project';
  constructor() { }

  ngOnInit() {
  }

}
