import React from "react";
import { Link } from "react-router-dom";
import img1 from '../images/logo.svg';
import img2 from '../images/mega-img.png';
import img3 from '../images/store.svg';
import img4 from '../images/user.svg';
import img5 from '../images/heart.svg';
import img6 from '../images/cart.svg';
function Header(){
     
    return(
        <>
            <header>
        <div  className="container2">
            <div  className="d-flex">
                <Link to='/'><img src={img1} alt=""/></Link>
                <div  className="search">
                    <input type="text" placeholder="Search Products, Colors & More.."/>
                    <button type="submit">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <div  className="store d-flex">
                    <img src={img3}/>
                    <span  className="font-13">Stores</span>
                </div>
                <div  className="account">
                    <img src={img4} />
                    <img src={img5} />
                    <img src={img6} className="me-0" />
                </div>

            </div>
            <nav>
                <ul  className="ul-reset">
                    <li><a href='#'>SOFA</a></li>
                    <li  className='droppable'>
                        <a href='#'>LIVING</a>
                        <div  className='mega-menu'>
                            <div  className="cf">
                                <ul  className="ul-reset">
                                    <h3>Sofa Sets</h3>
                                    <li><a href='#'>Wooden Sofa Sets</a></li>
                                    <li><a href='#'>3 Seater Sofa</a></li>
                                    <li><a href='#'>2 Seater Sofa</a></li>
                                    <li><a href='#'>1 Seater Sofa</a></li>
                                    <li><a href='#'>L Shape Sofa</a></li>
                                </ul>
                                <ul  className="ul-reset">
                                    <h3>SOFA CUM BED</h3>
                                    <li><a href='#'>Wooden Sofa Sets</a></li>
                                    <li><a href='#'>3 Seater Sofa</a></li>
                                    <li><a href='#'>2 Seater Sofa</a></li>
                                    <li><a href='#'>1 Seater Sofa</a></li>
                                    <li><a href='#'>L Shape Sofa</a></li>
                                </ul> 
                                <ul  className="ul-reset">
                                    <h3>SOFA CUM BED</h3>
                                    <li><a href='#'>Wooden Sofa Sets</a></li>
                                    <li><a href='#'>3 Seater Sofa</a></li>
                                    <li><a href='#'>2 Seater Sofa</a></li>
                                    <li><a href='#'>1 Seater Sofa</a></li>
                                    <li><a href='#'>L Shape Sofa</a></li>
                                </ul> 
                                <ul  className="ul-reset">
                                    <li><img src={img2} alt=""/></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li  className='droppable'>
                        <a href='#'>BEDROOM</a>
                        <div  className='mega-menu'>
                            <div  className="container cf">
                                <ul  className="ul-reset">
                                    <h3>SOFA CUM BED</h3>
                                    <li><a href='#'>Wooden Sofa Sets</a></li>
                                    <li><a href='#'>3 Seater Sofa</a></li>
                                    <li><a href='#'>2 Seater Sofa</a></li>
                                    <li><a href='#'>1 Seater Sofa</a></li>
                                    <li><a href='#'>L Shape Sofa</a></li>
                                </ul> 
                                <ul  className="ul-reset">
                                    <h3>SOFA CUM BED</h3>
                                    <li><a href='#'>Wooden Sofa Sets</a></li>
                                    <li><a href='#'>3 Seater Sofa</a></li>
                                    <li><a href='#'>2 Seater Sofa</a></li>
                                    <li><a href='#'>1 Seater Sofa</a></li>
                                    <li><a href='#'>L Shape Sofa</a></li>
                                </ul> 
                                <ul  className="ul-reset">
                                    <h3>SOFA CUM BED</h3>
                                    <li><a href='#'>Wooden Sofa Sets</a></li>
                                    <li><a href='#'>3 Seater Sofa</a></li>
                                    <li><a href='#'>2 Seater Sofa</a></li>
                                    <li><a href='#'>1 Seater Sofa</a></li>
                                    <li><a href='#'>L Shape Sofa</a></li>
                                </ul> 
                                <ul  className="ul-reset">
                                    <img src={img2} alt=""/>
                                </ul> 
                            </div>
                        </div>
                    </li>
                    <li  className="droppable"><a href='#'>DINING</a>
                        <div  className='mega-menu'>
                            <div  className="container cf">
                                <ul  className="ul-reset">
                                    <h3>SOFA CUM BED</h3>
                                    <li><a href='#'>Wooden Sofa Sets</a></li>
                                    <li><a href='#'>3 Seater Sofa</a></li>
                                    <li><a href='#'>2 Seater Sofa</a></li>
                                    <li><a href='#'>1 Seater Sofa</a></li>
                                    <li><a href='#'>L Shape Sofa</a></li>
                                </ul> 
                                <ul  className="ul-reset">
                                    <h3>SOFA CUM BED</h3>
                                    <li><a href='#'>Wooden Sofa Sets</a></li>
                                    <li><a href='#'>3 Seater Sofa</a></li>
                                    <li><a href='#'>2 Seater Sofa</a></li>
                                    <li><a href='#'>1 Seater Sofa</a></li>
                                    <li><a href='#'>L Shape Sofa</a></li>
                                </ul> 
                                <ul  className="ul-reset">
                                    <h3>SOFA CUM BED</h3>
                                    <li><a href='#'>Wooden Sofa Sets</a></li>
                                    <li><a href='#'>3 Seater Sofa</a></li>
                                    <li><a href='#'>2 Seater Sofa</a></li>
                                    <li><a href='#'>1 Seater Sofa</a></li>
                                    <li><a href='#'>L Shape Sofa</a></li>
                                </ul> 
                                <ul  className="ul-reset">
                                    <img src={img2} alt=""/>
                                </ul> 
                            </div>
                        </div>
                    </li>
                    <li  className="droppable"><a href='#'>STORAGE</a>
                        <div  className='mega-menu'>
                            <div  className="container cf">
                                <ul  className="ul-reset">
                                    <h3>SOFA CUM BED</h3>
                                    <li><a href='#'>Wooden Sofa Sets</a></li>
                                    <li><a href='#'>3 Seater Sofa</a></li>
                                    <li><a href='#'>2 Seater Sofa</a></li>
                                    <li><a href='#'>1 Seater Sofa</a></li>
                                    <li><a href='#'>L Shape Sofa</a></li>
                                </ul> 
                                <ul  className="ul-reset">
                                    <h3>SOFA CUM BED</h3>
                                    <li><a href='#'>Wooden Sofa Sets</a></li>
                                    <li><a href='#'>3 Seater Sofa</a></li>
                                    <li><a href='#'>2 Seater Sofa</a></li>
                                    <li><a href='#'>1 Seater Sofa</a></li>
                                    <li><a href='#'>L Shape Sofa</a></li>
                                </ul> 
                                <ul  className="ul-reset">
                                    <h3>SOFA CUM BED</h3>
                                    <li><a href='#'>Wooden Sofa Sets</a></li>
                                    <li><a href='#'>3 Seater Sofa</a></li>
                                    <li><a href='#'>2 Seater Sofa</a></li>
                                    <li><a href='#'>1 Seater Sofa</a></li>
                                    <li><a href='#'>L Shape Sofa</a></li>
                                </ul> 
                                <ul  className="ul-reset">
                                    <img src={img2} alt=""/>
                                </ul> 
                            </div>
                        </div>
                    </li>
                    <li  className="droppable"><a href='#'>STUDY</a>
                        <div  className='mega-menu'>
                            <div  className="container cf">
                                <ul  className="ul-reset">
                                    <h3>SOFA CUM BED</h3>
                                    <li><a href='#'>Wooden Sofa Sets</a></li>
                                    <li><a href='#'>3 Seater Sofa</a></li>
                                    <li><a href='#'>2 Seater Sofa</a></li>
                                    <li><a href='#'>1 Seater Sofa</a></li>
                                    <li><a href='#'>L Shape Sofa</a></li>
                                </ul> 
                                <ul  className="ul-reset">
                                    <h3>SOFA CUM BED</h3>
                                    <li><a href='#'>Wooden Sofa Sets</a></li>
                                    <li><a href='#'>3 Seater Sofa</a></li>
                                    <li><a href='#'>2 Seater Sofa</a></li>
                                    <li><a href='#'>1 Seater Sofa</a></li>
                                    <li><a href='#'>L Shape Sofa</a></li>
                                </ul> 
                                <ul  className="ul-reset">
                                    <h3>SOFA CUM BED</h3>
                                    <li><a href='#'>Wooden Sofa Sets</a></li>
                                    <li><a href='#'>3 Seater Sofa</a></li>
                                    <li><a href='#'>2 Seater Sofa</a></li>
                                    <li><a href='#'>1 Seater Sofa</a></li>
                                    <li><a href='#'>L Shape Sofa</a></li>
                                </ul> 
                                <ul  className="ul-reset">
                                    <img src={img2} alt=""/>
                                </ul> 
                            </div>
                        </div>
                    </li>
                    <li  className="droppable"><a href='#'>TOP DEALS</a>
                        <div  className='mega-menu'>
                            <div  className="container cf">
                                <ul  className="ul-reset">
                                    <h3>SOFA CUM BED</h3>
                                    <li><a href='#'>Wooden Sofa Sets</a></li>
                                    <li><a href='#'>3 Seater Sofa</a></li>
                                    <li><a href='#'>2 Seater Sofa</a></li>
                                    <li><a href='#'>1 Seater Sofa</a></li>
                                    <li><a href='#'>L Shape Sofa</a></li>
                                </ul>
                                <ul  className="ul-reset">
                                    <h3>SOFA CUM BED</h3>
                                    <li><a href='#'>Wooden Sofa Sets</a></li>
                                    <li><a href='#'>3 Seater Sofa</a></li>
                                    <li><a href='#'>2 Seater Sofa</a></li>
                                    <li><a href='#'>1 Seater Sofa</a></li>
                                    <li><a href='#'>L Shape Sofa</a></li>
                                </ul>
                                <ul  className="ul-reset">
                                    <h3>SOFA CUM BED</h3>
                                    <li><a href='#'>Wooden Sofa Sets</a></li>
                                    <li><a href='#'>3 Seater Sofa</a></li>
                                    <li><a href='#'>2 Seater Sofa</a></li>
                                    <li><a href='#'>1 Seater Sofa</a></li>
                                    <li><a href='#'>L Shape Sofa</a></li>
                                </ul>
                                <ul  className="ul-reset">
                                    <img src={img2} alt=""/>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
        </>
    )
}
export default Header;