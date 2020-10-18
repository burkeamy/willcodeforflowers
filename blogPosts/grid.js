let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

//line
c.lineWidth = 5;
c.beginPath();
//top horizontal line
c.moveTo(50, 200);
c.lineTo(1250, 200);
//bottom horizontal line
c.moveTo(50, 450);
c.lineTo(1250, 450);
//left vertical line
c.moveTo(400, 100);
c.lineTo(400, 550);
//right vertical line
c.moveTo(900, 100);
c.lineTo(900, 550);
//c.strokeStyle = "darkblue";
c.stroke();

//middle circle
c.beginPath();
c.arc(700,330, 70, 0, Math.PI *2);
c.stroke();

//bottom right x
c.beginPath();
c.moveTo(550, 100);
c.lineTo(650, 200);
c.moveTo(550,200)
c.lineTo(650, 100)
c.stroke();

//middle bottom circle
c.beginPath();
c.arc(700,530, 70, 0, Math.PI *2);
c.stroke();

//top middle x
c.beginPath();
c.moveTo(1050, 500);
c.lineTo(1150, 550);
c.moveTo(1050,550)
c.lineTo(1150, 500)
c.stroke();

//middle right circle
c.beginPath();
c.arc(1000,330, 70, 0, Math.PI *2);
c.stroke();

//top right x
c.beginPath();
c.moveTo(1150, 100);
c.lineTo(1050, 200);
c.moveTo(1150,200)
c.lineTo(1050, 100)
c.stroke();

//middle left circle
c.beginPath();
c.arc(200,330, 70, 0, Math.PI *2);
c.stroke();

//winning line
c.moveTo(50, 340);
c.lineTo(1150, 340);
c.stroke();