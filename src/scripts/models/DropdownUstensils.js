class DropdownUstensils {
  constructor(data) {
    this._ustensils = data.ustensils;
    this._ustensil = data.ustensil;
  }

  get ustensils() {
    return this._ustensils;
  }

  get ustensil() {
    return this._ustensils.map((ustensil) => ustensil);
  }
}
