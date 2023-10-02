// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}


// home


// An array containing different roles.
const roles = ["Junior Software Developer", "Programmer", "Data Analyst", "Student."];

// Get the element with the class 'typing-text' from the HTML.
const typingText = document.querySelector('.typing-text');

// Function to simulate typing text character by character.
function typeText(index, text) {
    if (index < text.length) {
        // Append the next character to the typingText element.
        typingText.textContent += text.charAt(index);
        setTimeout(() => typeText(index + 1, text), 100); // Adjust typing speed (in milliseconds) here
    }
}

// Function to start typing the roles one by one.
function startTypingRoles(roleIndex) {
    if (roleIndex >= roles.length) {
        roleIndex = 0; // Reset to the first role if we've reached the end of the array
    }
    
    // Clear any existing text in the typingText element.
    typingText.textContent = '';

    // Start typing the current role from the roles array.
    typeText(0, roles[roleIndex]);

    // Set a delay before moving to the next role.
    setTimeout(() => {
        startTypingRoles(roleIndex + 1); // Move to the next role after a delay
    }, roles[roleIndex].length * 100 + 2000); // Adjust delay (2 seconds) between roles
}

// Start typing the roles one by one from the beginning.
startTypingRoles(0);
