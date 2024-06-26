// Utility Function
function setElementValueById(elementId, value) {
    document.getElementById(elementId).innerText = value;
}

function totalPrice(id, value) {
    const totalPrice = document.getElementById(id).innerText;
    const convertedTotalPrice = parseInt(totalPrice);
    const sum = convertedTotalPrice + parseInt(value);
    setElementValueById(id, sum);
}

function getInputValueById(elementId) {
    const input = document.getElementById(elementId);
    const inputValue = input.value;
    return inputValue;
}

// Seat seletion
const allBtn = document.querySelectorAll('#add-seat');
let count1 = 0;
let count2 = 40;
for (const addSeat of allBtn) {
    addSeat.addEventListener('click', function (e) {
        if (count1 <= 3) {
            count1 = count1 + 1;
            count2 = count2 - 1
            totalPrice(
                "total-price", document.getElementById("seat-per-pay").innerText
            );
            const selectedArea = e.target.innerText;
            const price = document.getElementById("seat-per-pay").innerText;
            const selectedContainer = document.getElementById(
                "selected-container"
            );
            const div = document.createElement("div");
            const title1 = document.createElement("h4");
            title1.innerText = selectedArea;
            const title2 = document.createElement("h4");
            title2.innerText = "Economy";
            const title3 = document.createElement("h4");
            title3.innerText = price;
            div.appendChild(title1);
            div.appendChild(title2);
            div.appendChild(title3);
            div.className = "flex justify-between w-full text-left mb-4";
            selectedContainer.appendChild(div);
            e.target.classList.add("text-white");
            e.target.classList.add("bg-[#1DD100]");
            e.target.classList.add("pointer-events-none");
        }
        else {
            alert("You can only select four seats and not more");
        }

        setElementValueById("seat-count", count1);
        setElementValueById("seat-left", count2);
        grandTotalPrice();
        const busSeat = parseInt(document.getElementById("seat-count").innerText);
        if (busSeat > 3) {
            document.getElementById("apply").removeAttribute("disabled");
        } else {
            document.getElementById("apply").setAttribute("disabled", true);
        }

        document.getElementById("number-phone").addEventListener('keyup', function (event) {
            const text = event.target.value.toString().length;
            const button = document.getElementById("modal-btn");
            if (text > 0 && busSeat > 0) {
                button.removeAttribute("disabled");
            } else {
                button.setAttribute("disabled", true);
            }
        });

    });
}

function grandTotalPrice() {
    const totalPriceText = document.getElementById("total-price").innerText;
    const totalPrice = parseInt(totalPriceText);
    setElementValueById("grand-total", totalPrice);
}

// Coupon Function
const button = document.getElementById("apply");
button.addEventListener("click", function () {
    const inputCopupon = getInputValueById("copupon");
    if (inputCopupon === "NEW15") {
        const grandTotal = document.getElementById("total-price").innerText;
        const convertedTotalPrice = parseInt(grandTotal);
        const discount = convertedTotalPrice * 0.15;
        const grandTotalPrice = convertedTotalPrice - discount;
        document.getElementById("discount").innerText = discount;
        setElementValueById("grand-total", grandTotalPrice);
        document.getElementById("hidden").className = "hidden";
        document.getElementById("disconunt-parsent").classList.remove("hidden");
    }
    else if (inputCopupon === "Couple 20") {
        const grandTotal = document.getElementById("total-price").innerText;
        const convertedTotalPrice = parseInt(grandTotal);
        const discount = convertedTotalPrice * 0.2;
        const grandTotalPrice = convertedTotalPrice - discount;
        document.getElementById("discount").innerText = discount;
        setElementValueById("grand-total", grandTotalPrice);
        document.getElementById("hidden").className = "hidden";
        document.getElementById("disconunt-parsent").classList.remove("hidden");
    }
    else {
        alert("Invalid Coupon");
    }
});
