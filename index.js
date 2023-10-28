document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("myButton");
    var confirmationModal = document.getElementById("confirmationModal");
    var confirmButton = document.getElementById("confirmButton");
    var cancelButton = document.getElementById("cancelButton");

    // Show the modal
    function showModal() {
        confirmationModal.style.display = "flex";
    }

    // Hide the modal
    function hideModal() {
        confirmationModal.style.display = "none";
    }

    // Attach event listeners
    button.addEventListener("click", showModal);
    cancelButton.addEventListener("click", hideModal);
    confirmButton.addEventListener("click", function () {
        // Handle the confirmation action here
        // e.g., proceed with an action
        hideModal();
    });
});
