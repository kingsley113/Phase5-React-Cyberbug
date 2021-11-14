class TagsController < ApplicationController
	# Create
	def new
		tag = Tag.new(tag_params)

		if tag.save?
			render json: tag
			# TODO:serializer?
		else
			render text: "Unable to create tag", status: :unprocessable_entity
		end
	end 

	# Read

	def all 
		tags = Tag.all
		render json: tags
	end
	
	def show
		tag = Tag.find_by(id: tag_params[:id])

		if tag
			render json: tag
		else
			render text: "Tag not found"
		end
	end

	# Update?
	# Destroy?

	private

	def tag_params(params)
		params.require(:tag).permit(:id, :name)
	end
end