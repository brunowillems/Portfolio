document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("submit");
    const dialog = document.getElementById("dialog");
    const closeButton = dialog.querySelector(".dialog__close");

    // Open the dialog
    button.addEventListener("click", () => {
        dialog.showModal();
        button.setAttribute("aria-expanded", "true");
    });

    // Close the dialog
    closeButton.addEventListener("click", () => {
        dialog.close();
        button.setAttribute("aria-expanded", "false");
    });

    // Close the dialog when clicking outside
    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
            dialog.close();
            button.setAttribute("aria-expanded", "false");
        }
    });
});