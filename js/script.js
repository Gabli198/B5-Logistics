/* ========================================================
  B5 Logistics - script.js
  1. Hamburger menu
  2. Current page link
  3. Stats counter
  4. Contact form
======================================================== */

"use strict";

// ========== 1. Hamburger Menu ========== 
const navToggle = document.getElementById("navToggle");
const navList = document.getElementById("navList");
function setMenu(isOpen){
  navList.classList.toggle("open", isOpen);
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute(
    "aria-label", isOpen ? "Close menu" : "Open menu"
  );
}

if (navToggle && navList) {
    navToggle.addEventListener("click", function () {
        const isOpen = navList.classList.contains("open");
        setMenu(!isOpen);
    });

    navList.addEventListener("click", function (event) {
        if (event.target.closest("a")) {
            setMenu(false);
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" &&
            navList.classList.contains("open")) {
            setMenu(false);
            navToggle.focus();
        }
    });

    window.matchMedia("(min-width: 768px)")
        .addEventListener("change", function (event) {
            if (event.matches) {
                setMenu(false);
            }
        });
}

// ========== 2. Marking the current page ========== 
const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navLinks = Array.from(document.querySelectorAll(".nav-list a"));

for (const link of navLinks) {
    if (link.getAttribute("href") === currentPage) {
        link.setAttribute("aria-current", "page");
    }
}

// ========== 3. Stats Counter (array + loop) ========== 
const statNumbers = document.querySelectorAll(".stat-number");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function countUp(element) {
    const target = Number(element.dataset.target);
    const duration = 1200;
    const start = performance.now();

    function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        element.textContent = Math.round(target * progress);

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

function showStat(element) {
    element.textContent = element.dataset.target;
}

if (statNumbers.length > 0) {
    if ("IntersectionObserver" in window && !prefersReducedMotion) {
        const observer = new IntersectionObserver(function (entries) {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    countUp(entry.target);
                    observer.unobserve(entry.target);
                }
            }
        }, { threshold: 0.6 });

        for (const stat of statNumbers) {
            observer.observe(stat);
        }
    } else {
        for (const stat of statNumbers) {
            showStat(stat);
        }
    }
}
/* ========== 4. Contact Form (object + methods + conditions) ========== */
const contactForm = document.querySelector(".contact-form");
const formStatus = document.getElementById("formStatus");

function showStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = "form-status " + type;
}

function clearStatus() {
    formStatus.textContent = "";
    formStatus.className = "form-status";
}

function validateForm() {
    const name = contactForm.elements["name"].value.trim();
    const phone = contactForm.elements["phone"].value.trim();
    const message = contactForm.elements["message"].value.trim();

    if (name.length < 2) {
        return "Please enter your name.";
    }

    if (phone !== "" && !/^[+\d][\d\s-]{6,}$/.test(phone)) {
        return "Please enter a valid phone number.";
    }

    if (message.length < 10) {
        return "Please write a message of at least 10 characters.";
    }

    return "";
}

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const error = validateForm();

        if (error !== "") {
            showStatus(error, "error");
            return;
        }

        const name = contactForm.elements["name"].value.trim();

        // No server is connected yet, so this is only a demo.
        showStatus("Thank you, " + name + ". The form passed validation, but your message was not sent.", "success");
        contactForm.reset();
    });

    contactForm.addEventListener("reset", clearStatus);
}