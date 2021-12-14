Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

	# TODO: Update these routes to something that makes more sense and specific, add namespace?
	
	namespace :api do
		resources :bugs
		resources :projects
		# resources :tags
		

		resources :users, only: [:create]
		post '/login', to: 'auth#create'
		get '/profile', to: 'users#profile'
	end

end
