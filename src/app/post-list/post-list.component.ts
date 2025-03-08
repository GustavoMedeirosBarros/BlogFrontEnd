import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-list',
  imports: [RouterLink, CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
posts = [
  {
  id: 1,
  titulo: 'a',
  conteudo: 'b',
  },
  {
  id: 2,
  titulo: 'c',
  conteudo: 'd',
  } 
];
}
