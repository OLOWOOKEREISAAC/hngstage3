import styles from './header.module.css';
import img1 from '../../assets/image 4.png';
import img2 from '../../assets/image 3.png';
import img3 from '../../assets/image 6.png';
import img4 from '../../assets/image 5.png';
import Banner from './Banner';
import Card from '../body/Card';

function HeaderSection(){
    return(
        <>
            <div className = {styles.headerContainer}>

                <div className={styles.headerText}>
                    <h1>
                        Rent a <b>Place</b> away from <b>Home</b> in the <b>Metaverse</b>
                    </h1>
                    <p>
                        we provide you access to luxury and affordable houses in the 
                        metaverse, get a chance to turn your imagination to 
                        reality at your comfort zone
                    </p>
                    <input type='text' id = 'search' name = 'search' placeholder ='Search for location'/>
                    <label for = 'search'>Search</label>
                </div>
            <div className = {styles.headerImage}>
                    <figure id='img1'>
                        <img src={img1} alt='img' ></img>
                    </figure>

                    <figure className={styles.imgoffset}>
                        <img src={img2} alt='img' ></img>
                    </figure>
                    <figure id='img3'>
                        <img src={img3} alt='img' ></img>
                    </figure>
                    <figure className={styles.imgoffset}>
                    <img src={img4} alt='img' ></img> 
                    </figure>
                    
                    
            </div>
            
            </div>
            <Banner/>
           
        </>
    )
};

export default HeaderSection;