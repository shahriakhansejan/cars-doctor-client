import Banner from './Banner';
import About from './About';
import Service from './Services/Service';
import Choose from './Choose';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Choose></Choose>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;