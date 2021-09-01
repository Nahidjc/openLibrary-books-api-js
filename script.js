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
            console.log(data);
            let totalBooks = data.numFound;
            document.getElementById('total-books').innerText = `
            Total Search Book : ${totalBooks}
            `
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

        let imageId = book.cover_i;
        let imageUrl = ` https://covers.openlibrary.org/b/id/${imageId}-M.jpg`

        // Create col element for showing each booksDetails
        let singleBook = document.createElement('div');
        singleBook.classList.add('col-md-3');
        singleBook.classList.add('mb-3');


        singleBook.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img src="${imageUrl}" class="card-img-top" height="300">
            <div class="card-body">
                <h6>Book Name: ${book.title}</h6>
                <p>Author: ${book.author_name}</p>
                <small>Publisher: ${book.publisher}</small> <br>
                <small>First Publish: ${book.first_publish_year}</small> <br>
            </div>
        </div>
      
            `
        allBooksDetails.appendChild(singleBook);

    })
}