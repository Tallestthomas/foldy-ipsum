const TerryIpsum = new GenerateNewText();

function GenerateNewText(){
  this.single = [
    'flap',
    'fold',
    'hold',
    'folds',
    'holds',
    'flaps',
  ]

  this.words = [
    'foldy',
    'holdy',
    'flappy',
  ];
  this.beginning = [
    'Grab my',
    'Touch my',
    'Hold my'
  ]
}

GenerateNewText.prototype.getNewSentence = function(){
  const beginning = this.beginning[Math.floor(Math.random() * this.beginning.length)];
  const sentenceLength = Math.floor(Math.random() * Math.floor(3)) + 1;
  let sentence = [beginning];

  if(Math.round(Math.random()) === 1 || sentenceLength === 1 ){
    sentence.push('terry');
  }

  if(sentenceLength > 1){
    for(let i = 0; i < sentenceLength; i++){
      let word = this.words[Math.floor(Math.random() * this.words.length)]
      if(sentence.includes(word)){
        break;
      }
      sentence.push(word);
    }
  }
  sentence.push(this.single[Math.floor(Math.random() * this.single.length)]);
  let newSentence = sentence.join(' ');
  return newSentence + '.';
}

GenerateNewText.prototype.getParagraph = function(sentences = 5) {
  let paragraph = [];
  for(let i = 0; i < sentences; i++){
    paragraph.push(this.getNewSentence());
  }
  return paragraph.join(' ');
}

GenerateNewText.prototype.getAllParagraphs = function(paragraphs = 2){
  const results = [];
  for(let i = 0; i < paragraphs; i++){
    results.push(this.getParagraph());
  }
  return results;
}

export default TerryIpsum;
