class Api::UsersController < ApplicationController
	# Create
	def create
		@user = User.create(user_params)

		if @user.valid?
			render json: { user: UserSerializer.new(@user) }, status: :created
		else
			render json: {error: 'error creating user' }, status: :unprocessable_entity
		end
	end
	# Read
	# Update
	# Destroy

	private

	def user_params
		params.require(:user).permit(:username, :password, :first_name, :last_name, :display_name)
	end

end