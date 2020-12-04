class CommentsController < ApplicationController
  before_action :authorize_request, only: [:create, :destroy] #add in :update later
  before_action :set_comment, only: [:show, :destroy]

  # GET /comments
  def index
    @comments = Comment.all

    render json: @comments
  end

  # GET /comment/1
  def show
    render json: @comment
  end

  # POST /comment
  def create
    @comment = Comment.new(comment_create_params)
    @comment.user = @current_user
    # I won't need to associate restaurant here because the user is already logged in with a restaurant ID association

    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  #  In this iteration (1), I will not allo wusers to edit (like IG)
  # # PATCH/PUT /comment/1
  # def update
  #   if @comment.update(comment_create_params)
  #     render json: @comment
  #   else
  #     render json: @comment.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /posts/1
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    def set_user_comment
      @comment = @current_user.comments.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def comment_params
      params.require(:comment).permit(:content)
    end

    def comment_create_params
      params.require(:comment).permit(:content, :post_id, :user_id)
    end
end
