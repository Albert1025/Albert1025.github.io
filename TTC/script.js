let boxes = document.querySelectorAll('#board div');
let turn=0;
function currSym(){
	if(turn % 2 == 0){
		return 'X';
	}
	
	else{
		return 'O';
	}
}

for(let box of boxes){
	box.onclick = function() {
	if (box.innerHTML == '&nbsp;'){
		box.innerHTML = currSym();
		checkWinner(currSym())
		turn++
			}	
	else {
		alert('wat u doin');
		}
	}
}

function checkWinner(marker) {

  if ( (boxes[0].innerHTML == marker && boxes[1].innerHTML == marker && boxes[2].innerHTML == marker) ||
       (boxes[3].innerHTML == marker && boxes[4].innerHTML == marker && boxes[5].innerHTML == marker) ||
       (boxes[6].innerHTML == marker && boxes[7].innerHTML == marker && boxes[8].innerHTML == marker) ||
       (boxes[0].innerHTML == marker && boxes[3].innerHTML == marker && boxes[6].innerHTML == marker) ||
       (boxes[1].innerHTML == marker && boxes[4].innerHTML == marker && boxes[7].innerHTML == marker) ||
       (boxes[2].innerHTML == marker && boxes[5].innerHTML == marker && boxes[8].innerHTML == marker) ||
       (boxes[0].innerHTML == marker && boxes[4].innerHTML == marker && boxes[8].innerHTML == marker) ||
       (boxes[2].innerHTML == marker && boxes[4].innerHTML == marker && boxes[6].innerHTML == marker) )
  {
    alert(marker + ' wins!')
    location.reload()
  }

  else if(turn == 8) {
  		alert('Draw!')
  		location.reload()
  }
}

// ADD DUMB AI
