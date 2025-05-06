import React, { useContext } from 'react'
import './ExploreCategory.css'
import { StoreContext } from '../../Context/StoreContext'

const ExploreCategory = ({category,setCategory}) => {

  const {category_list} = useContext(StoreContext);
  
  return (
    <div className='explore-category' id='explore-category'>
      <h1>Explore our Diverse LED LIghts</h1>
      <p className='explore-category-text'>GLO LED Private Limited, is a leading manufacturer and supplier of LED lighting solutions. GLO LED provides end to end solutions, from Consulting, Design, Manufacture, Supply and product Installation. The company has expertise to deliver the orders to a wide range of industries. Our uniqueness is to customize the existing conventional lighting units to LEDs, thus reducing the replacement cost up to to 50%. Here is list of different sectors, we are providing our products to Showrooms, Supermarkets, Cinema Theaters, film studios, Workshops, Godowns, Cold storages, Rice Mills, Factories, Commercial Complexes, Convention halls, IT Industries, Educational institutions, Offices, Railway Stations, Buses, Trains, Metros, Residences, Hotels, Shopping Malls, Hospitals, Plastic Industries, Pharma industries, Poultry Hatcheries, Townships, Parks, Stadiums.</p>
      <div className="explore-category-list">
        {category_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.category_name?"All":item.category_name)} key={index} className='explore-category-list-item'>
                    <img src={item.category_image} className={category===item.category_name?"active":""} alt="" />
                    <p>{item.category_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreCategory
