# terraform/main.tf
provider "aws" {
  region = "us-east-1"
}

# Create ECS Cluster
resource "aws_ecs_cluster" "cafe_cluster" {
  name = "cafe-cluster"
}

# ECS Task Definition (uses your ECR image)
resource "aws_ecs_task_definition" "cafe_task" {
  family                   = "cafe-task"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "256"
  memory                   = "512"
  execution_role_arn       = aws_iam_role.ecs_execution_role.arn
  container_definitions    = jsonencode([{
    name      = "cafe-r",
    image     = "<YOUR_ACCOUNT_ID>.dkr.ecr.us-east-1.amazonaws.com/cafe-r:latest",  # From your ECR
    portMappings = [{
      containerPort = 80,
      hostPort      = 80
    }]
  }])
}

# ECS Service
resource "aws_ecs_service" "cafe_service" {
  name            = "cafe-service"
  cluster         = aws_ecs_cluster.cafe_cluster.id
  task_definition = aws_ecs_task_definition.cafe_task.arn
  launch_type     = "FARGATE"
  desired_count   = 1

  network_configuration {
    subnets          = ["subnet-0548b247949122532"]  # From your screenshot
    security_groups  = ["sg-00ee5d4b416dbcb0e"]      # Your instance's SG
    assign_public_ip = true
  }
}

# IAM Role for ECS
resource "aws_iam_role" "ecs_execution_role" {
  name = "ecs_execution_role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Action    = "sts:AssumeRole",
      Effect    = "Allow",
      Principal = { Service = "ecs-tasks.amazonaws.com" }
    }]
  })
}

# Attach ECS policy to the role
resource "aws_iam_role_policy_attachment" "ecs_execution_policy" {
  role       = aws_iam_role.ecs_execution_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}