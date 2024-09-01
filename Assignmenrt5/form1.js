document.getElementById('Form1').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

   // store
    const userData = {
        name: name,
        email: email,
        message: message
    };

    
    document.getElementById('look').innerHTML = `
        <h1> USER DATA</h1>
        <p><strong>Name:</strong> ${userData.name}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
        <p><strong>Message:</strong> ${userData.message}</p>
    `;
});