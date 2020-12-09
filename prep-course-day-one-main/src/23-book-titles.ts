export {};

const books = [
  {
    title: "4 hour work week",
    author: "Tim Ferris"
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferris"
  }
];

const getTheTitles = (books: object[]) => {
    let titleArray: string[] = [];
    for (let i of books) {
        if(i['author'] == 'Tim Ferris') {
            titleArray.push(i['title'])
        }
    }
    return titleArray;
};

console.log(getTheTitles(books)); // Expected output: ['4 hour work week', 'Tools of Titans']
