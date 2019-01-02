// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
    /**
     * first solution
     */
    // for (let row = 0; row < n; row++) {
    //     let stair = '';
    //     for (let col = 0; col < n; col++) {
    //         if (col <= row) {
    //             stair += '#';
    //         } else {
    //             stair += ' ';
    //         }
    //     }
    //     console.log(stair);
    // }

    /**
     * second solution
     * (add 'row' argument to function, and this default value is 0 - zero)
     * (add 'stair' argument to function, and this default value is '' - empty string)
     */
    if (n === row) {
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }

    // if (stair.length <= row) {
    //     stair += '#';
    // } else {
    //     stair += ' ';
    // }
    // steps(n, row, stair);
    /**
     * above if - else solution in one line
     */
    const add = stair.length <= row ? '#' : ' ';
    steps(n, row, stair + add);
}

module.exports = steps;
