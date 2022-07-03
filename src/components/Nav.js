import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';


const styles = {
    icons: {
      margin: "0 22px",
      fontSize: "25px"
    }
  }
  
const Nav = () => {
    return(
        <nav>
            <GiHamburgerMenu style={styles.icons}/>
            <BiSearchAlt2 style={styles.icons}/>
            <BsFillPersonPlusFill style={styles.icons}/>
            <FaShoppingCart style={styles.icons}/>
        </nav>
    );
}
export default Nav;