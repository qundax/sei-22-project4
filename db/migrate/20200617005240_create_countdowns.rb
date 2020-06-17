class CreateCountdowns < ActiveRecord::Migration[6.0]
  def change
    create_table :countdowns do |t|
      t.references :couple, null: false, foreign_key: true
      t.text :name
      t.timestamp :date

      t.timestamps
    end
  end
end
