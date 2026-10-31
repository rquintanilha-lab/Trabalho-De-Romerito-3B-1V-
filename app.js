const sinopses = [
    "Harry volta a Hogwarts para mais um ano de estudos, mas acaba envolvido no Torneio Tribruxo, uma competição perigosa entre escolas de magia. Enquanto enfrenta os desafios, uma ameaça começa a ganhar força.",

    "Bilbo Bolseiro leva uma vida tranquila até receber a visita do mago Gandalf. Ao acompanhar um grupo de anões em uma jornada para recuperar um tesouro guardado pelo dragão Smaug, ele descobre uma coragem que não sabia possuir.",

    "Um piloto perdido no deserto conhece um pequeno príncipe vindo de outro planeta. Ao compartilhar suas viagens e encontros, o menino traz reflexões sobre amizade, amor e o que realmente importa na vida.",

    "Percy Jackson descobre que é filho de um deus grego e que as criaturas da mitologia existem. Acusado de roubar o raio de Zeus, ele parte com seus amigos em uma missão para encontrar o verdadeiro ladrão e impedir uma guerra entre os deuses.",

    "O advogado Jonathan Harker viaja à Transilvânia para atender o misterioso conde Drácula. Ao descobrir sua verdadeira natureza, ele e seus aliados precisam enfrentar uma ameaça que chega até a Inglaterra.",

    "O cientista Victor Frankenstein consegue dar vida a uma criatura, mas se assusta com o resultado e a abandona. Rejeitada pelas pessoas, a criatura busca compreensão, levando criador e criação a um conflito trágico.",

    "Gregor Samsa acorda certa manhã transformado em um inseto monstruoso. Sem conseguir trabalhar ou se comunicar como antes, ele precisa lidar com sua nova condição e com a reação de sua família."
];
    
const livros = document.querySelectorAll(".livro");

livros.forEach((livro, indice) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "btn-sinopse";
    botao.textContent = "Ver sinopse";
    botao.setAttribute("aria-expanded", "false");

    const sinopse = document.createElement("p");
    sinopse.className = "sinopse";
    sinopse.id = `sinopse-${indice}`;
    sinopse.textContent = sinopses[indice];
    sinopse.hidden = true;

    botao.setAttribute("aria-controls", sinopse.id);

    livro.appendChild(botao);
    livro.appendChild(sinopse);

    botao.addEventListener("click", () => {
        sinopse.hidden = !sinopse.hidden;

        botao.textContent = sinopse.hidden
            ? "Ver sinopse"
            : "Ocultar sinopse";

        botao.setAttribute("aria-expanded", String(!sinopse.hidden));
    });
});