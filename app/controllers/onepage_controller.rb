class OnepageController < ApplicationController
  before_action :authenticate_user!, except: [:landing]

  def landing
  end

  def create_couple
  end

  def homepage
  end

  def calendar
  end

  def countdown
  end

  def photos
  end
end