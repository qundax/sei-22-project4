class CreateCouples < ActiveRecord::Migration[6.0]
  def change
    create_table :couples do |t|
      t.timestamp :anniversary
      t.integer :user1, index: true, foreign_key: true
      t.integer :user2, index: true, foreign_key: true

      t.timestamps
    end
  end
end