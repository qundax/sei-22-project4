class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.references :couple, null: false, foreign_key: true
      t.text :name
      t.timestamp :date
      t.text :description
      t.boolean :is_couple_event

      t.timestamps
    end
  end
end