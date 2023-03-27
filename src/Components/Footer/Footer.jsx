import React from 'react'
import SocialIcons from '../SocialIcons/SocialIcons'
// import footerImg from '../../images/as-whitetypeface.png'

function Footer() {
    return (
        <>
            <span className="copyright" style={{ 'color': '#c6c9d8', 'text-align': 'center', 'fontSize': '14px', 'opacity': '0.75', 'padding': '20px' }}><SocialIcons/>Copyright © 2022 Adediran Sulyman. </span>
           
            {/* <div className='footer d__flex align__items__center justify__content__space__between  pz-10' style={{ 'zIndex': '500', 'backgroundColor': '#000', 'padding': '20px 100px' }}>
                <img src={footerImg} alt="" className="footer__img" style={{ 'width': '150px' }} />

            </div> */}
        </>
    )
}

export default Footer