class CreateCouples < ActiveRecord::Migration[6.0]
  def change
    create_table :couples do |t|
      t.timestamp :anniversary
      t.references :user1
      t.references :user2
      t.integer :partner1
      t.integer :partner2

      t.timestamps
    end
  end
end