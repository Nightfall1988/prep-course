export {};

function onlyTheAces(arr: string[]) {
    var output: string[] = []
    for (var i=0; i<=arr.length; i++) {
        if (arr[i] == 'Ace') {
            output.push(arr[i])
        }
    }
    return output
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
