// App.js for V2.0 Presentation

document.addEventListener('DOMContentLoaded', () => {

    // 1. Slider Logic (Universal for all instances)
    window.updateSlider = function (id, val) {
        const afterImage = document.getElementById('afterImage' + id);
        const handle = document.getElementById('sliderHandle' + id);

        if (afterImage && handle) {
            afterImage.style.width = val + '%';
            handle.style.left = val + '%';
        }
    };

    // 2. Option 2 Motivator Popup Logic
    const option2Card = document.querySelector('.flip-card:nth-child(2) .flip-card-front');
    const option2Modal = document.getElementById('option2Modal');
    const closeOption2 = document.getElementById('closeOption2');

    // Trigger on click of the "Start Growth Partner" button inside the card (or the card itself if needed)
    // For now, let's attach to the "Hover for Strategy" text or add a specific button
    // The Flip Card logic handles hover. Let's add a click listener to the CTA on the BACK of Option 2.

    // Instead, let's make the "Why Option 2?" timeline COLLAPSIBLE in the main page as per prompt
    // But prompts also mentioned "On-click popup". Let's implement the Popup Trigger.

    // Logic: If user clicks specific triggers
    const triggers = document.querySelectorAll('[data-trigger="option2-popup"]');
    triggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            option2Modal.classList.add('modal-open');
        });
    });

    if (closeOption2) {
        closeOption2.addEventListener('click', () => {
            option2Modal.classList.remove('modal-open');
        });
    }

    // 3. Upfront Modal Logic
    const upfrontModal = document.getElementById('upfrontModal');
    const closeUpfront = document.getElementById('closeUpfront');
    const upfrontTriggers = document.querySelectorAll('[data-trigger="upfront-popup"]');

    upfrontTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            upfrontModal.classList.add('modal-open');
        });
    });

    if (closeUpfront) {
        closeUpfront.addEventListener('click', () => {
            upfrontModal.classList.remove('modal-open');
        });
    }

    // Close on outside click
    window.onclick = function (event) {
        if (event.target == option2Modal) {
            option2Modal.classList.remove('modal-open');
        }
        if (event.target == upfrontModal) {
            upfrontModal.classList.remove('modal-open');
        }
    }
});
