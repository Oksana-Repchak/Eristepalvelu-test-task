(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const backdrop = document.querySelector("[data-backdrop]");

  // const refs = {
  //   openModalBtn: document.querySelector("[data-open-modal]"),
  //   closeModalBtn: document.querySelector("[data-close-modal]"),
  //   backdrop: document.querySelector("[data-backdrop]"),
  // };

  // refs.openModalBtn.addEventListener("click", toggleModal);
  // refs.closeModalBtn.addEventListener("click", toggleModal);

  // function toggleModal() {
  //   backdrop.classList.toggle("is-hidden");
  // }

  // --------------------
  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");

    backdrop.classList.toggle("is-hidden");
  });
})();
