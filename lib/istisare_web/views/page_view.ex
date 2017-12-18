defmodule IstisareWeb.PageView do
  use IstisareWeb, :view
  alias Istisare.{ Room }
  def render("room.json", %{room: room = %Room{}}) do
    %{
       name: room.name,
       slug: room.slug,
       is_protected: room.is_protected
     }
  end
  def render("room_exists.json", %{room: room = %Room{}}) do
    %{
      message: "#{room.name} already exists",
      room: render_one(room, __MODULE__, "room.json", as: :room)
    }
  end
end
