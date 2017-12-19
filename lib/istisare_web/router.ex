defmodule IstisareWeb.Router do
  use IstisareWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", IstisareWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    get "/:slug", PageController, :show
  end

  scope "/", IstisareWeb do
    pipe_through :api
    post "/create", PageController, :create
    put "/create", PageController, :create
  end

  # Other scopes may use custom stacks.
  # scope "/api", IstisareWeb do
  #   pipe_through :api
  # end
end
