// ### Social Link
// - Portfolio - https://kisay.is-a.dev/
// - Twitter - https://x.com/kislayy__
// - Linkedin - https://www.linkedin.com/in/kislayy
// - Instagram - https://instagram.com/kislayy_

import styles from './text-bold-l.module.css';

function TextBoldL({children}){
    return (
        <p className={styles.text}>
            {children}
        </p>
    );
}

export default TextBoldL;