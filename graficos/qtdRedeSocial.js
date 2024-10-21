const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json"



async function vizualizarInformacaoGlobais(){

const res = await fetch(url)
const dados = await res.json()
console.log(dados);

const facebook = (dados.Facebook / 1000);
const intagram = (dados.Instagram / 1000);
const youtube = (dados.Youtube / 1000);
const tiktok = (dados.Tiktok / 1000);
const whatsapp = (dados.WhatsApp / 1000);
const wechat = (dados.WeChat / 1000);

const horas = parseInt(dados.tempo_medio);
const minutos = Math.round((dados.tempo_medio - horas) * 100).toFixed(2);

const paragrafo = document.createElement('p')
paragrafo.classList.add('graficos-container__texto')

paragrafo.innerHTML = `Aproximadamente 
<span>${facebook}</span> bilhões de pessoas usam Facebook, 
<span>${intagram}</span> bilhões usam o instagram, 
<span>${youtube}</span> bilhões usam o Youtube, 
<span>${tiktok}</span> bilhões usam o Tiktok, 
<span>${whatsapp}</span> bilhões usam Whatsapp e  
<span>${wechat}</span> bilhões usam o Wechat`

console.log(paragrafo)

const container = document.getElementById("graficos-container")
container.appendChild(paragrafo)
}

vizualizarInformacaoGlobais();