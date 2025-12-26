// --- 1. GÉNÉRATION DES DONNÉES (88 Touches A0 à C8) ---
const NOTES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const fullNoteTable = []; 

for (let i = 21; i <= 108; i++) {
    const frequency = 440 * Math.pow(2, (i - 69) / 12);
    const octave = Math.floor(i / 12) - 1;
    const noteName = NOTES[i % 12];
    fullNoteTable.push({
        id: i,
        note: noteName + octave, // Ex: C4
        baseNote: noteName,      // Ex: C
        octave: octave,          // Ex: 4
        freq: frequency,
        isBlack: noteName.includes("#")
    });
}

// --- 2. LISTE DES CHANSONS ---
const lessons = [
    {
        id: "pop1",
        title: "⭐ Counting Stars - OneRepublic",
        notes: [
            "A4", "C5", "C5", "C5", "C5", "C5", "B4", "G4",
            "F4", "F4", "F4", "F4", "E4", "E4", "D4", "C4", "C4",
            "A4", "C5", "C5", "C5", "C5", "C5", "B4", "G4",
            "F4", "F4", "F4", "F4", "E4", "E4", 
            "D4", "C4", "E4", "D4", "C4", "A3"
        ]
    },
    {
        id: "movie1",
        title: "🧙 Harry Potter (Theme)",
        notes: [
            "B3", "E4", "G4", "F#4", "E4", "B4", "A4", "F#4", 
            "E4", "G4", "F#4", "D#4", "F4", "B3"
        ]
    },
    {
        id: "classic1",
        title: "🎹 Imagine - John Lennon",
        notes: [
            "E4", "G4", "E4", "G4", "B4", 
            "E4", "G4", "E4", "G4", "B4", 
            "A4", "B4", "A4", "C5", "A4", "G4", "E4"
        ]
    },
    {
        id: "pop2",
        title: "🐲 Believer - Imagine Dragons",
        notes: [
            "A4", "E4", "A4", "E4", "A4", "E4",
            "C5", "B4", "A4", "G#4", "E4", 
            "A4", "E4", "A4", "E4", "A4", "E4",
            "C5", "B4", "A4", "G#4"
        ]
    },
    {
        id: "ballad1",
        title: "🕯️ Hallelujah - Leonard Cohen",
        notes: [
            "E4", "G4", "A4", "A4", "A4", 
            "B4", "C5", "C5", "C5", 
            "C5", "D5", "B4", "B4", 
            "B4", "C5", "A4", "A4", 
            "E4", "G4", "A4", "A4", "G4", "F4", "E4", "E4"
        ]
    },
    {
        id: "folk1",
        title: "💃 Bella Ciao",
        notes: [
            "E4", "A4", "B4", "C5", "A4", 
            "E4", "A4", "B4", "C5", "A4", 
            "E4", "A4", "B4", "C5", "B4", "A4", "C5", "B4", "A4", "E5", 
            "E5", "E5", "E5", "D5", "E5", "F5", "F5", 
            "F5", "E5", "D5", "C5", "E5", "E5", "D5", "C5", "B4", "A4"
        ]
    },
    {
        id: "intro1",
        title: "👶 Au Clair de la Lune",
        notes: [
            "C4", "C4", "C4", "D4", "E4", "D4", 
            "C4", "E4", "D4", "D4", "C4"
        ]
    },
    {
        id: "classic2",
        title: "🎼 Hymne à la Joie",
        notes: [
            "E4", "E4", "F4", "G4", "G4", "F4", "E4", "D4", 
            "C4", "C4", "D4", "E4", "E4", "D4", "D4"
        ]
    }
];

// --- 3. VARIABLES ---
let currentLesson = null;
let currentNoteIndex = 0;
let isListening = false;
let audioContext, analyser, microphoneStream, animationId;
const pianoContainer = document.getElementById('piano');
const notesContainer = document.getElementById('notes-container');
const staffContainer = document.getElementById('staff-lines-container');

// --- 4. AFFICHAGE (GÉNÉRATION) ---

