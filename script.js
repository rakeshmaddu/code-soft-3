// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
const bookingForm = document.querySelector('.hero form');
const searchInput = document.querySelector('.hero form input[type="text"]');
const checkInInput = document.querySelector('.hero form input[type="date"]:first-of-type');
const checkOutInput = document.querySelector('.hero form input[type="date"]:last-of-type');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Perform form validation
    if (searchInput.value.trim() === '') {
        alert('Please enter a destination or hotel name.');
        searchInput.focus();
        return;
    }

    if (checkInInput.value === '') {
        alert('Please select a check-in date.');
        checkInInput.focus();
        return;
    }

    if (checkOutInput.value === '') {
        alert('Please select a check-out date.');
        checkOutInput.focus();
        return;
    }

    // If form is valid, submit the data or perform further actions
    // For example, you can send an AJAX request to the server
    const formData = {
        destination: searchInput.value,
        checkIn: checkInInput.value,
        checkOut: checkOutInput.value
    };

    // Send AJAX request or perform other actions with formData
    console.log(formData);
});

// Toggle mobile navigation
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});