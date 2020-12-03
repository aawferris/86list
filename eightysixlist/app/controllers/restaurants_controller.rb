class RestaurantsController < ApplicationController
  before_action :set_restaurant, only: [:show, :add_post]
  before_action :authorize_request, only: [:create, :update, :destroy]
  # before_action :set_user_post, only: [:update, :destroy]

  # GET /restaurants
  def index
    @restaurants = Restaurant.all

    render json: @restaurants
  end

  # GET /restaurants/1
  def show
    render json: @restaurant
  end

  # POST /restaurant
  def create
    @restaurant = Restaurant.new(restaurant_params)
    # @restaurant.user = @current_user

    if @restaurant.save
      render json: @restaurant, status: :created
    else
      render json: @restaurant.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_restaurant
      @restaurant = Restaurant.find(params[:id])
    end

    def set_user_post
      @post = @current_user.posts.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def restaurant_params
      params.require(:restaurant).permit(:name, :city, :state)
    end
end
