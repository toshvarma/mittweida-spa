# Mittweida SPA
### This contains documentation on the tools used for the SPA, how to access it on your phone, as well as the API Documentation.

Hello, this is Tosh Varma's Mittweida Single Page Application
 built with **React**, **Vite**, and **NestJS** 
<hr>

## Technologies Used

- React + TypeScript 
- Vite 
- NestJS 
- GitHub Pages 
- Swagger 

<hr>

## Live Site

https://tosh.website/mittweida-spa/
<br> in case the website loads into a 404 page, simply click the icon on the top-left to navigate to the home page. Github Pages sometimes messes up with the inital path of the website a little bit.

<hr>

##  How to Access the Full SPA (Frontend + Backend) on Your Phone via Local Network

This website is designed so you can run it entirely on your own laptop and view it on your phone as long as both devices are on the same Wi-Fi network.

Here's how it works, and how to set it up:
<br>
### How the Phone Connects to the Backend

Instead of using localhost (which only works on your computer), we configure the frontend to talk to your backend via your computer's internal network IP address (e.g. `192.168.1.23` or `10.0.0.101`).

In your frontend code, the backend URL is centralized in a file called `config.ts`:

📄 `src/config.ts`

// Replace this with your own IP address when testing 
<br>
`export const API_BASE_URL = 'http://<YOUR_LOCAL_IP>:3000';`

Your frontend code (e.g. in `PlaceDetailView.tsx`, `LoginView.tsx`, or `SearchView.tsx`) imports this:

📄 Example usage in `PlaceDetailView.tsx`:

`import { API_BASE_URL } from "../../config.ts";`

`fetch('${API_BASE_URL}/places/${id}')
.then(res => res.json())
.then(data => setPlace(data)); `

 ### Backend Configuration to Enable External Devices

In the backend, NestJS is configured to:

    Listen on all network interfaces using 0.0.0.0

    Allow requests from your IP address via CORS

📄 `backend/src/main.ts`

`await app.listen(3000, '0.0.0.0');` // listen to all devices on the network

`app.enableCors({
origin: ['http://<YOUR_LOCAL_IP>:5173'], // allow frontend from your IP methods: ['GET', 'POST', 'PUT', 'DELETE'], });`

Note: You can temporarily use `origin: '*'` for development:

`app.enableCors({ origin: '*' });` // Not recommended for production

 How to Set It Up on Your Local Network

     Get your computer’s local IP address:

        On Windows: open your terminal and type 'ipconfig'
        On Mac: open your terminal and type 'ipconfig getifaddr en0'


Look for IPv4 Address (e.g. 192.168.0.14 or 10.0.101.246)

Set that IP address in your config.ts:

📄 `src/config.ts`

e.g: `export const API_BASE_URL = 'http://192.168.0.14:3000';`

Make sure backend CORS allows that IP:

📄 `backend/src/main.ts`

`origin: ['http://192.168.0.14:5173'],`

Run both frontend and backend:

Terminal 1:

`npm run dev`

Terminal 2:

`cd backend`
<br>
`npm run start`

On your phone, open your browser and go to:

http://192.168.0.14:5173 <- (Replace with the actual IP)

<hr>

## API Documentation
You can explore the backend API using Swagger UI:

 `http://<your-ip>:3000/api`

(Note: This only works if your backend is running and you're on the same WiFi.)

Example (with placeholder IP): `http://192.168.0.14:3000/api`
<br>
Or 
<br>
use localhost for development: `http://localhost:3000/api`

<hr>


# Clone the repo here!

<hr>

```bash
git clone https://github.com/toshvarma/mittweida-spa.git
cd mittweida-spa
```
# - Tosh Varma

