class BugsController < ApplicationController
	# Create
	# Read
	# Update
	# Destroy

	private 

	def bug_params(params)
		params.require(:bug).permit(:title, :description, :details, :user_id, :project_id, :bug_id, :priorirty, :due_date, :completed_date, :complete)
	end
end