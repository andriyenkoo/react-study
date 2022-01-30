import React from 'react';
import Users from "./components/Users";
import Comments from "./components/Comments";
import Posts from "./components/Posts";


const App = () => {


    return (
        <div>

            <div className={'header'}>
                <Users/>
                <Posts/>
            </div>

            <hr/>

            <Comments/>

        </div>
    );
};

export default App;