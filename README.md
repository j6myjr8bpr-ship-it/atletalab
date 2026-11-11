# AtletaLab — calcolatori scientifici per l'allenamento

Sito statico con 4 calcolatori funzionanti (ritmo di corsa, VO2max, zone di frequenza cardiaca, FTP ciclismo), una sezione articoli, pagine legali e due automazioni gratuite già pronte. Vedi `ANALISI-BUSINESS.md` per l'analisi completa delle opportunità e il perché di questa scelta.

Tutto il codice è reale e funzionante: puoi aprire ogni file `.html` con qualunque browser (anche prima di pubblicarlo) e i calcolatori funzioneranno già, perché la logica gira in JavaScript nel browser.

## 1. Pubblicare il sito da iPad/iPhone (nessun computer necessario)

1. **Crea un account GitHub** (se non l'hai già): vai su [github.com](https://github.com) da Safari, tocca "Sign up" e segui la procedura. È gratuito.
2. **Crea un nuovo repository**: tocca il "+" in alto → "New repository". Nome consigliato: `atletalab`. Lascialo "Public". Non aggiungere file automatici (README, licenza): li carichiamo noi. Tocca "Create repository".
3. **Carica i file**: nella pagina del repository tocca "Add file" → "Upload files". Da qui puoi selezionare tutti i file e le cartelle di questo progetto (su iPad l'app Files permette di selezionare più elementi). Attenzione: devi mantenere la struttura delle cartelle (`tools/`, `blog/`, `assets/`, `.github/`) — se l'interfaccia di upload non mantiene le sottocartelle, carica prima la cartella radice e poi entra in ciascuna sottocartella creandola (tocca "Create new file", scrivi `tools/ritmo-corsa.html` come nome: GitHub crea la cartella automaticamente) e incolla il contenuto di ciascun file.
4. **Attiva GitHub Pages**: nel repository vai su "Settings" → "Pages". In "Source" scegli "Deploy from a branch", branch `main`, cartella `/ (root)`. Salva. Dopo 1-2 minuti il sito sarà online all'indirizzo `https://TUO-UTENTE.github.io/atletalab/`.
5. **Sostituisci il segnaposto**: in tutti i file `.html`, `robots.txt` e `sitemap.xml` c'è scritto `TUO-UTENTE`. Sostituiscilo con il tuo nome utente GitHub reale (puoi farlo direttamente nell'editor di testo di GitHub, toccando la matita su ogni file).

Il sito è ora pubblico, reale e gratuito per sempre (nei limiti d'uso di GitHub Pages: 100 GB di banda al mese, sito sotto 1 GB — ampiamente sufficienti per iniziare).

**Nota importante sui Termini di Servizio:** GitHub Pages è pensato per siti di contenuti/strumenti, non per un e-commerce o un SaaS a pagamento. Un sito come questo (contenuti gratuiti + pubblicità contestuale + eventuali link di affiliazione) rientra nell'uso previsto — è esattamente il modello di moltissimi blog ospitati gratuitamente su GitHub Pages. Se in futuro vorrai aggiungere un servizio a pagamento vero e proprio, ti serviranno un altro tipo di hosting (te lo segnalo quando succede).

## 2. Collegare un dominio personalizzato (facoltativo, a pagamento)

Non necessario per iniziare: `github.io` funziona perfettamente ed è gratuito. Se in futuro vorrai un dominio tipo `atletalab.it` (circa 10-15 €/anno), si collega da Settings → Pages → "Custom domain", seguendo la guida ufficiale di GitHub.

## 3. Attivare le statistiche (gratis, senza banner cookie)

1. Vai su [goatcounter.com](https://www.goatcounter.com) e crea un account gratuito (nessuna carta di credito richiesta).
2. Scegli un "code" per il tuo sito (es. `atletalab`): otterrai uno script da incollare.
3. In ogni file `.html`, prima di `</body>`, incolla lo script che ti fornisce GoatCounter (è una sola riga).
4. GoatCounter non usa cookie né dati personali, quindi non serve aggiungere un banner di consenso per le sole statistiche.

## 4. Le due automazioni già incluse (gratis, su GitHub Actions)

Non devi configurare nulla: partono da sole appena il repository è pubblico.

- **`.github/workflows/controllo-link.yml`** — ogni lunedì mattina controlla che non ci siano link rotti sul sito. Se li trova, apre automaticamente una "Issue" (una specie di nota/notifica) nel repository per avvisarti.
- **`.github/workflows/promemoria-contenuti.yml`** — il primo di ogni mese apre una Issue che ti suggerisce il prossimo argomento da scrivere (la lista è in `content-ideas.json`, puoi modificarla quando vuoi).

Puoi vedere queste Issue dall'app GitHub (disponibile anche per iOS) o dal sito, e riceverai anche una notifica email di default.

**Perché non è tutto automatico al 100%:** hai chiesto esplicitamente di non voler contenuto generato in massa senza valore. Per questo la scrittura degli articoli resta un passaggio umano (puoi farti aiutare da Claude per velocizzarla, ma la revisione finale dovrebbe restare tua) — è anche un requisito pratico per restare idoneo a Google AdSense.

## 5. Richiedere Google AdSense (quando il sito ha qualche contenuto)

1. Compila prima le pagine `privacy.html` e `chi-siamo.html` (i segnaposto `[DA COMPILARE]`) e pubblica almeno una decina di pagine/articoli originali — i 4 calcolatori più qualche articolo come quello già incluso in `blog/`.
2. Vai su [adsense.google.com](https://adsense.google.com), registrati con il tuo sito.
3. Non c'è una soglia ufficiale minima di traffico o di post, ma la revisione valuta la qualità e originalità dei contenuti: più il sito è completo, meglio è.
4. La revisione richiede in genere da pochi giorni ad alcune settimane.
5. Una volta approvato, sostituisci i blocchi `<div class="ad-slot">...</div>` nell'HTML con il codice annuncio che Google ti fornisce, e aggiorna `privacy.html` aggiungendo un banner di consenso cookie (necessario in UE quando sono attivi annunci).

## 6. Richiedere programmi di affiliazione (quando c'è un minimo di traffico)

- **Amazon Associates Italia** ([affiliazione.amazon.it](https://affiliazione.amazon.it)): aperto a tutti, ma per restare attivo devi generare **almeno 3 vendite qualificate entro 180 giorni** dall'iscrizione, altrimenti l'account viene disattivato. Conviene iscriversi quando il sito ha già qualche visitatore, non il primo giorno.
- Valuta anche programmi di affiliazione specifici per attrezzatura sportiva (es. negozi di running/triathlon), spesso con commissioni più alte di Amazon.
- Ogni pagina con link di affiliazione deve dichiararlo (la sezione già presente in `privacy.html` lo fa a livello di sito; per singoli articoli è buona norma aggiungere una riga tipo "Questo articolo contiene link di affiliazione").

## 7. Mantenere il sito nel tempo

- Apri una Issue al mese (quella automatica) → scrivi l'articolo → pubblicalo caricando il file in `blog/` e aggiungendo il link in `blog/index.html` e in `sitemap.xml`.
- Controlla le Issue aperte dal controllo-link settimanale e correggi eventuali link rotti.
- Ogni 1-2 mesi dai un'occhiata alle statistiche su GoatCounter per capire quali pagine funzionano meglio.

## Struttura del progetto

```
index.html                     Homepage
tools/ritmo-corsa.html          Calcolatore ritmo di corsa
tools/vo2max.html                Calcolatore VO2max (Cooper + Daniels&Gilbert)
tools/zone-frequenza-cardiaca.html   Zone FC (Karvonen/Tanaka)
tools/ftp-ciclismo.html          FTP e zone di potenza (Coggan)
blog/                            Articoli
privacy.html, chi-siamo.html     Pagine legali/informative
assets/css/style.css             Stile del sito
assets/js/calculators.js         Logica di tutti i calcolatori
.github/workflows/               Le due automazioni gratuite
content-ideas.json               Lista di idee per nuovi articoli
ANALISI-BUSINESS.md              Analisi di mercato e motivazione della scelta
```
