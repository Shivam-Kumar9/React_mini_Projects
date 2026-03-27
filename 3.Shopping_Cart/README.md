# Shopping Cart App

A simple React-based shopping cart application built with Redux Toolkit for state management.

## Features

- Browse products on the home page
- Add items to the shopping cart
- View and manage cart items
- Remove items from the cart
- Responsive design with Tailwind CSS

## Technologies Used

- **React**: Frontend library for building user interfaces
- **Redux Toolkit**: State management
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Build tool and development server
- **React Icons**: Icon library

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd 3.Shopping_Cart
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

- Navigate to the home page to view available products
- Click "Add to Cart" to add items to your shopping cart
- Click on the cart icon in the header to view your cart
- In the cart page, you can remove items or adjust quantities

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components (Home, Cart)
├── store/         # Redux store configuration
│   └── slices/    # Redux slices (cart-slice.js)
├── App.jsx        # Main app component
└── main.jsx       # Entry point
```

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview production build

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.