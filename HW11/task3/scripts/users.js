document.addEventListener('DOMContentLoaded', getUsers);

function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById('usersList');

            users.forEach(user => {
                const userCard = createUserCard(user);
                userList.appendChild(userCard);
            });
        })
        .catch(error => console.error('Error fetching users:', error));
}

function createUserCard(user) {
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');
    userCard.innerHTML = `
        <p class="user-card__info">${user.id} - ${user.name}</p>
        <a class="user-card__details-link" href="user-details.html?id=${user.id}">Details</a>`;
    return userCard;
}
