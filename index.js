
   // Array of background images
const images = [
    'images/resturantimg1.jpg', // Change to your actual image paths
    'images/resturantimg2.jpg',
    'images/resturantimg3.jpg'
];

let currentIndex = 0; // To keep track of the current image
const backgroundSection = document.querySelector('.background-section'); // Select the background section

// Function to change the background image
function changeBackgroundImage() {
    currentIndex = (currentIndex + 1) % images.length; // Cycle through the images
    backgroundSection.style.backgroundImage = `url('${images[currentIndex]}')`; // Set the new background image
}

// Change background image every 5 seconds
setInterval(changeBackgroundImage, 5000);

// Initialize with the first image
backgroundSection.style.backgroundImage = `url('${images[currentIndex]}')`;

function showAll() {
    
    fetch("./data.json")
    .then(response => response.json())
    .then(Data => loadData(Data.Food))
    .catch(err => console.log("Error :"+err));
}
function loadData(Data) {
    document.addEventListener("DOMContentLoaded", function() {
        console.log("DOM fully loaded and parsed");

        // Ensure that the #col element exists before modifying it
        var CardMovie = document.getElementById("col");
        if (!CardMovie) {
          console.error("Element with id 'col' not found");
          return;  // Exit if #col is not found
        }

        document.cookie.split(';').forEach(cookie => {
            const eqPos = cookie.indexOf('=');
            const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
            document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
        });

    CardMovie.innerHTML = "";


        var CardMovie = document.getElementById("col");
        

        
        for (var i = 0; i < Data.length; i++) {
            let name = Data[i].name
            let price = Data[i].price;
            let description = Data[i].description;
            let url = Data[i].image + "?t=" + new Date().getTime();
            let AddCardMovie = document.createElement("div");
            AddCardMovie.classList.add("col"); // Add Bootstrap class to the column
            AddCardMovie.innerHTML = `
            <div class="card shadow-sm">
                <img src=${url} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <p class="card-text"> <strong>${name}</strong>, $${price}, ${description}</p>
                </div>
            </div>
            `;
            CardMovie.appendChild(AddCardMovie);
        } // end of for
    });
    }
