import { useState } from 'react'

function Datacard({sighting}){

    let [view,setView] = useState(false)

    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }

    const simpleView = () => {
        return(
            <div style={simpleStyle}>
                <img src={sighting.images} alt="user's" />  <h3>{sighting.date}</h3>  <h4>{sighting.species}</h4>
            </div>
        )
    }

    const detailStyle = {
        'width': '80vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        // this url isn't working for some reason
    }

    const detailView = () => {
        return(
            <div style={detailStyle}>
                <h2>{sighting.date}</h2>
                <h3>{sighting.species}</h3>
                <h4>{sighting.time}</h4>
                <h4>{sighting.description}</h4>
            </div>
        )
    }

    return(
        <div onClick={() => setView(!view)} style={{'display':'inline-block'}}>
            {view ? detailView() : simpleView()}
        </div>
    )
}
export default Datacard

// // import {useDispatch} from 'react-redux';

// function Datacard({ sighting }) {
//     // const dispatch = useDispatch()
//     return (
//             <li className="sighting">
//                 <div className="column-one">
//                     <img src={sighting.images} alt="user's" />
//                     <div>
//                         <h4> Reported by: {sighting.user}</h4>
//                         <h4> Species: {sighting.species} </h4>
//                     </div>
//                 </div>
//                 <div className="column-two">
//                     <h2>{sighting.date}</h2>
//                     <h4>{sighting.time}</h4>
//                     <p className="description">{sighting.description}</p>
//                 </div>
//             </li>
//     )
// }

// export default Datacard;