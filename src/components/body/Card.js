import  styles from './Card.module.css';
import stars from '../../assets/star.png';

const Card = (props)=>{
    const { image } = props;
    return(
        <div >
            <div className= {styles.eachCard}>
                <figure>
                    <img src={image} alt = 'img'/>
                </figure>
                <div className={styles.cardText}>
                    <p>Desert king</p>
                    <p className={styles.alignToRight}>1MBTper night</p>
                    <p>2345km away</p>
                    <p className={styles.alignToRight}>available for 2weeks stay</p>
                    <figure>
                       <img src={stars} alt=''/> 
                    </figure>
                    
                </div>
            </div>
        </div>
        
    )
};

export default Card;