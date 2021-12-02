import React from 'react';
import AddImage from './AddImage/AddImage';
import AllProjects from './AllProjects/AllProjects';
import Footer from '../Common/Footer/Footer';

const NewUser = () => {
    return (
        <div>
            <AddImage />
            <AllProjects />
            <Footer />
        </div>
    );
};

export default NewUser;