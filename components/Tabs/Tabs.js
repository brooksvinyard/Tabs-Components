
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${element.dataset.tab}'`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.itemElement = new TabItem(this.itemElement);

    // Add a click event listener on this instance, calling the select method on click
    element.addEventListener('click', () => this.select() );
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach( links => {links.classList.remove('tabs-link-selected')} );

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');
    
    // As each tab is read, mark it with a "○"
    this.element.textContent = `○ Tab ${this.data}`

    // Call the select method on the item associated with this link
    this.itemElement.select();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
    Array.from(items).forEach( items => {items.classList.remove('tabs-item-selected')} );
    Array.from(items).forEach( items => {items.classList.remove('text-focus-in')} );

    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('tabs-item-selected');
    //add fade in animation on selection
    this.element.classList.add('text-focus-in');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

links = document.querySelectorAll('.tabs-link');

// Set each of the tabs to unread "●", except for Tab 1, set it to read "○"

links.forEach( link => { link.textContent = `● Tab ${link.dataset.tab}`});
document.querySelector(`.tabs-link[data-tab='1'`).textContent = `○ Tab 1`

links.forEach( link => { new TabLink(link) });
