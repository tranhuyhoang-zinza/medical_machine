class PagesController < ApplicationController
  def home
    @top_categories = Category.top_categories
    @blogs = Blog.new_articles_for_home
    @subcriber = Subcriber.new
    @sliders = SliderCatalog.where(image_type: "slider")
    @catalogs = SliderCatalog.where(image_type: "catalog").limit 2
  end
end