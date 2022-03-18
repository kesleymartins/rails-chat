import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["deleteButton"]

  removeFlashMessage(event) {
    event.preventDefault()
    this.deleteButtonTarget.parentNode.removeChild(this.deleteButtonTarget)
  }
}
