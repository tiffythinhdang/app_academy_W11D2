class Api::PokemonsController < ApplicationController
  def index
    @pokemons = Pokemon.all
  end

  def create
    
  end

  def show
    @poke = Pokemon.find(params[:id])
  end
end
