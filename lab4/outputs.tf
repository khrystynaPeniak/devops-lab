output "invoke_url" {
  value = "${aws_api_gateway_rest_api.lambda_api.execution_arn}/prod/greet"
}

output "api_url" {
  value = "https://${aws_api_gateway_rest_api.lambda_api.id}.execute-api.${var.aws_region}.amazonaws.com/prod/greet"
}
