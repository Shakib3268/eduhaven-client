import React, { useState } from 'react';
import College from './College';

const Search = () => {
    const [searchText, setSearchText] = useState("");
    const [searchCollage, setSearchCollage] = useState([]);
    console.log(searchCollage);
    const handleSearch = () => {
        fetch(`https://eduhaven-server.vercel.app/searchcollage/${searchText}`)
            .then(data => {
                setSearchCollage(data?.data.slice(0, 1));
            })
    };
    return (
        <div>
            <div className="text-center mt-3 mb-3">
            <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search…" className="input input-bordered lg:w-[500px]" />
                    <button onClick={handleSearch} className="btn btn-square w-20 bg-info">Search</button>
            </div>
                    <div>
                        {
                            searchCollage.map(collage => <College collage={collage} key={collage._id}></College>)
                        }
                    </div>
        </div>
    );
};

export default Search;