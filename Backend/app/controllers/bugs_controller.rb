class BugsController < ApplicationController
	# Create
	def create 
		bug = Bug.new(bug_params)
		binding.pry

		if bug.save?
			render json: bug
			# TODO: this definitely needs a serializer
		else
			render text: "error", status: :unprocessable_entity
		end
	end

	# Read
	def all
		render json: Bug.all
	end
	
	def show
		bug = set_bug()

		if bug
			render json: bug
		else 
			render text: "Bug not found"
		end
	end

	# Update TODO:
	
	# Destroy
	def delete
		bug = set_bug()

		if bug
			bug.delete()
			render text: "Bug successfully deleted"
		else
			render text: "Bug not found"
		end
	end

	private 

	def set_bug
		Bug.find_by(id: bug_params[:id])
	end

	def bug_params(params)
		params.require(:bug).permit(:id, :title, :description, :details, :user_id, :project_id, :bug_id, :priorirty, :due_date, :completed_date, :complete)
	end
end