function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  const toggleButton = document.getElementById(`${dropdownId}-toggle`);

  if (dropdown.classList.contains("hidden")) {
    dropdown.classList.remove("hidden");
    toggleButton.setAttribute("aria-expanded", "true");
  } else {
    dropdown.classList.add("hidden");
    toggleButton.setAttribute("aria-expanded", "false");
  }
}

// Ferme le dropdown si on clique en dehors
document.addEventListener("click", function (event) {
  const dropdownIds = [
    "dropdown-ingredients",
    "dropdown-appliances",
    "dropdown-ustensils",
  ];

  dropdownIds.forEach((dropdownId) => {
    const toggleButton = document.getElementById(`${dropdownId}-toggle`);
    const dropdown = document.getElementById(dropdownId);
    if (
      !toggleButton.contains(event.target) &&
      !dropdown.contains(event.target)
    ) {
      dropdown.classList.add("hidden");
      toggleButton.setAttribute("aria-expanded", "false");
    }
  });
});
