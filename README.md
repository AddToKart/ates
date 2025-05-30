# Alumni Tracking & Engagement System (ATES) - Frontend

A comprehensive web application for managing alumni relationships, tracking career progress, and facilitating engagement between educational institutions and their graduates.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Features](#features)
- [Development](#development)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## 🔧 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 16.x or higher)

  - Download from [https://nodejs.org/](https://nodejs.org/)
  - Verify installation: `node --version`

- **npm** (comes with Node.js)

  - Verify installation: `npm --version`

- **Git** (for version control)
  - Download from [https://git-scm.com/](https://git-scm.com/)

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd ates
   ```

2. **Navigate to the frontend directory**

   ```bash
   cd frontEnd
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

   This will install all required packages including:

   - Angular 17+
   - Angular Material
   - Angular CDK
   - RxJS
   - TypeScript
   - And other dependencies listed in `package.json`

## 🏃‍♂️ Running the Application

### Development Server

To start the development server:

```bash
npm run start
```

Or alternatively:

```bash
npm start
```

The application will be available at:

- **Local**: `http://localhost:4200`
- **Network**: `http://[your-ip]:4200`

The development server will automatically reload when you make changes to the source files.

### Production Build

To build the application for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Production Preview

To serve the production build locally:

```bash
npm run build
npm run serve
```

## 📜 Available Scripts

| Command              | Description                         |
| -------------------- | ----------------------------------- |
| `npm start`          | Start the development server        |
| `npm run build`      | Build the app for production        |
| `npm run build:prod` | Build with production optimizations |
| `npm run test`       | Run unit tests                      |
| `npm run test:watch` | Run tests in watch mode             |
| `npm run e2e`        | Run end-to-end tests                |
| `npm run lint`       | Run ESLint for code quality         |
| `npm run serve`      | Serve the production build          |

## 📁 Project Structure

```
ates/
├── frontEnd/                 # Frontend application
│   ├── src/
│   │   ├── app/             # Main application module
│   │   │   ├── app.component.ts
│   │   │   ├── app.html     # Main application template
│   │   │   └── app.scss     # Application styles
│   │   ├── assets/          # Static assets
│   │   ├── environments/    # Environment configurations
│   │   └── styles/          # Global styles
│   ├── package.json         # Frontend dependencies
│   ├── angular.json         # Angular configuration
│   └── tsconfig.json        # TypeScript configuration
├── README.md               # This documentation
└── .gitignore             # Git ignore rules
```

## ✨ Features

The ATES Frontend includes the following modules:

### 🏠 Dashboard

- Overview statistics and metrics
- Quick action buttons
- Recent activities feed
- Upcoming events calendar
- Alumni spotlights
- System overview

### 👥 Alumni Management

- Alumni directory with search and filters
- Detailed alumni profiles
- Employment status tracking
- Skills and competencies overview
- Contact information management

### 📅 Events Management

- Event creation and management
- Attendance tracking
- Event analytics
- Registration management
- Event type categorization

### 📊 Analytics & Reports

- Employment status distribution
- Contribution analytics
- Event participation metrics
- Custom report generation
- Data visualization

### 🎓 Academic Records

- Transcript management
- Degree program tracking
- Academic achievements
- GPA and honors tracking

### 💼 Career Services

- Job placement tracking
- Career resource management
- Company partnerships
- Salary statistics
- Career event coordination

### 💰 Donations & Fundraising

- Donation tracking
- Fundraising campaign management
- Contributor analytics
- Campaign progress monitoring

### ⚙️ System Settings

- User management
- Role-based permissions
- System configuration
- Data import/export
- Backup management

## 🛠️ Development

### Code Style

This project follows Angular style guidelines. Please ensure:

- Use TypeScript for all components
- Follow Angular naming conventions
- Use Angular Material components
- Implement responsive design
- Write unit tests for components

### Adding New Features

1. Create feature modules in `src/app/`
2. Update navigation in the main component
3. Add routes if necessary
4. Include appropriate tests
5. Update documentation

### Environment Configuration

Configure different environments in `src/environments/`:

- `environment.ts` - Development
- `environment.prod.ts` - Production

## 🐛 Troubleshooting

### Common Issues

**Port already in use**

```bash
# Kill the process using port 4200
npx kill-port 4200
# Or use a different port
npm start -- --port 4201
```

**Node modules issues**

```bash
# Clear npm cache
npm cache clean --force
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Angular CLI not found**

```bash
# Install Angular CLI globally
npm install -g @angular/cli
```

**Memory issues during build**

```bash
# Increase Node.js memory limit
export NODE_OPTIONS="--max-old-space-size=8192"
npm run build
```

### Performance Tips

- Use lazy loading for feature modules
- Implement OnPush change detection strategy
- Optimize bundle size with tree shaking
- Use trackBy functions in \*ngFor loops
- Implement proper caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Workflow

1. Ensure all tests pass: `npm test`
2. Check code style: `npm run lint`
3. Build successfully: `npm run build`
4. Test in multiple browsers
5. Update documentation if needed

## 📞 Support

For support and questions:

- Create an issue in the repository
- Check existing documentation
- Review troubleshooting section

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Happy coding! 🚀**
