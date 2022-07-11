const refs = {
  backdrop: document.querySelector("[data-backdrop]"),
  openModal: document.querySelector("[data-openModal]"),
  closeModal: document.querySelector("[data-closeModal"),
};

refs.openModal.addEventListener("click", toggleModal);
refs.closeModal.addEventListener("click", toggleModal);

function toggleModal(e) {
  refs.backdrop.classList.toggle("is-hidden");
}
