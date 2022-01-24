class Api::BusinessesController < ApplicationController
  def index 
    @businesses = Business.all
    render :index
  end

  def show
    @business = Business.find(params[:id])
    @reviews = @business.reviews
    if @business
      render :show
    else
      render json: @business.errors.full_messages, status: 404
    end
  end

  private

  def business_params
    params.require(:business).permit(:name, :address, :city,  :zip_code, :phone_number, :website, :open, :close, :category, :price, :photos: [])
  end
end
