/* Bagus & Shecillia — semua isi website ada di objek DATA di bawah. */
const DATA = {
  startDate: '2024-12-09T00:00:00',
  users: [
    { username: 'bagus', password: '091224', name: 'Bagus', greeting: 'Hai Bagus, gantengnya Shecillia.' },
    { username: 'shecillia', password: '091224', name: 'Shecillia', greeting: 'Hai Shecillia, tuan putri sudah datang.' }
  ],

  timeline: [
    { when: 'Kampus Trilogi', title: 'Gara-gara tugas Nirmana', text: 'Kenalnya karena aku bantuin kamu ngerjain tugas Nirmana. Dari bantuin tugas, pelan-pelan jadi penasaran satu sama lain.', color: 'blue' },
    { when: '9 Desember 2024', title: 'Resmi jadi kita', text: 'Tanggal yang sekarang jadi password website ini. Gampang diinget, susah dilupain.', color: 'yellow' },
    { when: 'First date', title: 'Ngedate pertama di cafe', text: 'Masih malu-malu, tapi senyumnya nggak bisa ditahan.', color: 'pink' },
    { when: 'Sebelum ke Riau', title: 'Deeptalk di Kotak Cafe', text: 'Obrolan panjang yang nggak kerasa, sebelum aku berhenti dari Trilogi dan pulang ke Riau.', color: 'mint' },
    { when: 'Jakarta — Riau', title: 'Jarak, tapi tetap dekat', text: 'Telepon, cerita seharian, foto random. Hal kecil yang bikin jarak terasa lebih pendek.', color: 'blue' },
    { when: 'Oktober 2025', title: 'Akhirnya ke Jakarta lagi', text: 'Hari yang paling ditunggu: ketemu lagi, jalan bareng lagi.', color: 'yellow' }
  ],

  profiles: [
    {
      key: 'bagus', title: 'BAGUS', photo: 'assets/profile/bagus.gif', caption: 'orca', sticker: 'aquarius', tilt: '-1.5deg',
      rows: [['Nama', 'Bagus Al Setiawan'], ['Panggilan', 'Bagus / Orca'], ['Ulang tahun', '20 Januari 2006'], ['Zodiak', 'Aquarius'], ['Charm point', 'Sabar tingkat DEWA']]
    },
    {
      key: 'shecillia', title: 'SHECILL', photo: 'assets/profile/shecillia.png', caption: 'vyona', sticker: 'sagitarius', tilt: '1.5deg',
      rows: [['Nama', 'Shecillia Heydina Hendarman'], ['Panggilan', 'Sill / Vyona'], ['Ulang tahun', '09 Desember 2005'], ['Zodiak', 'Sagitarius'], ['Charm point', 'Cantik di kondisi apa pun dan senyumnya manis']]
    }
  ],

  tags: { semua: { label: 'Semua' }, kita: { label: 'Kita', color: 'var(--pink)' }, jalan: { label: 'Jalan-jalan', color: 'var(--yellow)' }, aquarium: { label: 'Aquarium', color: 'var(--blue)' }, random: { label: 'Random', color: 'var(--mint)' } },
  gallery: [
    ['p01.jpg', 640, 360, 'random', ''], ['p02.jpg', 640, 360, 'kita', '5 Des 2024'], ['p03.jpg', 360, 640, 'kita', '12 Des 2024'], ['p04.jpg', 360, 640, 'random', ''],
    ['p05.jpg', 360, 640, 'jalan', ''], ['p06.jpg', 360, 640, 'jalan', ''], ['p07.jpg', 360, 640, 'aquarium', ''], ['p08.jpg', 640, 360, 'aquarium', ''],
    ['p09.jpg', 360, 640, 'aquarium', ''], ['p10.jpg', 360, 640, 'aquarium', ''], ['p11.jpg', 360, 640, 'aquarium', ''], ['p12.jpg', 360, 640, 'aquarium', ''],
    ['p13.jpg', 360, 640, 'jalan', ''], ['p14.jpg', 360, 640, 'jalan', ''], ['p15.jpg', 360, 640, 'jalan', ''], ['p16.jpg', 360, 640, 'jalan', ''],
    ['p17.jpg', 360, 640, 'random', ''], ['p18.jpg', 360, 640, 'aquarium', ''], ['p19.jpg', 427, 640, 'aquarium', ''], ['p20.jpg', 361, 640, 'kita', ''],
    ['p21.jpg', 361, 640, 'kita', ''], ['p22.jpg', 640, 423, 'kita', ''], ['p23.jpg', 360, 640, 'random', ''], ['p24.jpg', 360, 640, 'random', ''],
    ['p25.jpg', 360, 640, 'random', ''], ['p26.jpg', 640, 427, 'random', ''], ['p27.jpg', 640, 422, 'random', ''], ['p28.jpg', 640, 420, 'kita', ''],
    ['p29.jpg', 360, 640, 'random', ''], ['p30.jpg', 501, 640, 'random', '']
  ],

  quiz: [
    { q: 'Di mana kita pertama kali ngedate?', options: ['Cafe', 'Mall', 'Aquarium'], answer: 0, why: 'Cafe. Masih malu-malu, tapi itu awal semuanya.' },
    { q: 'Di cafe mana kita deeptalk sebelum aku pulang ke Riau?', options: ['KopiLojik', 'Kotak Cafe', 'Kopi Domu'], answer: 1, why: 'Kotak Cafe. Obrolan paling panjang sebelum jarak dimulai.' },
    { q: 'Kapan aku ke Jakarta lagi setelah berhenti dari Trilogi dan balik ke Riau?', options: ['September 2025', 'Oktober 2025', 'November 2025', 'Desember 2025'], answer: 1, why: 'Oktober 2025. Bulan yang paling ditunggu.' },
    { q: 'Apa hal yang bikin aku suka sama kamu?', options: ['Muka kamu', 'Sifat kamu', 'Cerita kamu'], answer: 2, why: 'Cerita kamu. (Muka sama sifatnya juga, sih.)' },
    { q: 'Siapa yang pertama ngungkapin perasaan?', options: ['Aku', 'Kamu'], answer: 1, why: 'Kamu. Berani juga ternyata.' },
    { q: 'Kamu sayang aku kan??', runaway: true, options: ['IYAAA', 'ngga'], answer: 0, why: 'Udah tahu jawabannya, cuma mau denger aja.' }
  ],
  wrongLines: ['Hmm, bukan itu. Coba lagi.', 'Masa lupa? Ayo inget-inget.', 'Salah, tapi masih dimaafin. Coba lagi.', 'Bukan yang itu, sayang.'],
  taunts: ['eits, nggak bisa', 'tombolnya malu', 'coba yang satunya', 'nggak ada pilihan lain', 'hampir... tapi nggak'],

  prize: { name: 'Xiaomi Redmi Buds 6 Play', variant: 'Black', note: 'Garansi Resmi' },

  letter: [
    'Makasih udah hadir di hidup aku. Walaupun cara kita ketemu kurang, tapi alhamdulillah-nya menghasilkan hubungan yang sangat bisa kita syukuri.',
    'Tetap jadi kamu, tetap jadi orang baik. Kamu udah nggak sendiri kok, hann. Kamu punya aku.',
    'Mwahhh.'
  ]
};

