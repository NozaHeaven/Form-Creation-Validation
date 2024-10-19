async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';  // API URL
    const dataContainer = document.getElementById('api-data');    // Data container where user data will be displayed

    try {
        // Fetch the data from the API
        const response = await fetch(apiUrl);
        const users = await response.json();  // Convert the response to JSON format

        // Clear the "Loading user data..." message
        dataContainer.innerHTML = '';

        // Create a <ul> element to display the list of users
        const userList = document.createElement('ul');

        // Loop through the users and create an <li> for each user
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;  // Set the user's name as the text content
            userList.appendChild(listItem);    // Append the <li> to the <ul>
        });

        // Append the <ul> to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // If there's an error, display an error message
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching data:', error);
    }
}

// Add event listener for DOMContentLoaded to run the fetchUserData function after the HTML is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);

