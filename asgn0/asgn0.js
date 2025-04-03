function main() {
  var canvas = document.getElementById("canvas");
  if (!canvas) {
    console.log("Failed to get the canvas element!");
    return false;
  }

  var ctx = canvas.getContext("2d");

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
