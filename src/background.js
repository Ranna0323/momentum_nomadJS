
//switch background button
const body = document.querySelector("body");
const backgroundButton = document.getElementById("background-button");

const imges = ['01.jpg', '02.jpg', '03.jpg'];

function backgroundImgChange() {
    const chosenImg = imges[Math.floor(Math.random() * imges.length)];
    document.body.style.background = "url('" + `images/${chosenImg}` + "')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
}

backgroundImgChange()
backgroundButton.addEventListener("click", backgroundImgChange);
