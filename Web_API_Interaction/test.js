import fetch from 'node-fetch'; // Import the 'node-fetch' module to make HTTP requests (for Node.js environment)

// Function to fetch the list of banks from the Flutterwave API
async function fetchBanks() {
  // Define the API endpoint URL for the list of Nigerian banks
  const url = 'https://api.flutterwave.com/v3/banks/NG'; 

  try {
    // Make a GET request to the API, passing the necessary headers (Authorization)
    const response = await fetch(url, {
      method: 'GET', // Set the HTTP method to GET
      headers: {
        'Authorization': 'Bearer FLWSECK_TEST-084688935392d8e36e734345cffa5c62-X', 
      },
    });

    // Check if the response status is OK (200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok'); // If not OK, throw an error
    }

    // Parse the JSON data from the response
    const data = await response.json();

    // Check if the data contains a 'data' property and if it's an array
    if (data.data && Array.isArray(data.data)) {
      // Slice the array to get the first five banks
      const firstFiveBanks = data.data.slice(0, 5);

      // Iterate over the first five banks and print their name and ID
      firstFiveBanks.forEach((bank, index) => {
        console.log(`${index + 1}. Bank Name: ${bank.name}, Bank ID: ${bank.id}`);
      });
    } else {
      // If no bank data is available or it's not an array, print an error message
      console.log('Error: No bank data available.');
    }
  } catch (error) {
    // Catch and log any errors that occur during the fetch request
    console.error('Error fetching data:', error);
  }
}

// Call the fetchBanks function to fetch and display the first five banks
fetchBanks();
