//Get the form input elements for the columns, rows, and color selection
let canvas = document.getElementById("pixel_canvas");
let height = document.getElementById("input_height");
let width = document.getElementById("input_weight");
let sizePicker = document.getElementById("sizePicker");
let color = document.getElementById("colorPicker");

//An event listener for the square when its clicked
color.addEventListener("click", function(){});
//Picks the size input by the user
sizePicker.onsubmit = function(event){
    event.preventDefault(); // The default action that belongs to the event will not occur
    clearGrid();
    makeGrid();
};
//To change rows and columns, once a user clicks submit, this code will run a loop to create the specified rows and columns 
function makeGrid() {
    for (let i=0; i<height.value; i++){
        const row = canvas.insertRow(i);
        for (let j=0; j<width.value; j++){
            const cell = row.insertCell(j);
            cell.addEventListener("click", fillSquare);
        }
    }
}

function clearGrid() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}
//function that sets the background color to the selected option
function fillSquare() {
    this.setAttribute("style", `background-color: ${color.value}`);
};

