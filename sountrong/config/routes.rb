Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'signin', to: 'session#create'
      post 'signup', to: 'registration#create'
      put 'edit_profile', to: 'registration#update'
    end
  end
end
