// Given a string, return a new string with the reversed
// order of characters
// --- Examples
// reverse('apple') === 'leppa'
// reverse('hello') === 'olleh'
// reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    /**
     * First solution
     */
    // const arr = str.split('');
    // arr.reverse();
    // return arr.join('');

    /* solution in one line */
    // return str.split('').reverse().join();

    /**
     * second solution
     */
    let reversed = '';
    for (let character of str) {
        reversed = character + reversed;
    }

    return reversed;

    /**
     * third solution
     */
    // str.split('').reduce((reversed, character) => {
    //     return character + reversed;
    // }, '');

    // str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;