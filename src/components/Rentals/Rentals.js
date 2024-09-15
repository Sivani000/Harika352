import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/about.jpg"

const Rentals = () => {
  return (
    <>
      <section className='Rentals-out mb'>
        <Back name='Rentals' title='Rentals-Browse Home' cover={img} />
        <div className='container recent'>
          
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Rentals
