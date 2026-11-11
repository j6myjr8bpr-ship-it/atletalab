# Analisi delle opportunità e scelta del business

Analisi richiesta prima della costruzione: 8 idee valutate su domanda di mercato, concorrenza, costi reali, automazione possibile e tempo stimato al primo guadagno. Punteggio finale 1–10.

| # | Idea | Domanda | Concorrenza (10=bassa) | Costi (10=zero) | Automazione | Tempo al 1° guadagno | Punteggio |
|---|------|---------|--------------------------|-------------------|--------------|------------------------|-----------|
| 1 | **Sito di calcolatori scientifici per l'allenamento (scelto)** | 7 | 6 | 10 | 8 | 2–6 mesi | **8,0** |
| 2 | Blog/sito di affiliazione su attrezzatura sportiva | 7 | 5 | 9 | 5 | 3–6 mesi | 6,3 |
| 3 | Micro-SaaS: generatore di schede di allenamento (freemium) | 6 | 6 | 7 | 6 | 3–6 mesi | 5,9 |
| 4 | Newsletter/aggregatore automatico di ricerca sportiva | 5 | 7 | 9 | 9 | lungo, monetizzazione incerta | 5,5 |
| 5 | Directory comparativa prodotti fitness (con scraping prezzi) | 6 | 3 | 7 | 6 | 4–6 mesi, rischio ToS | 4,6 |
| 6 | Tool di produttività generico (non legato a competenze specifiche) | 5 | 1 | 8 | 7 | lungo | 3,2 |
| 7 | Automazione di contenuti "faceless" sui social | 5 | 1 | 8 | 7 | incerto, rischio penalizzazione piattaforme | 2,8 |
| 8 | Dropshipping / e-commerce | 4 | 2 | 3 | 3 | lungo, rischio economico | 2,0 |

## Perché l'idea #1

**Costi reali pari a zero e compatibilità con i vincoli.** GitHub Pages è gratuito, ma i suoi stessi Termini di Servizio vietano di usarlo come hosting per un e-commerce o un SaaS a pagamento vero e proprio ("not intended for or allowed to be used as a free web-hosting service to run your online business, e-commerce site, or any other website that is primarily directed at... providing commercial software as a service"). Un sito di contenuti/strumenti gratuiti monetizzato con pubblicità contestuale e link di affiliazione — pratica comunissima e consentita — rientra pienamente nell'uso previsto; le idee #3 (micro-SaaS a pagamento) ed #8 (e-commerce) avrebbero invece richiesto un hosting diverso da quello gratuito che hai a disposizione.

**Automazione realistica.** Una volta costruiti, i calcolatori non richiedono manutenzione quotidiana: sono "evergreen" (restano utili e corretti nel tempo) e generano traffico organico da ricerca senza bisogno di nuovi contenuti ogni giorno — rispettando il tuo vincolo di non voler creare contenuti manualmente ogni giorno. Il controllo di qualità (link rotti) e i promemoria sui contenuti sono automatizzabili al 100% gratuitamente con GitHub Actions.

**Nessun contenuto di massa privo di valore.** Le idee basate su aggregazione automatica (#4) o automazione social "faceless" (#7) rischiano di produrre esattamente il tipo di contenuto che hai vietato esplicitamente, e oggi i motori di ricerca penalizzano sempre più i contenuti privi di valore aggiunto reale.

**Vantaggio competitivo concreto.** Il settore (calcolatori di scienze motorie/allenamento) ha una domanda stabile e ricorrente, ma la maggior parte dei siti concorrenti è generica o poco curata: un sito costruito con formule corrette e spiegate bene, aggiornato da chi ha reali basi di scienze motorie, ha un vantaggio di credibilità reale — che aiuta sia il posizionamento SEO (Google privilegia contenuti scritti con competenza reale) sia l'approvazione di Google AdSense (che richiede contenuto "genuinamente utile", non quantità minima di traffico).

**Monetizzazione coerente col comportamento degli utenti.** Chi usa un calcolatore di allenamento è spesso anche interessato ad attrezzatura sportiva, libri di metodologia, integratori — un abbinamento naturale per link di affiliazione, a differenza di pubblicità "a caso".

## Onestà sui tempi e sui numeri

Questa analisi non promette guadagni garantiti, e nessuno può farlo onestamente. Il percorso realistico è:
- **Settimane 1–4:** costruzione, pubblicazione, primi contenuti, richiesta indicizzazione a Google.
- **Mesi 1–3:** traffico organico ancora basso; è il momento di richiedere Google AdSense (non c'è una soglia minima di traffico ufficiale, ma serve contenuto originale sufficiente — indicativamente una quindicina di pagine/articoli di qualità) e di valutare le prime affiliazioni di settore.
- **Mesi 3–6+:** se il traffico cresce con contenuti regolari, i primi ricavi (pubblicità + eventuali commissioni) diventano plausibili; l'obiettivo di 10–50 €/settimana indicato come partenza è raggiungibile in questo orizzonte **solo** con traffico organico reale, non prima.
- Amazon Associates Italia richiede **3 vendite qualificate entro 180 giorni** dall'iscrizione per restare attivo: conviene richiederlo quando il sito ha già un minimo di visite, non il primo giorno.

## Cosa è automatizzato al 100% e cosa no

| Attività | Automatizzabile al 100%? |
|---|---|
| Hosting e pubblicazione del sito | ✅ Sì (GitHub Pages) |
| Funzionamento dei calcolatori | ✅ Sì (girano nel browser dell'utente) |
| Controllo settimanale di link rotti, con apertura automatica di una Issue | ✅ Sì (GitHub Actions) |
| Promemoria mensile su quale articolo scrivere | ✅ Sì (GitHub Actions) |
| Analisi del traffico (statistiche) | ✅ Sì, una volta collegato un account gratuito |
| Scrittura di nuovi articoli di qualità | ❌ No — richiede intervento umano (per restare coerente col vincolo "niente contenuto di massa senza valore" e per l'idoneità ad AdSense) |
| Creazione account (GitHub, AdSense, Amazon Associates) e verifica identità/pagamenti | ❌ No — richiede la tua identità e i tuoi dati |
| Approvazione di AdSense e dei programmi di affiliazione | ❌ No — decisione di terzi, non garantita né controllabile |
| Eventuale acquisto di un dominio personalizzato | ❌ No — richiede una spesa, per questo è stato lasciato come opzionale |
