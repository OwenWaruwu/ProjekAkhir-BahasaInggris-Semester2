// ============================================
//  Grammar Quest — script.js
// ============================================

// ── QUESTION BANK ────────────────────────────
const QUESTIONS = {
  easy: [
    {
      text: "She {is reading} a book right now.",
      highlight: "is reading",
      answer: "Present Continuous",
      options: ["Simple Present", "Present Continuous", "Simple Past", "Future Tense"],
      explanation: "'Is reading' = subject + is/am/are + V-ing → Present Continuous, used for actions happening NOW.",
      tag: "Tense"
    },
    {
      text: "They {played} football yesterday afternoon.",
      highlight: "played",
      answer: "Simple Past",
      options: ["Simple Present", "Present Perfect", "Simple Past", "Past Continuous"],
      explanation: "'Played' is the past form of 'play'. The word 'yesterday' confirms it's Simple Past.",
      tag: "Tense"
    },
    {
      text: "The {beautiful} sunset painted the sky orange.",
      highlight: "beautiful",
      answer: "Adjective",
      options: ["Noun", "Verb", "Adjective", "Adverb"],
      explanation: "'Beautiful' describes the noun 'sunset' — that makes it an Adjective.",
      tag: "Part of Speech"
    },
    {
      text: "He {quickly} finished his homework before dinner.",
      highlight: "quickly",
      answer: "Adverb",
      options: ["Adjective", "Adverb", "Noun", "Preposition"],
      explanation: "'Quickly' modifies the verb 'finished' — it tells HOW he finished. That's an Adverb.",
      tag: "Part of Speech"
    },
    {
      text: "I {will visit} my grandparents next weekend.",
      highlight: "will visit",
      answer: "Simple Future",
      options: ["Present Perfect", "Simple Future", "Future Continuous", "Modal"],
      explanation: "'Will + base verb' is the structure for Simple Future Tense.",
      tag: "Tense"
    },
    {
      text: "The {dog} barked loudly at the stranger.",
      highlight: "dog",
      answer: "Noun",
      options: ["Noun", "Verb", "Adjective", "Pronoun"],
      explanation: "'Dog' is a thing (animal) — it's a Noun, the subject of this sentence.",
      tag: "Part of Speech"
    },
    {
      text: "We {have lived} in this city for ten years.",
      highlight: "have lived",
      answer: "Present Perfect",
      options: ["Simple Past", "Present Perfect", "Past Perfect", "Present Continuous"],
      explanation: "'Have + past participle' = Present Perfect. It connects past to present (still living there!).",
      tag: "Tense"
    },
    {
      text: "The cat {jumped} over the fence gracefully.",
      highlight: "jumped",
      answer: "Simple Past",
      options: ["Simple Present", "Simple Past", "Present Perfect", "Past Continuous"],
      explanation: "No time reference needed — 'jumped' is past tense form, describing a completed action.",
      tag: "Tense"
    },
    {
      text: "She sings {beautifully} every morning.",
      highlight: "beautifully",
      answer: "Adverb",
      options: ["Noun", "Adjective", "Adverb", "Conjunction"],
      explanation: "'Beautifully' tells us HOW she sings. Adverbs modify verbs and often end in -ly.",
      tag: "Part of Speech"
    },
    {
      text: "He {runs} five kilometers every single day.",
      highlight: "runs",
      answer: "Simple Present",
      options: ["Simple Present", "Present Continuous", "Simple Past", "Future Tense"],
      explanation: "'Runs' (with -s for third person) + 'every day' = Simple Present for habits/routines.",
      tag: "Tense"
    },
    {
      text: "The {small} kitten hid under the warm blanket.",
      highlight: "small",
      answer: "Adjective",
      options: ["Noun", "Verb", "Adverb", "Adjective"],
      explanation: "'Small' describes the noun 'kitten'. Adjectives modify nouns.",
      tag: "Part of Speech"
    },
    {
      text: "They {were watching} TV when the power went out.",
      highlight: "were watching",
      answer: "Past Continuous",
      options: ["Simple Past", "Past Continuous", "Past Perfect", "Present Continuous"],
      explanation: "'Were + V-ing' = Past Continuous. It describes an ongoing action that was interrupted.",
      tag: "Tense"
    },
  ],

  medium: [
    {
      text: "I wanted to go, {but} I was too tired to move.",
      highlight: "but",
      answer: "Coordinating Conjunction",
      options: ["Subordinating Conjunction", "Preposition", "Coordinating Conjunction", "Adverb"],
      explanation: "'But' connects two independent clauses with contrasting meaning — it's a Coordinating Conjunction (FANBOYS).",
      tag: "Conjunction"
    },
    {
      text: "She studied hard {so that} she could pass the exam.",
      highlight: "so that",
      answer: "Subordinating Conjunction",
      options: ["Coordinating Conjunction", "Subordinating Conjunction", "Preposition", "Correlative Conjunction"],
      explanation: "'So that' introduces a purpose clause — it's a Subordinating Conjunction.",
      tag: "Conjunction"
    },
    {
      text: "The book is {on} the shelf beside the window.",
      highlight: "on",
      answer: "Preposition of Place",
      options: ["Preposition of Time", "Preposition of Place", "Conjunction", "Adverb"],
      explanation: "'On' shows WHERE the book is in relation to the shelf — Preposition of Place.",
      tag: "Preposition"
    },
    {
      text: "We arrived {at} the airport just before midnight.",
      highlight: "at",
      answer: "Preposition of Time",
      options: ["Preposition of Place", "Preposition of Movement", "Preposition of Time", "Conjunction"],
      explanation: "'At midnight' — 'at' is used for specific times. This is a Preposition of Time.",
      tag: "Preposition"
    },
    {
      text: "Neither the manager {nor} the staff attended the meeting.",
      highlight: "nor",
      answer: "Correlative Conjunction",
      options: ["Coordinating Conjunction", "Correlative Conjunction", "Subordinating Conjunction", "Adverb"],
      explanation: "'Neither...nor' always come in pairs — they're Correlative Conjunctions.",
      tag: "Conjunction"
    },
    {
      text: "She smiled {although} she was feeling quite nervous inside.",
      highlight: "although",
      answer: "Subordinating Conjunction",
      options: ["Coordinating Conjunction", "Preposition", "Subordinating Conjunction", "Adverb"],
      explanation: "'Although' introduces a contrast clause — Subordinating Conjunction showing concession.",
      tag: "Conjunction"
    },
    {
      text: "The train departs {from} Platform 3 at exactly 7AM.",
      highlight: "from",
      answer: "Preposition of Movement",
      options: ["Preposition of Time", "Preposition of Place", "Preposition of Movement", "Conjunction"],
      explanation: "'From' shows origin/starting point of movement — Preposition of Movement.",
      tag: "Preposition"
    },
    {
      text: "I'll help you {provided that} you promise to be honest.",
      highlight: "provided that",
      answer: "Subordinating Conjunction",
      options: ["Correlative Conjunction", "Coordinating Conjunction", "Subordinating Conjunction", "Preposition"],
      explanation: "'Provided that' introduces a conditional clause — a Subordinating Conjunction expressing condition.",
      tag: "Conjunction"
    },
    {
      text: "Both the cat {and} the dog loved playing in the garden.",
      highlight: "and",
      answer: "Correlative Conjunction",
      options: ["Coordinating Conjunction", "Correlative Conjunction", "Subordinating Conjunction", "Adverb"],
      explanation: "'Both...and' is a pair — Correlative Conjunction, connecting two parallel subjects.",
      tag: "Conjunction"
    },
    {
      text: "She has been working here {since} January of last year.",
      highlight: "since",
      answer: "Preposition of Time",
      options: ["Preposition of Place", "Preposition of Movement", "Conjunction", "Preposition of Time"],
      explanation: "'Since' marks the starting point of a time period — Preposition of Time, used with Present Perfect.",
      tag: "Preposition"
    },
    {
      text: "He ran {through} the dark forest without looking back.",
      highlight: "through",
      answer: "Preposition of Movement",
      options: ["Preposition of Place", "Preposition of Time", "Preposition of Movement", "Conjunction"],
      explanation: "'Through' shows movement from one side to another — Preposition of Movement.",
      tag: "Preposition"
    },
    {
      text: "I will call you {as soon as} I arrive at the hotel.",
      highlight: "as soon as",
      answer: "Subordinating Conjunction",
      options: ["Coordinating Conjunction", "Preposition", "Correlative Conjunction", "Subordinating Conjunction"],
      explanation: "'As soon as' introduces a time clause — Subordinating Conjunction of time.",
      tag: "Conjunction"
    },
  ],

  hard: [
    {
      text: "The report {was submitted} by the team before the deadline.",
      highlight: "was submitted",
      answer: "Passive Voice (Simple Past)",
      options: ["Active Voice (Simple Past)", "Passive Voice (Simple Past)", "Passive Voice (Present Perfect)", "Active Voice (Present Perfect)"],
      explanation: "'Was + past participle' = Passive Voice. The focus is on the report, not who submitted it.",
      tag: "Voice"
    },
    {
      text: "{Having finished} the task, she left the office early.",
      highlight: "Having finished",
      answer: "Perfect Participle (Active)",
      options: ["Present Participle", "Perfect Participle (Active)", "Past Participle", "Gerund Phrase"],
      explanation: "'Having + past participle' = Perfect Participle, showing a completed action before the main verb.",
      tag: "Participle"
    },
    {
      text: "The suspects {are being questioned} by detectives right now.",
      highlight: "are being questioned",
      answer: "Passive Voice (Present Continuous)",
      options: ["Passive Voice (Simple Present)", "Active Voice (Present Continuous)", "Passive Voice (Present Continuous)", "Present Perfect Passive"],
      explanation: "'Am/is/are + being + past participle' = Passive Voice in Present Continuous.",
      tag: "Voice"
    },
    {
      text: "{To master} a language requires years of consistent practice.",
      highlight: "To master",
      answer: "Infinitive as Subject",
      options: ["Gerund as Subject", "Infinitive as Object", "Infinitive as Subject", "Present Participle"],
      explanation: "'To + verb' at the start of a sentence functioning as the subject = Infinitive as Subject.",
      tag: "Infinitive/Gerund"
    },
    {
      text: "She regrets {not telling} him the truth sooner.",
      highlight: "not telling",
      answer: "Gerund as Object",
      options: ["Infinitive as Object", "Gerund as Object", "Present Participle", "Perfect Gerund"],
      explanation: "'Regret' is followed by a gerund (V-ing). 'Not telling' = Gerund as Object of the verb.",
      tag: "Infinitive/Gerund"
    },
    {
      text: "By 2025, scientists {will have discovered} a cure for the disease.",
      highlight: "will have discovered",
      answer: "Future Perfect",
      options: ["Future Continuous", "Simple Future", "Future Perfect", "Future Perfect Continuous"],
      explanation: "'Will + have + past participle' = Future Perfect. Describes an action completed before a future time.",
      tag: "Tense"
    },
    {
      text: "The cake {had been eaten} before the guests even arrived.",
      highlight: "had been eaten",
      answer: "Past Perfect Passive",
      options: ["Past Perfect Active", "Present Perfect Passive", "Past Perfect Passive", "Simple Past Passive"],
      explanation: "'Had + been + past participle' = Past Perfect Passive. Completed action before another past event.",
      tag: "Voice"
    },
    {
      text: "He {would have helped} if he had known about the problem.",
      highlight: "would have helped",
      answer: "Third Conditional",
      options: ["Second Conditional", "First Conditional", "Third Conditional", "Mixed Conditional"],
      explanation: "'Would have + past participle' + 'had + past participle' in the if-clause = Third Conditional (unreal past).",
      tag: "Conditional"
    },
    {
      text: "{Exhausted by the long journey}, they fell asleep immediately.",
      highlight: "Exhausted by the long journey",
      answer: "Past Participle Phrase",
      options: ["Gerund Phrase", "Present Participle Phrase", "Infinitive Phrase", "Past Participle Phrase"],
      explanation: "A past participle phrase at the start modifying the subject. Shows a passive/completed state.",
      tag: "Participle"
    },
    {
      text: "The new policy {is reported to have been implemented} last week.",
      highlight: "is reported to have been implemented",
      answer: "Passive Infinitive (Perfect)",
      options: ["Simple Passive", "Passive Infinitive (Simple)", "Active Infinitive (Perfect)", "Passive Infinitive (Perfect)"],
      explanation: "'To have been + past participle' = Passive Infinitive in Perfect form — common in formal writing.",
      tag: "Voice"
    },
    {
      text: "She {has been studying} German for over three years now.",
      highlight: "has been studying",
      answer: "Present Perfect Continuous",
      options: ["Present Perfect", "Present Continuous", "Past Perfect Continuous", "Present Perfect Continuous"],
      explanation: "'Has/have + been + V-ing' = Present Perfect Continuous. Emphasizes duration of an ongoing action.",
      tag: "Tense"
    },
    {
      text: "It is essential that every student {submit} their assignment on time.",
      highlight: "submit",
      answer: "Subjunctive Mood",
      options: ["Simple Present", "Imperative Mood", "Subjunctive Mood", "Infinitive"],
      explanation: "After 'it is essential that', the verb stays in base form without -s — this is the Subjunctive Mood.",
      tag: "Mood"
    },
  ]
};

