import ProductPage from './components/ProductPage';
import Navbar from './components/Navbar';
import { product } from './product';
import './App.css';

function App() {
	return (
		<main className='app_container'>
			<Navbar />
			<ProductPage product={product} />
		</main>
	);
}

export default App;

