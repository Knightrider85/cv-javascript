window.addEventListener('DOMContentLoaded', main);

/**
 * 
 */
function main() {
}



function toggleButton() {
const toggleButton = document.getElementById('toggleButton');
const navList = document.getElementById('naviList')

toggleButton.addEventListener("click", () => {
    navList.classList.toggle("active");
}) 
}