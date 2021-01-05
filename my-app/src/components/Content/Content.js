import React, {useState} from "react";
import Text from "./Text/Text";
import Title from "./Title/Title";
import ViewMore from "./ViewMore/ViewMore";
import helicopter from "../../img/helicopter.jpg";
import airplane from "../../img/airplane.jpg";
import space_shattle from "../../img/space-shuttle.jpg";
import { StyledContent, StyledTitles } from './Content.styled'

function Content() {
    const[titles] = useState([
        { heading: "Helicopter", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel augue velit.", image: helicopter , id: 1},
        { heading: "Airplane", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel augue velit.", image: airplane, id: 2},
        { heading: "Space Shuttle", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel augue velit.", image: space_shattle, id: 3},
    ]);

    return(
        <StyledContent>
            <Text />
            <StyledTitles>
                {titles.map(title => (
                    <Title heading={title.heading} message={title.message} image={title.image} key ={title.id}/>
                ))}
            </StyledTitles>
            <ViewMore />
        </ StyledContent>
    );
}

export default Content;