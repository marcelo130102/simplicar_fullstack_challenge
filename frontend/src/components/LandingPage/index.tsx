import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Card{
    id: string,
    name: string,
    description: string,
    status: string

}

const LandingPage = ()=>{
    const { id } = useParams();
    const [cards, setCards] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/get_all_cards/${id}`).then((response) => {
            if (response.ok) {
              response.json().then((json) => {
                setCards(json);
              });
            }
          });
    },[id]);

    return (<>{cards.map((card: Card)=><div>{card.id}</div>)}</>);
}

export default LandingPage;