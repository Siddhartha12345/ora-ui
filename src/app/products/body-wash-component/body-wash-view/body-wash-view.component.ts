import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-body-wash-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './body-wash-view.component.html',
  styleUrl: './body-wash-view.component.css'
})
export class BodyWashViewComponent {

}
