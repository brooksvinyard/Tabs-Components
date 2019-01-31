class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content');;
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => { this.toggleContent() });
  }

  toggleContent() {
    
    // The page starts with the ".dropdown-hidden" class on, so it is off the page
    this.content.classList.remove('dropdown-hidden');
    
    // Toggle the fade in and out classes on click
    this.content.classList.toggle('slide-in-top');
    this.content.classList.toggle('slide-out-top');
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));