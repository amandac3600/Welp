class ChangeHoursToString < ActiveRecord::Migration[5.2]
  def change
    change_column :businesses, :open, :string 
    change_column :businesses, :close, :string
  end
end
