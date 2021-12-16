class Api::ProjectsController < ApplicationController
	# index
	def index
		# users_projects = Project.select { |proj| proj.user == current_user}
		user_projects = current_user.projects
		render json: user_projects
	end
	
	# Create
	def create
		project = Project.new(project_params)

		if project.save
			render json: {project: ProjectSerializer.new(project)}
		else
			render text: "error", status: :unprocessable_entity
		end
	end
	
	# Read
	def show
		project = set_project()

		if project
			render json: {project: ProjectSerializer.new(project)}
		else
			render json: {error: "error loading project"}, status: :unprocessable_entity
		end
	end

	# Update
	def update
		project = set_project()

		project.projectTitle = params[:project][:projectTitle]
		project.projectDescription = params[:project][:projectDescription]

		if project.save
			render json: {project: ProjectSerializer.new(project)}
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
		params.require(:project).permit(:id, :projectId, :projectTitle, :projectDescription, :user_id)
	end
end