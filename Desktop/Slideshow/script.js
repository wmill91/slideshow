


slideshow = {

	photoList: ['photo1','photo2','photo3'],

	currentPhotoIndex: 1,
	nextPhoto : function(){

		return getNext (this.currentPhotoIndex);		
	},
	
	prevPhoto : function(){
		return getPrev(this.currentPhotoIndex);
	
	},

}

		
function getCurrent(i){return i;}
function getNext(i){return i +1;}
function getPrev(i){return i -1;}

function showMySlide(){
	
	console.log('now ' + slideshow.currentPhotoIndex);
	console.log('next ' + slideshow.nextPhoto());
	console.log('prev ' + slideshow.prevPhoto());

	if(slideshow.currentPhotoIndex > 2 || slideshow.currentPhotoIndex < 1){
		console.log('End of slideshow');
	
	};

};


console.log(showMySlide());





