const getTheTitles = function() {
    const booki = [
        {
          title: 'Book',
          author: 'Name'
        },
        {
          title: 'Book2',
          author: 'Name2'
        }
    ]
    const books = booki.map(i => i.title);
        return books;
};



// Do not edit below this line
module.exports = getTheTitles;
