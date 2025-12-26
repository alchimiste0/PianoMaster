// =================================================================
// 1. GÉNÉRATION DES 88 TOUCHES
// =================================================================
const NOTES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const fullNoteTable = []; 

for (let i = 21; i <= 108; i++) {
    const frequency = 440 * Math.pow(2, (i - 69) / 12);
    const octave = Math.floor(i / 12) - 1;
    const noteName = NOTES[i % 12];
    fullNoteTable.push({
        id: i,
        note: noteName + octave,
        baseNote: noteName,
        octave: octave,
        freq: frequency,
        isBlack: noteName.includes("#")
    });
}

// =================================================================
// 2. BIBLIOTHÈQUE DE CHANSONS (4 Chansons)
// =================================================================
const lessons = [
    {
        id: "all_of_me",
        title: "🌹 All of Me (John Legend)",
        data: [
            {n: "F3", l: "Intro"}, {n: "C4"}, {n: "G#4"}, {n: "C#3"}, {n: "G#3"}, {n: "C#4"}, {n: "D#3"}, {n: "A#3"}, {n: "D#4"}, {n: "G4"}, {n: "A#3"}, {n: "F4"}, {n: "A#4"}, {n: "C3", l: "..." },
            {n: "C4", l: "What"}, {n: "C4", l: "would"}, {n: "C4", l: "I"}, {n: "D#4", l: "do"}, {n: "F4", l: "with"}, {n: "F4", l: "out"}, {n: "D#4", l: "your"}, {n: "C4", l: "smart"}, {n: "A#3", l: "mouth"},
            {n: "C4", l: "Dra"}, {n: "C4", l: "wing"}, {n: "C4", l: "me"}, {n: "D#4", l: "in"}, {n: "F4", l: "and"}, {n: "F4", l: "you"}, {n: "D#4", l: "kic"}, {n: "C4", l: "king"}, {n: "D#4", l: "me"}, {n: "C4", l: "out"},
            {n: "F4", l: "You've"}, {n: "D#4", l: "got"}, {n: "C#4", l: "my"}, {n: "C4", l: "head"}, {n: "A#3", l: "spin"}, {n: "G#3", l: "ning"}, {n: "A#3", l: "no"}, {n: "C4", l: "kid"}, {n: "A#3", l: "ding"},
            {n: "F4", l: "I"}, {n: "D#4", l: "can't"}, {n: "C#4", l: "pin"}, {n: "C4", l: "you"}, {n: "A#3", l: "down"},
            {n: "C4", l: "What's"}, {n: "C4", l: "go"}, {n: "C#4", l: "ing"}, {n: "D#4", l: "on"}, {n: "F4", l: "in"}, {n: "D#4", l: "that"}, {n: "D#4", l: "beau"}, {n: "C#4", l: "ti"}, {n: "C4", l: "ful"}, {n: "A#3", l: "mind"},
            {n: "D#4", l: "I'm"}, {n: "C#4", l: "on"}, {n: "C4", l: "your"}, {n: "A#3", l: "ma"}, {n: "G#3", l: "gi"}, {n: "G#3", l: "cal"}, {n: "A#3", l: "mys"}, {n: "C4", l: "tery"}, {n: "A#3", l: "ride"},
            {n: "F4", l: "And"}, {n: "D#4", l: "I'm"}, {n: "C#4", l: "so"}, {n: "C4", l: "diz"}, {n: "A#3", l: "zy"}, {n: "A#3", l: "don't"}, {n: "C4", l: "know"}, {n: "A#3", l: "what"}, {n: "G#3", l: "hit"}, {n: "F3", l: "me"},
            {n: "F4", l: "but"}, {n: "D#4", l: "I'll"}, {n: "C#4", l: "be"}, {n: "C4", l: "al"}, {n: "A#3", l: "right"},
            {n: "C4", l: "My"}, {n: "C4", l: "head's"}, {n: "C#4", l: "un"}, {n: "D#4", l: "der"}, {n: "F4", l: "wa"}, {n: "D#4", l: "ter"}, {n: "D#4", l: "But"}, {n: "C#4", l: "I'm"}, {n: "C4", l: "brea"}, {n: "A#3", l: "thing"}, {n: "G#3", l: "fine"},
            {n: "C4", l: "You're"}, {n: "C#4", l: "cra"}, {n: "D#4", l: "zy"}, {n: "F4", l: "and"}, {n: "D#4", l: "I'm"}, {n: "C#4", l: "out"}, {n: "C4", l: "of"}, {n: "A#3", l: "my"}, {n: "G#3", l: "mind"},
            {n: "F4", l: "Cause"}, {n: "G4", l: "all"}, {n: "G#4", l: "of"}, {n: "F4", l: "me"}, {n: "D#4", l: "Loves"}, {n: "C#4", l: "all"}, {n: "D#4", l: "of"}, {n: "C#4", l: "you"},
            {n: "C4", l: "Love"}, {n: "A#3", l: "your"}, {n: "C4", l: "curves"}, {n: "C#4", l: "and"}, {n: "C4", l: "all"}, {n: "A#3", l: "your"}, {n: "C4", l: "ed"}, {n: "A#3", l: "ges"},
            {n: "C4", l: "All"}, {n: "A#3", l: "your"}, {n: "C4", l: "per"}, {n: "C#4", l: "fect"}, {n: "C4", l: "im"}, {n: "A#3", l: "per"}, {n: "G#3", l: "fec"}, {n: "F3", l: "tions"},
            {n: "F4", l: "Give"}, {n: "G4", l: "your"}, {n: "G#4", l: "all"}, {n: "F4", l: "to"}, {n: "F4", l: "me"}, {n: "D#4", l: "I'll"}, {n: "C#4", l: "give"}, {n: "D#4", l: "my"}, {n: "C#4", l: "all"}, {n: "C#4", l: "to"}, {n: "C#4", l: "you"},
            {n: "C4", l: "You're"}, {n: "A#3", l: "my"}, {n: "C4", l: "end"}, {n: "C#4", l: "and"}, {n: "C4", l: "my"}, {n: "A#3", l: "be"}, {n: "C4", l: "gin"}, {n: "A#3", l: "ning"},
            {n: "C4", l: "E"}, {n: "A#3", l: "ven"}, {n: "C4", l: "when"}, {n: "C#4", l: "I"}, {n: "C4", l: "lose"}, {n: "A#3", l: "I'm"}, {n: "G#3", l: "win"}, {n: "F3", l: "ning"},
            {n: "C#4", l: "Cause"}, {n: "C4", l: "I"}, {n: "A#3", l: "give"}, {n: "C4", l: "you"}, {n: "C#4", l: "all"}, {n: "D#4", l: "..."}, {n: "C#4", l: "of"}, {n: "C4", l: "me"},
            {n: "C#4", l: "And"}, {n: "C4", l: "you"}, {n: "A#3", l: "give"}, {n: "C4", l: "me"}, {n: "C#4", l: "all"}, {n: "D#4", l: "..."}, {n: "C#4", l: "of"}, {n: "C4", l: "you"},
            {n: "F3", l: "END"}
        ]
    },
    {
        id: "perfect_full",
        title: "❤️ Perfect (Ed Sheeran)",
        data: [
            {n: "D#4", l: "I"}, {n: "F4", l: "found"}, {n: "G#4", l: "a"}, {n: "G#4", l: "love"}, {n: "F4", l: "for"}, {n: "D#4", l: "me"},
            {n: "C#4", l: "Dar"}, {n: "C4", l: "ling"}, {n: "D#4", l: "just"}, {n: "C4", l: "dive"}, {n: "A#3", l: "right"}, {n: "G#3", l: "in"}, {n: "C4", l: "and"}, {n: "D#4", l: "fol"}, {n: "D#4", l: "low"}, {n: "F4", l: "my"}, {n: "G#4", l: "lead"},
            {n: "A#4", l: "Well"}, {n: "G#4", l: "I"}, {n: "G4", l: "found"}, {n: "F4", l: "a"}, {n: "D#4", l: "girl"}, {n: "D#4", l: "beau"}, {n: "F4", l: "ti"}, {n: "G#4", l: "ful"}, {n: "G#4", l: "and"}, {n: "F4", l: "sweet"},
            {n: "D#4", l: "I"}, {n: "C#4", l: "ne"}, {n: "C4", l: "ver"}, {n: "D#4", l: "knew"}, {n: "C4", l: "you"}, {n: "A#3", l: "were"}, {n: "G#3", l: "the"}, {n: "C4", l: "some"}, {n: "D#4", l: "one"}, {n: "D#4", l: "wai"}, {n: "F4", l: "ting"}, {n: "G#4", l: "for"}, {n: "G#4", l: "me"},
            {n: "G#4", l: "Cause"}, {n: "G#4", l: "we"}, {n: "A#4", l: "were"}, {n: "C5", l: "just"}, {n: "C5", l: "kids"}, {n: "A#4", l: "when"}, {n: "G#4", l: "we"}, {n: "A#4", l: "fell"}, {n: "G#4", l: "in"}, {n: "G#4", l: "love"},
            {n: "G#4", l: "Not"}, {n: "A#4", l: "kno"}, {n: "C5", l: "wing"}, {n: "C5", l: "what"}, {n: "A#4", l: "it"}, {n: "G#4", l: "was"},
            {n: "G#4", l: "I"}, {n: "A#4", l: "will"}, {n: "C5", l: "not"}, {n: "C5", l: "give"}, {n: "A#4", l: "you"}, {n: "G#4", l: "up"}, {n: "A#4", l: "this"}, {n: "G#4", l: "time"},
            {n: "G#4", l: "But"}, {n: "A#4", l: "dar"}, {n: "C5", l: "ling"}, {n: "C5", l: "just"}, {n: "C5", l: "kiss"}, {n: "A#4", l: "me"}, {n: "G#4", l: "slow"},
            {n: "G#4", l: "Your"}, {n: "A#4", l: "heart"}, {n: "C5", l: "is"}, {n: "C5", l: "all"}, {n: "A#4", l: "I"}, {n: "G#4", l: "own"},
            {n: "G#4", l: "And"}, {n: "G#4", l: "in"}, {n: "A#4", l: "your"}, {n: "C5", l: "eyes"}, {n: "C5", l: "you're"}, {n: "C#5", l: "hol"}, {n: "C5", l: "ding"}, {n: "A#4", l: "mine"},
            {n: "D#4", l: "Ba"}, {n: "G#4", l: "by"}, {n: "C5", l: "I'm"}, {n: "A#4", l: "dan"}, {n: "G#4", l: "cing"}, {n: "C5", l: "in"}, {n: "A#4", l: "the"}, {n: "G#4", l: "dark"},
            {n: "G4", l: "with"}, {n: "G#4", l: "you"}, {n: "A#4", l: "be"}, {n: "G#4", l: "tween"}, {n: "G4", l: "my"}, {n: "F4", l: "arms"},
            {n: "C5", l: "Bare"}, {n: "A#4", l: "foot"}, {n: "G#4", l: "on"}, {n: "C5", l: "the"}, {n: "A#4", l: "grass"},
            {n: "G4", l: "lis"}, {n: "G#4", l: "tening"}, {n: "A#4", l: "to"}, {n: "G#4", l: "our"}, {n: "G4", l: "fa"}, {n: "F4", l: "vorite"}, {n: "F4", l: "song"},
            {n: "C5", l: "When"}, {n: "C#5", l: "you"}, {n: "C5", l: "said"}, {n: "A#4", l: "you"}, {n: "G#4", l: "looked"}, {n: "A#4", l: "a"}, {n: "C5", l: "mess"},
            {n: "C5", l: "I"}, {n: "C#5", l: "whis"}, {n: "C5", l: "pered"}, {n: "A#4", l: "un"}, {n: "G#4", l: "der"}, {n: "A#4", l: "neath"}, {n: "C5", l: "my"}, {n: "C5", l: "breath"},
            {n: "C5", l: "But"}, {n: "C#5", l: "you"}, {n: "C5", l: "heard"}, {n: "A#4", l: "it"}, {n: "G#4", l: "dar"}, {n: "A#4", l: "ling"}, {n: "C5", l: "you"}, {n: "A#4", l: "look"}, {n: "G#4", l: "per"}, {n: "F4", l: "fect"}, {n: "D#4", l: "to"}, {n: "G#4", l: "night"},
            {n: "G#4", l: "❤️"}
        ]
    },
    {
        id: "counting_stars_full",
        title: "⭐ Counting Stars (OneRepublic)",
        data: [
            {n: "C#4", l: "Late"}, {n: "E4", l: "ly"}, {n: "G#4", l: "I've"}, {n: "G#4", l: "been"}, {n: "G#4", l: "I've"}, {n: "G#4", l: "been"}, {n: "F#4", l: "lo"}, {n: "E4", l: "sing"}, {n: "C#4", l: "sleep"},
            {n: "C#4", l: "Dream"}, {n: "C#4", l: "ing"}, {n: "B3", l: "bout"}, {n: "B3", l: "the"}, {n: "A3", l: "things"}, {n: "G#3", l: "that"}, {n: "F#3", l: "we"}, {n: "E3", l: "could"}, {n: "E3", l: "be"},
            {n: "C#4", l: "But"}, {n: "E4", l: "ba"}, {n: "E4", l: "by"}, {n: "G#4", l: "I've"}, {n: "G#4", l: "been"}, {n: "G#4", l: "pray"}, {n: "F#4", l: "ing"}, {n: "E4", l: "hard"},
            {n: "C#4", l: "Said"}, {n: "B3", l: "no"}, {n: "A3", l: "more"}, {n: "G#3", l: "coun"}, {n: "F#3", l: "ting"}, {n: "E3", l: "dol"}, {n: "E3", l: "lars"},
            {n: "F#3", l: "We'll"}, {n: "E3", l: "be"}, {n: "A3", l: "coun"}, {n: "G#3", l: "ting"}, {n: "F#3", l: "stars"},
            {n: "C#3", l: "..." }, {n: "C#3", l: "..." }, 
            {n: "C#4", l: "I"}, {n: "C#4", l: "see"}, {n: "B3", l: "this"}, {n: "G#3", l: "life"}, {n: "G#3", l: "like"}, {n: "F#3", l: "a"}, {n: "E3", l: "swing"}, {n: "F#3", l: "ing"}, {n: "G#3", l: "vine"},
            {n: "G#3", l: "Swing"}, {n: "F#3", l: "my"}, {n: "E3", l: "heart"}, {n: "F#3", l: "a"}, {n: "G#3", l: "cross"}, {n: "E3", l: "the"}, {n: "C#3", l: "line"},
            {n: "C#4", l: "In"}, {n: "B3", l: "my"}, {n: "G#3", l: "face"}, {n: "F#3", l: "is"}, {n: "E3", l: "flash"}, {n: "F#3", l: "ing"}, {n: "G#3", l: "signs"},
            {n: "G#3", l: "Seek"}, {n: "F#3", l: "it"}, {n: "E3", l: "out"}, {n: "F#3", l: "and"}, {n: "G#3", l: "ye"}, {n: "E3", l: "shall"}, {n: "C#3", l: "find"},
            {n: "G#3", l: "Old"}, {n: "F#3", l: "but"}, {n: "E3", l: "I'm"}, {n: "F#3", l: "not"}, {n: "G#3", l: "that"}, {n: "E3", l: "old"},
            {n: "G#3", l: "Young"}, {n: "F#3", l: "but"}, {n: "E3", l: "I'm"}, {n: "F#3", l: "not"}, {n: "G#3", l: "that"}, {n: "E3", l: "bold"},
            {n: "G#3", l: "I"}, {n: "F#3", l: "don't"}, {n: "E3", l: "think"}, {n: "F#3", l: "the"}, {n: "G#3", l: "world"}, {n: "E3", l: "is"}, {n: "sold"},
            {n: "G#3", l: "I'm"}, {n: "F#3", l: "just"}, {n: "E3", l: "do"}, {n: "F#3", l: "ing"}, {n: "G#3", l: "what"}, {n: "A3", l: "we're"}, {n: "G#3", l: "told"}, {n: "F#3", l: "I..."}, 
            {n: "G#4", l: "feel"}, {n: "F#4", l: "some"}, {n: "E4", l: "thing"}, {n: "E4", l: "so"}, {n: "D#4", l: "right"}, {n: "B3", l: "do"}, {n: "B3", l: "ing"}, {n: "C#4", l: "the"}, {n: "C#4", l: "wrong"}, {n: "C#4", l: "thing"},
            {n: "G#4", l: "I"}, {n: "F#4", l: "feel"}, {n: "E4", l: "some"}, {n: "E4", l: "thing"}, {n: "D#4", l: "so"}, {n: "D#4", l: "wrong"}, {n: "B3", l: "do"}, {n: "B3", l: "ing"}, {n: "C#4", l: "the"}, {n: "C#4", l: "right"}, {n: "C#4", l: "thing"},
            {n: "F#3", l: "We'll"}, {n: "E3", l: "be"}, {n: "A3", l: "coun"}, {n: "G#3", l: "ting"}, {n: "F#3", l: "stars"},
            {n: "D#4", l: "Take"}, {n: "C#4", l: "that"}, {n: "B3", l: "mo"}, {n: "A3", l: "ney"}, {n: "D#4", l: "watch"}, {n: "C#4", l: "it"}, {n: "B3", l: "burn"},
            {n: "D#4", l: "Sink"}, {n: "C#4", l: "in"}, {n: "B3", l: "the"}, {n: "A3", l: "ri"}, {n: "D#4", l: "ver"}, {n: "C#4", l: "the"}, {n: "B3", l: "les"}, {n: "A3", l: "sons"}, {n: "G#3", l: "learnt"},
            {n: "D#4", l: "Take"}, {n: "C#4", l: "that"}, {n: "B3", l: "mo"}, {n: "A3", l: "ney"}, {n: "D#4", l: "watch"}, {n: "C#4", l: "it"}, {n: "B3", l: "burn"},
            {n: "D#4", l: "Sink"}, {n: "C#4", l: "in"}, {n: "B3", l: "the"}, {n: "A3", l: "ri"}, {n: "D#4", l: "ver"}, {n: "C#4", l: "the"}, {n: "B3", l: "les"}, {n: "A3", l: "sons"}, {n: "G#3", l: "learnt"},
            {n: "C#4", l: "Eve"}, {n: "B3", l: "ry"}, {n: "A3", l: "thing"}, {n: "G#3", l: "that"}, {n: "F#3", l: "kills"}, {n: "E3", l: "me"}, {n: "D#3", l: "makes"}, {n: "C#3", l: "me"}, {n: "F#3", l: "feel"}, {n: "G#3", l: "a"}, {n: "G#3", l: "live"},
            {n: "C#4", l: "END"}
        ]
    },
    {
        id: "snowman_full",
        title: "⛄ Snowman (Sia)",
        data: [
            {n: "C4", l: "Intro"}, {n: "E4"}, {n: "G4"}, {n: "C5"}, {n: "G4"}, {n: "E4"}, {n: "C4"}, {n: "F3", l: "..."}, {n: "A3"}, {n: "C4"}, {n: "F4"},
            {n: "G4", l: "Don't"}, {n: "G4", l: "cry"}, {n: "E4", l: "snow"}, {n: "F4", l: "man"}, {n: "G4", l: "not"}, {n: "F4", l: "in"}, {n: "E4", l: "front"}, {n: "D4", l: "of"}, {n: "C4", l: "me"},
            {n: "G4", l: "Who'll"}, {n: "G4", l: "catch"}, {n: "E4", l: "your"}, {n: "F4", l: "tears"}, {n: "G4", l: "if"}, {n: "F4", l: "you"}, {n: "E4", l: "can't"}, {n: "D4", l: "catch"}, {n: "C4", l: "me"}, {n: "E4", l: "Dar"}, {n: "D4", l: "ling"},
            {n: "E4", l: "If"}, {n: "D4", l: "you"}, {n: "C4", l: "can't"}, {n: "D4", l: "catch"}, {n: "C4", l: "me"}, {n: "E4", l: "Dar"}, {n: "D4", l: "ling"},
            {n: "G4", l: "Don't"}, {n: "G4", l: "cry"}, {n: "E4", l: "snow"}, {n: "F4", l: "man"}, {n: "G4", l: "don't"}, {n: "F4", l: "leave"}, {n: "E4", l: "me"}, {n: "D4", l: "this"}, {n: "C4", l: "way"},
            {n: "G4", l: "A"}, {n: "G4", l: "pud"}, {n: "E4", l: "dle"}, {n: "F4", l: "of"}, {n: "G4", l: "wa"}, {n: "F4", l: "ter"}, {n: "E4", l: "can't"}, {n: "D4", l: "hold"}, {n: "C4", l: "me"}, {n: "E4", l: "close"}, {n: "E4", l: "Ba"}, {n: "D4", l: "by"},
            {n: "E4", l: "Can't"}, {n: "D4", l: "hold"}, {n: "C4", l: "me"}, {n: "D4", l: "close"}, {n: "E4", l: "Ba"}, {n: "D4", l: "by"},
            {n: "C5", l: "I"}, {n: "B4", l: "want"}, {n: "A4", l: "you"}, {n: "G4", l: "to"}, {n: "F4", l: "know"}, {n: "E4", l: "that"}, {n: "F4", l: "I'm"}, {n: "G4", l: "ne"}, {n: "C5", l: "ver"}, {n: "B4", l: "lea"}, {n: "A4", l: "ving"},
            {n: "G4", l: "Cause"}, {n: "F4", l: "I'm"}, {n: "E4", l: "Mrs"}, {n: "F4", l: "Snow"}, {n: "G4", l: "til"}, {n: "C5", l: "death"}, {n: "B4", l: "we'll"}, {n: "A4", l: "be"}, {n: "G4", l: "free"}, {n: "F4", l: "zing"},
            {n: "E4", l: "Yeah"}, {n: "F4", l: "you"}, {n: "G4", l: "are"}, {n: "C5", l: "my"}, {n: "B4", l: "home"}, {n: "A4", l: "my"}, {n: "G4", l: "home"}, {n: "F4", l: "for"}, {n: "E4", l: "all"}, {n: "F4", l: "sea"}, {n: "G4", l: "sons"},
            {n: "C5", l: "So"}, {n: "B4", l: "come"}, {n: "A4", l: "on"}, {n: "G4", l: "let's"}, {n: "F4", l: "go"},
            {n: "E4", l: "Let's"}, {n: "F4", l: "go"}, {n: "G4", l: "be"}, {n: "A4", l: "low"}, {n: "G4", l: "ze"}, {n: "F4", l: "ro"}, {n: "E4", l: "and"}, {n: "D4", l: "hide"}, {n: "C4", l: "from"}, {n: "D4", l: "the"}, {n: "C4", l: "sun"},
            {n: "E4", l: "I"}, {n: "F4", l: "love"}, {n: "G4", l: "you"}, {n: "A4", l: "for"}, {n: "G4", l: "e"}, {n: "F4", l: "ver"}, {n: "E4", l: "where"}, {n: "D4", l: "we'll"}, {n: "C4", l: "have"}, {n: "D4", l: "some"}, {n: "C4", l: "fun"},
            {n: "E4", l: "Yes"}, {n: "F4", l: "let's"}, {n: "G4", l: "hit"}, {n: "A4", l: "the"}, {n: "G4", l: "North"}, {n: "F4", l: "Pole"}, {n: "E4", l: "and"}, {n: "D4", l: "live"}, {n: "C4", l: "hap"}, {n: "D4", l: "pi"}, {n: "C4", l: "ly"},
            {n: "E4", l: "Please"}, {n: "F4", l: "don't"}, {n: "G4", l: "cry"}, {n: "A4", l: "no"}, {n: "G4", l: "tears"}, {n: "F4", l: "now"}, {n: "E4", l: "it's"}, {n: "D4", l: "Christ"}, {n: "C4", l: "mas"}, {n: "D4", l: "ba"}, {n: "C4", l: "by"},
            {n: "E5", l: "My"}, {n: "D5", l: "snow"}, {n: "C5", l: "man"}, {n: "B4", l: "and"}, {n: "C5", l: "me"}, {n: "E5", l: "My"}, {n: "D5", l: "snow"}, {n: "C5", l: "man"}, {n: "B4", l: "and"}, {n: "C5", l: "me"},
            {n: "A4", l: "Ba"}, {n: "G4", l: "by"}, {n: "C5", l: "..."}, {n: "B4", l: "..."}, {n: "A4", l: "..."}, {n: "G4", l: "..."}, {n: "F4", l: "..."},
            {n: "C5", l: "I"}, {n: "B4", l: "want"}, {n: "A4", l: "you"}, {n: "G4", l: "to"}, {n: "F4", l: "know"}, {n: "E4", l: "that"}, {n: "F4", l: "I'm"}, {n: "G4", l: "ne"}, {n: "C5", l: "ver"}, {n: "B4", l: "lea"}, {n: "A4", l: "ving"},
            {n: "G4", l: "Cause"}, {n: "F4", l: "I'm"}, {n: "E4", l: "Mrs"}, {n: "F4", l: "Snow"}, {n: "G4", l: "til"}, {n: "C5", l: "death"}, {n: "B4", l: "we'll"}, {n: "A4", l: "be"}, {n: "G4", l: "free"}, {n: "F4", l: "zing"},
            {n: "E4", l: "Yeah"}, {n: "F4", l: "you"}, {n: "G4", l: "are"}, {n: "C5", l: "my"}, {n: "B4", l: "home"}, {n: "A4", l: "my"}, {n: "G4", l: "home"}, {n: "F4", l: "for"}, {n: "E4", l: "all"}, {n: "F4", l: "sea"}, {n: "G4", l: "sons"},
            {n: "C5", l: "So"}, {n: "B4", l: "come"}, {n: "A4", l: "on"}, {n: "G4", l: "let's"}, {n: "F4", l: "go"},
            {n: "E4", l: "Let's"}, {n: "F4", l: "go"}, {n: "G4", l: "be"}, {n: "A4", l: "low"}, {n: "G4", l: "ze"}, {n: "F4", l: "ro"}, {n: "E4", l: "and"}, {n: "D4", l: "hide"}, {n: "C4", l: "from"}, {n: "D4", l: "the"}, {n: "C4", l: "sun"},
            {n: "E4", l: "I"}, {n: "F4", l: "love"}, {n: "G4", l: "you"}, {n: "A4", l: "for"}, {n: "G4", l: "e"}, {n: "F4", l: "ver"}, {n: "E4", l: "where"}, {n: "D4", l: "we'll"}, {n: "C4", l: "have"}, {n: "D4", l: "some"}, {n: "C4", l: "fun"},
            {n: "E4", l: "Yes"}, {n: "F4", l: "let's"}, {n: "G4", l: "hit"}, {n: "A4", l: "the"}, {n: "G4", l: "North"}, {n: "F4", l: "Pole"}, {n: "E4", l: "and"}, {n: "D4", l: "live"}, {n: "C4", l: "hap"}, {n: "D4", l: "pi"}, {n: "C4", l: "ly"},
            {n: "E4", l: "Please"}, {n: "F4", l: "don't"}, {n: "G4", l: "cry"}, {n: "A4", l: "no"}, {n: "G4", l: "tears"}, {n: "F4", l: "now"}, {n: "E4", l: "it's"}, {n: "D4", l: "Christ"}, {n: "C4", l: "mas"}, {n: "D4", l: "ba"}, {n: "C4", l: "by"},
            {n: "C4", l: "END"}
        ]
    }
];

