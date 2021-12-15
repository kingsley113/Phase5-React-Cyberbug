class ProjectSerializer < ActiveModel::Serializer
	attributes :id, :projectId, :projectTitle, :projectDescription, :user_id, :created_at, :updated_at
end