/* ---------- helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const h = (tag, attrs = {}, html = '') => { const e = document.createElement(tag); for (const k in attrs) e.setAttribute(k, attrs[k]); if (html) e.innerHTML = html; return e; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const pad = n => String(n).padStart(2, '0');
const SKEY = 'bs_session';

/* ---------- gate ---------- */
function initGate() {
  const form = $('#gateForm'), err = $('#gateError'), pass = $('#gatePass');
  $('#peekBtn').addEventListener('click', e => {
    const show = pass.type === 'password'; pass.type = show ? 'text' : 'password'; e.currentTarget.textContent = show ? 'tutup' : 'lihat';
  });
  form.addEventListener('submit', e => {
    e.preventDefault();
    const u = $('#gateUser').value.trim().toLowerCase(), p = pass.value.trim();
    const user = DATA.users.find(x => x.username === u && x.password === p);
    if (!user) {
      err.textContent = u && p ? 'Username atau password-nya belum pas.' : 'Isi dua-duanya dulu ya.';
      form.classList.remove('shake'); void form.offsetWidth; form.classList.add('shake');
      return;
    }
    try { sessionStorage.setItem(SKEY, user.username); } catch (_) {}
    enter(user);
  });
  let saved = null; try { saved = sessionStorage.getItem(SKEY); } catch (_) {}
  const user = DATA.users.find(x => x.username === saved);
  if (user) enter(user, true);
}

