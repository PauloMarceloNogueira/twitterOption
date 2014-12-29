var Twit = require('twit');

var T = new Twit({
	consumer_key: 'BjPAJNAurskjfl0cGDacFC5qS',
	consumer_secret: 'A9KtEtD84y1YAU3gAJGh6wHT2FuZAgilcRvTDnCG4ZJkhPmh3z',
	access_token: '27650229-Fa9rPRhSEAGO18A1MEmt67umspWcTNjuWg3Y9uEaD',
	access_token_secret: 'jSkqJnpflbiPKcaPW6qb7V8RzC7hBsG79vIqJE79TJc3S'
});

var streamA = T.stream('statuses/filter',{track:'opcaoA'});
var streamB = T.stream('statuses/filter',{track:'opcaoB'});

var countA = 0;
var countB = 0;


streamA.on('tweet', function (tweet) {
  countA = countA+1;
  console.log("Voto em A | Total de Opção A: "+countA);
});
console.log(countA);
streamB.on('tweet', function (tweet) {
  countB += 1;
  console.log("Voto em B | Total de Opção B: "+countB);
});

console.log("Resultado Parcial: ");
console.log("#opcaoA: "+countA);
console.log("#opcaoB: "+countB);
