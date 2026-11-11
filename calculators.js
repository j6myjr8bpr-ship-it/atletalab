/* AtletaLab — logica dei calcolatori
   Tutte le formule sono formule scientifiche di dominio pubblico
   (Cooper, Daniels & Gilbert, Karvonen, Tanaka, Coggan, Riegel). */

function mostraRisultato(el){
  el.classList.add('visibile');
}

function fmt(n, dec){
  if (!isFinite(n)) return '—';
  return n.toLocaleString('it-IT', {minimumFractionDigits:dec, maximumFractionDigits:dec});
}

function secondiInMMSS(sec){
  sec = Math.round(sec);
  const m = Math.floor(sec/60);
  const s = sec%60;
  return m + ':' + String(s).padStart(2,'0');
}
function secondiInHHMMSS(sec){
  sec = Math.round(sec);
  const h = Math.floor(sec/3600);
  const m = Math.floor((sec%3600)/60);
  const s = sec%60;
  if (h>0) return h+':'+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
  return m+':'+String(s).padStart(2,'0');
}

/* ---------------- RITMO DI CORSA ---------------- */
function initRitmo(){
  const form = document.getElementById('form-ritmo');
  if (!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const distanza = parseFloat(document.getElementById('distanza').value);
    const ore = parseFloat(document.getElementById('ore').value || 0);
    const min = parseFloat(document.getElementById('minuti').value || 0);
    const sec = parseFloat(document.getElementById('secondi').value || 0);
    if (!distanza || distanza <= 0) return;
    const tempoTotSec = ore*3600 + min*60 + sec;
    if (tempoTotSec <= 0) return;

    const ritmoSecPerKm = tempoTotSec / distanza;
    const velocitaKmh = distanza / (tempoTotSec/3600);

    document.getElementById('out-ritmo').textContent = secondiInMMSS(ritmoSecPerKm) + ' /km';
    document.getElementById('out-velocita').textContent = fmt(velocitaKmh,2) + ' km/h';

    // Previsione tempi su altre distanze — formula di Riegel: T2 = T1 * (D2/D1)^1.06
    const distanzeRif = [
      {nome:'5 km', km:5},
      {nome:'10 km', km:10},
      {nome:'Mezza maratona (21,097 km)', km:21.0975},
      {nome:'Maratona (42,195 km)', km:42.195}
    ];
    const corpo = document.getElementById('tabella-previsioni');
    corpo.innerHTML = '';
    distanzeRif.forEach(d=>{
      const tPrevisto = tempoTotSec * Math.pow(d.km/distanza, 1.06);
      const tr = document.createElement('tr');
      tr.innerHTML = '<td>'+d.nome+'</td><td>'+secondiInHHMMSS(tPrevisto)+'</td>';
      corpo.appendChild(tr);
    });

    mostraRisultato(document.getElementById('risultato-ritmo'));
  });
}

/* ---------------- VO2max ---------------- */
function initVo2max(){
  const formCooper = document.getElementById('form-cooper');
  if (formCooper){
    formCooper.addEventListener('submit', function(e){
      e.preventDefault();
      const metri = parseFloat(document.getElementById('metri-cooper').value);
      if (!metri || metri<=0) return;
      const vo2 = (metri - 504.9) / 44.73;
      document.getElementById('out-cooper').textContent = fmt(vo2,1) + ' ml/kg/min';
      mostraRisultato(document.getElementById('risultato-cooper'));
    });
  }

  const formGara = document.getElementById('form-gara');
  if (formGara){
    formGara.addEventListener('submit', function(e){
      e.preventDefault();
      const distanza = parseFloat(document.getElementById('distanza-gara').value);
      const ore = parseFloat(document.getElementById('ore-gara').value || 0);
      const min = parseFloat(document.getElementById('minuti-gara').value || 0);
      const sec = parseFloat(document.getElementById('secondi-gara').value || 0);
      if (!distanza || distanza<=0) return;
      const tSec = ore*3600+min*60+sec;
      if (tSec<=0) return;
      const tMin = tSec/60;
      const vMetriMin = (distanza*1000) / tMin;

      // Daniels & Gilbert
      const vo2 = -4.60 + 0.182258*vMetriMin + 0.000104*Math.pow(vMetriMin,2);
      const pctVo2max = 0.2989558*Math.exp(-0.1932605*tMin) + 0.1894393*Math.exp(-0.012778*tMin) + 0.8;
      const vdot = vo2 / pctVo2max;

      document.getElementById('out-vdot').textContent = fmt(vdot,1);
      mostraRisultato(document.getElementById('risultato-gara'));
    });
  }
}

