// Wait for the DOM to load before manipulating it
document.addEventListener("DOMContentLoaded", function () {

    // 1. Change text content dynamically
    const changeTextButton = document.getElementById("change-text-btn");
    changeTextButton.addEventListener("click", function () {
        const sectionHeading = document.getElementById("section-heading");
        sectionHeading.textContent = "The text has been changed!";
    });

    // 2. Modify CSS styles via JavaScript
    const changeStyleButton = document.getElementById("change-style-btn");
    changeStyleButton.addEventListener("click", function () {
        const dynamicContent = document.getElementById("dynamic-content");
        dynamicContent.style.color = "green";
        dynamicContent.style.fontSize = "24px";
    });

    // 3. Add an element when a button is clicked
    const addElementButton = document.getElementById("add-element-btn");
    addElementButton.addEventListener("click", function () {
        const dynamicContent = document.getElementById("dynamic-content");
        const newElement = document.createElement("p");
        newElement.classList.add("dynamic-text");
        newElement.textContent = "This is a new dynamically added paragraph!";
        dynamicContent.appendChild(newElement);
    });

    // 4. Remove the last added element
    const removeElementButton = document.getElementById("remove-element-btn");
    removeElementButton.addEventListener("click", function () {
        const dynamicContent = document.getElementById("dynamic-content");
        if (dynamicContent.lastElementChild) {
            dynamicContent.removeChild(dynamicContent.lastElementChild);
        }
    });
});
