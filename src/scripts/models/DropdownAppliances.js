export class DropdownAppliances {
  constructor(data) {
    this._appliance = data.appliance;
  }

  get appliance() {
    return this._appliance;
  }
}

export default DropdownAppliances;
