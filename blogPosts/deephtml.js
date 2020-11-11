let canvas = document.querySelector('canvas');

canvas.width = 620;
canvas.height = 400;

let c = canvas.getContext('2d');

c.beginPath();
c.moveTo(20, 200);
c.bezierCurveTo(200, 10, 400, 600, 600, 80);
c.strokeStyle = "black";
c.shadowBlur = 20;
c.shadowColor = "black";
c.stroke();

c.beginPath();
c.arc(100, 255, 50, 0, 2 * Math.PI);
c.fillStyle = "honeydew";
c.fill();
c.stroke();

c.beginPath();
c.arc(400, 195, 50, 0, 2 * Math.PI);
c.fillStyle = "honeydew";
c.fill();
c.stroke();

