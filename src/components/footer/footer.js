import styles from './footer.module.css';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';
import banner2 from '../../assets/ban2.png';

function Footer(){
    return(
        <div className={styles.footerContainer}>
            <div>
                <img src={banner2} alt = 'img'/>
                
                <div className={styles.sociallinks}>
                    <img src={facebook} alt = 'img'/> 
                    <img src={instagram} alt = 'img'/>
                    <img src={twitter} alt = 'img'/>
                </div>
            </div>
            <div>
                <h3>Community</h3>
                <p>NFT</p>
                <p>Tokens</p>
                <p>Landlords</p>
                <p>Discord</p>
            </div>
            <div>
                <h3>Places</h3>
                <p>Castles</p>
                <p>Farms</p>
                <p>Beaches</p>
                <p>Learn More</p>
            </div>
            <div>
                <h3>About us</h3>
                <p> Road maps </p>
                <p>Creators </p>
                <p>Carrers</p>
                <p>Contact us.</p>
            </div>
            <p> &copy; 2022 Metabnb </p>
        </div>
    )
};
export default Footer;