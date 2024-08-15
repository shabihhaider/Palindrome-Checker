const input = document.querySelector("#text-input");
const button = document.querySelector("#check-btn");
const result = document.querySelector("#result");


const palindrome = () => {

    if(input.value === "") {
        alert("Please input a value");
    } else {
        const cleanedStr= input.value.replace(/[^a-z0-9]/gi, '').toLowerCase();

        const reverseStr = input.value.split('').reverse().join('');

        result.classList.remove('hidden');
    
        if(reverseStr === cleanedStr) {
            result.innerHTML = `<span class="bold">${input.value}</span> is a Palindrome`;
        } else {
            result.innerHTML = `<span class="bold">${input.value}</span> is not a Palindrome.`;
        }
    }
};

button.addEventListener('click', palindrome);