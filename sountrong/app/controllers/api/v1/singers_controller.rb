# frozen_string_literal: true

# SingersController
class Api::V1::SingersController < Api::BaseController
  before_action :authorized, only: %w[create update destroy]

  def index
    @singers = Singer.all_active.with_attached_main_image
    render json: { singers: SingersSerializer.new(@singers) }, status: :ok
  end

  def show
    @singer = Singer.find_by(id: params[:id])
    if @singer.present?
      render json: { singer: SingerSerializer.new(@singer) }, status: :ok
    else
      render_bad_request 'Не найдена группа'
    end
  end

  def create
    @singer = Singer.new singer_params
    if @singer.save
      render json: { singer: SingerSerializer.new(@singer) }, status: :ok
    else
      render_bad_request 'Ошибка во время сохранения группы'
    end
  end

  def update
    @singer = Singer.find_by(id: params[:id])
    if @singer.update singer_params
      render json: { singer: SingerSerializer.new(@singer) }, status: :ok
    else
      render_bad_request 'Ошибка во время обновления группы'
    end
  end

  def destroy
    @singer = Singer.find_by(id: params[:id])
    if @singer.update(lock: true)
      render_no_content
    else
      render_bad_request 'Ошибка во время обновления группы'
    end
  end

  private

  def singer_params
    params.permit(:name, :description, :carier_start, :end_of_carier, :main_image)
  end
end
