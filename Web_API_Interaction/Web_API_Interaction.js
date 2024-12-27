import fetch from 'node-fetch'; // Import node-fetch (for making HTTP requests in Node.js)

// This is a function to fetch the list of banks and extract a specific bank by its name
async function getBankByName(bankName) {
  const url = 'https://api.flutterwave.com/v3/banks/NG'; // URL to fetch Nigerian banks' details from the Flutterwave API

  try {
    // Make a GET request to the API to fetch the list of banks
    const response = await fetch(url, {
      method: 'GET', // HTTP method is GET to retrieve data
      headers: {
        // Authorization header with a Bearer token (use your own API key for production)
        'Authorization': 'Bearer FLWSECK_TEST-084688935392d8e36e734345cffa5c62-X', // my API key
      },
    });

    // Check if the API response status is OK (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok'); // If not OK, throw an error
    }

    // Parse the response as JSON (API returns data in JSON format)
    const data = await response.json();

    // Check if the response contains bank data
    if (data.data && Array.isArray(data.data)) {
      // Use the find method to search for the bank by name (case-insensitive comparison)
      const bank = data.data.find(bank => bank.name.toLowerCase() === bankName.toLowerCase());

      // If the bank is found, display its name and ID
      if (bank) {
        console.log(`Bank found: ${bank.name} (ID: ${bank.id})`);
      } else {
        // If no bank is found with the specified name, display a message
        console.log(`Bank with name "${bankName}" not found.`);
      }
    } else {
      // If no bank data is available or it's not an array, log an error message
      console.log('Error: No bank data available.');
    }
  } catch (error) {
    // Catch any network errors or issues during the fetch request and log them
    console.error('Error fetching data:', error);
  }
}

// Test usage: Call the function to search for a bank by its name
getBankByName('Access Bank'); // You can replace 'Access Bank' with any bank name you want to search for
