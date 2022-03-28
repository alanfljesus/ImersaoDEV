
/*
var listaFilmes = [
    "https://ptanime.com/wp-content/uploads/2020/04/Capa-Manga-One-Piece-Volume-96-Wano-Arc-e1586190562203.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/91yUtx44+AL.jpg",
    "https://i.pinimg.com/originals/e3/48/ba/e348ba6a91ed505fb9fa2c2985fec748.jpg",
    "https://m.media-amazon.com/images/I/71CirqcvjKL._AC_SY679_.jpg",
    "https://i.pinimg.com/736x/d5/d4/18/d5d4183840911389c4391167272174e9.jpg",
    "https://cosmonerd.com.br//uploads/2020/12/cosmonerd-black-clover-spade-1.jpg",
    "https://cdn.europosters.eu/image/750/posters/attack-on-titan-shingeki-no-kyojin-key-art-i22808.jpg",
    "https://i.pinimg.com/originals/51/d8/aa/51d8aa55554fae1628a2317a5b03003a.jpg",
    "https://i.pinimg.com/474x/27/8f/f1/278ff11ec41977d020ee694e2daa6f7b.jpg",
    "https://m.media-amazon.com/images/I/713jre8053L._AC_SY741_.jpg",
    "https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/0/905820211216-uau-posters-bleach-animes-1.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dd690510-e56d-4311-bbf7-14f74588568d/d2khgfn-a160de46-24fe-484e-898e-28ffc1ebe728.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RkNjkwNTEwLWU1NmQtNDMxMS1iYmY3LTE0Zjc0NTg4NTY4ZFwvZDJraGdmbi1hMTYwZGU0Ni0yNGZlLTQ4NGUtODk4ZS0yOGZmYzFlYmU3MjguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RtzX0RlLtfGx9_Z3H_lj_mqIUsGiERnh5w_6UYlkEzc",
    "http://cdn.shopify.com/s/files/1/0463/9496/6176/products/product-image-1403129606_1024x.jpg?v=1620953475",
    "https://m.media-amazon.com/images/M/MV5BN2EwNTUwYWItZTY4ZC00N2Q1LWFhZWQtNjMwMDBkZDVmYThjXkEyXkFqcGdeQXVyOTA2OTk0MDg@._V1_.jpg",
]
*/





function adicionarAnime() {
  elementoInstrucao = document.getElementById("instrucao")
  elementoInstrucaoNome = document.getElementById("instrucao2")

  var imagemAnime = document.getElementById("imagemAnime").value
  var nomeAnime = document.getElementById("nomeAnime").value

  if (imagemAnime.startsWith("http") && (imagemAnime.endsWith(".jpg") || imagemAnime.endsWith(".jpeg") || imagemAnime.endsWith(".png")) && nomeAnime != "") {
    listarAnimes(imagemAnime, nomeAnime)
  } else {
    elementoInstrucao.innerHTML = "Endereço de imagem inválido ou campo vazio!"
    setTimeout(function () {
      elementoInstrucaoAdicionar = document.getElementById("instrucao")
      elementoInstrucaoAdicionar.parentNode.removeChild(elementoInstrucaoAdicionar);
    }, 2500);
  }

  document.getElementById("imagemAnime").value = ""
  document.getElementById("nomeAnime").value = ""

}

function removerAnime() {
  
  

  }

function listarAnimes(img_anime, name_anime) {

  var anime_tela =
    `<figure>
		<img src="${img_anime}" />
		<figcaption>${name_anime}</figcaption>
	</figure>`

  var listaAnimes = document.getElementById("lista-animes")

  listaAnimes.innerHTML = listaAnimes.innerHTML + anime_tela

}


//function listarAnimesNaTela (anime) {
//     elementoAnimeFavorito = "<img src=" + anime + ">"
//     elementoListaAnimes = ("listaAnime")
//     elementoListaAnimes.innerHTML = elementoListaAnimes.innerHTML + elementoAnimeFavorito//

/*
function Add() {
    var elementAlert = document.querySelector(".alert");

    var addAnime = document.getElementById("link").value;

    if (addAnime === '' || addAnime === ' ') {
        elementAlert.innerHTML = "gdfsgdgd"
        setTimeout(function () {
        elementAlert = document.querySelector(".alert");
        elementAlert.parentNode.removeChild(elementAlert);
        }, 2500);
    } else {

        var newAnime = document.createElement("img");
        newAnime.classList.add("animes");
        newAnime.src = document.getElementById("link").value;
        document.body.appendChild(newAnime);
        document.getElementById("link").value = "";
        listAnime.push(document.getElementById("link").value)
}
}
for (var i = 0; i < listAnime.length; i++) {
    document.write("<img class='animes' src=" + listAnime[i] + ">");

    console.log(listAnime);
}
*/




