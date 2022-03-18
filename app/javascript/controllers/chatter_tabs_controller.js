import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['rooms', 'users', 'roomsTab', 'usersTab']

  connect() {
    if (this.usersTabTarget.classList.contains('is-active')) {
      this.roomsTarget.classList.add('is-hidden')
    }

    if (this.roomsTabTarget.classList.contains('is-active')) {
      this.usersTarget.classList.add('is-hidden')
    }
  }
}
