const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const btnEl = document.getElementById("btn");


getData();

async function getData(){
	try {
		const response = await fetch("https://qapi.vercel.app/api/random");
		const data = await response.json();
		quoteEl.innerText = data.quote;
		authorEl.innerText = data.author;
	} catch (error) {
		console.error("error fetching data: ", error);
	}
}


btnEl.addEventListener("click", getData);
