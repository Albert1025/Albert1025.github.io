let div = document.querySelector('div')
tagArray = ['Nature', 'photography', 'movie', 'funny', 'food', 'pet', 'boxing'];
ansArray = []

	for(let i = 0; i < 4; i++){
		
	let N = Math.floor(Math.random() * (tagArray.length - 1) + 1)
	let options = Math.floor(Math.random() * (N) + 1)
	ansArray.push(tagArray[options]);	//push then splice into new array
	tagArray.splice(options, 1);
	}

	for (let i = 0; i < ansArray.length; i++){
			let btn = document.createElement('button');
			btn.innerHTML = ansArray[i];
			let elemDiv = document.createElement('p');
			document.body.appendChild(elemDiv);
			elemDiv.appendChild(btn)
}

let ansN = Math.floor(Math.random() * (ansArray.length -1) + 1)

//randomize 'n' again


function getShit(tag){ 

	fetch("https://api.tumblr.com/v2/tagged?tag=" + tag +"&api_key=0vgplhM30V4OmauUfGbTro1oU88lyQHIpV9T5lmrbCtRncYjFy") // get JSON DATA
	.then(function(response){  																					// get JSON DATA
		return response.json();																					// get DATA INSIDE JSON DATA (imgs, users, etc.)
	}).then(function(myJson){																					// USE THE DATA RETRIEVE FROM JSON DATA
		const array = myJson.response
			for (let obj of array) {
			const link = obj.photos[0].alt_sizes[1].url;
			const img = document.createElement("img");
			img.src = link;
			div.appendChild(img);
			div.classList.add("grid")
			img.classList.add("grid-item")
			}
		let element = document.getElementByTagName("div");
		div.classList.add("grid")
		img.masonry
	})
}



function checkWin(event){
	if(event.target.innerHTML == ansArray[ansN]){
		alert("you're badass")
		location.reload()
	}
	else{
		alert('try again')
	}
}

function startGame() {
	getShit(ansArray[ansN]);
	for (let i=0; i < 4; i++){
		let x = document.getElementsByTagName('button')
		x[i].addEventListener('click', checkWin);
	}
}
 

startGame();