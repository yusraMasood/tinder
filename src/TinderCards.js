import React,{useState,useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import './tinderCards.css';
import axios from './axios.js';

export default function TinderCards() {
    const [people,setPeople ] = useState([]);

    useEffect(() => {
        async function fetchData() {
          // cuz base url already set up in axios.js
          const req = await axios.get("/tinder/cards");
    
          // whatever the request.data comes back us
          setPeople(req.data);
        }
    
        fetchData();
      }, []);

    const swiped=(direction,nameToDelete)=>{
        console.log("removing",nameToDelete);

    };
    const outOfFrame=(name)=>{
        console.log(name+ "Left on the Screen");
    };
    return (
        <div className="tinderCards">
        <div className="tinderCards___cardContainer">
        {people.map((person)=>
            
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['right', 'left']}
                onSwipe={(dir)=>swiped(dir,person.name)}
                onCardLeftScreen={()=> outOfFrame(person.name)}>
                <div style={{backgroundImage: `url(${person.imgUrl})`}} className="card">
                    {person.name}
                </div>

                </TinderCard>
        )}
        </div>
        </div>
    );
}
