class UsersController < ApplicationController
	# Create
	# Read
	# Update
	# Destroy

	private

	def user_params(params)
		params.require(:user).permit(:username, :password, :first_name, :last_name, :display_name)
	end

end