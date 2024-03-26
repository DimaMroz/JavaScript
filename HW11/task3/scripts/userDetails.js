document.addEventListener('DOMContentLoaded', getUserDetails);

function getUserDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(userData => {
            const userInfo = document.getElementById('userInfo');
            userInfo.innerHTML = `<h2 class="user-details__heading">User Info</h2>`;

            for (const [key, value] of Object.entries(userData)) {
                const detailElement = createUserDetailElement(key, value);
                userInfo.appendChild(detailElement);
            }
        })
        .catch(error => console.error('Error fetching user details:', error));
}

function createUserDetailElement(key, value) {
    const detailElement = document.createElement('div');
    detailElement.classList.add('user-details__item');

    if (typeof value === 'object') {
        const sublist = document.createElement('ul');
        sublist.classList.add('user-details__sublist');
        sublist.innerHTML = `<strong>${key}</strong>`;

        for (const [subKey, subValue] of Object.entries(value)) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<span class="user-details__subitem-key">${subKey}</span>: ${subValue}`;
            sublist.appendChild(listItem);
        }

        detailElement.appendChild(sublist);
    } else {
        detailElement.innerHTML = `<span class="user-details__item-key">${key}</span>: ${value}`;
    }

    return detailElement;
}
