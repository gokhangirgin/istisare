defmodule Istisare.Rooms do
  alias Istisare.{ Room }

  def create_room(room = %Room{slug: slug}) do
    ConCache.insert_new(:room, slug, room)
  end

  def get_room(slug) do
    ConCache.get(:room, slug)
  end
end
