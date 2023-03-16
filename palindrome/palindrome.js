const button = document.querySelector('button');

function checkPalindrome() {
	const word = document.getElementById("word").value.toLowerCase();
	const reversed = word.split("").reverse().join("");
	if (word === reversed) {
		document.getElementById("result").innerHTML = `${word} è palindrome!`;
	} else {
		document.getElementById("result").innerHTML = `${word} non è palindrome.`;
	}
}
button.addEventListener('click', checkPalindrome);
