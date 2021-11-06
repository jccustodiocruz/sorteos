import View from "./View.js";

export default class extends View {
  constructor() {
    super();
    this.setTitle("Sorteos");
  }

  async getHtml() {
    return`
    <h1>Sorteos</h1>
    `
  }
}
