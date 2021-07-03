/**
 * @type {[string]}
 */
const moveList = [
 "POUND",
 "KARATE CHOP",
 "DOUBLESLAP",
 "COMET PUNCH",
 "MEGA PUNCH",
 "PAY DAY",
 "FIRE PUNCH",
 "ICE PUNCH",
 "THUNDERPUNCH",
 "SCRATCH",
 "VICEGRIP",
 "GUILLOTINE",
 "RAZOR WIND",
 "SWORDS DANCE",
 "CUT",
 "GUST",
 "WING ATTACK",
 "WHIRLWIND",
 "FLY",
 "BIND",
 "SLAM",
 "VINE WHIP",
 "STOMP",
 "DOUBLE KICK",
 "MEGA KICK",
 "JUMP KICK",
 "ROLLING KICK",
 "SAND-ATTACK",
 "HEADBUTT",
 "HORN ATTACK",
 "FURY ATTACK",
 "HORN DRILL",
 "TACKLE",
 "BODY SLAM",
 "WRAP",
 "TAKE DOWN",
 "THRASH",
 "DOUBLE-EDGE",
 "TAIL WHIP",
 "POISON STING",
 "TWINEEDLE",
 "PIN MISSILE",
 "LEER",
 "BITE",
 "GROWL",
 "ROAR",
 "SING",
 "SUPERSONIC",
 "SONICBOOM",
 "DISABLE",
 "ACID",
 "EMBER",
 "FLAMETHROWER",
 "MIST",
 "WATER GUN",
 "HYDRO PUMP",
 "SURF",
 "ICE BEAM",
 "BLIZZARD",
 "PSYBEAM",
 "BUBBLEBEAM",
 "AURORA BEAM",
 "HYPER BEAM",
 "PECK",
 "DRILL PECK",
 "SUBMISSION",
 "LOW KICK",
 "COUNTER",
 "SEISMIC TOSS",
 "STRENGTH",
 "ABSORB",
 "MEGA DRAIN",
 "LEECH SEED",
 "GROWTH",
 "RAZOR LEAF",
 "SOLARBEAM",
 "POISONPOWDER",
 "STUN SPORE",
 "SLEEP POWDER",
 "PETAL DANCE",
 "STRING SHOT",
 "DRAGON RAGE",
 "FIRE SPIN",
 "THUNDERSHOCK",
 "THUNDERBOLT",
 "THUNDER WAVE",
 "THUNDER",
 "ROCK THROW",
 "EARTHQUAKE",
 "FISSURE",
 "DIG",
 "TOXIC",
 "CONFUSION",
 "PSYCHIC",
 "HYPNOSIS",
 "MEDITATE",
 "AGILITY",
 "QUICK ATTACK",
 "RAGE",
 "TELEPORT",
 "NIGHT SHADE",
 "MIMIC",
 "SCREECH",
 "DOUBLE TEAM",
 "RECOVER",
 "HARDEN",
 "MINIMIZE",
 "SMOKESCREEN",
 "CONFUSE RAY",
 "WITHDRAW",
 "DEFENSE CURL",
 "BARRIER",
 "LIGHT SCREEN",
 "HAZE",
 "REFLECT",
 "FOCUS ENERGY",
 "BIDE",
 "METRONOME",
 "MIRROR MOVE",
 "SELFDESTRUCT",
 "EGG BOMB",
 "LICK",
 "SMOG",
 "SLUDGE",
 "BONE CLUB",
 "FIRE BLAST",
 "WATERFALL",
 "CLAMP",
 "SWIFT",
 "SKULL BASH",
 "SPIKE CANNON",
 "CONSTRICT",
 "AMNESIA",
 "KINESIS",
 "SOFTBOILED",
 "HI JUMP KICK",
 "GLARE",
 "DREAM EATER",
 "POISON GAS",
 "BARRAGE",
 "LEECH LIFE",
 "LOVELY KISS",
 "SKY ATTACK",
 "TRANSFORM",
 "BUBBLE",
 "DIZZY PUNCH",
 "SPORE",
 "FLASH",
 "PSYWAVE",
 "SPLASH",
 "ACID ARMOR",
 "CRABHAMMER",
 "EXPLOSION",
 "FURY SWIPES",
 "BONEMERANG",
 "REST",
 "ROCK SLIDE",
 "HYPER FANG",
 "SHARPEN",
 "CONVERSION",
 "TRI ATTACK",
 "SUPER FANG",
 "SLASH",
 "SUBSTITUTE",
 "STRUGGLE",
 "SKETCH",
 "TRIPLE KICK",
 "THIEF",
 "SPIDER WEB",
 "MIND READER",
 "NIGHTMARE",
 "FLAME WHEEL",
 "SNORE",
 "CURSE",
 "FLAIL",
 "CONVERSION2",
 "AEROBLAST",
 "COTTON SPORE",
 "REVERSAL",
 "SPITE",
 "POWDER SNOW",
 "PROTECT",
 "MACH PUNCH",
 "SCARY FACE",
 "FAINT ATTACK",
 "SWEET KISS",
 "BELLY DRUM",
 "SLUDGE BOMB",
 "MUD-SLAP",
 "OCTAZOOKA",
 "SPIKES",
 "ZAP CANNON",
 "FORESIGHT",
 "DESTINY BOND",
 "PERISH SONG",
 "ICY WIND",
 "DETECT",
 "BONE RUSH",
 "LOCK-ON",
 "OUTRAGE",
 "SANDSTORM",
 "GIGA DRAIN",
 "ENDURE",
 "CHARM",
 "ROLLOUT",
 "FALSE SWIPE",
 "SWAGGER",
 "MILK DRINK",
 "SPARK",
 "FURY CUTTER",
 "STEEL WING",
 "MEAN LOOK",
 "ATTRACT",
 "SLEEP TALK",
 "HEAL BELL",
 "RETURN",
 "PRESENT",
 "FRUSTRATION",
 "SAFEGUARD",
 "PAIN SPLIT",
 "SACRED FIRE",
 "MAGNITUDE",
 "DYNAMICPUNCH",
 "MEGAHORN",
 "DRAGONBREATH",
 "BATON PASS",
 "ENCORE",
 "PURSUIT",
 "RAPID SPIN",
 "SWEET SCENT",
 "IRON TAIL",
 "METAL CLAW",
 "VITAL THROW",
 "MORNING SUN",
 "SYNTHESIS",
 "MOONLIGHT",
 "HIDDEN POWER",
 "CROSS CHOP",
 "TWISTER",
 "RAIN DANCE",
 "SUNNY DAY",
 "CRUNCH",
 "MIRROR COAT",
 "PSYCH UP",
 "EXTREMESPEED",
 "ANCIENTPOWER",
 "SHADOW BALL",
 "FUTURE SIGHT",
 "ROCK SMASH",
 "WHIRLPOOL",
 "BEAT UP"
]

