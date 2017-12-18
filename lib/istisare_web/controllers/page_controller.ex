defmodule IstisareWeb.PageController do
  import Comeonin.Bcrypt
  use IstisareWeb, :controller

  plug :scrub_params, "room" when action in [:create]

  alias Istisare.{ Room, Rooms }
  def index(conn, _params) do
    render conn, "index.html"
  end

  def show(conn, %{"slug": slug}) do
    case Rooms.get_room(slug) do
      {:ok, room} ->
        conn
        |> render "show.html", room: room
      {:error, _} ->
        conn
        |> render(Istisare.ErrorView, "404.html")
    end
  end

  defp create_room(room = %Room{}, conn) do
    case Rooms.create_room(room) do
      {:ok, value} ->
        conn
        |> put_status(:created)
        |> render "room.json", room: value
      {:error, _} ->
        conn
        |> put_status(:im_used) #accepted
        render "room_exists.json", room: room
    end
  end
  def create(conn, %{"room" => %{"name" => name, "is_protected" => true, "password" => password} = room_params}) when name != nil and password != nil  do
    %Room{name: name, slug: Slugger.slugify(name), is_protected: true, password: Comeonin.Bcrypt.hashpwsalt(password)}
    |> create_room(conn)
  end
  def create(conn, %{"room" => %{"name" => name} = room_params}) when name != nil do
    %Room{name: name, slug: Slugger.slugify(name)}
    |> create_room(conn)
  end

  def create(conn, %{"room_guard" => %{"slug" => slug, "password" => password}}) do
    case Rooms.get_room(slug) do
      {:ok, room} ->
        case Comeonin.Bcrypt.checkpw(password, room.password) do
          true ->
            conn
            |> put_status(:no_content)
          _ ->
            conn
            |> put_status(:not_found)
        end
      {:error, _} ->
        conn
        |> put_status(:not_found)
    end
  end

  def create(conn, _) do
    conn
    |> put_status(:unprocessable_entity)
    |> render(Istisare.ErrorView, "error.json", %{message: "Room name is required"})
  end



end
