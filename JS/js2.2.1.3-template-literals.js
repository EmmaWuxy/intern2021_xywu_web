let song = "Fight the Youth";
let score = 9;
let highestScore = 10;
let output = `I like the song "${song}". I have it a score of ${score/highestScore*100}%.`;
console.log(output);

// Complex expressions
let examScore = 45;
let examHighestScore = 70;
examReport = `You scored ${ examScore }/${ examHighestScore } (${ Math.round((examScore/examHighestScore*100)) }%). ${ examScore >= 49 ? 'Well done, you passed!' : 'Bad luck, you didn\'t pass this time.' }`;
console.log(examReport);

// No need for newline character
output = `I like the song "${song}".
I have it a score of ${score/highestScore*100}%.`;
console.log(output);