/*function Add() {
    var elementAlert = document.getElementById("alert")

    addAnime = listAnime.push(document.getElementById("link").value)

    newAnime = document.createElement("img")

    newAnime.classList.add("animes")

    newAnime.src = document.getElementById("link").value

    document.body.appendChild(newAnime)

    document.getElementById("link").value = "";  

}
 
for (var i = 0; i < listAnime.length; i++) {
    document.write("<img class='animes' src=" + listAnime[i] + ">")

    console.log(listAnime)
}*/




/*
Função Add - vai adicionar algo

"var 'addAnime' - vai adicionar um anime

COMO ADICIONAR UM ANIME?

Vamos utilizar a nossa lista e colocando '.push' vamos inseir um novo anime
'.push' me diz que vou inserir um novo elemento no final da lista

Atravéz do getElementById(Pegar um elemento pelo ID)
qual elemento?
O valor que vai ser inserido no INPUT, ou seja, vou inseir uma URL no INPUT para que seja colocado no meu site.
E nós queremos o valor do campo, para isso usamos '.value'
"

'var newAnime' - vai dizer mais sobre o novo anime, masc como vou de fato adicionar esse novo anime????

'var newAnime" = document.createElement

document - documento, ou seja, vou criar um novo documento do tipo img

 newAnime = document.createElement("img")

CONCLUSAO DAS 2 LINHAS

Vamos criar uma variavel, nessa variavel vamos dizer que nos queremos adicionar mais um objeto do tipo imagem no final da nossa lista.


COMO ADICIONAR O OBJETO NA LISTA?

Para adicionar o objeto na lista usamos um comando 'classList'

de forma: newAnime.classList.add("animes") - Anteriormente criamos um elemento do tipo IMG para nossa variavel 'newAnimes', agora usamos classList, que está falando que criamos uma classe 'animes' dentro da variavel 'newAnimes' para IMG, então se usarmos 'console.log(newAnime) veremos que será mostrado isso '<img class="animes" src(unknown)>', onde unknown é o nosso URL da imagem que não foi inserido porque apenas cliquei no botão de 'Adicionar imagem' sem inserir um URL.

E usaremos 'newAnime.src = document.getElementById("link").value'

Estamos dizendo que nosso novo anime do tipo imagem, que ja foi especificado que é uma imagem, será adicionado essa imagem por algum URl, como fazemos isso? Para adicionar de fato nosso objeto na lista temos que selecionar nosso input mais uma vez para dizer que "O link que foi adicionado nesse INPUT, nos queremos obter o valor do campo; antes nós apenas dizemos que queriamos esse valor, mas não estava especificado como era esse valor de fato, apenas dizemos que queriamos o valor do campo como uma imagem e para termos uma imagem pecisamos da sua URl"

Por isso dessa vez usamos SRC, que é o para inseir nosso URL da imagem e dizer novamente que queremos obter o valor inserido no campo, para isso utilizamos nosso '.value'

AGora usaremos um comando 'appendChild, que significa adicionar/anexar um filho em newAnime, e como já foi configurado no inicio, ele será adicionado ao final da lista

O comando: document.getElementById("link").value = ""; que é para apagar o URL do campo após a imagem ser inserida, por isso deixa-se "", pois significam um valor nulo, que não existe.


Por fim foi usado o For, que é um Loop que me permite colocar até 3 expreções opcionais, entro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência.

for ([inicialização]; [condição]; [expressão final])
     declaração
*/
















// function adicionarAnime () {
//     animeFavorito = (document.getElementById("filme").value)
//     if (animeFavorito.endsWith("jpg")) {
//         listarAnimesNaTela(animeFavorito)
//     } else {
//         console.error("Endereço de filme invalido")
//     }
//     document.getElementById("filme").value = "";
// }

// function listarAnimesNaTela (anime) {
//     elementoAnimeFavorito = "<img src=" + anime + ">"
//     elementoListaAnimes = ("listaAnime")
//     elementoListaAnimes.innerHTML = elementoListaAnimes.innerHTML + elementoAnimeFavorito
// }




 /*function Add () {
  adicionarAnime = listaAnime.push(document.getElementById("movie").value)
  novoAnime = document.createElement("img")
  novoAnime.classList.add('animes')
  novoAnime.src = document.getElementById("movie").value
  document.body.appendChild(novoAnime)
  document.getElementById("movie").value = "";
 }

 for (var i = 0; i < listaAnime.length; i++) {
 document.write("<img class='animes' src=" + listaAnime[i] + ">")
 }*/
