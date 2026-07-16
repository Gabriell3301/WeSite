/* =====================================================================
   CONFIG — EDITAR AQUI. É a única secção que precisas de mexer.
   ===================================================================== */
const CONFIG = {

  nomeDela: "Lurdes",
  nomeDele: "Gabriell", // EDITAR AQUI

  // EDITAR AQUI — datas no formato AAAA-MM-DD
  datas: {
    comecarAFalar: "2026-05-13",
    inicioNamoro: "2026-06-17"
  },

  home: {
    fotoCapa: "../photos/capa.png", // EDITAR AQUI — coloca a vossa foto favorita
    titulo: "Para ti, Lurdes",
    mensagem: "Um cantinho só nosso. Feito com o que não coube numa rosa, nem num só dia — feito para durar."
  },

  // ---------------- MENSAGENS ----------------
  // EDITAR AQUI — adiciona/edita as tuas cartas, poemas e pensamentos.
  cartas: [
    {
      titulo: "Motivos pelos quais te amo",
      tipo: "Pensamento",
      texto: "Amo-te pela forma como ris.\nAmo-te pela paciência que tens comigo nos dias que sou implicante.\nAmo-te por seres exatamente quem és, sem pedir desculpa por isso.\nAmo-te por seres essa pessoa com gostos estranhos, mas que eu adoro\nAmo a forma como se expressas com os gestos de mao haha\nAmo a forma como aceitas minhas ideias loucas e ainda tens ideias piores haha\nAmo-te por voce ser voce exatamente como és."
    },
    {
      titulo: "Um poema pequeno",
      tipo: "Poema",
      texto: "Um mês parece pouco pra quem vê passar,\nMas basta um instante pra muita vida guardar,\nHouve risos, silêncios, conversas sem fim,\nE o mais bonito... foi vivê-los contigo e contigo em mim.\n\nHoje só quero dizer, sem nada esconder,\nQue eu te amo e escolho permanecer,\nNos dias leves, nos que custam a sorrir,\nPorque é ao teu lado que eu quero seguir."
    },
    {
      titulo: "Cartinha de Amor",
      tipo: "Carta",
      texto: "Querida Lurdes,\n\nEstou a escrever isto sem saber bem como pôr em palavras o que sinto. Só sei que desde que começámos a falar, tudo ficou um bocadinho mais bonito.\n\nCom amor, seu amor\n" 
    }
  ],

  // ---------------- GALERIA ----------------
  // EDITAR AQUI — organiza por momentos. "src" é o caminho da foto.
  galeria: [
    {
      momento: "O nosso primeiro encontro",
      fotos: [
        { src: "photos/encontro1.jpg", legenda: "O dia estava lindo." },
        { src: "photos/encontro1.jpeg", legenda: "Ainda nervosos, mas felizes." }
      ]
    },
    {
      momento: "Minahs Favoritas",
      fotos: [
        { src: "photos/Favorita.jpg", legenda: "Minha foto favorita sua." },
        { src: "photos/SegundaFavorita.jpg", legenda: "Esses Olhos que me derretem 🫠" }
      ]
    },
    {
      momento: "As melhores fotos suas",
      fotos: [
        { src: "photos/Linda.jpg", legenda: "Minha linda no seu estilo gótica." },
        { src: "photos/CabeloNovo.jpg", legenda: "Seu cabelo pintado, lindo." }
      ]
    },
    {
      momento: "Nossas Noites Juntas",
      fotos: [
        { src: "photos/primeiraNoiteJuntos.jpg", legenda: "Realmente essa noite foi engracada." },
        { src: "photos/NoiteEmMinhaCasa.jpg", legenda: "Esse dia e essa noite foram incríveis." },
        { src: "photos/TerceiraNoiteJuntos.jpg", legenda: "Você cheia de sono a espera da localização." }
      ]
    },
    {
      momento: "Momentos do dia a dia",
      fotos: [
        { src: "photos/Beijocas.webp", legenda: "Um dia qualquer, mas contigo." },
        { src: "photos/Really.webp", legenda: "Outro dia, outro momento contigo." }
      ]
    },
    {
      momento: "Apenas Você",  
    fotos: [
        { src: "photos/AftonSparv.jpg", legenda: "Você e Nosso filho haha." },
        { src: "photos/Lurdes.jpeg", legenda: "Você em toda sua beleza ❤️ hahaha." }
      ]
    }
  ],

  // ---------------- JARDIM DAS ROSAS ----------------
  // EDITAR AQUI — mensagens específicas por semana (semana 1, 2, 3...).
  // As semanas que não estiverem aqui recebem uma mensagem genérica da lista "mensagensGenericas".
  rosasEspecificas: {
    1: "A primeira rosa foi no nosso date, queria que queria te dar uma rosa.",
    2: "Pelo que eu vi a segunda foi do pedido de namoro haha.",
    3: "A terceira foi quando eu fui a sua casa a tarde e voce me beijou na frente da sua mae, acho eu.",
    4: "A quarta foi no dia que fui ter com você nas festas e te levei uma rosa.",
    5: "A quinta/sexta eu levei por ultimo que foi antes de voce ir a viagem.",
  },
  mensagensGenericas: [
    "Mais uma semana, mais uma razão para gostar de ti.",
    "Esta rosa é por um sorriso teu que guardei esta semana.",
    "O jardim cresce devagar, como tudo o que vale a pena.",
    "Uma rosa por cada vez que pensei em ti sem aviso.",
    "Continua a crescer — o jardim e nós.",
    "Uma semana normal, mas contigo nunca é só normal."
  ],

  // ---------------- LINHA DO TEMPO ----------------
  // EDITAR AQUI
    timeline: [
      { data: "13/05/2026", titulo: "Começámos a falar", descricao: "Você chegou e me mandou uma mensagem dizendo apenas um \"Halo tudo bem?\"." },
      { data: "25/05/2026", titulo: "Primeiro encontro", descricao: "Nossa, esse dia foi engraçado. Passei o dia todo a tentar pegar na sua mão." },
      { data: "24/05/2026", titulo: "Primeiro abraço", descricao: "Esse momento foi bom, senti o seu cheiro... nossa, que bom 💕." },
      { data: "25/05/2026", titulo: "Primeiro beijo", descricao: "Ai, meu coração haha. Foi um selinho, mas o meu estômago já estava cheio de borboletas 🫠." },
      { data: "17/06/2026", titulo: "Pedido de namoro", descricao: "Eu simplesmente te puxei e mostrei o que eu tinha feito (sorry, mas você estava a falar e não parava haha)." },
      { data: "18/06/2026", titulo: "Nossa primeira quase primeira vez", descricao: "Nossa, que noite. Apenas isso, Que NOITE (Reprovei no teste do dia seguinte mas valeu completamente apena 😁)."   },
      { data: "17/07/2026", titulo: "Primeiro mês", descricao: "Esse mês foi incrível, com uma pessoa maravilhosa que fez um mês parecer muito mais. Juro, quero mais e mais." }
    ],

  // ---------------- COISAS QUE ADORO ----------------
  // EDITAR AQUI
  coisas: [
    { icone: "😊", titulo: "O teu sorriso", texto: "Ilumina qualquer sala, mesmo à distância." },
    { icone: "💇‍♀️", titulo: "O teu cabelo", texto: "Adoro ele, solto, preso colorido, descolorido, eu ADORO seu cabelo." },
    { icone: "👀", titulo: "Os teus olhos", texto: "Me derretem muito facil, seu olhar e viciante." },
    { icone: "💞", titulo: "O teu jeito de amar", texto: "O teu jeito de amar e adoravel, o voce me permitir chegar perto, estar grudado em ti ja diz tudo." },
    { icone: "🤗", titulo: "Os teus abraços", texto: "O sítio onde posso apenas estar a sentir seu cheiro sentido seu corpo." },
    { icone: "🌸", titulo: "O teu cheiro", texto: "Reconheço-o de olhos fechados." },
    { icone: "😂", titulo: "A tua risada", texto: "Contagiante, e incrivel hahaha" },
    { icone: "🗣️", titulo: "A tua voz", texto: "Ainda lembro quando ouvi ela atravez do tele da jessica, nossa que voz!" },
    { icone: "🤪", titulo: "O teu jeitinho doido", texto: "Nunca sei o que vem a seguir, mas por algum motivo voce aceita tudo ou quase tudo que digo que quero fazer (Nao estou a reclamar)." },
    { icone: "💪", titulo: "O teu corpo", texto: "Me viciou de uma forma que nem sei como explicar." }
  ],

  // ---------------- CARTA FINAL ----------------
  // EDITAR AQUI
  cartaFinal: "Lurdes,\n\nEu disse que iria fazer algo usando a minha maior skill, então fiz-te um site, onde há um bocadinho de mim em cada clique, em cada cor, em cada palavra e em cada ideia. Espero que gostes, amor. Este é apenas o nosso primeiro mês de muitos que ainda estão por vir. Quero que saibas que, ao teu lado, sou mais feliz e que estarei sempre contigo, seja para uma chamada ou uma pilotada. Sempre que precisares de mim, eu vou estar aqui.\n\nBeijinhos e beijocas, meu amor.\n\nEu amo-te. ❤️"

};

