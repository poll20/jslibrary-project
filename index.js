let library = {
    "books": [
        {
            "title": "The Catcher in the Rye",
            "author": "J.D. Salinger",
            "year": 1951
        },
        {
            "title": "To Kill a Mockingbird",
            "author": "Harper Lee",
            "year": 1960
        },
        {
            "title": "1984",
            "author": "George Orwell",
            "year": 1949
        }
        // ... (more books)
    ]
}
let btn = document.querySelector("#btn")

btn.addEventListener("click", () => {

    let name = document.querySelector("#nameInput")
    let nameofauther = name.value
   let ind=library.books.findIndex(ele=>{
        return ele.author==nameofauther
    })
    let title = library.books[ind].title
    let auther = library.books[ind].author
    let year = library.books[ind].year
    let ttl = document.querySelector(".title")
    let athr = document.querySelector(".auther")
    let yr = document.querySelector(".year")
    ttl.innerHTML = `<h3>title: ${title}<h3>`
    athr.innerHTML = `<h3>auther name: ${auther}<h3>`
    yr.innerHTML = `<h3>year: ${year}<h3>`

})