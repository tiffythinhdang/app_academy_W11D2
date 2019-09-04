require 'test_helper'

class Api::PokemonsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_pokemons_index_url
    assert_response :success
  end

  test "should get create" do
    get api_pokemons_create_url
    assert_response :success
  end

  test "should get show" do
    get api_pokemons_show_url
    assert_response :success
  end

end
