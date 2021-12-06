class ApplicationController < ActionController::API
	before_action :authorized

	def encode_token(payload)
		# TODO: store this secret in an env variable
		JWT.encode(payload, "squish_all_of_the_bugs!")
	end

	def auth_header
		request.headers['Authorization']
	end

	def decode_token
		if auth_header
			token = auth_header.split(' ')[1]
			begin
				JWT.decode(token, "squish_all_of_the_bugs!")[0]
			rescue => JWT::DecodeError
				nil
			end
		end
	end

	def current_user
		if decode_token
			user_id = decoded_token[0]['user_id']
			@user = User.find_by(id: user_id)
		end
	end

	def logged_in?
		!!current_user
	end

	def authorized
		render json: { message: 'Please log in'}, status: :unauthorized unless logged_in?
	end
end
