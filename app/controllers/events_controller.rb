class EventsController < ApplicationController
  before_action :set_event, only: [:show, :edit, :update, :destroy]

  # GET /events
  # GET /events.json
  def index
    @events = Event.where(couple: Couple.where(user1: current_user).or(Couple.where(user2: current_user)).first)
  end

  # GET /events/1
  # GET /events/1.json
  def show
  end

  # GET /events/new
  def new
    @event = Event.new
  end

  # GET /events/1/edit
  def edit
  end

  # POST /events
  # POST /events.json
  def create
    event_date = DateTime.new(event_params["date(1i)"].to_i,event_params["date(2i)"].to_i,event_params["date(3i)"].to_i,event_params["date(4i)"].to_i,event_params["date(5i)"].to_i,0)

    @event = Event.new({
      couple: Couple.where(user1: current_user).or(Couple.where(user2: current_user)).first,
      name: event_params[:name],
      date: event_date,
      description: event_params[:description],
      is_couple_event: event_params[:is_couple_event]
    })

    respond_to do |format|
      if @event.save
        format.html { redirect_to '/calendar' }
      else
        format.html { render :new }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /events/1
  # PATCH/PUT /events/1.json
  def update
    respond_to do |format|
      if @event.update(event_params)
        format.html { redirect_to @event, notice: 'Event was successfully updated.' }
        format.json { render :show, status: :ok, location: @event }
      else
        format.html { render :edit }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /events/1
  # DELETE /events/1.json
  def destroy
    @event.destroy
    respond_to do |format|
      format.html { redirect_to events_url, notice: 'Event was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def event_params
      params.require(:event).permit(:name, :date, :description, :is_couple_event)
    end
end