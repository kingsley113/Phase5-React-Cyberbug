class UserSerializer < ActiveModel::Serializer
	attributes :username, :display_name, :first_name, :last_name
end