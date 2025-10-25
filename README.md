# E-Commerce Application

A modern, full-stack e-commerce platform built with the MERN stack, featuring a React frontend with Tailwind CSS and a Node.js backend with MongoDB. This application provides a complete online shopping experience with user authentication, product catalog, shopping cart, and multiple payment integrations.

## 🚀 Features

### Frontend
- **Modern UI/UX** - Clean, responsive design with Tailwind CSS
- **Product Catalog** - Browse products with filtering and search functionality
- **Shopping Cart** - Add/remove items with real-time cart management
- **User Authentication** - Secure login and registration system
- **Order Management** - Track and manage customer orders
- **Responsive Design** - Optimized for desktop and mobile devices
- **Latest Collection & Best Sellers** - Featured product sections
- **Related Products** - Smart product recommendations

### Backend
- **RESTful API** - Clean, scalable API architecture
- **User Management** - JWT-based authentication and authorization
- **Product Management** - CRUD operations for product catalog
- **Cart Operations** - Persistent shopping cart functionality
- **Order Processing** - Complete order lifecycle management
- **Image Upload** - Cloudinary integration for product images
- **Payment Integration** - Support for Stripe and Razorpay
- **Security** - Password hashing with bcrypt and data validation

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **React Router DOM** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Toastify** - Beautiful notifications
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and formatting

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **Cloudinary** - Cloud-based image management
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing

### Payment Gateways
- **Stripe** - Credit card processing
- **Razorpay** - Payment gateway for Indian market

### Development Tools
- **Nodemon** - Development server with hot reload
- **dotenv** - Environment variable management
- **Validator** - Data validation library

## 📁 Project Structure

```
E-Com App/
├── backend/
│   ├── config/
│   │   ├── mongodb.js          # Database connection
│   │   └── cloudinary.js       # Cloudinary configuration
│   ├── controllers/
│   │   └── userController.js   # User-related controllers
│   ├── models/
│   │   ├── userModel.js        # User schema
│   │   └── productModel.js     # Product schema
│   ├── routes/
│   │   └── userRoute.js        # User routes
│   ├── .env.example            # Environment variables template
│   ├── package.json
│   └── server.js               # Main server file
├── frontend/
│   ├── src/
│   │   ├── components/         # Reusable React components
│   │   ├── pages/             # Page components
│   │   ├── context/           # React Context providers
│   │   ├── assets/            # Static assets
│   │   ├── App.jsx            # Main App component
│   │   └── main.jsx           # Entry point
│   ├── package.json
│   └── vite.config.js
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "E-Com App"
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

4. **Environment Configuration**
   
   Create a `.env` file in the backend directory based on `.env.example`:
   ```bash
   cp backend/.env.example backend/.env
   ```
   
   Configure the following environment variables:
   ```env
   # Server Configuration
   PORT=4000

   # Database
   MONGODB_URI=your_mongodb_connection_string

   # JWT Secret
   JWT_SECRET=your_jwt_secret_key_here_make_it_long_and_secure

   # Cloudinary Configuration
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

   # Stripe Configuration
   STRIPE_SECRET_KEY=your_stripe_secret_key

   # Razorpay Configuration
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_secret

   # Admin Credentials
   ADMIN_EMAIL=admin@ecommerce.com
   ADMIN_PASSWORD=admin123
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run server  # Development mode with nodemon
   # or
   npm start       # Production mode
   ```
   The backend server will run on `http://localhost:4000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

## 📊 Database Schema

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  cartData: Object,
  timestamps: true
}
```

### Product Model
```javascript
{
  name: String,
  description: String,
  price: Number,
  image: String (Cloudinary URL),
  category: String,
  subCategory: String,
  sizes: Array,
  bestSeller: Boolean,
  date: Number,
  timestamps: true
}
```

## 🔒 Security Features

- **Password Hashing** - All passwords are hashed using bcrypt
- **JWT Authentication** - Secure token-based authentication
- **Input Validation** - Server-side validation for all user inputs
- **CORS Protection** - Configured cross-origin resource sharing
- **Environment Variables** - Sensitive data stored in environment variables

## 📱 API Endpoints

### User Routes (`/api/user`)
- `POST /register` - User registration
- `POST /login` - User authentication
- `GET /profile` - Get user profile (protected)
- `PUT /cart` - Update user cart (protected)

*Note: Additional routes for products, orders, and admin operations will be implemented as the project grows.*

## 🎨 UI Components

- **Navbar** - Navigation with user authentication state
- **Hero** - Landing page hero section
- **Product Grid** - Responsive product display
- **Shopping Cart** - Interactive cart with quantity management
- **Search & Filter** - Product discovery features
- **Footer** - Site information and links

## 🚀 Deployment

### Backend Deployment (Railway/Heroku)
1. Set environment variables in your hosting platform
2. Deploy the backend directory
3. Ensure MongoDB Atlas connection is properly configured

### Frontend Deployment (Netlify/Vercel)
1. Build the frontend: `npm run build`
2. Deploy the `dist` folder
3. Configure environment variables for API endpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🆘 Support

If you encounter any issues or have questions, please:
1. Check the existing issues on GitHub
2. Create a new issue with detailed description
3. Include error messages and system information

## 🔮 Future Enhancements

- [ ] Admin dashboard for product management
- [ ] Advanced search and filtering
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Email notifications
- [ ] Inventory management
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Mobile app development

---

**Built with ❤️ using the MERN Stack**
