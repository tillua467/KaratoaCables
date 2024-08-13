const header = document.querySelector("header")

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY >0);
})

const searchIcon = document.querySelector('.search .icon');
const searchBar = document.querySelector('.search .input');
const clearButton = document.querySelector('.search .clear');

searchIcon.addEventListener('click', function() {
    searchBar.classList.toggle('active');
    searchBar.querySelector('input[type="text"]').focus(); // Automatically focus on the input field
    clearButton.classList.toggle('active'); // Toggle the active class of the clear button
});

clearButton.addEventListener('click', function() {
    searchBar.classList.remove('active');
    searchIcon.focus(); // Focus back on the search icon after collapsing
    clearButton.classList.remove('active'); // Remove the active class from the clear button
});


document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const arrowIcon = document.getElementById("arrow-icon");
    const navbar = document.getElementById("navbar");

    menuIcon.addEventListener("click", function() {
        navbar.classList.add("hidden");
        menuIcon.style.display = "none";
        arrowIcon.style.display = "block";
    });

    arrowIcon.addEventListener("click", function() {
        navbar.classList.remove("hidden");
        arrowIcon.style.display = "none";
        menuIcon.style.display = "block";
    });
});


//Seacrh iteams

document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { name: "1.0 Cable", url: "shop.html" },
        { name: "1.5 Cable", url: "shop.html" },
        { name: "PVC Red 9.1 Cable", url: "shop.html" }
        // Add more products as needed
    ];

    const searchInput = document.getElementById("product-search");
    const searchResults = document.getElementById("search-results");

    searchInput.addEventListener("input", function() {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = "";

        if (query) {
            const filteredProducts = products.filter(product =>
                product.name.toLowerCase().includes(query)
            );

            filteredProducts.forEach(product => {
                const li = document.createElement("li");
                li.textContent = product.name;
                li.addEventListener("click", function() {
                    window.location.href = product.url;
                });
                searchResults.appendChild(li);
            });

            searchResults.style.display = "block";
        } else {
            searchResults.style.display = "none";
        }
    });

    document.querySelector('.clear').addEventListener('click', function() {
        searchInput.value = "";
        searchResults.innerHTML = "";
        searchResults.style.display = "none";
    });
});

//Search Animation

searchInput.addEventListener("input", function() {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = "";

    if (query) {
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(query)
        );

        filteredProducts.forEach(product => {
            const li = document.createElement("li");
            li.textContent = product.name;
            li.addEventListener("click", function() {
                window.location.href = product.url;
            });
            searchResults.appendChild(li);
        });

        searchResults.classList.add("show"); // Add the 'show' class to trigger the dropdown
    } else {
        searchResults.classList.remove("show"); // Remove the 'show' class to collapse the dropdown
    }
});

