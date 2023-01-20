//create an array of colors
// const colorss = ["#FF00FF", "#00FFFF", "#FFA500", "#FF0000"];
const colors = ["#1f83ff", "#e86a92", "#f7e733", "#eff7f9", "#41e2ba"]

//create a canvas
const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

//get the canvas context
const ctx = canvas.getContext("2d");

//create a function to draw the blobs
const drawBlob = (x, y, color) => {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, 20, 0, Math.PI * 3);
    ctx.fill();
};

//create an array of objects to store the blobs
let blobs = [];

//create a function to generate random blobs
const generateBlobs = () => {
    //generate a random x and y position
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    //get a random color from the colors array
    const color = colors[Math.floor(Math.random() * colors.length)];
    //create a blob object
    const blob = { x, y, color };
    //push the blob object to the blobs array
    blobs.push(blob);
};

//create a function to animate the blobs
const animateBlobs = () => {
    //clear the canvas
    // ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //loop through the blobs array
    for (let i = 0; i < blobs.length; i++) {
        //get the current blob
        const blob = blobs[i];
        //draw the blob
        drawBlob(blob.x, blob.y, blob.color);
        //update the blob's x and y position
        blob.x += Math.random() * 5 - 2.5;
        blob.y += Math.random() * 5 - 2.5;
    }
    //call the animateBlobs function again
    requestAnimationFrame(animateBlobs);
};

//generate 100 blobs
for (let i = 0; i < 200; i++) {
    generateBlobs();
}

//start animating the blobs
animateBlobs();