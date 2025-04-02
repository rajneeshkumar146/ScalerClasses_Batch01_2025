
const toolBoxPriorityContainer = document.querySelector(".toolbox-priority-cont");
const mainContainer = document.querySelector(".main_cont");
const uid = new ShortUniqueId();

const addBtn = document.querySelector(".add-btn");
const removeBtn = document.querySelector(".remove-btn");

let COLORS = ["pink", "blue", "purple", "green"]
let LOCAL_STORAGE_KEY = "KanabanBoardTickets";

//========================= Local Storage ========================

let ALL_TICKETS = localStorage.getItem(LOCAL_STORAGE_KEY) || [];
let IS_FROM_LOCAL_STORAGE = false;

// Initate the KanabanBoardApplication.
(() => {
    if (typeof ALL_TICKETS === "string") {
        ALL_TICKETS = JSON.parse(ALL_TICKETS);
        populateUi();
    }

    enableKanabanBoardFunctionality();
})();

function enableKanabanBoardFunctionality() {
    filterTickets();
    deleteBtnEventListner();
    modalCreation();
}

function populateUi() {
    IS_FROM_LOCAL_STORAGE = true;
    for (ticket of ALL_TICKETS) {
        buildTicketWithAllFeatures(ticket.content, ticket.color, ticket.isLocked, ticket.id);
    }
    IS_FROM_LOCAL_STORAGE = false;
}


//========================= Lock and Unlock ========================

function addLockAndUnlock(ticketArea, lockBtn, currentId) {
    lockBtn.addEventListener("click", (event) => {
        let lockBtnClassList = lockBtn.children[0].classList;
        let isLocked = lockBtnClassList.contains("fa-lock");
        if (isLocked) {
            lockBtnClassList.remove("fa-lock");
            lockBtnClassList.add("fa-lock-open");
            ticketArea.setAttribute("contenteditable", true);
        } else {
            lockBtnClassList.remove("fa-lock-open");
            lockBtnClassList.add("fa-lock");
            ticketArea.setAttribute("contenteditable", false);
        }

        // Update new changes in local storage.
        let ticketObj = getTicketObjectByCurrentId(currentId);
        ticketObj.content = ticketArea.textContent;
        ticketObj.isLocked = lockBtn.children[0].classList.contains("fa-lock");
        updateLocalStorage();

        event.stopImmediatePropagation();
    });
}




//========================= Change color ===========================

function addToggleColor(ticketColorEle, currentId) {

    ticketColorEle.addEventListener("click", (event) => {
        const currentColor = event.target.classList[1];
        // console.log(currentColor);
        let idx = COLORS.indexOf(currentColor);
        let nextIdx = (idx + 1) % COLORS.length;

        event.target.classList.remove(currentColor);
        event.target.classList.add(COLORS[nextIdx]);

        // Update new changes in local storage.
        let ticketObj = getTicketObjectByCurrentId(currentId);
        ticketObj.color = COLORS[nextIdx];
        updateLocalStorage();

        event.stopImmediatePropagation();
    });
}

//========================= Filter tickets ===========================
function filterTickets() {
    const ticketArray = document.querySelectorAll(".ticket-cont");

    // Signle click action.
    toolBoxPriorityContainer.addEventListener("click", (event) => {
        // console.log(event.target, event.currentTarget);
        if (event.target === event.currentTarget) {
            return;
        }

        const selectedColor = event.target.classList[1];
        // console.log("selectedColor: ", selectedColor);

        for (ticket of ticketArray) {
            const currentTicketColor = ticket.querySelector(".ticket-color").classList[1];
            if (currentTicketColor !== selectedColor) {
                ticket.style.display = "none";
            } else {
                ticket.style.display = "block";
            }
        }

        event.stopImmediatePropagation();
    });

    // Double click action.
    toolBoxPriorityContainer.addEventListener("dblclick", (event) => {
        for (ticket of ticketArray) {
            ticket.style.display = "block";
        }

        event.stopImmediatePropagation();
    });
}

//========================= Delete feature ===========================

function deleteListner(ticketContainer, currentId) {
    ticketContainer.addEventListener("click", (event) => {
        if (removeBtn.style.color != "red") {
            return;
        }

        ticketContainer.remove();

        // Update new changes in local storage.
        let newAllTickets = ALL_TICKETS.filter(ticket => ticket.id != currentId);
        ALL_TICKETS = newAllTickets
        updateLocalStorage()

        event.stopImmediatePropagation();
    });
}

function deleteBtnEventListner() {
    removeBtn.addEventListener("click", (event) => {
        if (removeBtn.style.color !== "red") {
            removeBtn.style.color = "red";
        } else {
            removeBtn.style.color = "";
        }

        event.stopImmediatePropagation();
    });
}

//========================= Modal and ticket creation ===========================

