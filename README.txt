
# Todos App

A simple Todos management application built using React, jsonplaceholder API, and JSON Server.

## Features

- View Todos from jsonplaceholder.
- Add new Todos.
- Edit existing Todos.
- Delete Todos.
- Responsive user interface.

## Tech Stack

- Frontend: React, Bootstrap, CSS
- Backend: jsonplaceholder API, JSON Server

## Installation Instructions

### Prerequisites
- Node.js and npm should be installed.

### Steps to Run the App

1. **Clone the repository**:
   ```
   git clone https://github.com/your-username/todos-app.git
   cd todos-app
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Start JSON Server**:
   - Open a new terminal window.
   - Run the following command:
     ```
     npx json-server --watch db.json --port 5000
     ```
   - JSON Server will start at `http://localhost:5000`.

4. **Run the React App**:
   ```
   npm start
   ```
   - The React app will open in your browser at `http://localhost:3000`.

## JSON Server Configuration

Ensure your `db.json` file is set up like this:

```
{
  "todos": [
    {
      "id": 1,
      "title": "Learn React",
      "completed": false
    },
    {
      "id": 2,
      "title": "Build a Todos App",
      "completed": true
    }
  ]
}
```

## Notes

- Make sure JSON Server is running on port 5000 before starting the React app.
- This app is designed for educational purposes and uses mock data from jsonplaceholder for demonstration.

## License

This project is open-source and available under the MIT License.