function enter(user, instant) {
  $('#greeting').textContent = user.greeting;
  const gate = $('#gate'), app = $('#app');
  if (enter.done) return; enter.done = true;
  initMusic(!instant);
  gate.classList.add('out');
  setTimeout(() => { gate.hidden = true; }, 900);
  runLoader(instant ? 1600 : 3000, () => {
    app.hidden = false;
    document.body.classList.remove('is-locked');
    initApp();
    requestAnimationFrame(() => app.classList.add('on'));
  });
}

/* ---------- loading screen ---------- */
function runLoader(minMs, done) {
  const L = $('#loader'), bar = $('#loaderBar'), pct = $('#loaderPct'), txt = $('#loaderText');
  L.hidden = false;
  const lines = ['nyiapin kenangan…', 'ngumpulin foto-foto…', 'nyetel lagunya…', 'ngelap papan klip…', 'dikit lagi…'];
  let li = 0;
  const lineTimer = setInterval(() => {
    txt.classList.add('swap');
    setTimeout(() => { li = (li + 1) % lines.length; txt.textContent = lines[li]; txt.classList.remove('swap'); }, 350);
  }, 900);
  const urls = DATA.gallery.map(g => 'assets/thumbs/' + g[0]).concat(DATA.profiles.map(p => p.photo));
  let loaded = 0;
  urls.forEach(u => { const im = new Image(); im.onload = im.onerror = () => loaded++; im.src = u; });
  const t0 = performance.now(); let shown = 0;
  const frame = now => {
    const timeK = Math.min(1, (now - t0) / minMs), loadK = loaded / urls.length;
    const target = Math.min(timeK, loadK) * 100;
    shown += (target - shown) * 0.08;
    if (target >= 100 && shown > 99.4) shown = 100;
    bar.style.width = shown + '%'; pct.textContent = Math.round(shown) + '%';
    if (shown < 100) return requestAnimationFrame(frame);
    clearInterval(lineTimer); txt.textContent = 'siap!';
    setTimeout(() => {
      L.classList.add('done'); done();
      setTimeout(() => { L.hidden = true; }, 1200);
    }, 350);
  };
  requestAnimationFrame(frame);
}

/* ---------- music (fade in/out dengan ease) ---------- */
function initMusic(fromGesture) {
  const a = $('#bgm'), btn = $('#musicBtn'), MAX = 0.55;
  btn.hidden = false; a.volume = 0;
  let raf = 0;
  const fade = (to, ms, done) => {
    cancelAnimationFrame(raf); const from = a.volume, t0 = performance.now();
    const step = now => {
      const k = Math.min(1, (now - t0) / ms), e = k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      a.volume = Math.min(1, Math.max(0, from + (to - from) * e));
      if (k < 1) raf = requestAnimationFrame(step); else done && done();
    };
    raf = requestAnimationFrame(step);
  };
  const ui = on => { btn.classList.toggle('playing', on); btn.setAttribute('aria-pressed', on); btn.setAttribute('aria-label', on ? 'Jeda lagu' : 'Putar lagu'); };
  const play = () => a.play().then(() => { ui(true); fade(MAX, 2600); }).catch(() => ui(false));
  const pause = () => { ui(false); fade(0, 900, () => a.pause()); };
  btn.addEventListener('click', () => (a.paused || !btn.classList.contains('playing')) ? play() : pause());
  if (fromGesture) play();
  else { const first = () => { play(); removeEventListener('pointerdown', first); removeEventListener('keydown', first); }; addEventListener('pointerdown', first, { once: true }); addEventListener('keydown', first, { once: true }); }
  $('#logoutBtn').addEventListener('click', () => a.pause());
}

/* ---------- app ---------- */
function initApp() {
  initCounter(); renderTimeline(); renderBoards(); renderGallery(); initQuiz(); initLetter(); initNav(); initRouter();
}

