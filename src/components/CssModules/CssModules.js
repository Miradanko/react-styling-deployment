import React from 'react';
import styles from './CssModules.module.scss';
import classNames from 'classnames';

function CssModeles(props) {
    const {selected = true } = props;
    console.log(styles);

    return (
        <>
            {/* <h1 className={`${styles['css-modules']} ${selected ? styles.selected : ''}`}> */}
            {/* <h1 className={classNames({[styles['css-modules']]: true , [styles.selected]: selected})}> */}
            <h1 className={classNames(styles['css-modules'] , { [styles.selected]: selected } )}>
                CssModules
            <span className={styles['lighter-text']}>lighter text</span>
            </h1>
            <div className='container'>This is global style</div>
        </>
    )
};

export default CssModeles;