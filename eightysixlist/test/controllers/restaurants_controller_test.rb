require 'test_helper'

class RestaurantsControllerTest < ActionDispatch::IntegrationTest
  test "should get Users" do
    get restaurants_Users_url
    assert_response :success
  end

  test "should get Posts" do
    get restaurants_Posts_url
    assert_response :success
  end

end