// =================================================================
// 3. INITIALISATION ET VARIABLES
// =================================================================
let currentLesson = null;
let currentNoteIndex = 0;
let isListening = false;
let audioContext, analyser, microphoneStream;
const pianoContainer = document.getElementById('piano');
const notesContainer = document.getElementById('notes-container');
const staffContainer = document.getElementById('staff-lines-container');
const micStatusText = document.getElementById('mic-status-text');
const detectedNoteDisplay = document.getElementById('detected-note-display');

// =================================================================
// 4. MOTEUR GRAPHIQUE (Piano & Partition)
// =================================================================

// Génère le piano (88 touches)
function generatePiano() {
    pianoContainer.innerHTML = '';
    fullNoteTable.forEach(n => {
        const div = document.createElement('div');
        div.dataset.note = n.note;
        div.classList.add('key');
        div.classList.add(n.isBlack ? 'black' : 'white');
        div.innerText = n.note; // Affiche "C#4" sur la touche

        // Interactions Souris / Tactile
        div.addEventListener('mousedown', () => playSoundAndValidate(n.note));
        div.addEventListener('touchstart', (e) => { e.preventDefault(); playSoundAndValidate(n.note); });
        
        pianoContainer.appendChild(div);
    });

    // Scroll initial vers Do milieu (C4)
    setTimeout(() => {
        const c4 = document.querySelector('[data-note="C4"]');
        if(c4) c4.scrollIntoView({inline: "center", behavior: "smooth"});
    }, 500);
}

