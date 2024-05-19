let gridLength = document.querySelector("#length").value;
let button = document.querySelector("#enter");
let clear = document.querySelector("#clear");
let random = document.querySelector("#random");
let darken = document.querySelector("#darken");
let opacity;
let darkenCheck = false;
let randomCheck = false;
const gridContainer = document.querySelector(".gridContainer");
let color = document.querySelector("#color");

button.addEventListener("click",() => {
    let oldGridLength = gridLength;
    gridLength = document.querySelector("#length").value;
    if (gridLength <= 100)
    {
        deleteDiv();
        makeDiv();
    }
});
random.addEventListener("click",randomClick);
darken.addEventListener("click",darkenClick);
clear.addEventListener("click",() => {
    if (darkenCheck)
    {
        opacity = 0.1;
    }
    let click = new Event("click");
    button.dispatchEvent(click);
});
makeDiv();
function makeDiv()
{
    for(let i = 1; i <= gridLength; i++)
    {
        for(let j = 1;j <= gridLength; j++)
        {
            let gridDiv = document.createElement("div");
            gridDiv.style.width = (600 / gridLength) + "px";
            gridDiv.style.height =  (600 / gridLength) + "px";
            gridContainer.appendChild(gridDiv);
            gridDiv.classList.add("gridDiv");
            gridDiv.addEventListener("mouseenter",() => 
            {
                if (randomCheck)
                {
                    let x = Math.floor(Math.random() * 256);
                    let y = Math.floor(Math.random() * 256);
                    let z = Math.floor(Math.random() * 256);
                    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
                    gridDiv.style.backgroundColor = bgColor; 
                }
                else{
                gridDiv.style.backgroundColor = color.value;
                    }
                
                if (darkenCheck)
                {
                    if (opacity <= 1)
                    {
                        gridDiv.style.opacity = opacity.toString();
                        opacity += 0.1;
                    }
                    else
                    {
                        opacity = 0.1;
                        gridDiv.style.opacity = opacity.toString();
                        opacity += 0.1;
                    }
                }
                else{
                    gridDiv.style.opacity = opacity.toString();
                }
            }
        );
        }
    }
}

function deleteDiv()
{
    let lastElement = gridContainer.lastElementChild;
    while(lastElement)
    {
        gridContainer.removeChild(lastElement);
        lastElement = gridContainer.lastElementChild;
    }
}

function randomClick()
{
    if (randomCheck)
    {
        randomCheck = false;
        random.style.backgroundColor = "aqua";
    }
    else
    {
        randomCheck = true;
        random.style.backgroundColor = "red";
    } 
    // random.removeEventListener("click",randomClick);
}

function darkenClick()
{
    if (darkenCheck)
        {
            darkenCheck = false;
            darken.style.backgroundColor = "aqua";
            opacity = 1;
        }
        else
        {
            darkenCheck = true;
            darken.style.backgroundColor = "red";
            opacity = 0.1;
        } 
}