/* ---------------- ZONE FREQUENZA CARDIACA ---------------- */
function initFC(){
  const form = document.getElementById('form-fc');
  if (!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const eta = parseFloat(document.getElementById('eta').value);
    const fcRiposo = parseFloat(document.getElementById('fc-riposo').value || 0);
    const formula = document.getElementById('formula-fcmax').value;
    let fcMaxInput = document.getElementById('fc-max-nota').value;
    let fcMax;
    if (fcMaxInput){
      fcMax = parseFloat(fcMaxInput);
    } else if (formula === 'tanaka'){
      fcMax = 208 - 0.7*eta;
    } else {
      fcMax = 220 - eta;
    }
    if (!fcMax) return;

    document.getElementById('out-fcmax').textContent = Math.round(fcMax) + ' bpm';

    const zone = [
      {nome:'Zona 1 — Recupero attivo', da:0.50, a:0.60},
      {nome:'Zona 2 — Resistenza di base', da:0.60, a:0.70},
      {nome:'Zona 3 — Aerobica / Tempo', da:0.70, a:0.80},
      {nome:'Zona 4 — Soglia anaerobica', da:0.80, a:0.90},
      {nome:'Zona 5 — Massimale', da:0.90, a:1.00}
    ];
    const corpo = document.getElementById('tabella-zone-fc');
    corpo.innerHTML = '';
    zone.forEach(z=>{
      let bassa, alta;
      if (fcRiposo>0){
        // metodo di Karvonen (riserva cardiaca)
        bassa = fcRiposo + z.da*(fcMax - fcRiposo);
        alta = fcRiposo + z.a*(fcMax - fcRiposo);
      } else {
        bassa = z.da*fcMax;
        alta = z.a*fcMax;
      }
      const tr = document.createElement('tr');
      tr.innerHTML = '<td>'+z.nome+'</td><td>'+Math.round(bassa)+' – '+Math.round(alta)+' bpm</td>';
      corpo.appendChild(tr);
    });

    mostraRisultato(document.getElementById('risultato-fc'));
  });
}

/* ---------------- FTP CICLISMO ---------------- */
function initFTP(){
  const form = document.getElementById('form-ftp');
  if (!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const tipoTest = document.querySelector('input[name=tipo-test]:checked').value;
    const potenza = parseFloat(document.getElementById('potenza-media').value);
    if (!potenza || potenza<=0) return;
    let ftp;
    if (tipoTest === '20min'){
      ftp = potenza * 0.95;
    } else {
      ftp = potenza * 0.90; // test da 60 min: FTP ≈ potenza media
    }
    document.getElementById('out-ftp').textContent = Math.round(ftp) + ' W';

    const zone = [
      {nome:'Z1 — Recupero attivo', da:0, a:0.55},
      {nome:'Z2 — Resistenza (Endurance)', da:0.56, a:0.75},
      {nome:'Z3 — Tempo', da:0.76, a:0.90},
      {nome:'Z4 — Soglia (Threshold)', da:0.91, a:1.05},
      {nome:'Z5 — VO2max', da:1.06, a:1.20},
      {nome:'Z6 — Capacità anaerobica', da:1.21, a:1.50},
      {nome:'Z7 — Potenza neuromuscolare', da:1.51, a:null}
    ];
    const corpo = document.getElementById('tabella-zone-ftp');
    corpo.innerHTML = '';
    zone.forEach(z=>{
      const bassa = Math.round(z.da*ftp);
      const alta = z.a ? Math.round(z.a*ftp)+' W' : '+';
      const tr = document.createElement('tr');
      tr.innerHTML = '<td>'+z.nome+'</td><td>'+bassa+' – '+alta+'</td>';
      corpo.appendChild(tr);
    });

    mostraRisultato(document.getElementById('risultato-ftp'));
  });
}

document.addEventListener('DOMContentLoaded', function(){
  initRitmo();
  initVo2max();
  initFC();
  initFTP();
});
