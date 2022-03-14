class RoomsController < ApplicationController
  def index
    @rooms = Room.all.public_rooms
    @users = User.all.all_except(current_user)
  end
end
