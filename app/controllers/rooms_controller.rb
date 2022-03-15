class RoomsController < ApplicationController
  def index
    @room = Room.new

    @rooms = Room.all.public_rooms
    @users = User.all.all_except(current_user)
  end

  def create
    @room = Room.create(name: params[:room][:name])
  end
end
