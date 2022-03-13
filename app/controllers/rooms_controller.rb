class RoomsController < ApplicationController
  def index
    @rooms = Room.all.public_rooms
  end
end
