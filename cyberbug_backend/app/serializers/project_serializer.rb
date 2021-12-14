class ProjectSerializer < ActiveModel::Serializer
	attributes :id, :projectId, :projectTitle, :projectDescription, :user_id
end