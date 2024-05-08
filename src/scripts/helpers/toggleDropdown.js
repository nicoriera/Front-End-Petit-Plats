const toggleDropdown = (dropdownId) => {
  const dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle("hidden");

  // Recherche de l'élément avec l'attribut data-dropdown-toggle correspondant à dropdownId
  const dropdownToggle = document.querySelector(
    `[data-dropdown-toggle="${dropdownId}"]`
  );

  // Recherche de l'élément chevron à l'intérieur de l'élément dropdownToggle
  const chevron = dropdownToggle.querySelector(".chevron");

  // Inversion de la classe du chevron pour changer son orientation
  chevron.classList.toggle("fa-chevron-up");
  chevron.classList.toggle("fa-chevron-down");
};
