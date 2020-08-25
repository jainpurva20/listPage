import React, { useState, Fragment } from 'react';
import {DebounceInput} from 'react-debounce-input';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchData, searchStatus } from './../redux/actions/';

const Header = (props) => {
   const [search, setSearch] = useState(false);

   const openSearch = () => {
      props.searchStatus(true);
      setSearch(true);
   }
   const closeSearch = () => {
      props.searchStatus(false);
      setSearch(false);
   }
   const handleOnchange = (event)=>{
      props.searchData(event.target.value)
   }

   return (
      <nav className="flex items-center justify-between flex-wrap w-full bg-black p-3 fixed shadow-header pb-0">
         <div className="w-full block flex-grow flex items-center w-auto">
           
               <Fragment>
                  <div className="text-sm flex-grow flex">
                     <span className="inline-block mt-0 text-teal-200 hover:text-white mr-4">
                        <img className="w-5" src="/images/back.png" alt="Back button" />
                     </span>
                     <span className="inline-block mt-0 text-teal-200 hover:text-white mr-4 font-titillium text-lg truncate">
                        Romantic comedy
                     </span>
                  </div>
                  {search ?
                  <div className="flex-grow flex">
                     <DebounceInput className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search" onChange={handleOnchange} minLength={1} debounceTimeout={300}/>
                     <button onClick={closeSearch} className="bg-gray-900 hover:bg-blue-700 text-white font-bold py-0 px-2 ml-2 rounded">X</button>
                  </div> 
                  :
                  <div className="w-5" onClick={openSearch}>
                     <img className="" src="/images/search.png" alt="Search" />
                  </div>}
               </Fragment>
            
         </div>
      </nav>
   )
}


const mapDispatchToProps = (dispatch, ownProps) => {
   return {
      searchData: bindActionCreators(searchData, dispatch),
      searchStatus: bindActionCreators(searchStatus, dispatch)
   }
}

export default connect("", mapDispatchToProps)(Header);

