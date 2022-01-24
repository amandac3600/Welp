class RemovePhotourlFromBusinesses < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :photo_url
  end
end
