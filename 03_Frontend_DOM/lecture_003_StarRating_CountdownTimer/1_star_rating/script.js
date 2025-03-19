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


const starContainer = document.querySelector(".star_container");
const countSpan = document.querySelector("#count");
const starArray = document.querySelectorAll(".star");

let clickedStarIndex = 0;
let RATING_COLOR = "blue";

// Event Listners
// Event Listner of click on star.
starContainer.addEventListener("click", (event) => {

});


// Event Listner of MouseHover.
starContainer.addEventListener("mouseover", (event) => {

});


// Event Listner of MouseLeave.
starContainer.addEventListener("mouseleave", (event) => {

});


// Helper Methods.