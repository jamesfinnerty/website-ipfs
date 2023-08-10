const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/toy-boogers-752.png") {
    myImage.setAttribute("src", "images/euphorians-genesis-1022.png");
  } else {
    myImage.setAttribute("src", "images/toy-boogers-752.png");
  }
};