/* =====================================================================
   A partir daqui é lógica do site — não precisas de mexer.
   ===================================================================== */

// ---------- Navegação ----------
const PAGINAS = [
  { id: "home", nome: "Início" },
  { id: "mensagens", nome: "Mensagens" },
  { id: "galeria", nome: "Galeria" },
  { id: "rosas", nome: "Jardim das Rosas" },
  { id: "tempo", nome: "Linha do Tempo" },
  { id: "coisas", nome: "Coisas que Adoro" },
  { id: "final", nome: "Para Ti" }
];

const nav = document.getElementById("nav-principal");
PAGINAS.forEach(p => {
  const btn = document.createElement("button");
  btn.textContent = p.nome;
  btn.dataset.pagina = p.id;
  btn.addEventListener("click", () => irPara(p.id));
  nav.appendChild(btn);
});

function irPara(id){
  document.querySelectorAll(".page").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll("nav button").forEach(b => b.classList.toggle("active", b.dataset.pagina === id));
  window.scrollTo({top:0, behavior:"smooth"});
}
document.querySelectorAll("[data-ir-para]").forEach(el=>{
  el.addEventListener("click", ()=> irPara(el.dataset.irPara));
});
irPara("home");

// ---------- Utilitário: caminho de imagem com fallback em coração ----------
function criarImagemComFallback(src, alt, classeExtra){
  const wrapper = document.createElement("div");
  wrapper.className = classeExtra || "";
  const img = new Image();
  img.alt = alt || "";
  img.onerror = () => {
    wrapper.innerHTML = `<div class="foto-placeholder"><span class="coracao">❤</span><span>Adiciona a tua foto:<br>${src}</span></div>`;
  };
  img.onload = () => { wrapper.innerHTML = ""; wrapper.appendChild(img); };
  img.src = src;
  return wrapper;
}