// Génère le menu
function generateMenu() {
    const list = document.getElementById('lesson-list');
    list.innerHTML = "";
    lessons.forEach(l => {
        const card = document.createElement('div');
        card.className = 'lesson-card';
        card.innerHTML = `<h3>${l.title}</h3><p>${l.data.length} notes</p>`;
        card.onclick = () => loadLesson(l);
        list.appendChild(card);
    });
}

document.getElementById('back-menu-btn').addEventListener('click', () => {
    document.getElementById('menu-overlay').style.display = 'flex';
});

// =================================================================
// 5. LOGIQUE DU JEU
// =================================================================

function loadLesson(lesson) {
    currentLesson = lesson;
    currentNoteIndex = 0;
    document.getElementById('menu-overlay').style.display = 'none';
    document.getElementById('lesson-title').innerText = lesson.title;
    document.getElementById('progress-fill').style.width = "0%";
    
    renderSheetMusic();
    
    // Auto-scroll clavier vers la première note
    const firstNote = lesson.data[0].n;
    const keyEl = document.querySelector(`.key[data-note="${firstNote}"]`);
    if(keyEl) keyEl.scrollIntoView({inline: "center", behavior: "smooth"});
}

function renderSheetMusic() {
    notesContainer.innerHTML = '';
    staffContainer.style.transform = 'translateX(0)';
    
    currentLesson.data.forEach((item, i) => {
        const noteName = item.n;
        const lyricTxt = item.l || "";
        
        const noteObj = fullNoteTable.find(n => n.note === noteName);
        if(!noteObj) return;

        // Calcul hauteur visuelle (B4 = centre)
        const baseForHeight = noteObj.baseNote.replace('#', ''); 
        const whiteNotes = fullNoteTable.filter(n => !n.isBlack);
        const refIndex = whiteNotes.findIndex(n => n.note === "B4"); 
        
        const currentIndex = whiteNotes.findIndex(n => n.baseNote === baseForHeight && n.octave === noteObj.octave);
        
        const diffSteps = refIndex - currentIndex; 
        const topPos = 80 + (diffSteps * 10); 

        const el = document.createElement('div');
        el.className = 'sheet-note';
        
        el.innerText = noteObj.note; 
        el.id = `note-${i}`;
        
        el.style.left = `${i * 100}px`; 
        el.style.top = `${topPos}px`;
        
        if(noteObj.isBlack) {
            el.classList.add('is-black');
        }

        if(lyricTxt) {
            const lyricEl = document.createElement('div');
            lyricEl.className = 'lyric-text';
            lyricEl.innerText = lyricTxt;
            el.appendChild(lyricEl);
        }

        notesContainer.appendChild(el);
    });
}

