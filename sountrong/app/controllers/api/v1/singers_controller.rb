class Api::V1::SingersController < ApplicationController
  before_action :authorized, only: %w[create update destroy]

  def index
    @singers = Singer.all_active
    render json: { singers: SingersSerializer.new(@singers) }, status: :ok
  end

  def show
    @singer = Singer.find_by(id: params[:id])
    if @singer.present?
      render json: { singer: SingerSerializer.new(@singer) }, status: :ok
    else
      render json: { error: 'Не найдена группа' }, status: :bad_request
    end
  end

  def create
    @singer = Singer.new singer_params
    if @singer.save
      render json: { singer: SingerSerializer.new(@singer) }, status: :ok
    else
      render json: { error: 'Ошибка во время сохранения группы' }, status: :bad_request
    end
  end

  def update
    @singer = Singer.find_by(id: params[:id])
    if @singer.update singer_params
      render json: { singer: SingerSerializer.new(@singer) }, status: :ok
    else
      render json: { error: 'Ошибка во время обновления группы' }, status: :bad_request
    end
  end

  def destroy
    @singer = Singer.find_by(id: params[:id])
    if @singer.update(lock: true)
      render json: {}, status: :no_content
    else
      render json: { error: 'Ошибка во время обновления группы' }, status: :bad_request
    end
  end

  private

  def singer_params
    params.require(:singer).permit(:name, :description, :carier_start, :end_of_carier, :main_image)
  end
end