// ── GAME STATE ───────────────────────────────
let state = {};
let usedQuestions = { easy: [], medium: [], hard: [] };

// ── UTILITY ──────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getRandQ(pool) {
  let available = pool.filter((_, i) => !usedQuestions[state.diff].includes(i));
  if (!available.length) {
    usedQuestions[state.diff] = [];
    available = pool;
  }
  const idx = pool.indexOf(available[Math.floor(Math.random() * available.length)]);
  usedQuestions[state.diff].push(idx);
  return { ...pool[idx], _idx: idx };
}

// ── SCREEN MANAGEMENT ────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function showMenu() {
  showScreen('menuScreen');
}

// ── DIFFICULTY SELECTION ─────────────────────
function selectDiff(d, btn) {
  state.diff = d;
  document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

// ── START GAME ───────────────────────────────
function startGame() {
  if (!state.diff) state.diff = 'easy';
  state.score    = 0;
  state.lives    = 3;
  state.level    = 1;
  state.streak   = 0;
  state.maxStreak= 0;
  state.correct  = 0;
  state.total    = 0;
  state.qInLevel = 0;
  usedQuestions[state.diff] = [];
  showScreen('gameScreen');
  loadQuestion();
}

// ── LOAD QUESTION ────────────────────────────
function loadQuestion() {
  const pool = QUESTIONS[state.diff];
  state.current          = getRandQ(pool);
  state.current.options  = shuffle(state.current.options);
  state.answered         = false;

  state.total++;

  // Update HUD
  document.getElementById('qProgress').textContent  = `Question ${state.total}`;
  document.getElementById('streakInfo').textContent  = `🔥 Streak: ${state.streak}`;
  document.getElementById('levelNum').textContent    = state.level;
  document.getElementById('scoreVal').textContent    = state.score;
  document.getElementById('streakFill').style.width  = Math.min(state.streak * 20, 100) + '%';
  document.getElementById('progressFill').style.width = ((state.qInLevel / 5) * 100) + '%';

  updateLives();

  // Grammar tag & question text
  document.getElementById('grammarTag').textContent = state.current.tag;
  const html = state.current.text.replace(/\{([^}]+)\}/g, '<span class="highlight">$1</span>');
  document.getElementById('questionText').innerHTML = html;

  // Build option buttons
  const grid = document.getElementById('optionsGrid');
  grid.innerHTML = '';
  state.current.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className  = 'option-btn';
    btn.textContent = opt;
    btn.onclick    = () => checkAnswer(opt, btn);
    grid.appendChild(btn);
  });

  // Reset feedback
  document.getElementById('feedbackBox').style.display = 'none';
  document.getElementById('nextBtn').style.display     = 'none';
}

