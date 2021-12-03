class ProjectsController < ApplicationController
	# index
	def index
		projects = Project.all
		render json: projects
	end
	
	# Create
	def create
		project = Project.new(project_params)
		# binding.pry

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
			render_error()
			# TODO: verify this is correct and render plain text message or error satus
		end
	end

	# Update
	def update
		project = set_project()
	# TODO: fill in update method
		# binding.pry

		project.projectTitle = params[:project][:projectTitle]
		project.projectDescription = params[:project][:projectDescription]

		if project.save
			render json: project
		else
			render text: "error", status: :unprocessable_entity
		end
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
		Project.find_by(projectId: project_params[:projectId])
	end

	def project_params
		params.require(:project).permit(:id, :projectId, :projectTitle, :projectDescription)
	end
end