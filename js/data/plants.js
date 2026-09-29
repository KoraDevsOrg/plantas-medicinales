/**
 * Catálogo de Plantas Medicinales y Huertos Caseros
 * Registros estructurados para mod_botanica_plantas
 * Licencia Libre MIT - KoraDevsOrg
 */

export const PLANTS_DATA = Object.freeze([
  {
    id: "manzanilla",
    scientificName: "Matricaria chamomilla",
    names: {
      es: "Manzanilla",
      guc: "Manzaniiya",
      pbb: "Manzanilla theg"
    },
    category: "digestivo",
    cultivation: {
      es: "Huerto en maceta: Requiere sol directo y riego moderado (2 veces por semana). Cosechar las flores cuando abran completamente.",
      guc: "Apünajaa: Cho'ujaasü ka'i otta wüin jemeyutsü. Eiyatüsü süsii motso'in.",
      pbb: "Ksxu'jwe'sx theg: Ksxawte sek yaacxte pa'ga. Uypx uwe'sx thegni."
    },
    preparation: {
      es: "Infusión: 1 cucharada de flores secas en 1 taza de agua hervida. Tapar y reposar 10 minutos. Tomar tras comidas.",
      guc: "Asaa süka wüin: Wane wuchii süsii a'lakajüshi sümaa wüin katouishi. Asawaa süchikeje ekawaa.",
      pbb: "Yu'te pu'cxni: Sxawte kse'te pi'sx yu'te ksa'j. Kuse'te thuhy uwe'sx eena'."
    },
    warning: {
      es: "Evitar en personas con alergia conocida a las margaritas/asteráceas. No exceder 3 tazas al día.",
      guc: "Nnojo paapüin müleka jashichire püta. Nnojo pasüin ma'in.",
      pbb: "Mee jxupxte thegme. Pkha'ba eena' yatsmee."
    },
    svg: `<svg viewBox="0 0 200 200" fill="none">
      <path d="M100 180 L100 80" stroke="#16a34a" stroke-width="4" stroke-linecap="round"/>
      <path d="M100 140 Q75 130 65 115" stroke="#16a34a" stroke-width="3" stroke-linecap="round"/>
      <path d="M100 110 Q125 100 135 85" stroke="#16a34a" stroke-width="3" stroke-linecap="round"/>
      <!-- Pétalos radiales blancos -->
      <ellipse cx="100" cy="50" rx="6" ry="16" fill="#f8fafc"/>
      <ellipse cx="100" cy="90" rx="6" ry="16" fill="#f8fafc"/>
      <ellipse cx="80" cy="70" rx="16" ry="6" fill="#f8fafc"/>
      <ellipse cx="120" cy="70" rx="16" ry="6" fill="#f8fafc"/>
      <ellipse cx="86" cy="56" rx="14" ry="6" transform="rotate(-45 86 56)" fill="#f8fafc"/>
      <ellipse cx="114" cy="56" rx="14" ry="6" transform="rotate(45 114 56)" fill="#f8fafc"/>
      <ellipse cx="86" cy="84" rx="14" ry="6" transform="rotate(45 86 84)" fill="#f8fafc"/>
      <ellipse cx="114" cy="84" rx="14" ry="6" transform="rotate(-45 114 84)" fill="#f8fafc"/>
      <!-- Botón floral amarillo central -->
      <circle cx="100" cy="70" r="14" fill="#eab308" stroke="#ca8a04" stroke-width="2"/>
    </svg>`
  },
  {
    id: "aloe_vera",
    scientificName: "Aloe barbadensis Miller",
    names: {
      es: "Sábila / Aloe Vera",
      guc: "Patsüa",
      pbb: "Ksxawte Sábila"
    },
    category: "cicatrizante",
    cultivation: {
      es: "Huerto en suelo arenoso o maceta ancha con drenaje. Riego escaso (cada 10-15 días). Tolera sequías severas.",
      guc: "Apünajaa: Ayatüsü sulu'u jasai. Nnojoishi cho'ujaain ma'in wüin. Nnojoishi ouktuin süka josoin.",
      pbb: "Ki'te theg: Sxawte kse'te yaacxte e'ste. Sek thegme pa'ga uwe'sx."
    },
    preparation: {
      es: "Uso tópico: Cortar una penca madura, retirar la corteza verde y el acíbar amarillo (aloína). Aplicar el cristal transparente sobre quemaduras leves o heridas cerradas.",
      guc: "A'yatawaa no'upüna: Pasülüja süta katsüinsü, puwata tü rüi kasutusü no'upüna kousaa.",
      pbb: "Thegte ksa'j: Jxupx sxawthe tucxya', cristal pi'sx yu'te ksa'j ip'jxupxte."
    },
    warning: {
      es: "Lavar muy bien con agua para eliminar por completo la resina amarilla irritante antes de colocar sobre la piel. No ingerir sin supervisión médica.",
      guc: "Puwata süka wüin anasü süpüla nnojoin müliain süta. Nnojo pasüin waraala.",
      pbb: "Sxawte yu'te thegni. Mee kasejme kuseyujx."
    },
    svg: `<svg viewBox="0 0 200 200" fill="none">
      <ellipse cx="100" cy="180" rx="50" ry="10" fill="#334155"/>
      <!-- Hojas carnosas dispuestas en roseta -->
      <path d="M100 175 Q96 110 65 50 Q85 100 95 175 Z" fill="#15803d"/>
      <path d="M100 175 Q104 110 135 50 Q115 100 105 175 Z" fill="#15803d"/>
      <path d="M97 175 Q85 120 40 90 Q65 130 92 175 Z" fill="#16a34a"/>
      <path d="M103 175 Q115 120 160 90 Q135 130 108 175 Z" fill="#16a34a"/>
      <path d="M100 175 Q98 100 100 30 Q102 100 100 175 Z" fill="#22c55e"/>
      <!-- Dientes/espinas marginales -->
      <circle cx="70" cy="65" r="2" fill="#facc15"/>
      <circle cx="130" cy="65" r="2" fill="#facc15"/>
      <circle cx="50" cy="100" r="2" fill="#facc15"/>
      <circle cx="150" cy="100" r="2" fill="#facc15"/>
    </svg>`
  },
  {
    id: "hierbabuena",
    scientificName: "Mentha spicata",
    names: {
      es: "Hierbabuena",
      guc: "Yerwawena",
      pbb: "Yu'tse Hierbabuena"
    },
    category: "digestivo",
    cultivation: {
      es: "Sombra parcial y humedad constante. Se propaga rápidamente por esquejes en recipientes con agua o tierra negra abonada.",
      guc: "Apünajaa: Cho'ujaasü wüin waneepia otta emirawaa. Ayatüsü süka wane süsa'a.",
      pbb: "Sxawte theg: Yaacx e'ste kse'te. Pi'sx yu'te ksa'j fxi'zenya."
    },
    preparation: {
      es: "Infusión: 5 a 6 hojas frescas en agua caliente por 7 minutos. Alivia cólicos estomacales leves, náuseas y espasmos.",
      guc: "Asawaa: Ja'rasü shichi a'lakajüshi sümaa wüin. Anaasü süpüla aliya alapüna.",
      pbb: "Yu'te eena': Pkhbuya kse'te jxukwe eena'. Sxawthe ksa'j dxijte."
    },
    warning: {
      es: "Evitar en casos de reflujo gastroesofágico severo o hernia hiatal (puede relajar el esfínter esofágico).",
      guc: "Nnojo paapüin müleka jashichire püta a'lapünapa'a.",
      pbb: "Mee jxupxte thegme dxij ku'jte."
    },
    svg: `<svg viewBox="0 0 200 200" fill="none">
      <path d="M100 180 L100 40" stroke="#15803d" stroke-width="4" stroke-linecap="round"/>
      <!-- Hojas aserradas opuestas -->
      <path d="M100 150 Q60 145 55 125 Q80 120 100 145 Z" fill="#22c55e" stroke="#16a34a" stroke-width="2"/>
      <path d="M100 150 Q140 145 145 125 Q120 120 100 145 Z" fill="#22c55e" stroke="#16a34a" stroke-width="2"/>
      <path d="M100 110 Q50 105 45 85 Q75 80 100 105 Z" fill="#16a34a" stroke="#15803d" stroke-width="2"/>
      <path d="M100 110 Q150 105 155 85 Q125 80 100 105 Z" fill="#16a34a" stroke="#15803d" stroke-width="2"/>
      <path d="M100 70 Q65 65 60 50 Q85 45 100 65 Z" fill="#4ade80" stroke="#16a34a" stroke-width="2"/>
      <path d="M100 70 Q135 65 140 50 Q115 45 100 65 Z" fill="#4ade80" stroke="#16a34a" stroke-width="2"/>
    </svg>`
  },
  {
    id: "jengibre",
    scientificName: "Zingiber officinale",
    names: {
      es: "Jengibre",
      guc: "Shenjiwire",
      pbb: "Jengibre theg"
    },
    category: "respiratorio",
    cultivation: {
      es: "Sembrar trozos de rizoma con 'yemas' a 5 cm de profundidad en tierra suelta. Cosechar a los 8-10 meses cuando las hojas sequen.",
      guc: "Apünajaa mmoluu: Püta'ülia sümüi mmaka. Kasaalü süchikeje poloo kashi.",
      pbb: "Ki'te theg: Dxijwe'sx ki'te ksa'j. Pkha'ba e'ste kase'je."
    },
    preparation: {
      es: "Decocción: Hervir una rodaja fina (2 gramos) pelada durante 5 minutos. Efectivo contra náuseas, tos y congestión.",
      guc: "A'lakajawaa: Püsüla'ya motso'in sümaa wüin katouishi. Anaasü süpüla oono.",
      pbb: "Pi'sx yu'te a'lakaj: Pkhbuya kse'te eena'. Sxawthe tjuhnxte ksa'j."
    },
    warning: {
      es: "Usar con precaución en personas hipertensas o que tomen anticoagulantes.",
      guc: "Nnojo paapüin müleka katsüinre nushaa chi wayuukai.",
      pbb: "Mee iskwe kasejme kuse'te pta'sya."
    },
    svg: `<svg viewBox="0 0 200 200" fill="none">
      <!-- Rizoma nodoso irregular -->
      <path d="M60 140 C50 120 50 100 70 95 C85 90 90 105 105 95 C120 85 130 90 140 105 C155 120 145 140 130 145 C110 150 100 135 85 145 Z" fill="#ca8a04" stroke="#a16207" stroke-width="3"/>
      <!-- Ramificaciones tuberosas -->
      <path d="M105 95 C105 75 115 70 125 75 C135 80 130 90 125 95 Z" fill="#eab308" stroke="#a16207" stroke-width="2"/>
      <path d="M70 95 C65 75 75 65 85 75 C90 80 85 90 80 95 Z" fill="#eab308" stroke="#a16207" stroke-width="2"/>
      <!-- Anillos y estrías del rizoma -->
      <line x1="68" y1="120" x2="80" y2="115" stroke="#78350f" stroke-width="2" stroke-linecap="round"/>
      <line x1="105" y1="125" x2="120" y2="120" stroke="#78350f" stroke-width="2" stroke-linecap="round"/>
      <line x1="125" y1="110" x2="135" y2="120" stroke="#78350f" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  }
]);