// ── UPDATE LIVES DISPLAY ─────────────────────
function updateLives() {
  const d = document.getElementById('livesDisplay');
  d.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const span = document.createElement('span');
    span.className   = 'life-icon' + (i >= state.lives ? ' lost' : '');
    span.textContent = '❤️';
    d.appendChild(span);
  }
}

// ── CHECK ANSWER ─────────────────────────────
function checkAnswer(chosen, btn) {
  if (state.answered) return;
  state.answered = true;

  const correct = chosen === state.current.answer;

  // Disable all buttons & reveal correct
  document.querySelectorAll('.option-btn').forEach(b => {
    b.disabled = true;
    if (b.textContent === state.current.answer && b !== btn) b.classList.add('reveal');
  });

  const fb   = document.getElementById('feedbackBox');
  const ft   = document.getElementById('feedbackTitle');
  const ftxt = document.getElementById('feedbackText');

  if (correct) {
    state.correct++;
    state.streak++;
    state.qInLevel++;
    if (state.streak > state.maxStreak) state.maxStreak = state.streak;

    const bonus      = state.streak >= 3 ? Math.floor(state.streak * 0.5) * 10 : 0;
    const basePoints = state.diff === 'easy' ? 10 : state.diff === 'medium' ? 20 : 30;
    const levelBonus = (state.level - 1) * 5;
    const pts        = basePoints + levelBonus + bonus;
    state.score     += pts;

    btn.classList.add('correct');
    fb.className         = 'feedback-box correct';
    ft.textContent       = '✅ Correct! ' + (bonus > 0 ? `(+${pts} pts, Streak Bonus!)` : `(+${pts} pts)`);
    ftxt.textContent     = state.current.explanation;
    fb.style.display     = 'block';

    floatScore('+' + pts);

    document.getElementById('scoreVal').textContent   = state.score;
    document.getElementById('streakInfo').textContent = `🔥 Streak: ${state.streak}`;
    document.getElementById('streakFill').style.width = Math.min(state.streak * 20, 100) + '%';

    if (state.qInLevel >= 5) {
      setTimeout(() => triggerLevelUp(), 700);
    } else {
      document.getElementById('nextBtn').style.display = 'block';
    }

  } else {
    state.lives--;
    state.streak   = 0;
    state.qInLevel = Math.max(0, state.qInLevel - 1);

    btn.classList.add('wrong');
    fb.className     = 'feedback-box wrong';
    ft.textContent   = '❌ Wrong answer!';
    ftxt.textContent = `Correct answer: "${state.current.answer}". ${state.current.explanation}`;
    fb.style.display = 'block';

    document.getElementById('streakFill').style.width  = '0%';
    document.getElementById('streakInfo').textContent  = '🔥 Streak: 0';
    updateLives();

    if (state.lives <= 0) {
      setTimeout(() => endGame(), 1200);
    } else {
      document.getElementById('nextBtn').style.display = 'block';
    }
  }
}

