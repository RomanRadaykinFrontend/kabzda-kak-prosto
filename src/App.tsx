import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating, {RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [onValue, setOnValue] = useState<boolean>(true)

    return (
        <div className='App'>
            <PageTitle title='This is APP component'/>

            <OnOff on={onValue} setOnValue={setOnValue}/>
            <UncontrolledOnOff/>

            <UncontrolledAccordion titleValue='Menu'/>
            
            <UncontrolledRating/>
            
            <Rating value={ratingValue} onClick={setRatingValue}/>
            
            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>

            
        </div>
    );
}

export default App;

type PagePropsTitle = {
    title: string
}

function PageTitle(props: PagePropsTitle) {
    return(
        <div>
            {props.title}
        </div>
    )
}