// Affiche le clavier au démarrage
function generatePiano() {
    pianoContainer.innerHTML = '';
    fullNoteTable.forEach(n => {
        const div = document.createElement('div');
        div.dataset.note = n.note;
        div.classList.add('key');
        div.classList.add(n.isBlack ? 'black' : 'white');
        
        // --- TEXTE SUR CHAQUE TOUCHE ---
        div.innerText = n.note; 

        // Gestion souris / tactile
        div.addEventListener('mousedown', () => playSoundAndValidate(n.note));
        div.addEventListener('touchstart', (e) => { e.preventDefault(); playSoundAndValidate(n.note); });
        
        pianoContainer.appendChild(div);
    });

    // Auto-scroll au centre (C4)
    setTimeout(() => {
        const c4 = document.querySelector('[data-note="C4"]');
        if(c4) c4.scrollIntoView({inline: "center", behavior: "smooth"});
    }, 500);
}

// Affiche le menu
function generateMenu() {
    const list = document.getElementById('lesson-list');
    list.innerHTML = "";
    lessons.forEach(l => {
        const card = document.createElement('div');
        card.className = 'lesson-card';
        card.innerHTML = `<h3>${l.title}</h3><p>${l.notes.length} notes</p>`;
        card.onclick = () => loadLesson(l);
        list.appendChild(card);
    });
}

document.getElementById('back-menu-btn').addEventListener('click', () => {
    document.getElementById('menu-overlay').style.display = 'flex';
});

// --- 5. LOGIQUE JEU & PARTITION ---

function loadLesson(lesson) {
    currentLesson = lesson;
    currentNoteIndex = 0;
    document.getElementById('menu-overlay').style.display = 'none';
    document.getElementById('lesson-title').innerText = lesson.title;
    document.getElementById('progress-fill').style.width = "0%";
    document.getElementById('feedback-msg').innerText = "Joue la première note !";
    
    renderSheetMusic();
    
    // Positionne le clavier sur la première note
    const firstNote = lesson.notes[0];
    const keyEl = document.querySelector(`.key[data-note="${firstNote}"]`);
    if(keyEl) keyEl.scrollIntoView({inline: "center", behavior: "smooth"});
}

function renderSheetMusic() {
    notesContainer.innerHTML = '';
    staffContainer.style.transform = 'translateX(0)';
    
    currentLesson.notes.forEach((noteName, i) => {
        const noteObj = fullNoteTable.find(n => n.note === noteName);
        if(!noteObj) return;

        // Calcul hauteur (Position Y)
        // On prend B4 comme référence centrale
        const whiteNotes = fullNoteTable.filter(n => !n.isBlack);
        const refIndex = whiteNotes.findIndex(n => n.note === "B4"); 
        const currentIndex = whiteNotes.findIndex(n => n.baseNote + n.octave === noteObj.baseNote + noteObj.octave);
        
        const diffSteps = refIndex - currentIndex; 
        const topPos = 110 + (diffSteps * 10); // 10px par note

        const el = document.createElement('div');
        el.className = 'sheet-note';
        
        // --- TEXTE DANS LA BULLE ---
        el.innerText = noteObj.baseNote + (noteObj.isBlack ? "#" : "");

        el.id = `note-${i}`;
        el.style.left = `${i * 80}px`; // Espace horizontal
        el.style.top = `${topPos}px`;
        
        if(noteObj.isBlack) {
            el.style.backgroundColor = "#333";
            el.style.border = "2px solid #ff4081";
        }

        notesContainer.appendChild(el);
    });
}

function playSoundAndValidate(note) {
    playSynth(note);
    checkNote(note);
}

function checkNote(inputNote) {
    if(!currentLesson) return;
    const target = currentLesson.notes[currentNoteIndex];
    
    if(inputNote === target) {
        // Validation visuelle note
        const noteEl = document.getElementById(`note-${currentNoteIndex}`);
        if(noteEl) {
            noteEl.classList.add('correct');
        }
        
        // Validation visuelle clavier
        const key = document.querySelector(`.key[data-note="${inputNote}"]`);
        if(key) {
            key.classList.add('active');
            setTimeout(()=>key.classList.remove('active'), 200);
            key.scrollIntoView({inline: "center", behavior: "smooth", block: "nearest"});
        }

        document.getElementById('feedback-msg').innerText = "Bravo : " + inputNote;
        currentNoteIndex++;
        
        // Mise à jour Progress Bar
        const pct = (currentNoteIndex / currentLesson.notes.length) * 100;
        document.getElementById('progress-fill').style.width = `${pct}%`;

        // Scroll Partition
        const scrollX = currentNoteIndex * -80;
        staffContainer.style.transform = `translateX(${scrollX}px)`;

        // Fin de chanson
        if(currentNoteIndex >= currentLesson.notes.length) {
            setTimeout(() => {
                alert("🎉 Terminé ! Retour au menu.");
                document.getElementById('menu-overlay').style.display = 'flex';
            }, 500);
        }
    }
}

