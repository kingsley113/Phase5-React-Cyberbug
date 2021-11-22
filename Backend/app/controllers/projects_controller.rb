class ProjectsController < ApplicationController
	# Create
	def create
		project = Project.new(project_Params)
		
		if project.save?
			render json: project
			# TODO: create serializer for this json
		else
			render json: status: :unprocessable_entity
		end
	end
	# Read
	def show
		# project = Project.find_by(project_id: project_params[:project_id])
		project = set_project()

		if project
			render json: project
		else
			# render text: "Project not found"
			render_error()
			# TODO: verify this is correct and render plain text message or error satus
		end

	# Update
	def update
		project = set_project()
	# TODO: fill in update method
	end
	# Destroy
	def destroy
		project = set_project()
		if project
			project.delete()
		else
			# render text: "Project not found"
			render_error()
			# TODO: verify this is the correct handling here to render error
		end
	end

	private

	def render_error
		render text: "Project not found"
	end

	def set_project
		Project.find_by(project_id: project_params[:project_id])
	end

	def project_params(params)
		params.require(:project).permit(:name, :project_id)
	end
end