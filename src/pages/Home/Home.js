import Footer from '../../sharedPage/Footer/Footer';
import Header from '../../sharedPage/Header/Header';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner/>
            <Products/>
            <Footer />

        </div>
    );
};

export default Home;