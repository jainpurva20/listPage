import React from 'react';

const Card = React.memo((props) => {
   return (
      <div className="w-full xs:w-1/3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-15px ">
         <div className="max-w-sm overflow-hidden hover:shadow-lg">
            <img className="w-full" src={`/images/${props.data['poster-image']}`} alt="Cards"
               onError={(event) => {
                  event.target.src = "/images/loading.jpg"
               }} />
            <div>
               <p className="text-white text-base bg-transparent font-titillium font-thin truncate">
                  {props.data['name']}
               </p>
            </div>
         </div>
      </div>
   )
})

export default Card;

