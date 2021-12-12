# require "json"
# require "ibm/watson"
# require "ibm_watson/authenticators"
# require "ibm_watson/natural_language_classifier_v1"
# include IBMWatson

class BugsController < ApplicationController
	# Create
	def create 
		bug = Bug.new(bug_params)
		# binding.pry
		# bug.analyzeDescription
		if bug.save
			render json: bug
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
			# TODO: Serializers???
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
		bug.bugLineNo = params[:bug][:bugLineNo]
		bug.project_id = params[:bug][:project_id]
		bug.bugPriority = params[:bug][:bugPriority]
		bug.bugDueDate = params[:bug][:bugDueDate]
		bug.bugCompletedDate = params[:bug][:bugCompletedDate]
		bug.bugComplete = params[:bug][:bugComplete]
		bug.bugStatus = params[:bug][:bugStatus]

		# bug.analyzeDescription

		if bug.save
			render json: bug
		else
			render json: bug.error, status: :unprocessable_entity
		end
	end
	
	# Destroy
	def destroy
		bug = set_bug()

		if bug
			bug.delete()
			render json: {message: "Bug successfully deleted"}
		else
			render json: {message: "Bug not found"}
		end
	end

	private 

	def set_bug
		Bug.find_by(id: bug_params[:id])
	end

	# def analyzeDescription
	# 	description = self.bugDescription
	# 	binding.pry

	# 	authenticator = IBMWatson:Authenticators::IamAuthenticator.new(
	# 		apikey: "************************"
	# 	)

	# 	natural_language_classifier = IBMWatson::NaturalLanguageClassifierV1.new(authenticator: authenticator)
		
	# 	natural_language_classifier.service_url = "https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/d2506413-bfa5-430c-884a-ef1e2d68ee20"

	# 	classifiers = natural_language_classifier.list_classifiers.result
		
	# 	response = natural_language_understanding.analyze(
	# 		text: description,
	# 		features: {
	# 			concepts: {
	# 				emotion: true,
	# 				sentiment: true,
	# 				limit: 2
	# 			},
	# 		}
	# 	)
	# 	puts JSON.pretty_generate(response.result)
	

	# end

	def bug_params
		params.require(:bug).permit(:id, :bugId, :bugTitle, :bugDescription, :bugDetails, :bugTags, :bugLineNo, :project_id, :bugPriority, :bugDueDate, :bugCompletedDate, :bugComplete, :bugStatus)
	end
end