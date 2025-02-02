# Eth Gas Tracking Project

This project leverages **QuickNode Streams and Backfills** to track on-chain activity in real-time. The gas tracking system is designed to provide a seamless experience by integrating backend and frontend components with WebSocket capabilities.

## Project Structure
```
quicknode-gas-tracking/
├── client/   # React.js frontend code
├── server/   # Backend server code
├── .env      # Environment configuration for server
```

## Features
- **QuickNode Integration:** Set up QuickNode Streams and Backfills for real-time on-chain data.
- **Frontend:** Built with React.js for a user-friendly interface.
- **Backend:** Node.js server to manage data and WebSocket connections.
- **WebSocket Integration:** Seamless communication between frontend and backend.

## Prerequisites
- **Node.js** installed on your system.
- Access to a QuickNode account.
- PostgreSQL database.

## Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-repo/gas-tracker.git
cd quicknode-gas-tracking
```

### 2. Set Up the Server
1. Navigate to the `server` folder:
    ```bash
    cd server
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the `server` folder and fill in the following:
    ```env
    HOST=<your-database-host>
    USER=<your-database-user>
    PORT=<your-database-port>
    PASSWORD=<your-database-password>
    DATABASE=<your-database-name>
    ```
4. Start the server:
    ```bash
    npm start
    ```

### 3. Set Up the Client
1. Navigate to the `client` folder:
    ```bash
    cd ../client
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the React.js development server:
    ```bash
    npm run dev
    ```

## Usage
1. Ensure both the server and client are running.
2. Open your browser and navigate to the development URL provided by React (e.g., `http://localhost:5173`).
3. Interact with the gas tracking interface and observe real-time data updates.

## Environment Configuration
Ensure the `.env` file in the `server` folder is correctly set up. The following variables are required:
- `HOST`: Hostname of your PostgreSQL database.
- `USER`: Username for the database.
- `PORT`: Port number for the database connection.
- `PASSWORD`: Password for the database user.
- `DATABASE`: Name of the PostgreSQL database.