// Fonction de feedback visuel immédiat (pour montrer où on est)
function visualizeInput(note) {
    const key = document.querySelector(`.key[data-note="${note}"]`);
    if (key) {
        key.classList.add('detected');
        setTimeout(() => key.classList.remove('detected'), 200);
    }
}

function playSoundAndValidate(note) {
    playSynth(note);
    visualizeInput(note); // On allume la touche jouée
    checkNote(note); // On vérifie si c'est la bonne
}

function checkNote(inputNote) {
    if(!currentLesson) return;
    const target = currentLesson.data[currentNoteIndex].n;
    
    if(inputNote === target) {
        // Validation Visuelle (Bulle)
        const noteEl = document.getElementById(`note-${currentNoteIndex}`);
        if(noteEl) noteEl.classList.add('correct');
        
        // Validation Clavier (Vert)
        const key = document.querySelector(`.key[data-note="${inputNote}"]`);
        if(key) {
            key.classList.add('active');
            setTimeout(()=>key.classList.remove('active'), 200);
            key.scrollIntoView({inline: "center", behavior: "smooth", block: "nearest"});
        }

        currentNoteIndex++;
        
        // Barre de progression
        const pct = (currentNoteIndex / currentLesson.data.length) * 100;
        document.getElementById('progress-fill').style.width = `${pct}%`;

        // Scroll Partition
        const scrollX = currentNoteIndex * -100;
        staffContainer.style.transform = `translateX(${scrollX}px)`;

        // Fin
        if(currentNoteIndex >= currentLesson.data.length) {
            setTimeout(() => {
                alert("🎉 CHANSON TERMINÉE !");
                document.getElementById('menu-overlay').style.display = 'flex';
            }, 500);
        }
    }
}

