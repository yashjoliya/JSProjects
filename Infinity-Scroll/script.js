// Insplashed API
const count = 10;
const apiKey = 'iODqQXqvgD289Iss7z0BRlenGIUGufQ3xAV1AueVALE';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get Photos From Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch Error
    }
}

// On Load
getPhotos();