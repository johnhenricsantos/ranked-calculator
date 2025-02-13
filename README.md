# Sistema de Níveis com Base em Vitórias e Derrotas
Este código foi desenvolvido como parte do curso de Lógica de Programação na plataforma Dio.me. Ele tem como objetivo calcular e classificar um jogador em diferentes níveis com base na quantidade de vitórias e derrotas. 

## Descrição
O programa recebe como entrada o número de vitórias e derrotas de um jogador, calcula o saldo de vitórias (vitórias - derrotas) e, com base nesse saldo, classifica o jogador em um dos seguintes níveis:
- Ferro: 0 a 10 vitórias
- Bronze: 11 a 20 vitórias
- Prata: 21 a 50 vitórias
- Ouro: 51 a 80 vitórias
- Diamante: 81 a 90 vitórias
- Lendário: 91 a 100 vitórias
- Imortal: 101 ou mais vitórias
<p>Ao final, o programa exibe no console o saldo de vitórias e o nível correspondente.

### Como funciona
- A função winDefeat(vitoria, derrotas) calcula o saldo de vitórias.
- O código avalia esse saldo e atribui um nível ao jogador, conforme os critérios definidos.
- O resultado é impresso no console com a mensagem: O Herói tem um saldo de X vitórias e está no Nível Y.

### Licença
<p>
  Este projeto é de código aberto e pode ser utilizado e modificado conforme a necessidade do usuário.
