var exp = 'Lorem ipsum is simply dummy text.';

function longWord(sentence){
    var array = sentence.split(' ');
    var longestWord = '';

    for (var i = 0; i < array.length; i++) {
        if (array[i].length > longestWord.length) {
            longestWord = array[i];
        }
    }

    return longestWord;
}

console.log(longWord(exp));