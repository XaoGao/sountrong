class Api::V1::AlbumsController < Api::BaseController
  before_action :authorized, only: %w[create update destroy]
  def index
    @albums = Album.where(singer: params[:singer])
    render json: { albums: AlbumsSerializer.new(@albums) }, status: :ok
  end

  def create
    @album = Album.new album_params
    if @album.save
      render json: { album: AlbumControllerTest.new(@album) }, status: :ok
    else
      render_bad_request 'Ошибка во время сохранения альбома'
    end
  end

  def update
    @album = Album.find_by(id: params[:id])
    if @album.update album_params
      render json: { album: AlbumControllerTest.new(@album) }, status: :ok
    else
      render_bad_request 'Ошибка во время обновления альбома'
    end
  end

  def show
    @album = Album.find_by(id: params[:id])
    if @album.present?
      render json: { album: AlbumSerializer.new(@album) }, status: :ok
    else
      render_bad_request 'Не найден альбом по идентификатору'
    end
  end

  def destroy; end

  def album_params
    params.permit(:title, :description, :year_of_issue, :language, :country, :record_label)
  end
end
