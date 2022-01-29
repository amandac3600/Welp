class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, except: [:index]

  def index
    @reviews = Review.all.where(business_id: params[:business_id])
    render :index
  end

  def show
    puts "==============================="
    p params
    @review = Review.find(params[:id])
    render :show
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 404
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 404
    end
  end

  def destroy
    @review = Review.find(params[:id])
    if @review && @review.destroy
      render :show
    else
      render json: ["Delete was unsuccessful"], status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:id, :rating, :body, :business_id, :user_id)
  end
end
