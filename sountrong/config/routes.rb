Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'signin', to: 'session#create'
      post 'signup', to: 'registration#create'
      put 'edit_profile', to: 'registration#update'

      resources :singers, except: %w[new edit]
      resources :albums, except: %w[new edit]
    end
  end

  get '*path', to: 'pages#index', via: :all, constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }
end
