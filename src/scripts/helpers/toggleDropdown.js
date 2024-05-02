const toggleDropdown = (dropdownId) => {
  const dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle("hidden");
  const chevron = document
    .getElementById(`${dropdownId}-toggle`)
    .querySelector(".chevron");
  if (chevron.classList.contains("fa-chevron-up")) {
    chevron.classList.remove("fa-chevron-up");
    chevron.classList.add("fa-chevron-down");
  } else {
    chevron.classList.remove("fa-chevron-down");
    chevron.classList.add("fa-chevron-up");
  }
};
