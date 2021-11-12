class User < ApplicationRecord
	has_many: :projects
	has_many: :bugs, through: :projects
	
end
