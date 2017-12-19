defmodule IstisareWeb.PageControllerTest do
  use IstisareWeb.ConnCase

  @valid_room_attrs %{ room: %{ name: "Test Room" }}
  @valid_protected_room %{ room: %{ name: "Test Room Protected", password: "12345" }}

  test "POST /create with valid room attrs" do
    req = post(build_conn() |> put_req_header("accept", "application/json"), "/create", @valid_room_attrs)
    assert json_response(req, 201)
  end

  test "POST /create with valid protected room attrs" do
    req = post(build_conn() |> put_req_header("accept", "application/json"), "/create", @valid_protected_room)
    body = json_response(req, 201)
    assert body["is_protected"]
  end

  test "POST /create with valid password" do
    req = post(build_conn() |> put_req_header("accept", "application/json"), "/create", %{room_guard: %{slug: "test-room-protected", "password": "12345"} })
    assert response(req, 200)
  end

  test "POST /create with wrong room" do
    req = post(build_conn() |> put_req_header("accept", "application/json"), "/create", %{room_guard: %{slug: "random-room", "password": "12345"} })
    assert response(req, 404)
  end

  test "POST /create with invalid password" do
    req = post(build_conn() |> put_req_header("accept", "application/json"), "/create", %{room_guard: %{slug: "test-room-protected", "password": "1122"} })
    assert response(req, 401)
  end

  test "GET /:room with valid id" do
    req = get(build_conn(), "/test-room")
    assert response(req, 200)
  end

  test "GET /:room with invalid id" do
    req = get(build_conn(), "/invalid-room")
    assert response(req, 404)
  end
end
