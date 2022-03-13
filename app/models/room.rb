class Room < ApplicationRecord
  validate_uniqueness_of :name
end
