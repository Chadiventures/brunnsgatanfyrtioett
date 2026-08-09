// ---------- HERO PARALLAX (Hem) ----------
const heroSection = document.querySelector('.hero:not(.pagehero)');
const heroMedia = heroSection ? heroSection.querySelector('.hero-media') : null;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (heroSection && heroMedia && !prefersReducedMotion && window.matchMedia('(min-width:980px)').matches) {
  heroSection.addEventListener('mousemove', (e) => {
    const r = heroSection.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    heroMedia.style.transform = 'translate3d(' + (x * -12) + 'px, ' + (y * -9) + 'px, 0)';
  });
  heroSection.addEventListener('mouseleave', () => {
    heroMedia.style.transform = 'translate3d(0,0,0)';
  });
}

// ---------- NAV ----------
const header = document.getElementById('siteHeader');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });
}
const burger = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }));
}

// ---------- REVEAL ON SCROLL ----------
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
  }, { threshold: .15 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}

// ---------- CAROUSEL (Hem) ----------
const carousel = document.getElementById('carousel');
const galNext = document.getElementById('galNext');
const galPrev = document.getElementById('galPrev');
if (carousel && galNext && galPrev) {
  galNext.addEventListener('click', () => carousel.scrollBy({ left: 340, behavior: 'smooth' }));
  galPrev.addEventListener('click', () => carousel.scrollBy({ left: -340, behavior: 'smooth' }));
}

// ---------- RESERVATION FORM (Boka bord) ----------
const reserveForm = document.getElementById('reserveForm');
const confirmBox = document.getElementById('confirmBox');
const confirmDeets = document.getElementById('confirmDeets');

function escapeHtml(str){
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

if (reserveForm) {
  const dateInput = document.getElementById('rDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  reserveForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('rName').value;
    const date = document.getElementById('rDate').value;
    const time = document.getElementById('rTime').value;
    const guests = document.getElementById('rGuests').value;
    const contact = document.getElementById('rContact').value;
    const note = document.getElementById('rNote').value;

    confirmDeets.innerHTML =
      'Namn: ' + escapeHtml(name) + '<br>' +
      'Datum: ' + escapeHtml(date) + '<br>' +
      'Tid: ' + escapeHtml(time) + '<br>' +
      'Antal gäster: ' + escapeHtml(guests) + '<br>' +
      'Kontakt: ' + escapeHtml(contact) +
      (note ? '<br>Önskemål: ' + escapeHtml(note) : '');

    reserveForm.style.display = 'none';
    confirmBox.classList.add('show');
  });
}

function resetForm(){
  if (!reserveForm) return;
  reserveForm.reset();
  reserveForm.style.display = 'block';
  confirmBox.classList.remove('show');
}

// ---------- CHAT WIDGET (all pages) ----------
const chatLauncher = document.getElementById('chatLauncher');
const chatPanel = document.getElementById('chatPanel');
const chatClose = document.getElementById('chatClose');
const chatBody = document.getElementById('chatBody');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');

function openChat(){ if (chatPanel) { chatPanel.classList.add('open'); chatInput.focus(); } }
function closeChat(){ if (chatPanel) chatPanel.classList.remove('open'); }
if (chatLauncher) chatLauncher.addEventListener('click', () => chatPanel.classList.contains('open') ? closeChat() : openChat());
if (chatClose) chatClose.addEventListener('click', closeChat);

const SYSTEM_PROMPT = "Du är Restaurangvärden på Brunnsgatan 41, en prisbelönt kvarterskrog i Nyköping (adress: Brunnsgatan 41, 611 32 Nyköping). Koncept: mellanrätter som delas runt bordet, rekommendera 2 till 3 rätter per person, säsongsbaserad meny med fokus på råvaror och hantverk. Chefsommelier Tess Ohlsson currerar vinlistan. Köksmästare Tobias Mardla. Ägare Andreas Hanna. Öppettider: tisdag till torsdag 17 till 22, fredag till lördag 17 till 00, stängt söndag och måndag. Endast gäster 18 år och äldre, ingen barnmeny. Väluppfostrade mindre hundar är välkomna. Snittpris cirka 300 kr per rätt. Utmärkelser: White Guide Fine Level, rankad etta av 90 restauranger i Nyköping på Tripadvisor, 9,3 av 10 på TheFork baserat på 157 recensioner. Din uppgift: svara varmt, kort och personligt på frågor om restaurangen, menyn, vinlistan och stämningen. Hjälp gästen boka bord genom att samla in namn, datum, tid, antal gäster, samt telefonnummer eller e-post, och gärna eventuella önskemål som allergier eller firande. När du har all information, sammanfatta bokningen tydligt i ett kort stycke och bekräfta att teamet hör av sig för att slutgiltigt bekräfta bordet inom kort. Svara alltid på svenska om inte gästen skriver på ett annat språk. Håll svaren korta och naturliga, som en omtänksam värd, aldrig som en robot. Använd aldrig tankstreck i dina svar.";

let chatMessages = [];

function addBubble(text, who){
  const b = document.createElement('div');
  b.className = 'bubble ' + who;
  const lines = String(text).split('\n');
  lines.forEach((line, i) => {
    b.appendChild(document.createTextNode(line));
    if (i < lines.length - 1) b.appendChild(document.createElement('br'));
  });
  chatBody.appendChild(b);
  chatBody.scrollTop = chatBody.scrollHeight;
  return b;
}

function addTyping(){
  const b = document.createElement('div');
  b.className = 'bubble bot typing';
  b.id = 'typingBubble';
  b.innerHTML = '<span></span><span></span><span></span>';
  chatBody.appendChild(b);
  chatBody.scrollTop = chatBody.scrollHeight;
}
function removeTyping(){
  const t = document.getElementById('typingBubble');
  if (t) t.remove();
}

async function sendMessage(text){
  addBubble(text, 'user');
  chatMessages.push({ role: 'user', content: text });
  addTyping();

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages: chatMessages
      })
    });
    const data = await response.json();
    removeTyping();

    const textBlocks = (data.content || [])
      .filter(item => item.type === 'text')
      .map(item => item.text)
      .join('\n');

    const reply = textBlocks || "Ursäkta, kan du säga det där en gång till?";
    chatMessages.push({ role: 'assistant', content: reply });
    addBubble(reply, 'bot');
  } catch (err) {
    removeTyping();
    addBubble("Ojdå, jag kom inte fram just nu. Mejla oss gärna på info@brunnsgatan41.com så hjälper vi dig direkt.", 'bot');
  }
}

if (chatForm) {
  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = chatInput.value.trim();
    if (!val) return;
    chatInput.value = '';
    sendMessage(val);
  });
}