// --- 6. AUDIO (Synthétiseur) ---
const AudioContextRef = window.AudioContext || window.webkitAudioContext;
const synthCtx = new AudioContextRef();

function playSynth(note) {
    if(synthCtx.state === 'suspended') synthCtx.resume();
    
    const noteData = fullNoteTable.find(n => n.note === note);
    if(!noteData) return;

    const osc = synthCtx.createOscillator();
    const gain = synthCtx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.value = noteData.freq;
    
    gain.gain.setValueAtTime(0.3, synthCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, synthCtx.currentTime + 0.5);
    
    osc.connect(gain);
    gain.connect(synthCtx.destination);
    osc.start();
    osc.stop(synthCtx.currentTime + 0.5);
}

// --- 7. MICROPHONE (Détection) ---
document.getElementById('mic-btn').addEventListener('click', async () => {
    if(isListening) {
        location.reload(); return;
    }
    
    try {
        audioContext = new AudioContextRef();
        microphoneStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 4096;
        
        const source = audioContext.createMediaStreamSource(microphoneStream);
        
        // Filtre pour nettoyer le son
        const filter = audioContext.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.value = 2000;
        
        source.connect(filter);
        filter.connect(analyser);
        
        isListening = true;
        document.getElementById('mic-btn').classList.add('listening');
        document.getElementById('mic-btn').innerHTML = '<i class="fas fa-microphone"></i>';
        
        detectPitch();
    } catch(e) {
        alert("Erreur Micro (HTTPS requis): " + e.message);
    }
});

function getClosestNote(freq) {
    if (freq < 50 || freq > 4000) return null;
    let closest = null;
    let minDiff = Infinity;

    fullNoteTable.forEach(n => {
        const diff = Math.abs(n.freq - freq);
        if (diff < minDiff) {
            minDiff = diff;
            closest = n;
        }
    });

    if (minDiff > closest.freq * 0.04) return null; 
    return closest.note;
}

function autoCorrelate(buf, sampleRate) {
    let size = buf.length;
    let rms = 0;
    for (let i=0;i<size;i++) { let val = buf[i]; rms += val*val; }
    rms = Math.sqrt(rms/size);
    if (rms<0.02) return -1;

    let r1=0, r2=size-1, thres=0.2;
    for (let i=0; i<size/2; i++) if (Math.abs(buf[i])<thres) { r1=i; break; }
    for (let i=1; i<size/2; i++) if (Math.abs(buf[size-i])<thres) { r2=size-i; break; }
    buf = buf.slice(r1, r2);
    size = buf.length;

    let c = new Array(size).fill(0);
    for (let i=0; i<size; i++)
        for (let j=0; j<size-i; j++)
            c[i] = c[i] + buf[j]*buf[j+i];

    let d=0; while (c[d]>c[d+1]) d++;
    let maxval=-1, maxpos=-1;
    for (let i=d; i<size; i++) if (c[i] > maxval) { maxval = c[i]; maxpos = i; }
    
    return sampleRate/maxpos;
}

let lastNoteTime = 0;
function detectPitch() {
    if(!isListening) return;
    
    const buf = new Float32Array(analyser.fftSize);
    analyser.getFloatTimeDomainData(buf);
    
    const freq = autoCorrelate(buf, audioContext.sampleRate);
    
    if(freq !== -1) {
        const note = getClosestNote(freq);
        if(note) {
            document.getElementById('detected-note').innerText = note;
            
            const now = Date.now();
            if(now - lastNoteTime > 250) { // Anti-rebond
                checkNote(note);
                lastNoteTime = now;
            }
        }
    }
    requestAnimationFrame(detectPitch);
}

// Init
generatePiano();
generateMenu();