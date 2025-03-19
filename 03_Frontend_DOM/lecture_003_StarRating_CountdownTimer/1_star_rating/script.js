/**
 * Javascript:
           a. We have to listen to three events.
              i. Click -> Give the rating.
                          Update star upto that level.
                          Update rating count.

             ii. Mouseover -> We have to chnage the star upto that level to yellow color without chnaging the rating once rating is given.

             Edge Case:
             iii. MouseLeave: move it back to gray star/yellow.
 */


const starContainer = document.querySelector("#star_container");
const countSpan = document.querySelector("#count");
const starArray = document.querySelectorAll(".star");

let clickedStarIndex = 0;
let RATING_COLOR = "blue";
let DEFAULT_COLOR = "gray";

// Event Listners
// Event Listner of click on star.
starContainer.addEventListener("click", (event) => {
    if(event.target.hasAttribute("idx")){
        clickedStarIndex = event.target.getAttribute("idx");
        fillStarsWithRatingColorUpToIndex(clickedStarIndex);
        countSpan.textContent = clickedStarIndex;
    }
});


// Event Listner of MouseHover.
starContainer.addEventListener("mouseover", (event) => {
    if(event.target.hasAttribute("idx")){
        let currentHoverIndex = event.target.getAttribute("idx");
        fillStarsWithRatingColorUpToIndex(currentHoverIndex);
    }

});


// Event Listner of MouseLeave.
starContainer.addEventListener("mouseleave", (event) => {
    fillStarsWithRatingColorUpToIndex(clickedStarIndex);
});


// Helper Methods.

function resetAllStarsToDefaultColor() {
    for (star of starArray) {
        star.classList.remove(RATING_COLOR);
    }
}

function fillStarsWithRatingColorUpToIndex(clickedStarIndex) {
    resetAllStarsToDefaultColor();

    for (let currentStarIndex = 0; currentStarIndex < clickedStarIndex; clickedStarIndex++) {
        starArray[currentStarIndex].classList.add(RATING_COLOR);
    }
}