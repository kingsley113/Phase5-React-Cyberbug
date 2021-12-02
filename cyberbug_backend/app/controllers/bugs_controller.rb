class BugsController < ApplicationController
	# Create
	def create 
		bug = Bug.new(bug_params)

		if bug.save
			render json: bug
			# TODO: this definitely needs a serializer
		else
			render text: "error", status: :unprocessable_entity
		end
	end

	# Read
	def index
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

	def update
		bug = set_bug()


		bug.bugId = params[:bug][:bugId]
		bug.bugTitle = params[:bug][:bugTitle]
		bug.bugDescription = params[:bug][:bugDescription]
		bug.bugDetails = params[:bug][:bugDetails]
		bug.bugTags = params[:bug][:bugTags]
		bug.bugTeamMember = params[:bug][:bugTeamMember]
		bug.bugLineNo = params[:bug][:bugLineNo]
		bug.project_id = params[:bug][:project_id]
		bug.bugPriority = params[:bug][:bugPriority]
		bug.bugDueDate = params[:bug][:bugDueDate]
		bug.bugCompletedDate = params[:bug][:bugCompletedDate]
		bug.bugComplete = params[:bug][:bugComplete]
		bug.bugStatus = params[:bug][:bugStatus]

		if bug.save
			render json: bug
		else
			render json: bug.error, status: :unprocessable_entity
		end
	end
	
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

	def bug_params
		params.require(:bug).permit(:id, :bugId, :bugTitle, :bugDescription, :bugDetails, :bugTags, :bugTeamMember, :bugLineNo, :project_id, :bugPriority, :bugDueDate, :bugCompletedDate, :bugComplete, :bugStatus)
	end
end