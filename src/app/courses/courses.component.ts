import { Component, OnInit, Input } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = [
    new Course("SE", 311, "Software Architecture II"),
    new Course("CS", 360, "Programming Language Concepts"),
    new Course("CS", 260, "Data Structures"),
    new Course("CS", 383, "Machine Learning"),
    new Course("CS", 435, "Computational Photography"),
    new Course("MATH", 221, "Discrete Mathematics"),
  	new Course("MATH", 410, "Scientific Data Analysis"),

    new Course("CI", 101, "Comp & Info Design I"),
    new Course("CI", 102, "Comp & Info Design II"),
    new Course("CI", 103, "Comp & Info Design III"),
    new Course("CIVC", 101, "Intro to Civic Engagement"),
    new Course("COM", 230, "Techniques of Speaking"),
    new Course("COM", 270, "Business Communication"),
    new Course("COM", 310, "Technical Communication"),
    new Course("COOP", 101, "Career Mgmt/Profess Dev"),
    new Course("CS", 164, "Intro to Computer Science"),
    new Course("CS", 171, "Computer Programming I"),
    new Course("CS", 172, "Computer Programming II"),
    new Course("CS", 265, "Adv Programming Techniques"),
    new Course("CS", 270, "Mathematical Foundations of Computer Science"),
    new Course("CS", 275, "Web and Mobile App Development"),
    new Course("CS", 281, "Systems Architecture"),
    new Course("CS", 283, "Systems Programming"),
    new Course("ENGL", 101, "Composition and Rhetoric I"),
    new Course("ENGL", 102, "Composition and Rhetoric II"),
    new Course("ENGL", 103, "Composition and Rhetoric III"),
    new Course("FIN", 150, "Personal Finance"),
    new Course("MATH", 122, "Calculus II"),
    new Course("MATH", 123, "Calculus III"),
    new Course("MATH", 201, "Linear Algebra"),
    new Course("PHEV", 145, "Weather I: Climate & Global"),
    new Course("PHYS", 101, "Fundaments of Physics I"),
    new Course("PHYS", 102, "Fundaments of Physics II"),
    new Course("PHYS", 201, "Fundaments of Physics III"),
    new Course("PSY", 101, "General Psychology I"),
    new Course("SE", 310, "Software Architecture"),
    new Course("SOC", 101, "Introduction to Sociology"),
    new Course("UNIV", 101, "The Drexel Experience")
  ];

  @Input() public num_to_show: number = this.courses.length;
  @Input() public show_all: boolean = true;

  constructor() {}

  ngOnInit(): void {
  }  
}
