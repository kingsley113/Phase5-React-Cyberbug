class BugSerializer < ActiveModel::Serializer
	attributes :id,	:bugId,	:bugTitle,	:bugDescription,	:bugDetails,	:bugTags,	:bugLineNo,	:project_id, :bugPriority,	:bugDueDate,	:bugCompletedDate,	:bugComplete,	:bugStatus, :created_at, :updated_at
end