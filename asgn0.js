let ctx;

function main() {
  var canvas = document.getElementById("canvas");
  if (!canvas) {
    console.log("Failed to get the canvas element!");
    return false;
  }

  ctx = canvas.getContext("2d");

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let v1 = new Vector3([2.25, 2.25, 0]);
  drawVector(v1, "red");
}

function drawVector(v, color) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.moveTo(200, 200);
  ctx.lineTo(200 + v.elements[0] * 20, 200 - v.elements[1] * 20);
  ctx.stroke();
}

function handleDrawEvent() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  let v1 = new Vector3([
    document.getElementById("x1").value,
    document.getElementById("y1").value,
    0,
  ]);
  drawVector(v1, "red");
  let v2 = new Vector3([
    document.getElementById("x2").value,
    document.getElementById("y2").value,
    0,
  ]);
  drawVector(v2, "blue");
}

function handleDrawOperationEvent() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  let v1 = new Vector3([
    document.getElementById("x1").value,
    document.getElementById("y1").value,
    0,
  ]);
  drawVector(v1, "red");
  let v2 = new Vector3([
    document.getElementById("x2").value,
    document.getElementById("y2").value,
    0,
  ]);
  drawVector(v2, "blue");
  let op = document.getElementById("Operation").value;
  let scalar = document.getElementById("scalar").value;
  if (op == "add") {
    let v3 = v1.add(v2);
    drawVector(v3, "green");
  } else if (op == "sub") {
    let v3 = v1.sub(v2);
    drawVector(v3, "green");
  } else if (op == "mul") {
    let v3 = v1.mul(scalar);
    drawVector(v3, "green");
    let v4 = v2.mul(scalar);
    drawVector(v4, "green");
  } else if (op == "div") {
    let v3 = v1.div(scalar);
    drawVector(v3, "green");
    let v4 = v2.div(scalar);
    drawVector(v4, "green");
  } else if (op == "magnitude") {
    console.log(v1.magnitude());
    console.log(v2.magnitude());
  } else if (op == "normalize") {
    drawVector(v1.normalize(), "green");
    drawVector(v2.normalize(), "green");
  } else if (op == "angle-between") {
    angleBetween(v1, v2);
  } else if (op == "Area") {
    areaTriangle(v1, v2);
  }
}

function angleBetween(v1, v2) {
  let dotProduct = Vector3.dot(v1, v2);
  let magV1 = v1.magnitude();
  let magV2 = v2.magnitude();
  console.log(
    "Angle: " + Math.acos(dotProduct / (magV1 * magV2)) * (180 / Math.PI)
  );
}
function areaTriangle(v1, v2) {
  console.log("Area of the triangle: " + Vector3.cross(v1, v2).magnitude() / 2);
}
