defmodule IstisareWeb.PageController do
  import Comeonin.Bcrypt
  use IstisareWeb, :controller

  alias Istisare.{ Room, Rooms }
  def index(conn, _params) do
    render conn, "index.html"
  end

  def show(conn, %{"slug" => slug}) do
    case Rooms.get_room(slug) do
      room = %Room{} ->
        conn
        |> render "show.html", room: room
      _ ->
        conn
        |> render(IstisareWeb.ErrorView, "404.html")
    end
  end

  defp create_room(room = %Room{}, conn) do
    case Rooms.create_room(room) do
      :ok ->
        conn
        |> put_status(:created)
        |> render("room.json", room: Rooms.get_room(room.slug))
      {:error, _} ->
        conn
        |> put_status(:im_used) #accepted
        |> render("room_exists.json", room: Rooms.get_room(room.slug))
    end
  end
  def create(conn, %{"room" => %{"name" => name, "password" => password} = room_params}) when name != nil and password != nil  do
    %Room{name: name, slug: Slugger.slugify_downcase(name), is_protected: true, password: Comeonin.Bcrypt.hashpwsalt(password)}
    |> create_room(conn)
  end
  def create(conn, %{"room" => %{"name" => name} = room_params}) when name != nil do

    %Room{name: name, slug: Slugger.slugify_downcase(name)}
    |> create_room(conn)
  end

  def create(conn, %{"room_guard" => %{"slug" => slug, "password" => password}}) do
    case Rooms.get_room(slug) do
      room = %Room{} ->
        case Comeonin.Bcrypt.checkpw(password, room.password) do
          true ->
            send_resp(conn, :ok, "")
          _ ->
            send_resp(conn, :unauthorized, "")
        end
       _ ->
        send_resp(conn, :not_found, "")
    end
  end

  def create(conn, _) do
    conn
    |> put_status(:unprocessable_entity)
    |> render(IstisareWeb.ErrorView, "error.json", %{message: "Room name is required"})
  end



end
