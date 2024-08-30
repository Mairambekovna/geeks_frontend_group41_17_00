const users = [
    {
        email: "john@doe.com",
        password: "123test"
    },
    {
        email: "mentor@geeks.kg",
        password: "geeks_2020"
    },
    {
        email: "support@geeks.kg",
        password: "qwerty"
    }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        document.body.style.backgroundColor = '#c8e6c9';
    } else {
        document.body.style.backgroundColor = '#ffcdd2';
    }
});
