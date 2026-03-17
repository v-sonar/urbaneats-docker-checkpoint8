# UrbanEats Docker Checkpoint 8

This project containerizes the UrbanEats microservices application using Docker and Docker Compose.

## Services

The application consists of the following services:

- **web** – Node.js frontend
- **api** – Orders API service
- **worker** – Notification worker
- **db** – PostgreSQL database
- **cache** – Redis
- **queue** – RabbitMQ
- **proxy** – Nginx reverse proxy

## Requirements

- Docker
- Docker Compose

## How to run the project

Make sure Docker and Docker Compose are installed.

Clone the repository and run:

docker compose up -d --build

To check that everything is running:

docker compose ps

## Access the Application

Web interface:
http://localhost

RabbitMQ management dashboard:
http://localhost:15672

## Project Structure

api/ – Orders API service  
web/ – Frontend service  
worker/ – Background worker service  

Each service contains:
- Dockerfile
- application source code
- .dockerignore file
