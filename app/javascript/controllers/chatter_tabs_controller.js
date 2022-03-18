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

  activateTab(event) {
    if (event.target.classList.contains('is-active')) {
      return
    }

    this.toggleTabs()
    this.toggleContent()
  }

  toggleTabs() {
    this.roomsTabTarget.classList.toggle('is-active')
    this.usersTabTarget.classList.toggle('is-active')
  }

  toggleContent() {
    this.roomsTarget.classList.toggle('is-hidden')
    this.usersTarget.classList.toggle('is-hidden')
  }
}
