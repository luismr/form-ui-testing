document.getElementById('getDataButton').addEventListener('click', function() {
    // Disable the button
    this.disabled = true;
    
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const tbody = document.querySelector('#userData tbody');
            tbody.innerHTML = ''; // Clear existing content
            
            users.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.username}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                    <td>${user.website}</td>
                    <td>${user.company.name}</td>
                    <td>${user.address.street}, ${user.address.suite}, ${user.address.city}</td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}); 