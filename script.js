document.getElementById('search-btn').addEventListener('click', function () {
    let searchText = document.getElementById('search-text');
    let searchValue = searchText.value;
    console.log(searchValue);
    searchFunction(searchValue);

})


// find books details  search by book name 
const searchFunction = (searchValue) => {
    url = `http://openlibrary.org/search.json?q=${searchValue}`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            showBook(data.docs);
        }).catch((error) => {
            console.error('Error:', error);
        });
}

// book details
const showBook = books => {

    books.forEach((book) => {
        console.log(book.title);

    })
}