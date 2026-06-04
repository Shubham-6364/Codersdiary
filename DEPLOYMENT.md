# 🚀 CodersDiary — Complete Deployment Guide

> Deploy the CodersDiary portfolio + course platform from scratch on a fresh Ubuntu server.
> Estimated time: **20–30 minutes**

---

## 📋 Table of Contents

1. [Server Requirements](#1-server-requirements)
2. [Initial Server Setup](#2-initial-server-setup)
3. [Install Node.js 22](#3-install-nodejs-22)
4. [Clone / Upload the Project](#4-clone--upload-the-project)
5. [Install Dependencies & Build](#5-install-dependencies--build)
6. [Run with PM2 (Process Manager)](#6-run-with-pm2-process-manager)
7. [Set Up Nginx Reverse Proxy](#7-set-up-nginx-reverse-proxy)
8. [Enable HTTPS with SSL (Let's Encrypt)](#8-enable-https-with-ssl-lets-encrypt)
9. [Configure DNS](#9-configure-dns)
10. [Update Stripe Payment Links](#10-update-stripe-payment-links)
11. [Useful PM2 Commands](#11-useful-pm2-commands)
12. [Troubleshooting](#12-troubleshooting)

---

## 1. Server Requirements

| Item | Minimum | Recommended |
|------|---------|-------------|
| OS | Ubuntu 22.04 LTS | Ubuntu 24.04 LTS |
| RAM | 1 GB | 2 GB |
| CPU | 1 vCPU | 2 vCPU |
| Disk | 10 GB | 20 GB |
| Open Ports | 22, 80, 443 | 22, 80, 443 |

> **Tip:** A DigitalOcean Droplet ($6/mo), AWS EC2 t3.micro, or any VPS works perfectly.

---

## 2. Initial Server Setup

### 2.1 — Connect to your server

```bash
ssh ubuntu@YOUR_SERVER_IP
# or if you have a .pem key:
ssh -i ~/.ssh/your-key.pem ubuntu@YOUR_SERVER_IP
```

### 2.2 — Update system packages

```bash
sudo apt-get update && sudo apt-get upgrade -y
```

### 2.3 — Install essential tools

```bash
sudo apt-get install -y curl git ufw
```

### 2.4 — Configure firewall

```bash
sudo ufw allow OpenSSH
sudo ufw allow 80
sudo ufw allow 443
sudo ufw --force enable
sudo ufw status
```

Expected output:
```
Status: active
To                  Action    From
--                  ------    ----
OpenSSH             ALLOW     Anywhere
80/tcp              ALLOW     Anywhere
443/tcp             ALLOW     Anywhere
```

---

## 3. Install Node.js 22

Node.js 22 is required (Next.js 15 needs Node >= 18).

```bash
# Add NodeSource repository
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -

# Install Node.js
sudo apt-get install -y nodejs

# Verify installation
node --version   # should show v22.x.x
npm --version    # should show 10.x.x
```

---

## 4. Clone / Upload the Project

### Option A — Copy from your existing server (recommended)

On your **local machine or old server**, run:

```bash
# Create a compressed archive of the project (excluding node_modules and .next)
tar --exclude='./node_modules' --exclude='./.next' -czf codersdiary-platform.tar.gz -C /home/ubuntu codersdiary-platform
```

Then copy it to the new server:

```bash
scp codersdiary-platform.tar.gz ubuntu@NEW_SERVER_IP:/home/ubuntu/
```

On the **new server**, extract it:

```bash
cd /home/ubuntu
tar -xzf codersdiary-platform.tar.gz
ls codersdiary-platform/   # verify files are there
```

### Option B — Clone from Git (if you have it on GitHub)

```bash
cd /home/ubuntu
git clone https://github.com/YOUR_USERNAME/codersdiary-platform.git
cd codersdiary-platform
```

---

## 5. Install Dependencies & Build

```bash
# Enter the project directory
cd /home/ubuntu/codersdiary-platform

# Install all npm packages
npm install

# Build the production bundle
npm run build
```

The build output will look like this (success):

```
✓ Compiled successfully
✓ Collecting page data
✓ Generating static pages (16/16)
✓ Finalizing page optimization

Route (app)                         Size    First Load JS
┌ ○ /                              171 B        106 kB
├ ○ /courses                      6.47 kB       112 kB
├ ● /courses/[slug]                171 B        106 kB
└ ● /projects/[id]                 171 B        106 kB
```

> ⚠️ If you see any ESLint errors, check the [Troubleshooting](#12-troubleshooting) section.

---

## 6. Run with PM2 (Process Manager)

PM2 keeps the app alive in the background and auto-restarts it if it crashes.

### 6.1 — Install PM2

```bash
sudo npm install -g pm2
```

### 6.2 — Start the application

```bash
cd /home/ubuntu/codersdiary-platform
pm2 start npm --name "codersdiary" -- start
```

### 6.3 — Save the process list

```bash
pm2 save
```

### 6.4 — Enable auto-start on server reboot

```bash
sudo pm2 startup systemd -u ubuntu --hp /home/ubuntu
pm2 save
```

### 6.5 — Verify the app is running

```bash
pm2 status
# Expected: status = online

# Test it responds on port 3000
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000
# Expected: 200
```

---

## 7. Set Up Nginx Reverse Proxy

Nginx sits in front of Next.js and handles port 80/443 traffic, forwarding requests to port 3000.

### 7.1 — Install Nginx

```bash
sudo apt-get install -y nginx
```

### 7.2 — Create the site configuration

```bash
sudo nano /etc/nginx/sites-available/codersdiary
```

Paste the following (replace `codersdiary.online` with your domain):

```nginx
server {
    listen 80;
    server_name codersdiary.online www.codersdiary.online;

    # Security headers
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;
    gzip_min_length 1024;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 7.3 — Enable the site

```bash
# Enable the new site
sudo ln -s /etc/nginx/sites-available/codersdiary /etc/nginx/sites-enabled/

# Remove the default site
sudo rm -f /etc/nginx/sites-enabled/default

# Test the config
sudo nginx -t
# Expected: syntax is ok / test is successful

# Restart Nginx
sudo systemctl restart nginx
sudo systemctl enable nginx
```

### 7.4 — Test Nginx is working

```bash
curl -s -o /dev/null -w "%{http_code}" http://YOUR_SERVER_IP
# Expected: 200
```

---

## 8. Enable HTTPS with SSL (Let's Encrypt)

This gives you a free SSL certificate so your site runs on `https://`.

### 8.1 — Install Certbot

```bash
sudo apt-get install -y certbot python3-certbot-nginx
```

### 8.2 — Obtain the SSL certificate

```bash
sudo certbot --nginx -d codersdiary.online -d www.codersdiary.online
```

You will be prompted for:
- **Email address** — enter your email (for renewal alerts)
- **Agree to terms** — type `Y`
- **Share email with EFF** — type `N`
- **Redirect HTTP to HTTPS** — choose `2` (Redirect — recommended)

### 8.3 — Verify auto-renewal

Certbot sets up an automatic cron job. Test it with:

```bash
sudo certbot renew --dry-run
# Expected: Congratulations, all simulated renewals succeeded
```

Your site is now live at **https://codersdiary.online** 🎉

---

## 9. Configure DNS

In your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.), add these DNS records:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | `@` | `YOUR_SERVER_IP` | 300 |
| A | `www` | `YOUR_SERVER_IP` | 300 |

> DNS propagation takes **5 minutes to 48 hours**. You can check it at [dnschecker.org](https://dnschecker.org).

---

## 10. Update Stripe Payment Links

Before going live, update the real Stripe Payment Links in the courses data file.

```bash
nano /home/ubuntu/codersdiary-platform/data/courses.ts
```

Find the `stripePaymentLink` field for each course and replace `#` with your real Stripe link:

```typescript
// Change this:
stripePaymentLink: '#',

// To your real Stripe link:
stripePaymentLink: 'https://buy.stripe.com/YOUR_LINK_HERE',
```

After editing, rebuild and restart:

```bash
cd /home/ubuntu/codersdiary-platform
npm run build
pm2 restart codersdiary
```

### How to get your Stripe Payment Links:
1. Go to [dashboard.stripe.com](https://dashboard.stripe.com)
2. Click **Products** → **Add product**
3. Set the price and currency
4. Click **Payment links** → **Create link**
5. Copy the link (format: `https://buy.stripe.com/xxxx`)

---

## 11. Useful PM2 Commands

```bash
# View all running processes
pm2 status

# View live logs
pm2 logs codersdiary

# View last 100 lines of logs
pm2 logs codersdiary --lines 100

# Restart the app (e.g. after a rebuild)
pm2 restart codersdiary

# Stop the app
pm2 stop codersdiary

# Delete the app from PM2
pm2 delete codersdiary

# Monitor CPU and memory usage live
pm2 monit
```

---

## 12. Troubleshooting

### ❌ Build fails with ESLint errors

```bash
# View the exact error
npm run build 2>&1 | grep "Error:"
```

Common fixes:
- **`is defined but never used`** — Remove the unused import from the file shown
- **`Cannot find module`** — Run `npm install` again

---

### ❌ App starts but shows a blank page

```bash
# Check PM2 logs for errors
pm2 logs codersdiary --lines 50
```

---

### ❌ Port 3000 not responding

```bash
# Check if the app is actually running
pm2 status

# Check what's on port 3000
sudo lsof -i :3000
```

---

### ❌ Nginx 502 Bad Gateway

This means Nginx can reach port 80 but the Next.js app on port 3000 is down.

```bash
# Restart the app
pm2 restart codersdiary

# Verify port 3000 is up
curl http://localhost:3000
```

---

### ❌ SSL certificate fails

Make sure:
1. Your domain DNS A record points to this server's IP
2. Port 80 is open in your firewall: `sudo ufw allow 80`
3. Nginx is running: `sudo systemctl status nginx`

---

### ✅ Quick Health Check Script

Run this at any time to verify everything is working:

```bash
echo "=== PM2 Status ===" && pm2 status
echo "=== Port 3000 ===" && curl -s -o /dev/null -w "HTTP %{http_code}\n" http://localhost:3000
echo "=== Nginx Status ===" && sudo systemctl status nginx --no-pager | head -5
echo "=== Disk Usage ===" && df -h /
echo "=== Memory ===" && free -h
```

---

## 📁 Project File Structure

```
codersdiary-platform/
├── app/
│   ├── layout.tsx          ← Root layout (SEO, fonts)
│   ├── page.tsx            ← Homepage
│   ├── globals.css         ← Full design system (colours, components)
│   ├── courses/
│   │   ├── layout.tsx      ← Courses page SEO metadata
│   │   ├── page.tsx        ← Course catalog
│   │   └── [slug]/
│   │       └── page.tsx    ← Individual course detail + Stripe CTA
│   └── projects/
│       └── [id]/
│           └── page.tsx    ← Individual project detail
├── components/
│   ├── Navbar.tsx          ← Sticky navigation bar
│   ├── Footer.tsx          ← Footer with links
│   ├── TerminalWindow.tsx  ← Animated terminal in hero
│   └── CourseFilters.tsx   ← Category filter buttons
├── data/
│   ├── courses.ts          ← ⭐ Course data + Stripe links (edit this!)
│   └── projects.ts         ← ⭐ Project data (edit this!)
├── next.config.ts          ← Security headers, standalone output
├── package.json
└── DEPLOYMENT.md           ← This file
```

---

## 🔄 How to Update the Site After Changes

1. **Edit the files** (e.g. update course prices, add a new project)
2. **Rebuild**:
   ```bash
   cd /home/ubuntu/codersdiary-platform
   npm run build
   ```
3. **Restart**:
   ```bash
   pm2 restart codersdiary
   ```

Changes are live in seconds. ✅

---

*Documentation generated for CodersDiary Platform — Next.js 15 | Node.js 22 | PM2 | Nginx | Ubuntu*
