# Form UI Testing

A simple web application for testing form UI components and user data display.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![NGINX](https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=nginx&logoColor=white)

## Project Structure

```
website/
├── index.html          # Main HTML file
├── responsive.html     # Responsive design page
├── styles.css          # CSS styles
└── script.js           # JavaScript functionality
```

## Getting Started

### Prerequisites

- Git
- A modern web browser
- Docker (optional, for containerized deployment)

### Installation

1. Clone the repository:
```bash
git clone git@github.com:luismr/form-ui-testing.git
cd form-ui-testing
```

## Running the Application

### Local Development

1. Open the `website/index.html` file in your web browser
2. Click the "Get User Data" button to fetch and display user information
3. Use the "Responsive" link to view the responsive design page

### Using Docker with NGINX

1. Build and run the Docker container:
```bash
docker run -d -p 8080:80 -v $(pwd)/website:/usr/share/nginx/html nginx
```

2. Access the application at `http://localhost:8080`

## Features

- Fetch and display user data from JSONPlaceholder API
- Responsive design for mobile devices
- Clean and modern UI
- Button state management
- Table view with responsive columns

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License. 