function initNav() {
  const menu = $('#menuBtn'), nav = $('#nav'), bar = $('.topbar');
  menu.addEventListener('click', () => { const o = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', o); });
  $$('#nav a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', false); }));
  $('#logoutBtn').addEventListener('click', () => { try { sessionStorage.removeItem(SKEY); } catch (_) {} location.reload(); });
  let last = scrollY;
  addEventListener('scroll', () => {
    const y = scrollY; bar.classList.toggle('hide', y > last && y > 300 && !nav.classList.contains('open')); last = y;
  }, { passive: true });
}

/* ---------- router: tiap menu jadi halaman sendiri ---------- */
const VIEWS = ['home', 'cerita', 'profil', 'galeri', 'kuis', 'surat'];
let curView = null;
function initRouter() { addEventListener('hashchange', route); route(); }
function route() {
  const name = location.hash.replace(/^#\/?/, '') || 'home';
  goView(VIEWS.includes(name) ? name : 'home');
}
function goView(name) {
  if (name === curView) return;
  const next = $(`.view[data-view="${name}"]`), prev = curView && $(`.view[data-view="${curView}"]`);
  curView = name;
  $$('#nav a').forEach(a => a.classList.toggle('active', (a.getAttribute('href').replace('#/', '') || 'home') === name));
  $('#nav').classList.remove('open'); $('#menuBtn').setAttribute('aria-expanded', false); $('.topbar').classList.remove('hide');
  const show = () => {
    $$('.view').forEach(v => { if (v !== next) { v.hidden = true; v.classList.remove('v-out', 'v-in'); } });
    window.scrollTo({ top: 0, behavior: 'instant' });
    $$('[data-reveal]', next).forEach(el => el.classList.remove('in'));
    next.hidden = false; next.classList.remove('v-in'); void next.offsetWidth; next.classList.add('v-in');
    requestAnimationFrame(() => initReveal(next));
  };
  if (prev && !reduced) { prev.classList.add('v-out'); setTimeout(show, 400); } else show();
}

function initReveal(root = document) {
  const io = initReveal.io || (initReveal.io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); initReveal.io.unobserve(e.target); }
  }), { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }));
  $$('[data-reveal]:not(.in)', root).forEach(el => io.observe(el));
}

function initCounter() {
  const start = new Date(DATA.startDate).getTime();
  const tick = () => {
    let s = Math.max(0, Math.floor((Date.now() - start) / 1000));
    const d = Math.floor(s / 86400); s %= 86400;
    $('#cDays').textContent = d.toLocaleString('id-ID');
    $('#cHours').textContent = pad(Math.floor(s / 3600));
    $('#cMins').textContent = pad(Math.floor(s % 3600 / 60));
    $('#cSecs').textContent = pad(s % 60);
  };
  tick(); setInterval(tick, 1000);
}

function blobHTML(color, eyes = true) {
  return `<span class="tl-dot blob--${color}" style="position:relative">${eyes ? '<span class="eyes"><i></i><i></i></span>' : ''}</span>`;
}

function renderTimeline() {
  const ol = $('#timeline');
  DATA.timeline.forEach((t, i) => {
    ol.append(h('li', { class: 'tl-item', 'data-reveal': '', style: `--d:${i % 3}` },
      `${blobHTML(t.color)}<p class="tl-when">${esc(t.when)}</p><h3>${esc(t.title)}</h3><p>${esc(t.text)}</p>`));
  });
}

