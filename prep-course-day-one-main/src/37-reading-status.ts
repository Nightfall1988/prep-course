export {};

const library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    isRead: true
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false
  }
];

const showStatus = (obj:object) => {
    obj.forEach((book: {isRead: boolean; title: string; author: string; }) => {
    if (book.isRead == true) {
        console.log('Already read ' + book.title + ' by ' + book.author + '.')
    } else {
        console.log('You still need to read ' + book.title + ' by ' + book.author + '.')
    }
  })  
}

showStatus(library);

/*
  Expected output:

  Already read 'Bill Gates' by The Road Ahead.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/