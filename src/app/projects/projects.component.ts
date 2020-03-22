import { Component, OnInit } from '@angular/core';
import { Project } from './project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects = [
    new Project("https://github.com/perlick/LEDDesigner", "LED designer - Arduino (Fall 2019)"),
    new Project("https://github.com/perlick/wasm_sorting", "WASM Sorting - Web Assembly (Winter 2019)"),
    new Project("https://www.cs.drexel.edu/~mfp46/projects/gallery.html", "Graphic design - (2019)"),
    new Project("https://www.cs.drexel.edu/~mfp46/projects/virtualPet.html", "Trainable Virtual Pet - AI (Fall 2017)")
  ];
}
