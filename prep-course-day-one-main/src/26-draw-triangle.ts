export {};

function draw(rows: number) {
    var star = '*';
    var i:number;
    for (i=0; i<=rows; i++) {
        console.log(star.repeat(i));
    }
}

draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
