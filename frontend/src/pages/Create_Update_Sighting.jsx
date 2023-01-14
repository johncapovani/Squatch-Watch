import React from 'react'
import "./Create_Update_Sighting.css"

function Create_Update_Sighting() {

  const handleSubmit = (event) => {
    event.preventDefault();
  };



  return (

    <>
      <div className="reportSightingContainer">


        <form className='reportform-container' onSubmit={handleSubmit}>

          <div className='reportform-container-item'>
            <h1>Report a Sighting</h1>
            <div>
              <label htmlFor="date">Date</label>
              <input id="date" type="text" />
            </div>
            <div>
              <label htmlFor="time">Time of Sighting</label>
              <input id="time" type="text" />
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <input id="location" type="text" />
            </div>
            <div>
              <label htmlFor="species">Species</label>
              <input id="species" type="text" />
            </div>
            <div>
              <label htmlFor="image-url">Image URL</label>
              <input id="image-url" type="text" />
            </div>
            <button className='sightingButton' type="submit">Publish Your Sighting!</button>
          </div>

          <div className='reportform-container-item-details'>
            <div>
              <label htmlFor="Sighting Details">Sighting Details</label>
              <div className='detailarea' >
                <textarea placeholder="Describe your sighting experience in detail..." rows="7"></textarea>
              </div>
            </div>
          </div>



        </form>




      </div>
    </>

  )
}

export default Create_Update_Sighting