const ITEM_CLASS = "item";
const MAX_COUNT = 3;
const MIN_COUNT = -1;

function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}

function shuffle(rand, a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function randomize(rand, orig, list) {
  const arr = Array.from(orig);
  if (rand) {
    shuffle(rand, arr);
  }
  arr.forEach(x => list.removeChild(x));
  arr.forEach(x => list.appendChild(x));
}

function generateId(len) {
  var arr = new Uint8Array(Math.ceil((len || 40) * 3 / 4));
  window.crypto.getRandomValues(arr);
  return base64js.fromByteArray(arr).substring(0, len);
}

function randFromSeed(seed) {
  return seed ? new Math.seedrandom(seed) : null;
}

function onSearchClear()
{
  document.getElementById("searchBox").value = "";
  onSearch("");
}


function onSearch(value)
{
  for(let x of document.getElementById("board").children)
  {
    if(!x.id.match(new RegExp(value, "i")))
    {
      x.classList.add("searchHide");
    }
    else 
    {
      x.classList.remove("searchHide");
    }
  }
}

window.addEventListener("load", () => {
  const board = document.getElementById("board");

  moveList.forEach(x => {
    board.appendChild(htmlToElement(`<div class="${ITEM_CLASS}" id="${x}"><div id="${x}">${x}</div></div>`))
  })
  board.addEventListener("click", onMark(1));
  board.addEventListener("contextmenu", onMark(-1));

  const seedText = document.getElementById("seedText");
  const orig = Array.from(board.children);
  document.getElementById("genSeedButton").addEventListener("click", () => {
    const seed = generateId(10)
    const rng = randFromSeed(seed);
    seedText.value = seed;
    randomize(rng, orig, board);
  });
  document.getElementById("setSeedButton").addEventListener("click", () => {
    const seed = seedText.value;
    const rand = randFromSeed(seed);
    randomize(rand, orig, board);
  });
  
  document.getElementById("clearSearchBtn").addEventListener("click", () => {
    onSearchClear();
  });
  onSearchClear();

  document.getElementById("searchBox").addEventListener("keyup", ({ target }) => {
    onSearch(target.value);
  });
  document.getElementById("searchBox").addEventListener("change", ({ target }) => {
    onSearch(target.value);
  });
  document.getElementById("searchBox").addEventListener("paste", ({ target }) => {
    onSearch(target.value);
  });

  const colCount = localStorage.getItem("colCount") || 10;
  document.getElementById("colCount").value = colCount;
  document.body.style.setProperty("--columns", colCount);

  document.getElementById("colCount").addEventListener("change", ({ target }) => {
    document.body.style.setProperty("--columns", target.value);
    localStorage.setItem("colCount", target.value);
  });

  const nightBtn = document.getElementById("nightBtn");
  if (nightBtn) nightBtn.addEventListener("click", toggleNightMode);

  nightMode = localStorage.getItem("nightMode") === "true";
  if (nightMode) document.body.classList.add("nightMode");

  const sizeObserver = new MutationObserver(() => 
  {
    localStorage.setItem("boardWidth", board.style.width);
    localStorage.setItem("boardHeight", board.style.height);
  });

  sizeObserver.observe(board, {attributes: true, attributeFilter: ["style"]});

  if(localStorage.getItem("boardWidth") && localStorage.getItem("boardHeight"))
  {
    board.style.setProperty("width", localStorage.getItem("boardWidth"));
    board.style.setProperty("height", localStorage.getItem("boardHeight"));
  }

  document.addEventListener("keydown", ( {target:{nodeName}} ) => { 
    if (nodeName !== 'INPUT') {
      document.getElementById("searchBox").focus()
    }
  });
});

/**
 * @returns {(ev : MouseEvent) => Boolean}
 */
function onMark(c) {
  return (ev) => {
    const target = ev.target;
    if (target.classList.contains(ITEM_CLASS)) {
      mark(c, target);
      ev.preventDefault();
      return false;

    }
  }
}

/**
 * @param {number} c
 * @param {HTMLElement} target
 */
function mark(c, target) {
  if (!("count" in target.dataset)) target.dataset.count = 0;
  const cnt = parseInt(target.dataset.count);
  if ((c > 0 && cnt < MAX_COUNT) || (c < 0 && cnt > MIN_COUNT)) {
    target.dataset.count = cnt + c;
  }
}

let nightMode = false;

function toggleNightMode() {
  if (nightMode) {
    nightMode = false;
    localStorage.setItem("nightMode", nightMode);
    document.body.classList.remove("nightMode");
  }
  else {
    nightMode = true;
    localStorage.setItem("nightMode", nightMode);
    document.body.classList.add("nightMode");
  }
}