// =================================================================
// 6. AUDIO & MICRO
// =================================================================
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

// GESTION MICRO DANS LE MENU
document.getElementById('mic-toggle-btn').addEventListener('click', async () => {
    if(isListening) {
        // Arrêter (recharger la page est plus simple pour nettoyer l'audio context)
        location.reload();
        return;
    }
    
    try {
        audioContext = new AudioContextRef();
        microphoneStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 4096; 
        
        const source = audioContext.createMediaStreamSource(microphoneStream);
        const filter = audioContext.createBiquadFilter();
        filter.type = "lowpass"; filter.frequency.value = 2000;
        
        source.connect(filter); filter.connect(analyser);
        
        isListening = true;
        
        // Mise à jour visuelle du bouton
        const btn = document.getElementById('mic-toggle-btn');
        btn.classList.add('active');
        btn.innerHTML = '<i class="fas fa-microphone"></i> Micro Activé (Stop)';
        micStatusText.innerText = "Micro activé ! Joue sur ton vrai piano.";
        micStatusText.style.color = "#4CAF50";
        
        detectPitch();
    } catch(e) { 
        alert("Erreur Micro: Activez HTTPS."); 
    }
});

function getClosestNote(freq) {
    if (freq < 50 || freq > 4000) return null;
    let closest = null;
    let minDiff = Infinity;
    fullNoteTable.forEach(n => {
        const diff = Math.abs(n.freq - freq);
        if (diff < minDiff) { minDiff = diff; closest = n; }
    });
    if (minDiff > closest.freq * 0.04) return null; 
    return closest.note;
}

function autoCorrelate(buf, sampleRate) {
    let size = buf.length; let rms = 0;
    for (let i=0;i<size;i++) { let val = buf[i]; rms += val*val; }
    rms = Math.sqrt(rms/size); if (rms<0.02) return -1;
    let r1=0, r2=size-1, thres=0.2;
    for (let i=0; i<size/2; i++) if (Math.abs(buf[i])<thres) { r1=i; break; }
    for (let i=1; i<size/2; i++) if (Math.abs(buf[size-i])<thres) { r2=size-i; break; }
    buf = buf.slice(r1, r2); size = buf.length;
    let c = new Array(size).fill(0);
    for (let i=0; i<size; i++) for (let j=0; j<size-i; j++) c[i] = c[i] + buf[j]*buf[j+i];
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
            detectedNoteDisplay.innerText = note;
            
            // FEEDBACK VISUEL IMMEDIAT (Pour montrer où on est)
            visualizeInput(note);

            const now = Date.now();
            if(now - lastNoteTime > 250) { // Anti-rebond pour valider le jeu
                checkNote(note);
                lastNoteTime = now;
            }
        }
    }
    requestAnimationFrame(detectPitch);
}

// Initialisation
generatePiano();
generateMenu();
