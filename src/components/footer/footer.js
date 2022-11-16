import styles from './footer.module.css';

function Footer(){
    return(
        <div className={styles.footerContainer}>
            <div>1 1</div>
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
        </div>
    )
};
export default Footer;