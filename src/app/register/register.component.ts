import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../module/Student';
import { StudentsComponent } from '../students/students.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
