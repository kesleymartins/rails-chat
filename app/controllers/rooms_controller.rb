class RoomsController < ApplicationController
  before_action :authenticate_user!

  def index
    @room = Room.new

    @rooms = Room.all.public_rooms
    @users = User.all.all_except(current_user)
  end

  def show
    @room = Room.new
    @message = Message.new

    @rooms = Room.all.public_rooms
    @users = User.all.all_except(current_user)

    @current_room = Room.find(params[:id])
    @messages = @current_room.messages.order(created_at: :asc)

    render 'index'
  end

  def create
    @room = Room.create(name: params[:room][:name])
  end
end
