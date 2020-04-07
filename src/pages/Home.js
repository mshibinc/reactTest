import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Nav/>
                <p>Home</p>
                <Footer/>
            </div>
        );
    }
}
export default Home;