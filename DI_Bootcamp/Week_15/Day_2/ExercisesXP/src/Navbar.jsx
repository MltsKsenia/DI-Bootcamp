import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from './ErrorBoundary';

const HomeScreen = () => <h1>Home</h1>;
const ProfileScreen = () => <h1>Profile Screen</h1>;
const ShopScreen = () => {
    throw new Error('An error has occurred');
};

function Navbar() {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <div className="d-flex">
                        <NavLink className="btn btn-primary mx-1" to="/">Home</NavLink>
                        <NavLink className="btn btn-primary mx-1" to="/profile">Profile</NavLink>
                        <NavLink className="btn btn-primary mx-1" to="/shop">Shop</NavLink>
                    </div>
                </div>
            </nav>

            <div className="container mt-4">
                <ErrorBoundary>
                    <Routes>
                        <Route path="/" element={<HomeScreen />} />
                        <Route path="/profile" element={<ProfileScreen />} />
                        <Route path="/shop" element={<ShopScreen />} />
                    </Routes>
                </ErrorBoundary>
            </div>
        </BrowserRouter>
    );
}

export default Navbar;