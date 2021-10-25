var shape;

canvas = document.getElementById("easel");
ctx = canvas.getContext("2d");
color = "black";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 8;

canvas.addEventListener("mousedown", Mousedown);

function Mousedown(e) {
    color = document.getElementById("color");
    ctx.lineWidth = document.getElementById("width").value;
    if (document.getElementById("circle").value) {
        shape = "circle";
    } else if (document.getElementById("square").value) {
        shape = "square";
    } else if (document.getElementById("draw").value) {
        shape = "draw";
    }
    
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log("x =" + mouse_x + "y =" + mouse_y);
    shape(mouse_x,mouse_y)
}

canvas.addEventListener("mouseup", Mouseup);

function Mouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mousemove", Mousemove);

function Mousemove(e) {
    PosiBeforeX = e.clientX - canvas.offsetLeft;
    PosiBeforeY = e.clientY - canvas.offsetUp;

    if (mouseEvent == "mousedown"){
        if (shape == "draw") {
            ctx.beginPath();
            color = document.getElementById("color");
            ctx.lineWidth = document.getElementById("width").value;
    
            PosiNowX = e.clientX - canvas.offsetLeft;
            PosiNowY = e.clientY - canvas.offsetUp;
                        
            ctx.arc(PosiNowX,PosiNowY,80,0,2*Math.PI);
            ctx.stroke();
    
            PosiBeforeX = PosiNowX;
            PosiBeforeY = PosiNowY;        
        }
    }
}
function Shape(mouse_x,mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 8;
    if (shape == "circle") {
        ctx.arc(mouse_x,mouse_y,80,0,2*Math.PI);
        ctx.stroke();        
    } else if (shape == "square") {
        ctx.moveTo(mouse_x - 40, mouse_y - 40);
        ctx.lineTo(mouse_x + 40, mouse_y - 40);
        ctx.stroke();

        ctx.moveTo(mouse_x + 40, mouse_y - 40);
        ctx.lineTo(mouse_x + 40, mouse_y + 40);
        ctx.stroke();

        ctx.moveTo(mouse_x + 40, mouse_y + 40);
        ctx.lineTo(mouse_x - 40, mouse_y + 40);
        ctx.stroke();

        ctx.moveTo(mouse_x - 40, mouse_y + 40);
        ctx.lineTo(mouse_x - 40, mouse_y - 40);
        ctx.stroke();
    }
}
function clear() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}