// ---------- Home ----------
document.getElementById("titulo-home").textContent = CONFIG.home.titulo;
document.getElementById("mensagem-home").textContent = CONFIG.home.mensagem;
const foto = document.createElement("img");
foto.src = "photos/capa.png"; // ou o caminho correto
foto.alt = "Nós";
foto.style.width = "100%";
foto.style.height = "100%";
foto.style.objectFit = "cover";

document.getElementById("foto-capa").appendChild(foto);

function diasEntre(dataStr){
  const inicio = new Date(dataStr + "T00:00:00");
  const hoje = new Date();
  const diff = Math.floor((hoje - inicio) / (1000*60*60*24));
  return diff >= 0 ? diff : 0;
}
const contadoresEl = document.getElementById("contadores");
const diasAFalar = diasEntre(CONFIG.datas.comecarAFalar);
const diasNamoro = diasEntre(CONFIG.datas.inicioNamoro);
contadoresEl.innerHTML = `
  <div class="contador-card"><div class="numero">${diasAFalar}</div><div class="rotulo">dias desde que começámos a falar</div></div>
  <div class="contador-card"><div class="numero">${diasNamoro}</div><div class="rotulo">dias de namoro</div></div>
`;

// ---------- Mensagens (cartas) ----------
const listaCartas = document.getElementById("lista-cartas");
CONFIG.cartas.forEach(carta => {
  const card = document.createElement("div");
  card.className = "carta-card";
  card.innerHTML = `<span>${carta.tipo}</span><h3>${carta.titulo}</h3>`;
  card.addEventListener("click", () => abrirModalCarta(carta));
  listaCartas.appendChild(card);
});
function abrirModalCarta(carta){
  const box = document.getElementById("modal-box");
  box.innerHTML = `<button class="fechar-modal" aria-label="Fechar">×</button><h3>${carta.titulo}</h3><p>${carta.texto.replace(CONFIG.nomeDele ? "" : "", "") }</p>`;
  box.querySelector(".fechar-modal").addEventListener("click", fecharModal);
  document.getElementById("modal-overlay").classList.add("active");
}

// ---------- Galeria ----------
const listaGaleria = document.getElementById("lista-galeria");
CONFIG.galeria.forEach(bloco => {
  const div = document.createElement("div");
  div.className = "momento-bloco";
  const h3 = document.createElement("h3");
  h3.textContent = bloco.momento;
  div.appendChild(h3);
  const grid = document.createElement("div");
  grid.className = "galeria-grid";
  bloco.fotos.forEach(foto => {
    const item = document.createElement("div");
    item.className = "foto-item";
    item.appendChild(criarImagemComFallback(foto.src, foto.legenda, ""));
    item.addEventListener("click", () => abrirLightbox(foto));
    grid.appendChild(item);
  });
  div.appendChild(grid);
  listaGaleria.appendChild(div);
});
function abrirLightbox(foto){
  const box = document.getElementById("modal-box");
  box.innerHTML = `<button class="fechar-modal" aria-label="Fechar">×</button><div class="modal-foto"></div>`;
  box.querySelector(".modal-foto").appendChild(criarImagemComFallback(foto.src, foto.legenda, ""));
  if(foto.legenda){
    const p = document.createElement("p");
    p.className = "legenda";
    p.textContent = foto.legenda;
    box.querySelector(".modal-foto").appendChild(p);
  }
  box.querySelector(".fechar-modal").addEventListener("click", fecharModal);
  document.getElementById("modal-overlay").classList.add("active");
}
function fecharModal(){ document.getElementById("modal-overlay").classList.remove("active"); }
document.getElementById("modal-overlay").addEventListener("click", (e)=>{
  if(e.target.id === "modal-overlay") fecharModal();
});