// ── FLOATING SCORE ANIMATION ─────────────────
function floatScore(text) {
  const el   = document.createElement('div');
  el.className   = 'float-score';
  el.textContent = text;
  const rect = document.getElementById('scoreVal').getBoundingClientRect();
  el.style.left  = rect.left + 'px';
  el.style.top   = rect.top + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 900);
}

// ── LEVEL UP ─────────────────────────────────
function triggerLevelUp() {
  state.level++;
  state.qInLevel = 0;
  document.getElementById('progressFill').style.width = '0%';

  const infos = {
    2: "Questions are getting trickier! Keep your focus.",
    3: "You're in advanced territory now. Think carefully!",
    4: "Master level incoming! Grammar complexity is at its peak.",
    5: "LEGENDARY! Only true grammar masters reach this point!"
  };

  document.getElementById('levelupSub').textContent  = `You reached Level ${state.level}!`;
  document.getElementById('levelupInfo').textContent = infos[state.level] || `Wow, Level ${state.level}! You're unstoppable!`;
  document.getElementById('levelupOverlay').classList.add('show');
}

function closeLevelUp() {
  document.getElementById('levelupOverlay').classList.remove('show');
  loadQuestion();
}

// ── NEXT QUESTION ────────────────────────────
function nextQuestion() {
  loadQuestion();
}

