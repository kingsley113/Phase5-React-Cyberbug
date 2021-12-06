class ApplicationController < ActionController::API
	def encode_token(payload)
		JWT.encode(payload, "squish_all_of_the_bugs!")
	end

	def decode_token(token)
		JWT.decode(token, "squish_all_of_the_bugs!")[0]
	end
end
