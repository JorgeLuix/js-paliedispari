const button = document.querySelector('button');

function generateRandomNumber() {
	return Math.floor(Math.random() * 5) + 1;
}

function pari(number) {
	return number % 2 === 0;
}

function play() {
   
	const evenOdd = document.querySelector('input[name="evenOdd"]:checked').value;
	const userNumber = parseInt(document.getElementById("number").value);
	const computerNumber = generateRandomNumber();
	const somma = userNumber + computerNumber;
	const result = pari(somma) ? "pari" : "dispari";

	if (evenOdd === result) {
		document.getElementById("result").innerHTML = `Hai vinto! La somma del tuo numero (${userNumber}) e del computer (${computerNumber}) è ${somma}, che è ${result}.`;
	} else {
		document.getElementById("result").innerHTML = `Hai perso! La somma del tuo numero (${userNumber}) e del computer (${computerNumber}) è ${somma}, che è ${result}.`;
	}
   
}
button.addEventListener('click', play);