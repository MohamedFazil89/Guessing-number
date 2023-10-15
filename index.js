const userinput = document.getElementById("input");
const clickevent = document.getElementById("Confirm");
const rendercontent = document.getElementById("render");
const reset = document.getElementById("Reset");
rendercontent.style.display = "none";







var backimage = document.getElementById("bg-image");


function number() {
    const userValue = parseInt(userinput.value);
    const min = 1;
    const max = 1;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("userInputValue").textContent = userValue;
    document.getElementById("randomNumberValue").textContent = randomNumber;

    if (userValue === randomNumber) {
        alert("You win");
        clickevent.addEventListener("click", function () {
            if (rendercontent.style.display === "none") {
                rendercontent.style.display = "block";
                backimage.style.backgroundImage = 'url("./assets/pexels-pixabay-50594.jpg")';
                


                

            }
            rendering.innerHTML += `<p>User input: ${userValue}</p>`;
            rendering.innerHTML += `<p>Random number: ${randomNumber}</p>`;
        


        })

    }
    else {
        alert(`The correct answer is ${randomNumber}`);
    }
}

function reset_(){
    userinput.value="";
    backimage.style.backgroundImage = 'url("./assets/wallpaperflare.com_wallpaper (5).jpg")';
    rendercontent.style.display = "none";



}

