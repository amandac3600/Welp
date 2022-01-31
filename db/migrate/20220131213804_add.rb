class Add < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :lat, :decimal
    add_column :businesses, :lng, :decimal
  end
end
