import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './Components';

const App = () => {
    return (
        <>
            <Routes>
                {/* <Footer /> */}
                <Route path="/" element={<NavBar />} />



            </Routes>
        </>
    );
};

export default App;
