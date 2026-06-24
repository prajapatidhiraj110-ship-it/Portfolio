import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProjectCard } from '../../../shared/models/portfolio.model';

@Component({
  standalone: true,
  selector: 'app-feature-card',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss'],
})
export class FeatureCardComponent {
  @Input() project!: ProjectCard;
}
