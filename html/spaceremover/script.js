function remove() {
  let str = document.getElementById("input").value;
  let output = str.replace(/\s+/g, '');
  document.getElementById("output").innerHTML = output;
}
