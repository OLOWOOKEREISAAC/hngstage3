import Footer from "./footer/footer";
import Nav1 from "./header/Nav1";
import CardList from "./body/CardList";
import styles from './place.module.css';


import img1 from '../assets/B-img1.png';
import img2 from '../assets/B-img2.png';
import img3 from '../assets/B-img3.png';
import img4 from '../assets/B-img4.png';
import img5 from '../assets/B-img8.png';
import img6 from '../assets/B-img7.png';
import img7 from '../assets/B-img6.png';
import img8 from '../assets/B-img5.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';
import img11 from '../assets/img11.png';
import img12 from '../assets/img12.png';
import img13 from '../assets/img13.png';
import img14 from '../assets/img14.png';
import img15 from '../assets/img15.png';
import img16 from '../assets/img16.png';
import location from '../assets/locate.png';












function PlaceToStay(){
    const imagesForBody = [

        {id:1 , imgg : img1},

        {id:2 , imgg : img2},
        {id:3 , imgg : img3},
        {id:4 , imgg : img4},
        {id:5 , imgg: img5},
        {id:6 , imgg : img6},
        {id:7 , imgg : img7},
        {id:8 , imgg : img8},
        {id:9 , imgg : img9},
        {id:10, imgg : img10},
        {id:11, imgg : img11},
        {id:12, imgg : img12},
        {id:13, imgg : img13},
        {id:14, imgg : img14},
        {id:15, imgg : img15},
        {id:16, imgg : img16}
        
    ];


    return(
        <>
            <Nav1/>
            <div className={styles.nav2}>
                <p>Resturant </p>
                <p>Cottage</p>
                <p>Castle</p>
                <p>Fantasy City</p>
                <p>Beach </p>
                <p>Carbins</p>
                <p>Off-grid</p>
                <p>Farms</p>
                <p className={styles.locate}>Location <img src={location} alt='img'/></p>
            </div>
            <CardList images = {imagesForBody}/>

            <Footer/>
        </>
    )
};

export default PlaceToStay;