// ── END GAME ─────────────────────────────────
function endGame() {
  const tips = [
    "Tip: Watch for 'already', 'just', 'yet' — they signal Present Perfect!",
    "Tip: Passive voice always uses 'be + past participle'.",
    "Tip: FANBOYS = For, And, Nor, But, Or, Yet, So — coordinating conjunctions!",
    "Tip: Gerunds (V-ing) can be subjects or objects of a sentence.",
    "Tip: 'At' for specific times, 'on' for days/dates, 'in' for months/years!"
  ];

  const icons  = ['💀', '😤', '🎯', '🏆'];
  const titles = ['Game Over', 'Not Bad!', 'Great Job!', 'PERFECT!'];
  const subs   = [
    'Practice more — you can do it!',
    "Keep grinding, you're improving!",
    'Impressive grammar skills!',
    'You are a Grammar Master!'
  ];

  let rank, rankClass;
  if      (state.score >= 300) { rank = 'Rank S 🏆'; rankClass = 'rank-S'; }
  else if (state.score >= 180) { rank = 'Rank A ⭐'; rankClass = 'rank-A'; }
  else if (state.score >= 80)  { rank = 'Rank B 👍'; rankClass = 'rank-B'; }
  else                         { rank = 'Rank C 📖'; rankClass = 'rank-C'; }

  const lvlIdx = Math.min(state.level - 1, 3);

  document.getElementById('gameoverIcon').textContent  = icons[lvlIdx];
  document.getElementById('gameoverTitle').textContent = titles[lvlIdx];
  document.getElementById('gameoverSub').textContent   = subs[lvlIdx];

  const rb = document.getElementById('rankBadge');
  rb.textContent = rank;
  rb.className   = 'rank-badge ' + rankClass;

  document.getElementById('finalScore').textContent   = state.score;
  document.getElementById('finalCorrect').textContent = `${state.correct}/${state.total}`;
  document.getElementById('finalLevel').textContent   = state.level;
  document.getElementById('gameoverTip').textContent  = tips[Math.floor(Math.random() * tips.length)];

  showScreen('gameoverScreen');
}

// ── INIT BACKGROUND STARS ─────────────────────
(function initStars() {
  state.diff = 'easy';
  const deco = document.getElementById('bgDeco');
  for (let i = 0; i < 40; i++) {
    const s    = document.createElement('div');
    s.className = 'star';
    const size  = Math.random() * 3 + 1;
    s.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation-delay: ${Math.random() * 3}s;
      animation-duration: ${2 + Math.random() * 3}s;
    `;
    deco.appendChild(s);
  }
})();
