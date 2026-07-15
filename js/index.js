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
    fotoCapa: "../fotos/capa.jpg", // EDITAR AQUI — coloca a vossa foto favorita
    titulo: "Para ti, Lurdes",
    mensagem: "Um cantinho só nosso. Feito com o que não coube numa rosa, nem num só dia — feito para durar."
  },

  // ---------------- MENSAGENS ----------------
  // EDITAR AQUI — adiciona/edita as tuas cartas, poemas e pensamentos.
  cartas: [
    {
      titulo: "Motivos pelos quais te amo",
      tipo: "Pensamento",
      texto: "Amo-te pela forma como ris sem te preocupares com o volume.\nAmo-te pela paciência que tens comigo nos dias difíceis.\nAmo-te por seres exatamente quem és, sem pedir desculpa por isso.\n\n(Continua esta lista sempre que quiseres — ela nunca devia acabar.)"
    },
    {
      titulo: "Um poema pequeno",
      tipo: "Poema",
      texto: "Não sei escrever grandes versos,\nsó sei que desde que chegaste,\nos meus dias têm outro peso —\nmais leve, mesmo quando pesas nas minhas ideias o dia todo."
    },
    {
      titulo: "Carta do primeiro dia",
      tipo: "Carta",
      texto: "Querida Lurdes,\n\nEstou a escrever isto sem saber bem como pôr em palavras o que sinto. Só sei que desde que começámos a falar, tudo ficou um bocadinho mais bonito.\n\nCom amor,\n" 
    }
  ],

  // ---------------- GALERIA ----------------
  // EDITAR AQUI — organiza por momentos. "src" é o caminho da foto.
  galeria: [
    {
      momento: "O nosso primeiro encontro",
      fotos: [
        { src: "../fotos/image.jpg", legenda: "O dia em que tudo começou." },
        { src: "fotos/encontro2.jpg", legenda: "Ainda nervosos, mas felizes." }
      ]
    },
    {
      momento: "Momentos do dia a dia",
      fotos: [
        { src: "fotos/dia1.jpg", legenda: "Um dia qualquer, mas contigo." },
        { src: "fotos/dia2.jpg", legenda: "" }
      ]
    }
  ],

  // ---------------- JARDIM DAS ROSAS ----------------
  // EDITAR AQUI — mensagens específicas por semana (semana 1, 2, 3...).
  // As semanas que não estiverem aqui recebem uma mensagem genérica da lista "mensagensGenericas".
  rosasEspecificas: {
    1: "A nossa primeira rosa. Ainda a abrir, como nós.",
    2: "Já sei que quero regar este jardim durante muito tempo."
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
    { data: "EDITAR — data", titulo: "Começámos a falar", descricao: "Descreve aqui como começou." },
    { data: "EDITAR — data", titulo: "Primeiro encontro", descricao: "Descreve aqui esse dia." },
    { data: "EDITAR — data", titulo: "Primeiro abraço", descricao: "Descreve aqui esse momento." },
    { data: "EDITAR — data", titulo: "Primeiro beijo", descricao: "Descreve aqui esse momento." },
    { data: "EDITAR — data", titulo: "Pedido de namoro", descricao: "Descreve aqui como pediste." },
    { data: "EDITAR — data", titulo: "Primeiro mês", descricao: "Descreve aqui como foi." }
  ],

  // ---------------- COISAS QUE ADORO ----------------
  // EDITAR AQUI
  coisas: [
    { icone: "😊", titulo: "O teu sorriso", texto: "Ilumina qualquer sala, mesmo à distância." },
    { icone: "💇‍♀️", titulo: "O teu cabelo", texto: "Adoro quando o penteias sem pensar." },
    { icone: "👀", titulo: "Os teus olhos", texto: "Contam sempre mais do que dizes." },
    { icone: "💞", titulo: "O teu jeito de amar", texto: "Simples, verdadeiro, sem teatro." },
    { icone: "🤗", titulo: "Os teus abraços", texto: "O sítio onde tudo faz sentido." },
    { icone: "🌸", titulo: "O teu cheiro", texto: "Reconheço-o de olhos fechados." },
    { icone: "😂", titulo: "A tua risada", texto: "Contagiante, alta, perfeita." },
    { icone: "🗣️", titulo: "As tuas gírias", texto: "\"Ai homem...\" nunca vai deixar de ser engraçado." },
    { icone: "🤪", titulo: "O teu jeito maluco", texto: "Nunca sei o que vem a seguir." },
    { icone: "💪", titulo: "A tua determinação", texto: "Vejo-te lutar pelo que queres, e isso inspira-me." }
  ],

  // ---------------- CARTA FINAL ----------------
  // EDITAR AQUI
  cartaFinal: "Lurdes,\n\nQueria dar-te uma rosa, mas não consegui entregá-la a tempo. Em vez disso, construí isto — um sítio que não murcha, que não se perde, e que pode continuar a crescer enquanto nós crescermos.\n\nCada carta, cada rosa, cada foto aqui é uma forma de te dizer a mesma coisa de maneiras diferentes: gosto de ti, e quero continuar a escrever esta história contigo, capítulo a capítulo.\n\nCom todo o carinho,",

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
  img.loading = "lazy";
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
document.getElementById("foto-capa").appendChild(
  criarImagemComFallback(CONFIG.home.fotoCapa, "Nós", "")
);

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
let contagemGirias = parseInt(localStorage.getItem("aiHomemCount") || "0", 10);
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
audio.src = "musica/nossa-musica.mp3";
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