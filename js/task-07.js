const input = document.getElementById('font-size-control');
const span = document.getElementById('text')

input.addEventListener("input", handleInputRange);
function handleInputRange(e) {
      span.style.fontSize = e.currentTarget.value + "px" ;
}