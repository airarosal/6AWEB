import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';

import { DataService } from '../../services/data.service';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private data = inject(DataService);

  latest$ = this.data.posts$.pipe(
    map((posts: any[]) => posts.slice(0, 5))
  );

  constructor() {
    this.data.loadPosts();
  }
}
