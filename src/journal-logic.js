export function Entry(){
  this.title = '';
  this.body = '';
  this.bodyArr= []
  this.bodyLength = 0;
  this.bodyVowels = 0;
  this.bodyConsonants = 0;
  this.tester = '';
}
Entry.prototype.addTitle = function(title){
  this.title = title;
}
Entry.prototype.addBody = function(body){
  this.body = body;
}
Entry.prototype.countWords =function(){
  this.bodyArr = this.body.split(' ');
  this.bodyLength = this.bodyArr.length;
}
Entry.prototype.countVowels = function(){
  const vowels = ['a','A','e','E', 'i', 'I', 'o', 'O', 'u', 'U'];
  var vowelCounter = 0;
  this.bodyArr.forEach(function(word){
    for(let i = 0; i <= word.length; i++){
      if(vowels.includes(word[i])){
        vowelCounter++;
      }
    }
  })
  this.bodyVowels = vowelCounter;
}
Entry.prototype.countConsonant = function() {
  const consonant = ['B', 'b', 'C', 'c', 'D', 'd', 'F', 'f', 'G', 'g', 'H', 'h', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'P','p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'V', 'v', 'X', 'x', 'Y', 'y', 'Z', 'z'];
  var consonantCounter = 0;
  this.bodyArr.forEach(function(word) {
    for( let i = 0; i <= word.length; i++) {
      if(consonant.includes(word[i])){
        consonantCounter++;
      }
    }
  })
  this.bodyConsonants = consonantCounter;
}
Entry.prototype.getTester = function(){
  var tempArr = []
  if(this.bodyLength <= 8){
    this.tester = this.bodyArr.join(' ')+ '...';
  } else {
    for(let i = 0; i <= 8; i++){
      tempArr.push(this.bodyArr[i])
    }
    this.tester = tempArr.join(' ')+'...'
  }

}