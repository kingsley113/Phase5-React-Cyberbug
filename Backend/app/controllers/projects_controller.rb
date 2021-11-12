class ProjectsController < ApplicationController
	# Create
	# Read
	# Update
	# Destroy

	private

	def project_params(params)
		params.require(:project).permit(:name, :project_id)
	end
end