defmodule Istisare.Application do
  use Application

  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  def start(_type, _args) do
    import Supervisor.Spec

    # Define workers and child supervisors to be supervised
    children = [
      # Start the endpoint when the application starts
      supervisor(IstisareWeb.Endpoint, []),
      supervisor(IstisareWeb.Presence, []),
      # Start your own worker by calling: Istisare.Worker.start_link(arg1, arg2, arg3)
      # worker(Istisare.Worker, [arg1, arg2, arg3]),
      #max 26 hours
      worker(ConCache, [[ttl_check: :timer.hours(1), ttl: :timer.hours(24)], [name: :room]])
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Istisare.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    IstisareWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
