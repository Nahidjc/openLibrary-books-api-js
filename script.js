document.getElementById('search-btn').addEventListener('click', function () {
    let searchText = document.getElementById('search-text');
    let searchValue = searchText.value;
    console.log(searchValue);
    url = `http://openlibrary.org/search.json?q=${searchValue}`;
    console.log(url);
})