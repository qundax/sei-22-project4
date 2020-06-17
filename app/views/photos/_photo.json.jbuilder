json.extract! photo, :id, :couple_id, :image_url, :caption, :created_at, :updated_at
json.url photo_url(photo, format: :json)
