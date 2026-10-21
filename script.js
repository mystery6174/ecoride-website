// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});



/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});



/* ================= BOOKING DATE ================= */

const dateInput = document.getElementById("date");

const today = new Date();

const year = today.getFullYear();

const month = String(
    today.getMonth() + 1
).padStart(2, "0");

const day = String(
    today.getDate()
).padStart(2, "0");


dateInput.min =
    `${year}-${month}-${day}`;



/* ================= BOOK BUTTONS ================= */

const scooterSelect =
    document.getElementById("scooter");


document.querySelectorAll(".book-btn")
.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedScooter =
            button.getAttribute("data-scooter");

        scooterSelect.value =
            selectedScooter;

        document
            .getElementById("booking")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});



/* ================= BOOKING FORM ================= */

const bookingForm =
    document.getElementById("bookingForm");

const formMessage =
    document.getElementById("formMessage");


bookingForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name")
            .value.trim();


        const email =
            document.getElementById("email")
            .value.trim();


        const scooter =
            document.getElementById("scooter")
            .value;


        const date =
            document.getElementById("date")
            .value;


        const time =
            document.getElementById("time")
            .value;


        if (
            name === "" ||
            email === "" ||
            scooter === "" ||
            date === "" ||
            time === ""
        ) {

            formMessage.textContent =
                "Please fill all booking details.";

            return;
        }


        const booking = {

            name: name,

            email: email,

            scooter: scooter,

            date: date,

            time: time

        };


        /* Save booking */

        localStorage.setItem(
            "latestBooking",
            JSON.stringify(booking)
        );


        formMessage.textContent =
            `Booking confirmed for ${name} - ${scooter} on ${date}, ${time}.`;


        bookingForm.reset();


        dateInput.min =
            `${year}-${month}-${day}`;

    }
);



/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");

const contactStatus =
    document.getElementById(
        "contactMessageStatus"
    );


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const contactData = {

            name:
                document.getElementById(
                    "contactName"
                ).value,

            email:
                document.getElementById(
                    "contactEmail"
                ).value,

            message:
                document.getElementById(
                    "contactMessage"
                ).value

        };


        console.log(
            "Contact Form Data:",
            contactData
        );


        contactStatus.textContent =
            "Thank you! Your message has been received.";


        contactForm.reset();

    }
);