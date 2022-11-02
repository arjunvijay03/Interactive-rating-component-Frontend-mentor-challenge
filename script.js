const ratingButton = document.getElementsByClassName('number');
const submitButton = document.getElementById('submit')

let rating = 0;



for (var i = 0; i < ratingButton.length; i++){
ratingButton[i].addEventListener('click', function(){
    if(rating === 0){
     rating = this.innerHTML;
    console.log(rating);
    this.style.backgroundColor = 'hsl(217, 12%, 63%)';
    this.style.color = "white";
    }else{
        rating = this.innerHTML;
       for(i = 0;i < ratingButton.length; i++ )
       {
        ratingButton[i].style.backgroundColor = 'hsl(213, 19%, 18%)';
        ratingButton[i].style.color = "hsl(217, 12%, 63%)";
       }
        this.style.backgroundColor = 'hsl(217, 12%, 63%)';
        this.style.color = "white";
    }

});
}

submitButton.addEventListener('click', function(){

    if(rating === 0){
        alert("Give a Rating")
    }else{
    console.log('hii')
    document.getElementById('container').style.display = "none";
    document.getElementById('main').style.display = "flex";
    document.getElementById('rating').innerHTML = rating;
    }
})
