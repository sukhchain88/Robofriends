import React from 'react'


const SearchBox = ({ SearchChang, Searchfield }) => {
    return (
        <div className='pa2' >
            <input
                className='pa3  ba b--green bg-lightest-blue'
                type='search'
                placeholder='Search Robots'
                onChange={SearchChang} />
        </div>
    )
}

export default SearchBox;