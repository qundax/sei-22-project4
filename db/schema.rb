# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_17_011759) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "countdowns", force: :cascade do |t|
    t.bigint "couple_id", null: false
    t.text "name"
    t.datetime "date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["couple_id"], name: "index_countdowns_on_couple_id"
  end

  create_table "couples", force: :cascade do |t|
    t.datetime "anniversary"
    t.bigint "user1_id"
    t.bigint "user2_id"
    t.integer "partner1"
    t.integer "partner2"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user1_id"], name: "index_couples_on_user1_id"
    t.index ["user2_id"], name: "index_couples_on_user2_id"
  end

  create_table "events", force: :cascade do |t|
    t.bigint "couple_id", null: false
    t.text "name"
    t.datetime "date"
    t.text "description"
    t.boolean "is_couple_event"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["couple_id"], name: "index_events_on_couple_id"
  end

  create_table "photos", force: :cascade do |t|
    t.bigint "couple_id", null: false
    t.text "image_url"
    t.text "caption"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["couple_id"], name: "index_photos_on_couple_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "name"
    t.datetime "birthday"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "countdowns", "couples"
  add_foreign_key "events", "couples"
  add_foreign_key "photos", "couples"
end
