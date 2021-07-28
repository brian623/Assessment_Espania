import ImageEffect from 'react-image-effects';
import { Link } from 'react-router-dom';
import items from './data.json';

function Listing() {
  return (
    <>  
        <header>          
            <div id="sticky-header" class="transparent-header">
                <div class="container-fluid s-container-full-padding">
                    <div class="row">
                        <div class="col-12">
                            <div class="main-menu menu-style-two">
                                <nav>
                                    <div class="logo">
                                    <Link to="/">
                                        <img src="https://www.wowchakra.com/wp-content/uploads/2020/02/logoC.png" alt="Logo"/>
                                      </Link>
                                    </div>
                                    <div id="mobile-menu" class="navbar-wrap d-none d-lg-flex">
                                        <ul>
                                            <li class="show"><Link to="/">Home</Link></li>                                            
                                        </ul>
                                    </div>
                                   
                                </nav>
                            </div>
                            <div class="mobile-menu"></div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </header>
    
        <main>
            <section class="slider-area slider-bg">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-9">
                            <div class="slider-content text-center">
                                <h6 class="wow fadeInDown" data-wow-delay=".2s">Brastlewark</h6>
                                <h2 class="tlt fix" data-in-effect="fadeInLeft">Gnome <span>town</span></h2>
                                <p class="wow fadeInUp" data-wow-delay="2s">Playing a fantasy role-playing game.</p>                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        <div class="area-bg-two">
            <section class="shop-area pt-120 pb-90">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-7 col-lg-8">
                                <div class="section-title title-style-two text-center mb-30">
                                    <span>Listing</span>
                                    <h2>Brast<span>lewark</span></h2>
                                </div>
                            </div>
                        </div>
                        <div class="row product-active">
                            {items.Brastlewark.map((item) => (
                                <div class="col-xl-3 mb-5"  key={item.id}>
                                    <div class="shop-item">
                                        <div class="product-thumb">
                                            <a href="#">
                                            <ImageEffect
                                                    url={item.thumbnail}
                                                    effect="airbrush"
                                                    width="100%"
                                                /> 
                                            </a>
                                        </div>
                                        <div class="product-content">                                    
                                            <h4>
                                            <Link to={`/details/${item.id}`}>
                                                {item.name}</Link>
                                            </h4>                                    
                                        </div>
                                    </div>
                                </div>                      
                            ))}
                        </div>
                    </div>
                </section>            
            </div>
        </main>
    </>
    );
}

export default Listing;
