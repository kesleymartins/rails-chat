Rails.application.routes.draw do
 root 'page#home'

  get 'home', to: 'page#home'
  get 'about', to: 'page#about'

  devise_for :users
  devise_scope :user do
    get 'users', to: 'devise/session#new'
  end
end
