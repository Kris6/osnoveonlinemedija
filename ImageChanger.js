let myImage = document.querySelector('.about-kol img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === "images/Oklubu1.jpg")
    {
        myImage.setAttribute('src', "images/slikazapromenu1.jpg");
    }
    else
    {
        myImage.setAttribute('src', "images/Oklubu1.jpg");
    }
}