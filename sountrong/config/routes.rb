Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'signin', to: 'session#create'
      post 'signup', to: 'registration#create'
    end
  end
end
