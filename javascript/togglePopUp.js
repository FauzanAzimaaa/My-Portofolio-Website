const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const popupModal = document.getElementById('popupModal');

    // Function to open the modal
openModalBtn.addEventListener('click', function() {
    popupModal.classList.remove('hidden');
});

// Function to close the modal
closeModalBtn.addEventListener('click', function() {
    popupModal.classList.add('hidden');
});