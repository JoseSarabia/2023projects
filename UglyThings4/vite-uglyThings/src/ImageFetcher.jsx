// import React from "react"


// function ImageFecther()  {
//     const ImageFetcher = () => useSatate("")

//     const fetchImage = async () => {
//         try {
//           const response = await fetch('https://api.imgflip.com/get_memes'); // Replace with your API endpoint
//           const data = await response.json();
//           setImageUrl(data.imageUrl); // Assuming the API returns an object with the image URL
//         } catch (error) {
//           console.error('Error fetching image:', error);
//         }

//     }
    

//     return(
//         <div>
//             <h1>What</h1>
//             <button onClick = {fetchImage}>Get image</button>
//             {imageUrl &&  <img src={imageUrl}  alt="Fetched"/>}
//         </div>
//     )
// }

// export default ImageFecther