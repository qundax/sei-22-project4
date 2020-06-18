require 'date'

class CouplesController < ApplicationController
  before_action :set_couple, only: [:show, :edit, :update, :destroy]

  # GET /couples
  # GET /couples.json
  def index
    @couples = Couple.all
  end

  # GET /couples/1
  # GET /couples/1.json
  def show
  end

  # GET /couples/new
  def new
    @couple = Couple.new
  end

  # GET /couples/1/edit
  def edit
  end

  # POST /couples
  # POST /couples.json
  def create
    anniversary_date = DateTime.new(couple_params["anniversary(1i)"].to_i,couple_params["anniversary(2i)"].to_i,couple_params["anniversary(3i)"].to_i,couple_params["anniversary(4i)"].to_i,couple_params["anniversary(5i)"].to_i,0)
    @couple = Couple.new({
      anniversary: anniversary_date,
      user1: current_user,
      user2: User.where(email: couple_params[:partner_email]).first,
      partner1: current_user.id,
      partner2: User.where(email: couple_params[:partner_email]).first.id,
    })

    respond_to do |format|
      if @couple.save
        format.html { redirect_to @couple, notice: 'Couple was successfully created.' }
        format.json { render :show, status: :created, location: @couple }
      else
        format.html { render :new }
        format.json { render json: @couple.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /couples/1
  # PATCH/PUT /couples/1.json
  def update
    respond_to do |format|
      if @couple.update(couple_params)
        format.html { redirect_to @couple, notice: 'Couple was successfully updated.' }
        format.json { render :show, status: :ok, location: @couple }
      else
        format.html { render :edit }
        format.json { render json: @couple.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /couples/1
  # DELETE /couples/1.json
  def destroy
    @couple.destroy
    respond_to do |format|
      format.html { redirect_to couples_url, notice: 'Couple was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_couple
      @couple = Couple.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def couple_params
      params.require(:couple).permit(:anniversary, :partner_email)
    end
end