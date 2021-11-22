class Bug < ApplicationRecord
	has_many :tags
	belongs_to :project
	belongs_to :user
end