function modalCreation() {
    const modal = document.querySelector(".modal-cont");
    const priorityColorSetModal = modal.querySelector(".priority-color-cont");
    const priorityColorArrayOfModal = modal.querySelectorAll(".priority-color");

    addBtnEventListner(modal, priorityColorArrayOfModal);
    activeColorToCreateTicket(priorityColorSetModal, priorityColorArrayOfModal);
    createTicketWithContentAndActiveColor(modal, priorityColorArrayOfModal);
}


function addBtnEventListner(modal, priorityColorArrayOfModal) {
    addBtn.addEventListener("click", () => {
        resetActiveStatusOfColorModal(priorityColorArrayOfModal);
        modal.style.display = "flex";
    });

    addBtn.addEventListener("dblclick", () => {
        modal.style.display = "none";
    });
}

function activeColorToCreateTicket(priorityColorSetModal, priorityColorArrayOfModal) {
    priorityColorSetModal.addEventListener("click", (event) => {
        if (event.target === event.currentTarget) {
            return;
        }

        resetActiveStatusOfColorModal(priorityColorArrayOfModal);

        event.target.classList.add("active");
    });
}

function resetActiveStatusOfColorModal(priorityColorArrayOfModal) {
    for (priorityColor of priorityColorArrayOfModal) {
        priorityColor.classList.remove("active");
    }
}

function createTicketWithContentAndActiveColor(modal, priorityColorArrayOfModal) {
    modal.addEventListener("keypress", (event) => {
        event.stopPropagation();
        if (event.key !== "Enter") {
            return;
        }

        let textArea = modal.querySelector(".textarea-cont");
        let writtenContent = textArea.value;

        // get the selected color at the time of cretaion of modal.
        let activeColor = getActiveColorFromModalColorArray(priorityColorArrayOfModal);

        const id = uid();
        buildTicketWithAllFeatures(writtenContent, activeColor,/** isLocked= */true, id);

        textArea.value = "";
        modal.style.display = "none";
        resetActiveStatusOfColorModal(priorityColorArrayOfModal);
    });
}


function buildTicketWithAllFeatures(writtenContent, activeColor, isLocked, currentId) {
    if (writtenContent === "" || writtenContent.trim().length === 0) {
        return;
    }

    let lockOrUnlock = isLocked ? "fa-lock" : "fa-lock-open";

    const ticketContainer = document.createElement("div");
    ticketContainer.setAttribute("class", "ticket-cont");
    ticketContainer.innerHTML =
        `<div class="ticket-color ${activeColor}"></div>
    <div class="ticket-id">#${currentId}</div>
    <div class="ticket-area">${writtenContent}</div>
    <div class="lock-unlock"><i class="fa-solid ${lockOrUnlock}"></i></div>`;

    mainContainer.appendChild(ticketContainer);

    // attack other features like lock-unlock, togglecoloe etc.,

    // Lock-Unlock;
    const ticketArea = ticketContainer.querySelector(".ticket-area");
    const lockBtn = ticketContainer.querySelector(".lock-unlock");
    addLockAndUnlock(ticketArea, lockBtn, currentId);

    // Toggle Color.
    const ticketColorEle = ticketContainer.querySelector(".ticket-color");
    addToggleColor(ticketColorEle, currentId);

    // Delete Event Listner.
    deleteListner(ticketContainer, currentId);

    if (!IS_FROM_LOCAL_STORAGE) {
        createTicketObjAndUpdateLocalStorgae(writtenContent, activeColor, isLocked, currentId);
    }
}

function getActiveColorFromModalColorArray(priorityColorArrayOfModal) {
    let activeColor = "green";
    for (priorityColor of priorityColorArrayOfModal) {
        if (priorityColor.classList.contains("active")) {
            activeColor = priorityColor.classList[1];
            break;
        }
    }

    return activeColor;
}

function createTicketObjAndUpdateLocalStorgae(writtenContent, activeColor, isLocked, currentId) {
    let ticketObj = {
        id: currentId,
        content: writtenContent,
        color: activeColor,
        isLocked: isLocked
    };

    ALL_TICKETS.push(ticketObj);
    updateLocalStorage();
}

function updateLocalStorage() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(ALL_TICKETS))
}

function getTicketObjectByCurrentId(currentId) {
    return ALL_TICKETS.find(ticket => ticket.id === currentId);
}


//=========================  Testing purpose only: Calling methods ===========================

// const ticketContainerList = mainContainer.querySelectorAll(".ticket-cont");
// const ticketAreaList = mainContainer.querySelectorAll(".ticket-area");
// const lockBtnList = mainContainer.querySelectorAll(".lock-unlock");
// const ticketColorEleList = mainContainer.querySelectorAll(".ticket-color");

// for (let i = 0; i < ticketContainerList.length; i++) {
//     deleteListner(ticketContainerList[i]);
//     addToggleColor(ticketColorEleList[i]);
//     addLockAndUnlock(ticketAreaList[i], lockBtnList[i]);
// }

// filterTickets();
// deleteBtnEventListner();
// modalCreation();
