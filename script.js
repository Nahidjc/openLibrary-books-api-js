document.getElementById('search-btn').addEventListener('click', function () {
    let searchText = document.getElementById('search-text');
    let searchValue = searchText.value;
    searchFunction(searchValue);

})


// find books details  search by book name 
const searchFunction = (searchValue) => {
    url = `http://openlibrary.org/search.json?q=${searchValue}`;

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
    let allBooksDetails = document.getElementById('all-books');
    allBooksDetails.textContent = '';

    books.forEach((book) => {
        console.log(book);
        let imageId = book.cover_i;
        // authorKey = book.author_name
        // url = "https://openlibrary.org/authors/OL62134A.json"
        let imageUrl = ` https://covers.openlibrary.org/b/id/${imageId}-M.jpg`

        // Create col element for showing each booksDetails
        let singleBook = document.createElement('div');
        singleBook.classList.add('col-md-4');


        singleBook.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img src="${imageUrl}" class="card-img-top" height="300">
            <div class="card-body">
                <h5>Title: ${book.title}</h5>
                <p>Author: ${book.author_name}</p>
                <small>Publisher: ${book.publisher}</small> <br>
                <small>First Publish: ${book.first_publish_year}</small> <br>
            </div>
        </div>
      
            `
        allBooksDetails.appendChild(singleBook);

    })
}