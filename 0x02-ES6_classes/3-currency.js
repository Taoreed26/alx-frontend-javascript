export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // this gets what i need
  get code() { return this._code; }

  get name() { return this._name; }

  // setters
  set code(code) { this._code = code; }

  set name(name) { this._name = name; }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
