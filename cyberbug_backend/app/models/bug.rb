class Bug < ApplicationRecord
	has_many :tags
	belongs_to :project
	belongs_to :user, optional: true
	# TODO: these optional arguments will be required in the end product
end
