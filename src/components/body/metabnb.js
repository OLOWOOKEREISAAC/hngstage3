import styles from './metabnb.module.css';
import img from '../../assets/img7.png';

function Metabnb (){
    return(
        <div className={styles.metabnbContainer1} >
           <div className={styles.metabnbContainer}>
                <div className={styles.metabnbText}>
                    <h1> Metabnb NFTs</h1>
                    <p>
                        Discover our nft card collection. Loyal customers get amazing gift cards which are traded as NFTs.
                        These NFTs gives our customers access to loads of exclusive services
                    </p>
                    <button>Learn More</button>
                </div>
                

                <figure>
                    <img src={img} alt= 'img' />
                </figure>
            </div> 
        </div>
        
    )
};

export default Metabnb;