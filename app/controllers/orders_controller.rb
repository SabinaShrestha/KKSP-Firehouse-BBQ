class OrdersController < ApplicationController
	before_action :set_order, only: [:show, :update, :destroy]

  def index
  	render json: Order.all
  end

  def show
  	render json: @order
  end

  def create
  	
  end

  def update
  	@order.items << Item.find(params[:item_id])
  end

  def destroy
  end

  private
  	def order_params
  		params.require(:order).permit(:item)
  	end

  	def set_order
  		@order = Order.find(params[:id])
  	end

end
