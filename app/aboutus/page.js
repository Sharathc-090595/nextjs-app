import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
    return (
        <div className='border-4 border-yellow-400'>
          <Header />
        <div className="bg-black">
            <h1>This is About Us page</h1>
        </div>
        <Footer />
        </div>
    );
}