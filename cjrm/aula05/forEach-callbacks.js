// callbacks
const myFunc = (callback) => {
    const value = 77;

    callback(value);
};

myFunc((number) => {
    console.log(`O número é: ${number}`);
});

// forEach
const socialNetworks = ['youtube', 'twitter', 'instagram', 'faceboook'];

const logArrayInfo = (socialNetwork, index, array) => {
    console.log(index, socialNetwork, array);
};

socialNetworks.forEach(logArrayInfo);
