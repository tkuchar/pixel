// Get values for grid height and width.
document.getElementById("sizePicker").addEventListener("submit", function(evt) {

    // Prevents browser refresh initiated from submit function.
    evt.preventDefault();

    //var color = document.getElementById("colorPicker").value;
    var gridHeight = document.getElementById("input_height").value;
    var gridWidth = document.getElementById("input_width").value;

    makeGrid(gridWidth, gridHeight);
    colorCells();
});

// When size is submitted by the user, call makeGrid()

function makeGrid(width, height) {

    // clears grid if one exists
    document.getElementById('pixel_canvas').innerHTML = "";

    var columns = width;
    var rows = height;
    var table = "";

    for (var i = 0; i < rows; i++) {
        table += "<tr>";
        for (var j = 0; j < columns; j++) {
            table += "<td>" + "</td>";
        }
        table += '</tr>';
    };
    document.getElementById('pixel_canvas').innerHTML += table;
};

function colorCells() {

    var cells = document.getElementsByTagName("td");

    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', function() {
            var color = document.getElementById("colorPicker").value;
            this.style.backgroundColor = color;
        });
    }
};
