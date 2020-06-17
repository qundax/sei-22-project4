json.extract! event, :id, :couple_id, :name, :date, :description, :is_couple_event, :created_at, :updated_at
json.url event_url(event, format: :json)
