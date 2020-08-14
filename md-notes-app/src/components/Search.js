import React from 'react';

const Search = (props) => {
  const { filterList } = props

  const handleOnchange = (e) => {
    const searchText = e.target.value;
    console.log(searchText);
    filterList(searchText)
  }

  return (
    <div>
      <input 
        type="text" 
        placeholder="search"
        onChange={handleOnchange}
      />
    </div>
  )
}

export default Search;