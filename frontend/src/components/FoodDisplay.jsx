import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)
  return (
    <div className='mt-[30]'>
        <h2 className='text-xl lg:text-3xl font-medium text-[#0B192C] mb-5'>Top dishes near you</h2>
        <div className='flex flex-col sm:flex-row sm:flex-wrap gap-4'>
            {food_list.map((item, index) => {
                if (category === "All" || category === item.category){
                    return (
                        <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    )
                }
              
            })}
        </div>
    </div>
  )
}

export default FoodDisplay