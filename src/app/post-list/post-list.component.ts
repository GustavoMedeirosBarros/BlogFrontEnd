import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-list',

  imports: [RouterLink, CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  posts = [
    {
      id: 1,
      imagem: 'hollow.jpg',
      titulo: 'Os Melhores Jogos Indies de 2023',
      conteudo:
        'Descubra os jogos independentes que estão surpreendendo os jogadores este ano, com gráficos incríveis e histórias cativantes.',
      data: '11/03/2025',
    },
    {
      id: 2,
      imagem: 'zelda.jpg',
      titulo: 'Review: The Legend of Zelda: Tears of the Kingdom',
      conteudo:
        'Analisamos o aguardado jogo da franquia Zelda, explorando seus novos mecanismos, mundo aberto e enredo emocionante.',
      data: '10/03/2025',
    },
    {
      id: 3,
      imagem: 'eldenRing.jfif',
      titulo: 'Dicas para Iniciantes em Elden Ring',
      conteudo:
        'Confira algumas dicas essenciais para quem está começando no desafiadoro mundo de Elden Ring e quer sobreviver às primeiras horas.',
      data: '09/03/2025',
    },
  ];
}