require "test_helper"

class PageControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get page_home_url
    assert_response :success
  end

  test "should get about" do
    get page_about_url
    assert_response :success
  end
end
