class AddStateToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :state, :string, null:false
  end
end
