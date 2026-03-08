const scenarios = {
  "Skogbrann": {
    "Bodø sentrum": {
      title: "OPERATION EMBERFALL",
      intro: "Klokken 14:23 melder Nordland 110-sentral om røykutvikling i skogsområdet øst for Bodø sentrum. Vinden er nordøstlig med 14 m/s og tiltar. Temperaturen er 24°C og relativ luftfuktighet er 18% — ekstremt brannfarlige forhold. Brannen sprer seg raskt mot tett bebyggelse.",
      sections: [
        { title: "INITIAL SITUASJON", body: "Brannen startet i et friluftområde etter mulig lyn. Røykfanen er synlig fra hele Bodø. To hytteområder med til sammen 34 hytter ligger i umiddelbar spredningsretning. Veiforbindelsen er allerede kuttet av flammer." },
        { title: "RESSURSER", body: "Tilgjengelig: 3 brannbiler lokalt, 1 tankbil, 1 mannskapsbil fra Fauske (ETA 45 min). Luftressurser: Helikopter fra Rygge (ETA 90 min). Frivillige brannlag i Misvær og Skjerstad kan mobiliseres innen 60 min." },
        { title: "UTFORDRINGER", body: "1. Evakuering av 12 kjente hyttebeboere — 3 er immobile.
2. Kommunikasjonssvikt: mobilnett overbelastet i sektor nord.
3. Skiftende vindretning forventes kl. 17:00 — ny spredningsretning ukjent.
4. Lokal mediedekning starter live-streaming. Pressehåndtering nødvendig." },
        { title: "LÆRINGSMÅL", body: "• Tverretatlig kommandostruktur under dynamisk hendelse
• Evakueringsplanlegging med sårbare grupper
• Ressurskoordinering på tvers av kommunegrenser
• Kommunikasjon med media og befolkning" },
        { title: "INJEKSJONER (T+0 til T+120 min)", body: "T+20: En beboer nekter å evakuere. Juridisk hjemmel?
T+45: Vindskift varslet. Ny spredningsmodell mottas.
T+60: Fauske-bilen får punktering. Ny ETA ukjent.
T+90: NRK ringer for kommentar om manglende evakueringsplan.
T+110: Brann kontrollert på én flanke — ny antennelse oppdaget." }
      ]
    }
  }
};

const scenarioTemplates = [
  {
    title: "OPERATION ARCTIC LOCKDOWN",
    intro: "Klokken 09:47 mottar Politiets operasjonssentral melding om mulig kjemikalielekkasje ved industrihavn. Ukjent stoff, skarp lukt rapportert av 14 arbeidere. Tre personer har allerede kollapset. Vinden fører eventuelle gasser mot tett bebyggelse.",
    sections: [
      { title: "INITIAL SITUASJON", body: "Kjemikalietankskip 'MV Nordic Star' losser karbonylsulfid ved kai 7. Ventil på tank 3C har sviktet. Havnearbeidere evakuerer spontant. Det er uklart om lekkasjen er under kontroll." },
      { title: "INVOLVERTE ETATER", body: "Politi, Brann/CBRN-enhet, Ambulanse, Kystverket, Fylkesmannen, Havnevesenet, Mattilsynet, Statsforvalteren." },
      { title: "UTFORDRINGER", body: "1. Identifisering av kjemikalie — MSDS-ark ikke tilgjengelig på norsk.
2. Evakueringsradius ukjent inntil analyse foreligger.
3. Skipet kan ikke flyttes uten mannskap — kapteinen er blant de kollapsede.
4. Lokal barneskole 400m fra havna har 320 elever." },
      { title: "LÆRINGSMÅL", body: "• CBRN-protokoll og verneutstyr nivå
• Tverretatlig beslutningstaking under usikkerhet
• Evakueringsplan for sårbar befolkning
• Loggføring og dokumentasjon i akuttfase" },
      { title: "INJEKSJONER", body: "T+15: CBRN bekrefter giftig gass — evakueringsradius økes til 800m.
T+30: Media publiserer feil informasjon om antall skadde.
T+50: Barneskolen ringer — de har ikke mottatt evakueringsordre.
T+75: Kystverket krever kommando over havneområdet.
T+100: Vær-app varsler vindøkning til 18 m/s om 20 min." }
    ]
  },
  {
    title: "OPERATION WHITEOUT",
    intro: "Ekstremvær treffer Nord-Norge. Meteorologisk institutt oppgraderer til rødt farevarsel. En kolonne med 8 kjøretøy er stoppet på E6 mellom Fauske og Bodø. Temperatur: -24°C, vindstyrke 28 m/s, sikt under 10 meter.",
    sections: [
      { title: "INITIAL SITUASJON", body: "47 personer er fanget i kjøretøyene. Blant disse: 6 barn, 2 gravide, 1 dialysepasient med 6 timer igjen på maskin. Mobildekning sporadisk. Snøplogene er trukket tilbake grunnet fare for egne mannskaper." },
      { title: "RESSURSER", body: "Tilgjengelig: Redningshelikopter (kapasitet 6 personer per tur, ETA 40 min), 2 Sivilforsvar-beltekjøretøy (ETA 90 min), Lokalt frivillig brannvern mobilisert." },
      { title: "UTFORDRINGER", body: "1. Dialysepasient krever øyeblikkelig transport til Nordlandssykehuset.
2. En bil har fått motorstans — passasjerene fryser.
3. Prioritering: hvem evakueres med helikopter i første tur?
4. Koordinering med pårørende og media uten stabil kommunikasjon." },
      { title: "LÆRINGSMÅL", body: "• Triagering og prioritering under ressursmangel
• Kommunikasjon under tekniske feil
• Samvirke mellom frivillige og profesjonelle mannskaper
• Etiske beslutninger i felt" },
      { title: "INJEKSJONER", body: "T+10: Dialysepasient blir kritisk.
T+35: En av bilene tar fyr — ukjent årsak.
T+55: Helikopter må returnere grunnet isingsfare. Ny ETA 80 min.
T+70: Pårørende møter opp i privatbiler og blokkerer veien.
T+95: Beltekjøretøy velter i snøskred — mannskap uskade, men ute av spill." }
    ]
  },
  {
    title: "OPERATION GRIDFALL",
    intro: "Kl. 03:14 faller strømnettet i Bodø-regionen. Årsak ukjent. Backup-generatorer på Nordlandssykehuset starter automatisk, men ett operasjonsrom mister strøm i 8 sekunder under pågående operasjon. Estimert gjenopprettingstid: ukjent.",
    sections: [
      { title: "INITIAL SITUASJON", body: "Blackout dekker 42 000 husstander. Temperatur ute: -18°C. Nødstrømsaggregater hos kritisk infrastruktur har kapasitet for 48–72 timer. En rekke eldre beboere i blokkbebyggelse har elektrisk oppvarming som eneste varmekilde." },
      { title: "INVOLVERTE ETATER", body:"Statsforvalter, Politiet, Nordlandsnett, Sykehuset, Kommunen, Sivilforsvaret, Røde Kors, NVE." },
      { title: "UTFORDRINGER", body: "1. Identifisere og sikre sårbare beboere uten strøm i kulda.
2. Sykehuset: operasjonskapasitet er redusert med 60%.
3. Bensinstasjoner uten strøm — nødkjøretøy kan ikke tanke.
4. Ukjent årsak: sabotasje kan ikke utelukkes." },
      { title: "LÆRINGSMÅL", body: "• Krisehåndtering uten digital infrastruktur
• Prioritering av kritisk infrastruktur
• Informasjon til befolkning uten internett og TV
• PST-kobling ved mulig sabotasje" },
      { title: "INJEKSJONER", body: "T+20: Sykehuset melder at nødstrøm i fløy C svikter.
T+40: Brann i blokk — antas knyttet til levende lys under blackout.
T+60: PST kontakter politiet: strømbruddet ser ikke ut til å være teknisk svikt.
T+80: Lokalt FM-radio er eneste kommunikasjonskanal som fungerer.
T+110: Strøm gjenopprettes i deler av byen — kaos ved lysregulering." }
    ]
  }
];

function generateScenario() {
  const crisis = document.getElementById('crisis').value;
  const geography = document.getElementById('geography').value;
  const actors = document.getElementById('actors').value;
  const difficulty = document.getElementById('difficulty').value;
  const extra = document.getElementById('extra').value;

  if (!crisis || !geography || !actors || !difficulty) {
    alert('Fyll inn alle obligatoriske felt for å generere scenario.');
    return;
  }

  document.getElementById('output').style.display = 'none';
  document.getElementById('loader').style.display = 'flex';

  setTimeout(() => {
    const template = scenarioTemplates[Math.floor(Math.random() * scenarioTemplates.length)];
    renderScenario(template, crisis, geography, actors, difficulty, extra);
  }, 1800);
}

function renderScenario(t, crisis, geography, actors, difficulty, extra) {
  document.getElementById('loader').style.display = 'none';

  const difficultyTag = difficulty === 'Ekspert' ? '🔴 EKSPERT' :
    difficulty === 'Avansert' ? '🟠 AVANSERT' :
    difficulty === 'Middels' ? '🟡 MIDDELS' : '🟢 GRUNNLEGGENDE';

  let html = `<span class="section-title">SCENARIONAVN</span>${t.title}\n\n`;
  html += `<span class="section-title">METADATA</span>`;
  html += `Krisetype: ${crisis}\nGeografi: ${geography}\nAktøromfang: ${actors}\nNivå: ${difficultyTag}\n`;
  if (extra) html += `Spesielle utfordringer: ${extra}\n`;
  html += `\n`;

  html += `<span class="section-title">SCENARIO-BRIEF</span>${t.intro}\n`;

  for (const s of t.sections) {
    html += `\n<span class="section-title">${s.title}</span>${s.body}\n`;
  }

  html += `\n<span class="section-title">TIDSSTEMPEL</span>Generert: ${new Date().toLocaleString('no-NO')} · NordLab AI v1.0`;

  document.getElementById('output-body').innerHTML = html;
  document.getElementById('output').style.display = 'block';
  document.getElementById('output').scrollIntoView({ behavior: 'smooth' });
}

function copyScenario() {
  const text = document.getElementById('output-body').innerText;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector('.copy-btn');
    btn.textContent = 'Kopiert ✓';
    setTimeout(() => btn.textContent = 'Kopier ↗', 2000);
  });
}

function exportPDF() {
  window.print();
}