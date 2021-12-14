class Api::UsersController < ApplicationController
	skip_before_action :authorized, only: [:create]
	
	# Create
	def create
		@user = User.create(user_params)

		if @user.valid?
			@token = encode_token({user_id: @user.id})
			render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
		else
			render json: {error: 'error creating user' }, status: :unprocessable_entity
		end
	end
	# Read
	def profile
		render json: {user: UserSerializer.new(current_user)}, status: :accepted
	end

	private

	def user_params
		params.require(:user).permit(:username, :password, :first_name, :last_name, :display_name)
	end

end