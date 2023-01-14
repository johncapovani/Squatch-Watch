// import {useDispatch} from 'react-redux';

const Datacard = ({sighting}) => {
    // const dispatch = useDispatch()
    return(
        <>
        <div className="goal">
            <h2>{sighting.time}</h2>
        </div>
        </>
    )
}

export default Datacard;