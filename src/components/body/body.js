import  styles from './Card.module.css';
import CardList from "./CardList";
import Metabnb from "./Metabnb";
import img1 from '../../assets/B-img1.png';
import img2 from '../../assets/B-img2.png';
import img3 from '../../assets/B-img3.png';
import img4 from '../../assets/B-img4.png';
import img5 from '../../assets/B-img8.png';
import img6 from '../../assets/B-img7.png';
import img7 from '../../assets/B-img6.png';
import img8 from '../../assets/B-img5.png';

function Body (){
    const imagesForBody = [

        {id:1 , imgg : img1},

        {id:2 , imgg : img2},
        {id:3 , imgg : img3},
        {id:4 , imgg : img4},
        {id:5 , imgg: img5},
        {id:6 , imgg : img6},
        {id:7 , imgg : img7},
        {id:8 , imgg : img8}
        
    ];

    return(
        <>
            <h1 className={styles.bodyHeader}>Inspiration for your next adventure</h1>
            <CardList images = {imagesForBody}/>
            <Metabnb/>
        </>
    )
};

export default Body;