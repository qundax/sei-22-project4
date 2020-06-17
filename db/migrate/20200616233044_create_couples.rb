class CreateCouples < ActiveRecord::Migration[6.0]
  def change
    create_table :couples do |t|
      t.timestamp :anniversary
      t.references :user1, index: true, foreign_key: true
      t.references :user2, index: true, foreign_key: true

      t.timestamps
    end
  end
end