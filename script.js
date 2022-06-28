const jokeElement = document.getElementById("joke");
const jokeButton = document.getElementById("joke-btn");

/** Complete this function!!! **/
const generateJoke = async () => {
  // saving header to variable - this is required to access the API (I found this out from reading the documentation)
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const response = await fetch('https://icanhazdadjoke.com', config);
  const data = await response.json();
  /**
   * Fetch the Promise - create a variable called response, and assign it the value of fetch().  Make sure the two arguments you pass into the fetch() function are 1) 'https://icanhazdadjoke.com' and 2) config (the headers we created above). Remember, the fetch() call will return a promise!
   * Then, create a new variable called data, and assign it the value of response.json() - remember, this is an asynchronous task too!
   * If you complete the last two lines correctly, uncomment the line below, and you should have a correctly working API call!
   */

  jokeElement.innerHTML = data.joke;
};

//Initial call
generateJoke();

//Call whenever button is pressed
jokeButton.addEventListener("click", generateJoke);
