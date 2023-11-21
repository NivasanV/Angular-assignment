import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Student } from '../../module/Student';

@Component({
  selector: 'app-student-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-update.component.html',
  styleUrl: './student-update.component.css'
})
export class StudentUpdateComponent {
  @Input()
  updatedStudent = new Student(0,'',0,0,[]);

  // to send data from child to parent, we need to use @Output Decorator
  @Output()
  studentEmitter = new EventEmitter<Student>(); // 1st step
  performUpadte(){
    this.studentEmitter.emit(this.updatedStudent); // 2nd step
  }
}
