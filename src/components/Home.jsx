import React from "react";
import Footer from "./Footer"
import Landing from "./Landing";
import Features from "./Features";
import Cards from "./Cards"
import cards from "../card"
import Subtopic from "./Subtopic";
import Carousel from "./Carousel";

function createCard(card){
    return(
    <Cards 
         key ={card.id}
         img = {card.imgUrl}
         titl ={card.title}
         description ={card.text}
       
    />  
    ) 
}

function Home(){
    return(
        <div>
            <Landing />
            <Features />
            <Subtopic topic="We Offer:"/>
            <div className="card-display"> {cards.map(createCard)} </div>
            <Carousel />
            <Footer />
        </div>
    );
}

export default Home;