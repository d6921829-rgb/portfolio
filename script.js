// ================= DARK MODE =================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

});


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "⚠️ Please fill in all the fields.";

        formMessage.style.color = "red";

        return;
    }


    if (!email.includes("@")) {

        formMessage.textContent =
            "⚠️ Please enter a valid email address.";

        formMessage.style.color = "red";

        return;
    }


    formMessage.textContent =
        "✅ Thank you! Your message has been submitted.";

    formMessage.style.color = "green";


    contactForm.reset();

});