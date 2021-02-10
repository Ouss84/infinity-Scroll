const imageConatainer = document.getElementById ('image-container');
const loader = document.getElementById ('laoder');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];


// Unsplash API
const apiKey = 'y_ZigdkU21C4L0jQAKpueAkX7DnJG4mDn3wKYSztr60';
const count = 30;
// const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// check if all images were loaded
function loadedImages(){
    imagesLoaded++;
    if(imagesLoaded === totalImages){
        ready = true;
        console.log("image loaded", imageLoaded)
        console.log("ready", ready)
    }
}

// setAttribute function to dry
function setAttributes (element, attributes){
    for (const key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}

// creating the function that displays photos
function displayPhotos(){
    totalImages = photosArray.length;
    console.log ("total images",totalImages);
    //run a forEach loop to the photosArray
    photosArray.forEach ((photo) => {
        //creating the anchor element
        const anchor = document.createElement('a');
        //populating the anchor with its attributes
        setAttributes(anchor, {
            href : photo.links.html,
            target : '_blank',
        })
        //creating the image inside the anchor
        const image = document.createElement ('img');
        //defining the image attributes
        setAttributes(image, {
            src : photo.urls.regular,
            alt : photo.alt_description,
            title : photo.alt_description,
        });
        // add eventlistener to check when images are loaded
        image.addEventListener('load', loadedImages);

        // appending the image inside the anchor and then the anchor inside the image-container
        anchor.appendChild(image);
        imageConatainer.appendChild(anchor);
    })
}

// get random pictures function
async function getRandomPicture (){
    try{
        const response = await fetch (apiUrl);
        photosArray = await response.json();
        displayPhotos();
    }catch(error){
    };
}

//implementing the load functionality
window.addEventListener('scroll', () =>{
    if ( window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
        ready = false;
        getRandomPicture();
    }
})

//run the app
getRandomPicture()