import ImageEffect from 'react-image-effects';
import { Link, useHistory, useParams } from 'react-router-dom';
import items from './data.json';

function Details() {
    
  const { id } = useParams();

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
                                            <li><Link to="/">Home</Link></li>                                            
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

    <div class="breadcrumb-area breadcrumb-bg game-overview-breadcrumb">
        <div class="container">
        {items.Brastlewark.filter(item => item.id === parseInt(id)).map((item) => (         
          <div class="row align-items-center">
            <div class="col-xl-2 col-lg-4">
                <div class="game-overview-img">
                  <ImageEffect
                    url={item.thumbnail}
                    effect="airbrush"
                    width="100%"
                  />  
                </div>
            </div>
            <div class="col-xl-10 col-lg-8">
                <div class="breadcrumb-content text-center text-lg-left pl-80">                   
                    <h2><span>{item.name}</span></h2>
                    <div class="game-overview-status">
                        <ul>
                            <li><span>Total Age :</span> {item.age}</li>
                            <li><span>Weight :</span>{item.weight}</li>
                            <li><span>Color :</span>{item.hair_color}</li>                            
                        </ul>

                        <div className="mt-2">
                          <li>
                              <span>Friends :<br/></span>{item.friends.map((friend, index) => (
                                <span key={index}>{friend},</span>
                              ))}
                          </li>
                        </div>

                        <div className="mt-2">
                          <li>
                              <span>Professions :</span><br/>{item.professions.map((profession, index) => (
                                <span key={index}>{profession},</span>
                              ))}
                          </li>                         
                        </div>              
                    </div>
                </div>
            </div>
          </div>          
        ))}
        </div>
    </div>
    </>
  );
}

export default Details;
