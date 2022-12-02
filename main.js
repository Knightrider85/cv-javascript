window.addEventListener('DOMContentLoaded', main);

/**
 * 
 */
function main() {
    toggleButton();
}

/**
 * @type {Function} -function for toggleButton opening hamburger navlist 
 */
function toggleButton() {
const toggleButton = document.getElementById('toggleButton');
const navList = document.getElementById('naviList')

toggleButton.addEventListener("click", () => {
    navList.classList.toggle("active");
}) 
}

