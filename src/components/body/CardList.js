import Card from "./Card";
import  styles from './Card.module.css';
    
function CardList(props){
    const {images} = props ;


    return(
        <div className= {styles.cardContainer}>
            {images.map( image => < Card key={image.id} image = {image.imgg} /> )}
            
        </div>

    )
};



export default CardList;