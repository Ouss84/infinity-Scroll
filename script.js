// Unsplash API
const apiKey = 'y_ZigdkU21C4L0jQAKpueAkX7DnJG4mDn3wKYSztr60';
const count = 10;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// get random pictures function
async function getRandomPicture (){
    try{
        const response = await fetch (apiUrl);
        const data = await response.json();
        console.log(data);
    }catch(error){
        
    }
}

//run the app
getRandomPicture()