const high = str => {
  let hi = { word: '', score: 0 };
  let words = str.split(' ');
  words.forEach(wd => {
    let pts = 0;
    for (let i = 0; i < wd.length; i++) {
      pts += wd.charCodeAt(i) - 96;
    }
    pts > hi.score ? hi = { word: wd, score: pts } : false;
  });
  return hi.word
}


console.log(high('man i need a taxi up to ubud taxi')); // Taxi
console.log(high('what time are we climbing up the volcano')); // volcano
console.log(high('take me to semynak')); // semynak
console.log(high('alkjsdlfj oijweof2342342joijoef 223456 2323'));
console.log(high(''));
