window.addEventListener('DOMContentLoaded', main);

/**
 * 
 */
function main() {
    toggleButton();
}

/**
 * function for opening hamburger navlist
 */
function toggleButton() {
const toggleButton = document.getElementById('toggleButton');
const navList = document.getElementById('naviList')

toggleButton.addEventListener("click", () => {
    navList.classList.toggle("active");
}) 
}

