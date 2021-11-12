class TagsController < ApplicationController
	# Create
	# Read
	# Update?
	# Destroy?

	private

	def tag_params(params)
		params.require(:tag).permit(:name)
	end
end