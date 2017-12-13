defmodule IstisareWeb.PageController do
  use IstisareWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
