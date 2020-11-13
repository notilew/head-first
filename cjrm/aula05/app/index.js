const ul = document.getElementById('social-networks');

let HTMLTemplate = '';
const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook'];

socialNetworks.forEach((socialNetwork) => {
    HTMLTemplate += `<li>${socialNetwork.toUpperCase()}</li>`;
});

ul.innerHTML = HTMLTemplate;