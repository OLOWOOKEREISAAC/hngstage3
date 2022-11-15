import opensea from '../../assets/Frame 4041.png'
import meta from '../../assets/Group 4040.png'
import mb from '../../assets/mb.png'
import styles from './header.module.css';


const Banner = ()=>{
    return (
        <>
            <div className={styles.banner}>
                <img src={mb} alt='img'/>
                <img src={meta} alt='img'/>
                <img src={opensea} alt='img'/>
               

            </div>
        </>
    )
}

export default Banner;