import styles from './NavigationBar.module.css'
import { Link } from "react-router-dom"

function NavigationBar() {
    return (
        <div className={styles.NavigationBar}>
            <header>
                <ul>
                    <li><Link to="/">&lt;Home/&gt; </Link></li>
                    <li><Link to="/Projects">&lt;Projects/&gt;</Link></li>
                    <li><Link to="/Contact">&lt;Contact Me/&gt;</Link></li>
                </ul>
            </header>
        </div>

    );
}

export default NavigationBar