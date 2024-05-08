class DropdownAppliance {
  constructor(data) {
    this._appliance = data.appliance;
  }

  get appliance() {
    console.log(this._appliance);
    return this._appliance;
  }
}
