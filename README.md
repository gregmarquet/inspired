[Visit Inspired online](https://gregmarquet-inspired.netlify.com/)

# Inspired
### I hope this app will inspire you

This app was born from my love for photography and my desire to access easily the most inspiring photos in one place.

Inspired brings together the "Photo Of The Day" from NASA, National Geopraphic and Unsplash.

Nasa and National Geographic both have APIs that I am using. While Unsplash also has an API, I am using Unsplash Source, which is a simple embedding for their photos. 


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The structure is very straight forward:

The App component is the parent component for the other three (NasaPOD, NatGeoPOD and UnsplashPOD)

I am using 'react-moment' to help display the date in the header. 

NasaPOD and NatGeoPOD components are used without any props and UnsplashPOD is used with the 'category' props.

The NasaPOD is a class based component, inside the componentDidMount lifeCycle method, it uses the fetch API to call the NASA API. Turn the response to JSON and set the state using that data.

In the render method, it displays conditionally an iframe or an img tag depending on the media-type that is returned from the API call. I didn't know that the NASA picture of the day was sometimes a video, but had to re-write the render method when the app broke :( 

The render method also display the title and an explanation.

The NatGeoPOD component is a class based component. I import the 'national-geographic-api' package to deal with the API call and in the componentDidMount lifeCycle method I am using natgeo with the getPhotoOfDay method to retrieve their photo of the day throu the API.

The render method displays the tilte, the image and the desciption.

Finaly, UnsplashPOD is a functional component. It uses template literals to inject keywords in the Unsplash Source URL (the keywords are received through props).

#### What I learned

I learned that the picture of the day NASA API was not always returning photos. I also learned that the best way to display Youtube videos was iframe. I first tried to use the HTML5 video tag, and was not able to read the video. 


#### Improvements

I have used the Unsplash Source API, but I would like to explore their more advanced API since I am only able to get the image through source. I would like to credit the photographer. 

### If you want to help

If you have suggestions about great inspiring photos APIs on the web, please let me know.