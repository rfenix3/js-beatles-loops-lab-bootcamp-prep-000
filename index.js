function theBeatlesPlay(musicians, instruments) {
  var beatlesPlay = []; 
  for (let i=0; i<musicians.length; i++) {
    beatlesPlay.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  console.log(beatlesPlay);
  return beatlesPlay;
}

var musicians = ['John Lenon', 'Ringo Star'];
var instruments = ['guitar', 'drum'];

theBeatlesPlay(musicians, instruments);
