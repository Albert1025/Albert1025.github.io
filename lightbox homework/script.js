const closeButton = document.getElementsByClassName('lightbox-close')[0];
const lightBox = document.querySelector('.lightbox')
closeButton.onclick = function (event){
	event.preventDefault();
	lightBox.classList.add('hidden');
}

const galleryItem = document.querySelectorAll('.gallery-image')

const lightBoxImage = document.querySelector('.lightbox-image');

let index

for(let i=0; i < galleryItem.length; i++){
	const item = galleryItem[i];

	item.onclick = function(event){
	if (event.target.tagName == 'IMG'){
		// set index to the current image order (event.target.id)

		// parseInt(event.target.id)

		// Re-activate the lightbox thing
		lightBox.classList.remove('hidden');
		const currentGalleryItem = event.target.parentElement;

		// replace lightbox-image with clickedOn image

		lightBoxImage.innerHTML = currentGalleryItem.innerHTML
		index = currentGalleryItem.id
		}
		
		else{
			lightBox.classList.remove('hidden');
			lightBoxImage.innerHTML = event.target.innerHTML

			}
		}	
}

const nextButton = document.querySelector('.lightbox-next');
	
nextButton.onclick = function(){


	if(index == galleryItem.length){
		nextButton.style.display = 'none';

	}
	else{
		nextButton.style.display = 'inline'
		lightBoxImage.innerHTML = galleryItem[index++].innerHTML
		}
	
}

const prevButton = document.querySelector('.lightbox-prev');

prevButton.onclick = function(){
	
		if(index >= 0 ){
			nextButton.style.display = 'inline'
	lightBoxImage.innerHTML = galleryItem[--index].innerHTML
	}

}