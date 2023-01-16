// import {useDispatch} from 'react-redux';

function Datacard({sighting}){
    // const dispatch = useDispatch()
    return(
        <>
        <div className="goal">
            <div className="column-one">
                <img src={sighting.images} alt="user's"/>
                <div>
                    <h4> Reported by: {sighting.user}</h4>
                    <h4> Species: {sighting.species} </h4>
                </div>
            </div>
            <div className="column-two">
                <h2>{sighting.date}</h2>
                <h4>{sighting.time}</h4>
                <p className="description">{sighting.description}</p>
            </div>
        </div>
        </>
    )
}

export default Datacard;