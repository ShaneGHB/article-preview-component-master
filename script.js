// 1, Select the elements from the DOM
const articlefooter = document.querySelector('.article-footer');
const shareButton = document.querySelector('.share-btn');
const tooltip = document.querySelector('.share-tooltip');

// 2. Add a click event listener to the button
shareButton.addEventListener("click", (event) => {
    // Prevent the click from bbblingup to the document
    event.stopPropagation();

    // 3. Toggle the 'active' class on all relevant elements
    articlefooter.classList.toggle('active');
    shareButton.classList.toggle('active');
    tooltip.classList.toggle('active');
})

// Optimal: Close the tooltip if clicking anywhere else on the page