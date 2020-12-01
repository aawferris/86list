class UsersController < ApplicationController
  before_action :authorize_request, except: :create
    # GET /users
    def index
      @users = User.all

      render json: @users
    end

    # GET /users/1
    def show
      render json: @user
    end

    # POST /users
    def create
      @user = User.new(user_create_params)
  
      if @user.save
        @token = encode({id: @user.id})
        render json: {
          user: @user.attributes.except("password_digest"),
          token: @token
          }, status: :created
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end
  
    private
      def set_restaurant
        @restaurant = Restaurant.find(params[:id])
      end
      # Only allow a trusted parameter "white list" through.
      def user_params
        params.require(:user).permit(:username, :email, :password)
      end

      def user_create_params
        params.require(:user).permit(:username, :email, :password, :age, :restaurant, :phone, :name, :restaurant_id)
      end
end
