import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JourneyItem } from '../../../shared/models/portfolio.model';

@Component({
  standalone: true,
  selector: 'app-timeline-card',
  imports: [CommonModule],
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.scss'],
})
export class TimelineCardComponent {
  @Input() item!: JourneyItem;
}
