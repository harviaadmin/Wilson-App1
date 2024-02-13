require "test_helper"

class OpportunitiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @opportunity = opportunities(:one)
  end

  test "should get index" do
    get opportunities_url, as: :json
    assert_response :success
  end

  test "should create opportunity" do
    assert_difference("Opportunity.count") do
      post opportunities_url, params: { opportunity: { doctor_id: @opportunity.doctor_id, patient_id: @opportunity.patient_id, procedure_name: @opportunity.procedure_name, stage_history: @opportunity.stage_history } }, as: :json
    end

    assert_response :created
  end

  test "should show opportunity" do
    get opportunity_url(@opportunity), as: :json
    assert_response :success
  end

  test "should update opportunity" do
    patch opportunity_url(@opportunity), params: { opportunity: { doctor_id: @opportunity.doctor_id, patient_id: @opportunity.patient_id, procedure_name: @opportunity.procedure_name, stage_history: @opportunity.stage_history } }, as: :json
    assert_response :success
  end

  test "should destroy opportunity" do
    assert_difference("Opportunity.count", -1) do
      delete opportunity_url(@opportunity), as: :json
    end

    assert_response :no_content
  end
end
