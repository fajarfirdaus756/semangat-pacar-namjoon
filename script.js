const opening=document.getElementById("opening");
const main=document.getElementById("main");
const messageBox=document.getElementById("messageBox");

document.getElementById("openBtn").onclick=()=>{
  opening.classList.add("hide");
  main.classList.remove("hidden");
  burst();
};

document.getElementById("tiredBtn").onclick=()=>{
  show("Sini istirahat sebentar 🤍 Kamu udah hebat hari ini. Tarik napas, senyum dikit, terus semangat lagi. Bentar lagi pulanggg! 🥺💜");
  burst();
};

document.getElementById("surpriseBtn").onclick=()=>{
  show("SURPRISEEE! 💌 Nailong resmi ditugaskan buat nemenin sampai jam pulang. Jangan kabur dulu mwehehe 🦖💜✨");
  burst();
};

document.getElementById("homeBtn").onclick=()=>{
  show("WOI SABARRR 😭🏠 Bentar lagi pulaang! Semoga perjalanan pulangnya aman dan jangan lupa senyum yaa 🤍");
  burst();
};

function show(text){
  messageBox.textContent=text;
  messageBox.classList.add("show");
}

function burst(){
  const icons=["💗","💜","💖","✨","🫶","⭐"];
  for(let i=0;i<15;i++){
    const x=document.createElement("div");
    x.className="heart";
    x.textContent=icons[Math.floor(Math.random()*icons.length)];
    x.style.left=(25+Math.random()*50)+"%";
    x.style.top=(55+Math.random()*20)+"%";
    x.style.animationDelay=(Math.random()*.25)+"s";
    document.body.appendChild(x);
    setTimeout(()=>x.remove(),1800);
  }
}

for(let i=0;i<14;i++){
  const s=document.createElement("div");
  s.className="spark";
  s.textContent="✦";
  s.style.left=Math.random()*100+"%";
  s.style.top=(20+Math.random()*80)+"%";
  s.style.animationDelay=Math.random()*2.5+"s";
  document.body.appendChild(s);
}