function renderBoards() {
  const wrap = $('#boards');
  const rows = list => list.map(([k, v]) => `<div class="row"><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('');
  DATA.profiles.forEach((p, i) => {
    wrap.append(h('article', { class: `board board--${p.key}`, 'data-reveal': '', style: `--tilt:${p.tilt};--d:${i}` }, `
      <span class="board-clip" aria-hidden="true"></span>
      <div class="paper">
        <span class="sticker" style="--r:${i ? 8 : -8}deg">${esc(p.sticker)}</span>
        <p class="paper-title">${esc(p.title)}</p>
        <div class="paper-top">
          <figure class="polaroid"><span class="tape" aria-hidden="true"></span><img src="${p.photo}" alt="Foto profil ${esc(p.rows[0][1])}"><figcaption>${esc(p.caption)}</figcaption></figure>
          <dl class="rows">${rows(p.rows)}</dl>
        </div>
      </div>`));
  });
}

/* ---------- gallery + lightbox ---------- */
let shots = [], visible = [], lbIndex = 0;
function renderGallery() {
  const chips = $('#chips'), grid = $('#masonry');
  Object.entries(DATA.tags).forEach(([key, t], i) => {
    const b = h('button', { class: 'chip', role: 'tab', 'aria-selected': i === 0, 'data-tag': key }, `${t.color ? `<i style="background:${t.color}"></i>` : ''}${esc(t.label)}`);
    b.addEventListener('click', () => filter(key));
    chips.append(b);
  });
  DATA.gallery.forEach(([src, w, hgt, tag, date], i) => {
    const rot = ((i * 37) % 7 - 3) * 0.6;
    const b = h('button', { class: 'shot', 'data-tag': tag, style: `--rot:${rot}deg`, 'aria-label': `Buka foto ${i + 1}` },
      `<img src="assets/thumbs/${src}" width="${w}" height="${hgt}" alt="Foto kenangan ${i + 1}" loading="lazy" decoding="async">
       <span class="shot-cap"><span>${esc(date || DATA.tags[tag].label.toLowerCase())}</span><i style="background:${DATA.tags[tag].color}"></i></span>`);
    b.addEventListener('click', () => openLB(visible.indexOf(b)));
    grid.append(b); shots.push(b);
  });
  visible = shots.slice();
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('pop'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -5% 0px' });
  shots.forEach(s => { s.style.opacity = 0; io.observe(s); s.addEventListener('animationend', () => { s.style.opacity = ''; }, { once: true }); });
  initLB();
}

function filter(tag) {
  $$('#chips .chip').forEach(c => c.setAttribute('aria-selected', c.dataset.tag === tag));
  visible = [];
  shots.forEach((s, i) => {
    const show = tag === 'semua' || s.dataset.tag === tag;
    s.classList.toggle('hidden', !show);
    if (show) { visible.push(s); s.classList.remove('pop'); void s.offsetWidth; s.style.animationDelay = `${Math.min(visible.length, 12) * 40}ms`; s.classList.add('pop'); }
  });
}

function initLB() {
  const lb = $('#lightbox');
  $('#lbClose').addEventListener('click', closeLB);
  $('#lbPrev').addEventListener('click', () => stepLB(-1));
  $('#lbNext').addEventListener('click', () => stepLB(1));
  lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lb-figure')) closeLB(); });
  addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLB(); else if (e.key === 'ArrowRight') stepLB(1); else if (e.key === 'ArrowLeft') stepLB(-1);
  });
  let x0 = null;
  lb.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) stepLB(dx < 0 ? 1 : -1); x0 = null; });
}

function fullSrc(btn) { return btn.querySelector('img').getAttribute('src').replace('thumbs', 'photos'); }
function capFor(i) { const s = visible[i]; return `${i + 1} / ${visible.length}`; }

function openLB(i) {
  const lb = $('#lightbox'), img = $('#lbImg'), thumb = visible[i].querySelector('img');
  lbIndex = i; lb.hidden = false; document.body.style.overflow = 'hidden';
  img.src = thumb.src; img.alt = thumb.alt; $('#lbCap').textContent = capFor(i);
  const hi = new Image(); hi.src = fullSrc(visible[i]); hi.onload = () => { if (lbIndex === i) img.src = hi.src; };
  requestAnimationFrame(() => {
    lb.classList.add('on');
    if (reduced) return;
    const a = thumb.getBoundingClientRect(), b = img.getBoundingClientRect();
    img.style.transition = 'none';
    img.style.transform = `translate(${a.left - b.left}px,${a.top - b.top}px) scale(${a.width / b.width},${a.height / b.height})`;
    requestAnimationFrame(() => { img.style.transition = 'transform .75s cubic-bezier(.22,1,.36,1)'; img.style.transform = 'none'; });
  });
  $('#lbClose').focus({ preventScroll: true });
}

function stepLB(d) {
  const img = $('#lbImg'); const n = (lbIndex + d + visible.length) % visible.length;
  img.style.transition = 'transform .35s cubic-bezier(.65,0,.35,1), opacity .35s';
  img.style.transform = `translateX(${-d * 40}px)`; img.style.opacity = 0;
  setTimeout(() => {
    lbIndex = n; const t = visible[n].querySelector('img');
    img.src = t.src; $('#lbCap').textContent = capFor(n);
    const hi = new Image(); hi.src = fullSrc(visible[n]); hi.onload = () => { if (lbIndex === n) img.src = hi.src; };
    img.style.transition = 'none'; img.style.transform = `translateX(${d * 40}px)`;
    requestAnimationFrame(() => { img.style.transition = 'transform .6s cubic-bezier(.22,1,.36,1), opacity .5s'; img.style.transform = 'none'; img.style.opacity = 1; });
  }, 300);
}

function closeLB() {
  const lb = $('#lightbox'), img = $('#lbImg'), thumb = visible[lbIndex].querySelector('img');
  lb.classList.remove('on');
  const a = thumb.getBoundingClientRect(), b = img.getBoundingClientRect();
  if (!reduced && a.width) {
    img.style.transition = 'transform .6s cubic-bezier(.65,0,.35,1), opacity .6s';
    img.style.transform = `translate(${a.left - b.left}px,${a.top - b.top}px) scale(${a.width / b.width},${a.height / b.height})`;
  }
  setTimeout(() => { lb.hidden = true; img.style.transform = ''; img.style.transition = ''; img.style.opacity = ''; document.body.style.overflow = ''; visible[lbIndex].focus({ preventScroll: true }); }, reduced ? 0 : 560);
}

/* ---------- quiz ---------- */
let qi = 0;
function initQuiz() { qi = 0; renderQ(); }

function setProgress(done) {
  $('#quizStep').textContent = `${pad(Math.min(done + 1, DATA.quiz.length))} / ${pad(DATA.quiz.length)}`;
  $('#quizBar').style.width = `${done / DATA.quiz.length * 100}%`;
}

function swap(node) {
  const stage = $('#quizStage'), old = stage.firstElementChild;
  const put = () => { stage.innerHTML = ''; node.classList.add('q-in'); stage.append(node); };
  if (old && !reduced) { old.classList.add('q-out'); setTimeout(put, 420); } else put();
}

function renderQ() {
  const item = DATA.quiz[qi]; setProgress(qi);
  const node = h('div', { class: 'q' }, `<h3>${esc(item.q)}</h3>`);
  const fb = h('p', { class: 'q-feedback', 'aria-live': 'polite' });
  const next = h('button', { class: 'btn btn--dark q-next', type: 'button' }, `${qi === DATA.quiz.length - 1 ? 'Lihat hasil' : 'Lanjut'} <span class="arrow" aria-hidden="true">→</span>`);
  next.addEventListener('click', () => { qi++; qi < DATA.quiz.length ? renderQ() : renderPrize(); });

  const correct = btn => {
    btn.classList.add('right'); $$('.opt', node).forEach(b => b.disabled = true);
    fb.textContent = item.why; fb.classList.add('good'); next.classList.add('show');
    burst(btn, 14); setProgress(qi + 1); $('#quizStep').textContent = `${pad(qi + 1)} / ${pad(DATA.quiz.length)}`;
    setTimeout(() => next.focus({ preventScroll: true }), 300);
  };

  if (item.runaway) {
    const arena = h('div', { class: 'arena' });
    const yes = h('button', { class: 'opt yes', type: 'button' }, esc(item.options[0]));
    const no = h('button', { class: 'opt no', type: 'button', tabindex: '-1', 'aria-hidden': 'true' }, esc(item.options[1]));
    const taunt = h('p', { class: 'taunt' }, 'pilih satu ya');
    let t = 0;
    const dodge = e => {
      e && e.preventDefault();
      const ar = arena.getBoundingClientRect(), bw = no.offsetWidth, bh = no.offsetHeight;
      let x, y, tries = 0;
      const yr = yes.getBoundingClientRect(), yl = yr.left - ar.left, yt = yr.top - ar.top;
      const hitsYes = (x, y) => x < yl + yr.width + 16 && x + bw > yl - 16 && y < yt + yr.height + 16 && y + bh > yt - 16;
      do { x = 12 + Math.random() * (ar.width - bw - 24); y = 12 + Math.random() * (ar.height - bh - 44); tries++; }
      while (tries < 40 && (hitsYes(x, y) || Math.abs(x - no.offsetLeft) < 60));
      no.style.left = x + 'px'; no.style.top = y + 'px';
      taunt.textContent = DATA.taunts[t++ % DATA.taunts.length];
    };
    no.style.transform = 'translateY(-50%)';
    no.addEventListener('pointerenter', () => { no.style.transform = 'none'; dodge(); });
    no.addEventListener('pointerdown', e => { no.style.transform = 'none'; dodge(e); });
    no.addEventListener('click', e => { e.preventDefault(); dodge(); });
    yes.addEventListener('click', () => { no.style.opacity = 0; taunt.style.opacity = 0; correct(yes); });
    arena.append(yes, no, taunt); node.append(arena);
  } else {
    const opts = h('div', { class: 'q-opts' });
    item.options.forEach((o, i) => {
      const b = h('button', { class: 'opt', type: 'button' }, `<b>${String.fromCharCode(65 + i)}</b>${esc(o)}`);
      b.addEventListener('click', () => {
        if (i === item.answer) return correct(b);
        b.classList.remove('wrong'); void b.offsetWidth; b.classList.add('wrong');
        fb.classList.remove('good'); fb.textContent = DATA.wrongLines[Math.floor(Math.random() * DATA.wrongLines.length)];
      });
      opts.append(b);
    });
    node.append(opts);
  }
  node.append(fb, next);
  swap(node);
}

function earbudsSVG() {
  return `<svg viewBox="0 0 120 120" width="110" height="110" role="img" aria-label="Ilustrasi Redmi Buds 6 Play warna hitam">
    <ellipse cx="60" cy="98" rx="40" ry="6" fill="#E6DED3"/>
    <path d="M22 62 Q22 40 60 40 Q98 40 98 62 L96 80 Q94 96 60 96 Q26 96 24 80 Z" fill="#1E1E1F"/>
    <path d="M22 62 Q22 40 60 40 Q98 40 98 62 Z" fill="#2B2B2D"/>
    <path d="M24 63 H96" stroke="#444" stroke-width="2"/>
    <circle cx="60" cy="76" r="2.4" fill="#7BD3A8"/>
    <g transform="translate(36 18) rotate(-14)"><rect x="0" y="6" width="16" height="26" rx="8" fill="#151516"/><ellipse cx="8" cy="8" rx="10" ry="9" fill="#262628"/><ellipse cx="8" cy="7" rx="5" ry="4" fill="#3A3A3D"/></g>
    <g transform="translate(70 14) rotate(14)"><rect x="0" y="6" width="16" height="26" rx="8" fill="#151516"/><ellipse cx="8" cy="8" rx="10" ry="9" fill="#262628"/><ellipse cx="8" cy="7" rx="5" ry="4" fill="#3A3A3D"/></g>
  </svg>`;
}

function renderPrize() {
  setProgress(DATA.quiz.length); $('#quizStep').textContent = 'SELESAI';
  const p = DATA.prize;
  const node = h('div', { class: 'prize' }, `
    <p class="label">6 / 6 benar</p>
    <h3>Kamu lulus.<br>Ada hadiah buat kamu.</h3>
    <button class="gift" type="button" aria-label="Buka hadiah"><span class="gift-box"></span><span class="gift-lid"><span class="gift-bow"></span></span></button>
    <p class="gift-hint">ketuk kadonya</p>
    <div class="reward" role="status">
      <div class="reward-img">${earbudsSVG()}</div>
      <div><small>hadiah kamu</small><h4>${esc(p.name)}</h4><div class="tags"><span>Variasi: ${esc(p.variant)}</span><span>${esc(p.note)}</span><span>x1</span></div></div>
    </div>
    <button class="btn btn--ghost again" type="button">Main lagi <span class="arrow" aria-hidden="true">↺</span></button>`);
  const gift = $('.gift', node), reward = $('.reward', node), again = $('.again', node), hint = $('.gift-hint', node);
  again.style.display = 'none';
  gift.addEventListener('click', () => {
    if (gift.classList.contains('open')) return;
    gift.classList.add('open'); hint.style.opacity = 0;
    setTimeout(() => { reward.classList.add('show'); again.style.display = ''; rain(); }, 550);
  }, { once: false });
  again.addEventListener('click', () => { qi = 0; renderQ(); });
  swap(node);
}

/* confetti blobs */
const CONF = ['#FFE59A', '#FFB5C1', '#B7E1D1', '#A9D3FF', '#1B1A19'];
function rain(n = 70) {
  if (reduced) return;
  const box = $('#confetti');
  for (let i = 0; i < n; i++) {
    const c = h('i');
    c.style.left = Math.random() * 100 + 'vw';
    c.style.background = CONF[i % CONF.length];
    c.style.setProperty('--x', (Math.random() * 200 - 100) + 'px');
    c.style.setProperty('--rz', (Math.random() * 720 - 360) + 'deg');
    c.style.setProperty('--t', (2 + Math.random() * 1.8) + 's');
    c.style.animationDelay = Math.random() * 0.6 + 's';
    const s = 8 + Math.random() * 10; c.style.width = s + 'px'; c.style.height = s * 0.85 + 'px';
    box.append(c); c.addEventListener('animationend', () => c.remove());
  }
}
function burst(el, n) {
  if (reduced) return;
  const r = el.getBoundingClientRect(), box = $('#confetti');
  for (let i = 0; i < n; i++) {
    const c = h('i'); const a = Math.random() * Math.PI * 2, d = 50 + Math.random() * 70;
    c.style.cssText = `left:${r.left + r.width / 2}px;top:${r.top + r.height / 2}px;background:${CONF[i % 4]};animation:none;transition:transform .8s cubic-bezier(.22,1,.36,1),opacity .8s ease`;
    box.append(c);
    requestAnimationFrame(() => requestAnimationFrame(() => { c.style.transform = `translate(${Math.cos(a) * d}px,${Math.sin(a) * d}px) rotate(${a * 90}deg)`; c.style.opacity = 0; }));
    setTimeout(() => c.remove(), 900);
  }
}

/* ---------- letter ---------- */
function initLetter() {
  const env = $('#envelope'), letter = $('#letter'), body = $('#letterBody');
  DATA.letter.forEach(t => body.append(h('p', {}, esc(t))));
  env.addEventListener('click', () => {
    if (env.classList.contains('open')) return;
    env.classList.add('open'); env.setAttribute('aria-expanded', 'true');
    setTimeout(() => {
      letter.hidden = false;
      $$('p', body).forEach((p, i) => setTimeout(() => p.classList.add('in'), 250 + i * 380));
      letter.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
    }, reduced ? 0 : 1100);
  });
  $('#letterClose').addEventListener('click', () => {
    letter.hidden = true; $$('p', body).forEach(p => p.classList.remove('in'));
    env.classList.remove('open'); env.setAttribute('aria-expanded', 'false');
    env.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
  });
}

/* ---------- eyes follow the pointer ---------- */
function initEyes() {
  let tx = 0, ty = 0, cx = 0, cy = 0;
  addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; }, { passive: true });
  const loop = () => {
    cx += (tx - cx) * 0.12; cy += (ty - cy) * 0.12;
    $$('.eyes').forEach(g => {
      const r = g.getBoundingClientRect(); if (!r.width || r.bottom < 0 || r.top > innerHeight) return;
      const dx = cx - (r.left + r.width / 2), dy = cy - (r.top + r.height / 2), m = Math.hypot(dx, dy) || 1, k = Math.min(1, m / 300) * (g.classList.contains('eyes--big') ? 7 : 4);
      g.style.setProperty('--ex', (dx / m * k).toFixed(2) + 'px'); g.style.setProperty('--ey', (dy / m * k).toFixed(2) + 'px');
    });
    requestAnimationFrame(loop);
  };
  if (!reduced && matchMedia('(pointer:fine)').matches) loop();
}

initGate(); initEyes();
