$(document).ready(function () {
    $('#nav-home').click(function () {
        $('#home-section').show();
        $('#about-section').hide();
        $('#contact-section').hide();
    });
    $('#nav-about').click(function () {
        $('#home-section').hide();
        $('#about-section').show();
        $('#contact-section').hide();
    });
    $('#nav-contact').click(function () {
        $('#home-section').hide();
        $('#about-section').hide();
        $('#contact-section').show();

        setTimeout(function () {
            map.invalidateSize();  // Tells Leaflet to recalculate size
        }, 300);
    });
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.closest('.navbar').length) {
            $(".navbar-toggler").click(); // Trigger the collapse
        }
    });
});


// Bootstrap form validation
(() => {
    'use strict';
    const form = document.getElementById('venturaContactForm');
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            alert("Thank you! Your message has been submitted.");
            form.reset();
            form.classList.remove('was-validated');
        }
        form.classList.add('was-validated');
    });
})();

// Initialize Leaflet map with scroll zoom disabled
const map = L.map('map', {
    scrollWheelZoom: false
}).setView([19.2183, 72.8531], 15); // Kandivali West, Mumbai

// Add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add marker and popup
L.marker([19.2183, 72.8531]).addTo(map)
    .bindPopup("Ventura Steels Office").openPopup();

// Enable scroll zoom on map click
map.on('click', function () {
    map.scrollWheelZoom.enable();
});

// Disable scroll zoom when mouse leaves map
map.on('mouseout', function () {
    map.scrollWheelZoom.disable();
});



// Bootstrap form validation and success message
(() => {
    'use strict';
    const form = document.getElementById('venturaContactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            successMessage.classList.remove('d-none');
            form.reset();
            form.classList.remove('was-validated');
            setTimeout(() => {
                successMessage.classList.add('d-none');
            }, 6000);
        }
        form.classList.add('was-validated');
    });

    // Enable tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(el => new bootstrap.Tooltip(el));
})();


// Bootstrap form validation and success message
(() => {
    'use strict';
    const form = document.getElementById('venturaContactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            successMessage.classList.remove('d-none');
            form.reset();
            form.classList.remove('was-validated');
            setTimeout(() => {
                successMessage.classList.add('d-none');
            }, 6000);
        }
        form.classList.add('was-validated');
    });

    // Enable tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(el => new bootstrap.Tooltip(el));
})();
