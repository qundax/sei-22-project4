class CreatePhotos < ActiveRecord::Migration[6.0]
  def change
    create_table :photos do |t|
      t.references :couple, null: false, foreign_key: true
      t.text :image_url
      t.text :caption

      t.timestamps
    end
  end
end
