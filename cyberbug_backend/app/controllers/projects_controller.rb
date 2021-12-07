class ProjectsController < ApplicationController
	# index
	def index
		projects = Project.all
		render json: projects
	end
	
	# Create
	def create
		project = Project.new(project_params)
		# TODO: assign project to current user, consider switching project model to 'belongs_to'

		if project.save
			render json: project
			# TODO: create serializer 
		else
			render text: "error", status: :unprocessable_entity
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
			render json: {error: "error loading project"}, status: :unprocessable_entity
		end
	end

	# Update
	def update
		project = set_project()

		project.projectTitle = params[:project][:projectTitle]
		project.projectDescription = params[:project][:projectDescription]

		if project.save
			render json: project
		else
			render json: {error: "error updating project"}, status: :unprocessable_entity
		end
	end
	
	# Destroy
	def destroy
		project = set_project()

		if project
			project.delete()
			render json: {message: "project successfully deleted"}
		else
			render json: {message: "Project not found"}
		end
	end

	private

	def render_error
		render text: "Project not found"
	end

	def set_project
		Project.find_by(projectId: project_params[:projectId])
	end

	def project_params
		params.require(:project).permit(:id, :projectId, :projectTitle, :projectDescription)
	end
end