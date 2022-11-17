import { useState } from 'react';
import styles from './Header.module.css';
import Modal from './Modal';
import banner from '../../assets/banner.png';

function Nav1(){
    const [connect, setConnect] = useState(false);

    const onclickHandler = () => { 
        return(
            setConnect(true)
            
        )
    };
    const onclickHandler2 = (ans) => { 
        return(
            setConnect(ans)   
        )
    };


    return(
        <div className={styles.nav1Container} >
            {connect && <Modal check = {onclickHandler2}/>}

            <img src= {banner} alt='img'/>
            <div className={styles.nav1SubContainer}>
                <p>Home  </p> 
                <p> <a href="/Place-To-Stay">Place To Stay</a></p>
                <p>NFTs</p>
                <p>Community</p>
            </div>
            <button onClick={onclickHandler}> Connect Wallet</button>
            
        </div>
    )

}

export default Nav1;