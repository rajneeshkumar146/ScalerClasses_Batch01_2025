
const toolBoxPriorityContainer = document.querySelector(".toolbox-priority-cont");
const mainContainer = document.querySelector(".main_cont");

const addBtn = document.querySelector(".add-btn");
const removeBtn = document.querySelector(".remove-btn");

let COLORS = ["pink", "blue", "purple", "green"]


//========================= Lock and Unlock ========================

function addLockAndUnlock(ticketArea, lockBtn) {
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

        event.stopImmediatePropagation();
    });
}




//========================= Change color ===========================

function addToggleColor(ticketColorEle) {

    ticketColorEle.addEventListener("click", (event) => {
        const currentColor = event.target.classList[1];
        // console.log(currentColor);
        let idx = COLORS.indexOf(currentColor);
        let nextIdx = (idx + 1) % COLORS.length;

        event.target.classList.remove(currentColor);
        event.target.classList.add(COLORS[nextIdx]);

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

function deleteListner(ticketContainer) {
    ticketContainer.addEventListener("click", (event) => {
        if (removeBtn.style.color != "red") {
            return;
        }

        ticketContainer.remove();
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

//=========================  Testing purpose only: Calling methods ===========================

const ticketContainerList = mainContainer.querySelectorAll(".ticket-cont");
const ticketAreaList = mainContainer.querySelectorAll(".ticket-area");
const lockBtnList = mainContainer.querySelectorAll(".lock-unlock");
const ticketColorEleList = mainContainer.querySelectorAll(".ticket-color");

for (let i = 0; i < ticketContainerList.length; i++) {
    deleteListner(ticketContainerList[i]);
    addToggleColor(ticketColorEleList[i]);
    addLockAndUnlock(ticketAreaList[i], lockBtnList[i]);
}

filterTickets();
deleteBtnEventListner();
