import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {
  postId: number;
  post: any; 
  posts = [
    { id: 1, titulo: 'Post 1', conteudo: 'Conteúdo do post 1' },
    { id: 2, titulo: 'Post 2', conteudo: 'Conteúdo do post 2' },
  ];

  constructor(private route: ActivatedRoute) {
    this.postId = +this.route.snapshot.params['id'];
    this.post = this.posts.find(post => post.id === this.postId);
  }
}
