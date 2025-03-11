import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css',
})
export class PostDetailComponent {
  postId: number;
  post: any;
  posts = [
    {
      id: 1,
      titulo: 'Os Melhores Jogos Indies de 2023',
      conteudo:
        '2023 foi um ano incrível para os jogos independentes. Aqui estão alguns dos melhores títulos que você não pode perder:<br><br>' +
        '1. <strong>Hollow Knight: Silksong</strong> - A sequência do aclamado Hollow Knight promete trazer novos desafios, inimigos e um mundo ainda mais vasto para explorar.<br>' +
        '2. <strong>Sea of Stars</strong> - Um RPG inspirado nos clássicos dos anos 90, com combates estratégicos e uma história emocionante.<br>' +
        'Esses jogos mostram que os indies continuam inovando e entregando experiências únicas. Qual deles você está mais ansioso para jogar?',
      data: '11/03/2025',
    },
    {
      id: 2,
      titulo: 'Review: The Legend of Zelda: Tears of the Kingdom',
      conteudo:
        'The Legend of Zelda: Tears of the Kingdom é a sequência direta de Breath of the Wild e eleva a franquia a novos patamares. Aqui estão os destaques:<br><br>' +
        '1. <strong>Novas Mecânicas</strong> - A habilidade Ultrahand permite criar veículos e estruturas, enquanto a Fuse permite combinar armas e itens para criar equipamentos poderosos.<br>' +
        '2. <strong>Mundo Aberto Expandido</strong> - Além de Hyrule, agora você pode explorar as Ilhas do Céu e o Submundo, cada um com seus próprios desafios e segredos.<br>' +
        '3. <strong>História Profunda</strong> - A narrativa é emocionante e cheia de reviravoltas, explorando o passado de Hyrule e o destino de Link e Zelda.<br><br>' +
        'Se você gostou de Breath of the Wild, vai adorar Tears of the Kingdom. É um jogo obrigatório para qualquer fã de Zelda!',
      data: '10/03/2025',
    },
    {
      id: 3,
      titulo: 'Dicas para Iniciantes em Elden Ring',
      conteudo:
        'Elden Ring é um jogo desafiador, mas com as dicas certas, você pode sobreviver e aproveitar ao máximo essa experiência incrível. Aqui estão algumas dicas essenciais:<br><br>' +
        '1. <strong>Escolha a Classe Certa</strong> - Se você é iniciante, comece com a classe "Vagabundo" ou "Samurai", que têm boas estatísticas iniciais.<br>' +
        '2. <strong>Explore o Mapa</strong> - Não tenha pressa para enfrentar chefes. Explore o mundo para encontrar itens, armas e pontos de graça para melhorar seu personagem.<br>' +
        '3. <strong>Aprenda a Gerenciar Stamina</strong> - A stamina é crucial para ataques, defesa e esquiva. Não gaste tudo de uma vez e sempre mantenha uma reserva para emergências.<br><br>' +
        'Com essas dicas, você estará pronto para enfrentar os desafios de Elden Ring. Boa sorte, Tarnished!',
      data: '09/03/2025',
    },
  ];

  constructor(private route: ActivatedRoute) {
    this.postId = +this.route.snapshot.params['id'];
    this.post = this.posts.find((post) => post.id === this.postId);
  }
}