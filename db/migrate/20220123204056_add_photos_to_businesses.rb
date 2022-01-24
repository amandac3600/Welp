class AddPhotosToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :photo_url, :string
  end
end
