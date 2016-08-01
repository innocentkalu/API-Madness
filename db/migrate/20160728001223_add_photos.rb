class AddPhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :caption
      t.integer :likes
      t.integer :comments
      t.timestamps
    end
  end
end