// ---------- Jardim das Rosas ----------
const listaRosas = document.getElementById("lista-rosas");
const semanasPassadas = Math.max(1, Math.floor(diasEntre(CONFIG.datas.inicioNamoro) / 7) + 1);
for(let semana = 1; semana <= semanasPassadas; semana++){
  const card = document.createElement("div");
  card.className = "rosa-card";
  card.innerHTML = `<span class="rosa-emoji">🌹</span><span class="num">Rosa ${semana}</span>`;
  const mensagem = CONFIG.rosasEspecificas[semana]
    || CONFIG.mensagensGenericas[(semana - 1) % CONFIG.mensagensGenericas.length];
  card.addEventListener("click", () => {
    const box = document.getElementById("modal-box");
    box.innerHTML = `<button class="fechar-modal" aria-label="Fechar">×</button><h3>Rosa ${semana} 🌹</h3><p>${mensagem}</p>`;
    box.querySelector(".fechar-modal").addEventListener("click", fecharModal);
    document.getElementById("modal-overlay").classList.add("active");
  });
  listaRosas.appendChild(card);
}

// ---------- Linha do Tempo ----------
const listaTempo = document.getElementById("lista-tempo");
CONFIG.timeline.forEach(item => {
  const div = document.createElement("div");
  div.className = "timeline-item";
  div.innerHTML = `<div class="data">${item.data}</div><h3>${item.titulo}</h3><p>${item.descricao}</p>`;
  listaTempo.appendChild(div);
});

// ---------- Coisas que adoro ----------
const listaCoisas = document.getElementById("lista-coisas");
CONFIG.coisas.forEach(c => {
  const div = document.createElement("div");
  div.className = "coisa-card";
  div.innerHTML = `<span class="icone">${c.icone}</span><h3>${c.titulo}</h3><p>${c.texto}</p>`;
  listaCoisas.appendChild(div);
});

// contador "ai homem"
const valorGirias = document.getElementById("valor-girias");
let contagemGirias = parseInt(localStorage.getItem("aiHomemCount") || "998", 10);
valorGirias.textContent = contagemGirias;
document.getElementById("btn-girias").addEventListener("click", () => {
  contagemGirias++;
  localStorage.setItem("aiHomemCount", contagemGirias);
  valorGirias.textContent = contagemGirias;
});

// ---------- Carta final ----------
document.getElementById("texto-carta-final").textContent = CONFIG.cartaFinal;
document.getElementById("assinatura-final").textContent = CONFIG.nomeDele;

// ---------- Rodapé ----------
document.getElementById("rodape").textContent = `Feito com ❤ para a ${CONFIG.nomeDela}`;

// ---------- Easter egg: "Não carregues." ----------
document.getElementById("btn-easter").addEventListener("click", () => {
  const box = document.getElementById("modal-box");
  box.innerHTML = `<button class="fechar-modal" aria-label="Fechar">×</button><h3>Apanhei-te ❤</h3><p>Sabia que ias carregar ❤️</p>`;
  box.querySelector(".fechar-modal").addEventListener("click", fecharModal);
  document.getElementById("modal-overlay").classList.add("active");
});

// ---------- Música (opcional) ----------
const audio = document.getElementById("audio-fundo");
audio.src = "music/fundo.mp3";
let aTocar = false;
document.getElementById("btn-musica").addEventListener("click", (e) => {
  if(!aTocar){
    audio.play().then(()=>{ aTocar = true; e.target.textContent = "❚❚"; })
      .catch(()=>{ e.target.textContent = "🎵"; });
  } else {
    audio.pause(); aTocar = false; e.target.textContent = "♪";
  }
});

// ---------- Corações flutuantes discretos ----------
const heartsBg = document.getElementById("hearts-bg");
const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if(!reduzMovimento){
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart-particle";
    h.textContent = "❤";
    h.style.left = Math.random()*100 + "vw";
    h.style.setProperty("--drift", (Math.random()*60-30)+"px");
    h.style.animationDuration = (8 + Math.random()*6) + "s";
    h.style.fontSize = (12 + Math.random()*10) + "px";
    heartsBg.appendChild(h);
    setTimeout(()=> h.remove(), 15000);
  }, 2200);
}
