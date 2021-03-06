document.getElementById('search-btn').addEventListener('click', function () {
    let searchText = document.getElementById('search-text');
    let searchValue = searchText.value;
    searchText.value = ''
    toggleSpinner('block');
    searchFunction(searchValue);

})


// show spinner

const toggleSpinner = displaySpinner => {
    document.getElementById('spinner').style.display = displaySpinner;
}


// find books details  search by book name 
const searchFunction = (searchValue) => {
    url = `https://openlibrary.org/search.json?q=${searchValue}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let Data = data.numFound;
            let noDataFound = document.getElementById('not-found');
            let totalBooksSection = document.getElementById('total-books');
            let detailsBooks = document.getElementById('all-books');
            // No Data Found Error Show
            if (Data === 0) {
                toggleSpinner('none');
                noDataFound.innerHTML = `
                <div class="m-auto col-md-6">
                <div class="alert alert-danger text-center" role="alert">
                There is No Books are Found
                 </div>
                </div>                   
                `
                detailsBooks.innerHTML = '';
                totalBooksSection.innerHTML = '';
            } else {

                noDataFound.innerHTML = '';
                let totalBooks = data.numFound;
                totalBooksSection.innerText = `
                Total Search Book : ${totalBooks}
                `
                showBook(data.docs);
                toggleSpinner('none');

            }

        })
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