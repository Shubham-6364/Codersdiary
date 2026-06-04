# 🐳 Docker Deployment Guide (Separate Directory Strategy)

> Deploy the CodersDiary platform using Docker, keeping the deployment configuration completely separate from the application source code.
> Estimated time: **15–20 minutes**

---

## 📋 Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Server Requirements & Setup](#2-server-requirements--setup)
3. [Install Docker & Docker Compose](#3-install-docker--docker-compose)
4. [Directory Structure Setup](#4-directory-structure-setup)
5. [Build and Run with Docker](#5-build-and-run-with-docker)
6. [Set Up Nginx Reverse Proxy (Optional but Recommended)](#6-set-up-nginx-reverse-proxy-optional-but-recommended)
7. [Updating the Application](#7-updating-the-application)
8. [Useful Docker Commands](#8-useful-docker-commands)

---

## 1. Architecture Overview

To keep things clean, we separate the source code from the deployment environment:

- **`/home/ubuntu/codersdiary-platform/`** — Your Git repository / source code.
- **`/home/ubuntu/codersdiary-docker/`** — Your deployment directory (contains `docker-compose.yml`).

When you run `docker-compose up` from the `codersdiary-docker` directory, it will automatically build the image using the source code from the `codersdiary-platform` directory.

---

## 2. Server Requirements & Setup

| Item | Minimum | Recommended |
|------|---------|-------------|
| OS | Ubuntu 22.04 LTS | Ubuntu 24.04 LTS |
| RAM | 1 GB | 2 GB |

### Allow necessary ports through Firewall:

```bash
sudo ufw allow OpenSSH
sudo ufw allow 80
sudo ufw allow 443
sudo ufw --force enable
```

---

## 3. Install Docker & Docker Compose

If Docker isn't installed on your Ubuntu server, install it with the official script:

```bash
# Download and run the Docker installation script
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add your user to the docker group so you don't need 'sudo' for every command
sudo usermod -aG docker ubuntu

# Apply the group change (or simply log out and log back in)
newgrp docker

# Verify installation
docker --version
docker compose version
```

---

## 4. Directory Structure Setup

### 4.1 Clone the Source Code
Make sure your source code is in the main directory:

```bash
cd /home/ubuntu
git clone https://github.com/YOUR_USERNAME/Codersdiary.git codersdiary-platform
```

### 4.2 Create the Docker Deployment Directory

```bash
# Create the separate deployment directory
mkdir -p /home/ubuntu/codersdiary-docker
cd /home/ubuntu/codersdiary-docker
```

### 4.3 Create `docker-compose.yml`

Inside `/home/ubuntu/codersdiary-docker/`, create a file named `docker-compose.yml`:

```bash
nano /home/ubuntu/codersdiary-docker/docker-compose.yml
```

Paste the following configuration:

```yaml
version: '3.8'

services:
  codersdiary:
    container_name: codersdiary_app
    build:
      context: ../codersdiary-platform
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    restart: unless-stopped
    environment:
      - NODE_ENV=production
    healthcheck:
      test: ["CMD", "wget", "-qO-", "http://localhost:3000/"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

> **Note:** The `context: ../codersdiary-platform` tells Docker to look in your source code directory to build the image, while keeping the deployment config isolated here.

---

## 5. Build and Run with Docker

Now that your directories are set up, you can build and launch the application.

```bash
# Ensure you are in the docker deployment directory
cd /home/ubuntu/codersdiary-docker

# Build the image and start the container in detached mode (-d)
docker compose up -d --build
```

### Verify it's running:
```bash
# Check the container status
docker ps

# Check the logs to ensure Next.js started successfully
docker compose logs -f
```

The application is now running inside Docker on port `3000`. You can test it locally on the server:
```bash
curl http://localhost:3000
```

---

## 6. Set Up Nginx Reverse Proxy (Optional but Recommended)

To serve your application on port 80 (HTTP) and 443 (HTTPS) instead of port 3000, use Nginx.

```bash
sudo apt install -y nginx
sudo nano /etc/nginx/sites-available/codersdiary
```

Add the following config (replace `codersdiary.online` with your domain):

```nginx
server {
    listen 80;
    server_name codersdiary.online www.codersdiary.online;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable it:
```bash
sudo ln -s /etc/nginx/sites-available/codersdiary /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

Use `certbot` for SSL:
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d codersdiary.online -d www.codersdiary.online
```

---

## 7. Updating the Application

When you make changes to your source code or pull new updates from GitHub, you need to rebuild the Docker image.

```bash
# 1. Update source code
cd /home/ubuntu/codersdiary-platform
git pull origin main

# 2. Rebuild and restart the container
cd /home/ubuntu/codersdiary-docker
docker compose up -d --build
```
> Docker will automatically build the new image, stop the old container, and start the new one with zero downtime.

---

## 8. Useful Docker Commands

Run these from inside `/home/ubuntu/codersdiary-docker/`:

- **View live logs:** `docker compose logs -f`
- **Stop the app:** `docker compose down`
- **Start the app (without building):** `docker compose up -d`
- **Restart the app:** `docker compose restart`
- **Enter the running container:** `docker exec -it codersdiary_app /bin/sh`
