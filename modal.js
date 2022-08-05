const refsForModal = {
  body: document.querySelector("body"),
  backdrop: document.querySelector("[data-backdrop]"),
  openModal: document.querySelector("[data-openModal]"),
  closeModal: document.querySelector("[data-closeModal"),
};


refsForModal.openModal.addEventListener("click", toggleModal);
refsForModal.closeModal.addEventListener("click", toggleModal);


function toggleModal(e) {
  refsForModal.body.style.overflow = "hidden";
  refsForModal.backdrop.classList.toggle("is-hidden");

  if (refsForModal.backdrop.closest(".is-hidden")) {
    refsForModal.body.style.overflow = "auto";
  }
}

document.querySelector(".form-btn").addEventListener("click", (e) => {
  e.preventDefault();
});
