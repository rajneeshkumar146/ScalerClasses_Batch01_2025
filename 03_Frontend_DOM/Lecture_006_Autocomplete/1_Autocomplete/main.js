import getContries from "./fetchApi.js";

// getContries("India").then(console.log).catch(console.log);

const inputBox = document.getElementById("search_input");
const suggestionBox = document.getElementById("suggestion_box");

// Functions ------------------------------

const handleSearch = async (keyword) => {
    const countries = await getContries(keyword);
    const countryNameArr = countries.map((country) => country.name.common);
    console.log(countryNameArr);
    return countryNameArr;
}

const handleSuggestions = async (event) => {
    const keyWord = event.target.value;
    console.log(keyWord);

    const countryNameArr = await handleSearch(keyWord);
    console.log(countryNameArr);
    populateSuggestionBox(countryNameArr);
}

const populateSuggestionBox = (countryNameArr) => {
    if (countryNameArr.length) {
        suggestionBox.classList.add("visible");
    } else {
        suggestionBox.classList.remove("visible");
    }


    // Before showing any result reset your suggestion box.
    suggestionBox.innerHTML = '';
    const fragment = document.createDocumentFragment();

    countryNameArr.forEach((countryName) => {
        const li = document.createElement("li");
        li.innerText = countryName;
        fragment.appendChild(li);
    });

    suggestionBox.appendChild(fragment);
}

function debounce(cb, delay = 1000) {
    let timeoutId = null;
    return (...args) => {
        // resetting the timer.
        if (timeoutId) {
            console.log("I'm resetting you now wait again for the start.");
            clearTimeout(timeoutId);
        }


        timeoutId = setTimeout(() => {
            cb(...args);
            timeoutId = null;
        }, delay);
    }
}

inputBox.addEventListener("input", debounce(handleSuggestions))

