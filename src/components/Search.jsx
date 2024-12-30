import React, { useEffect } from 'react'
import { IoSearch } from 'react-icons/io5'
function Search() {
  const handleSearch = event => {
    event.preventDefault()
  }
  return (
    <form className="search">
      <input type="text" placeholder="Search..." className="search__input" />
      <button className="btn px-3" onClick={handleSearch}>
        <IoSearch className="search__button fs-3" />
      </button>
    </form>
  )
}

export default Search
