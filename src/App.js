import r1 from './photo/r1.png';
import arrow1 from './photo/arrow1.png'
import r2 from './photo/r2.png';
import arrow from './photo/arrow.png';
import github from './photo/github.png';
import inbox from './photo/inbox.png'; 
import './App.css';

function App() {
  return (
    <div>
      <div className='d-flex justify-content-between ps-3 pt-4 pe-3 pb-4 align-items-center'>
        <a href='#' className='a1'>
          <img src={arrow} className="me-2" alt="" width={15} height={20}/>
          Overview Page
        </a>
        <span>
          <a href="#" className='a1'><img src={github} alt="" width={20}/></a>
          <a href="#" className='a2'>
            <img src={inbox} alt="" width={20}/>
            Free Download
          </a>
          <button type="button" class="btn-close" aria-label="Close"></button>
        </span>
      </div>
      <span className='hr'></span>
      <main>
        <header className='bg-dark pt-3 pb-3'>
          <div className="container d-flex align-items-center justify-content-between">
          <h2 className='text-light fs-3'>Start Bootstrap</h2>
          <div>
            <a href="#" className='text-secondary text-decoration-none fs-5 me-4'>Home</a>
            <a href="#" className='text-secondary text-decoration-none fs-5 me-4'>About</a>
            <a href="#" className='text-secondary text-decoration-none fs-5 me-4'>Contact</a>
            <a href="#" className='text-light text-decoration-none fs-5'>Blog</a>
          </div>
          </div>
        </header>
        <section id='section-1' className='bg-light pt-5 pb-5 border-bottom'>
          <h2 className='text-center text-dark display-5 fw-bold mt-5'>Welcome to Blog Home!</h2>
          <p className='text-center fs-4 mb-5'>A Bootstrap 5 starter layout for your next blog homepage</p>
        </section>
        <section id='section-2'>
          <div className="container pt-4 pb-4">
            <div className="row">
              <div className="col-8 mb-4">
                <div class="card">
                  <img src={r1} class="card-img-top" alt="..."/>

                  <div class="card-body">
                    <p className='mb-0'>January 1, 2022</p>
                    <h5 class="card-title fs-1">Featured Post Title</h5>
                    <p class="card-text fs-5 mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, 
                      a laboriosam. Dicta expedita corporis animi vero voluptate 
                      voluptatibus possimus, veniam magni quis!
                    </p>
                    <a href="#" class="btn btn-primary fs-4 mt-2 mb-2">Read more 
                    <img src={arrow1} className="ms-2" width={25} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div class="card mb-4">
                  <div className="card-head rounded-top bg-secondary border-bottom pt-2 pb-2 ps-3">
                    <p class="card-title fs-4 text-light">Search</p>
                  </div>
                  <div class="card-body">
                    <div class="input-group mb-3 mt-3">
                      <input type="text" class="form-control fs-4" placeholder="Enter search term..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                      <button class="btn btn-primary fs-4" type="button" id="button-addon2">Go!</button>
                    </div>
                  </div>
                </div>
                <div class="card mb-4">
                  <div className="card-head rounded-top bg-secondary border-bottom pt-2 pb-2 ps-3">
                    <p class="card-title fs-4 text-light">Categories</p>
                  </div>
                  <div class="card-body">
                    <div className="row">
                      <div className="col-6 fs-5">
                          <a href="#">Web Design</a><br />
                          <a href="#">HTML</a><br />
                          <a href="#">Freebies</a>
                      </div>
                      <div className="col-6 fs-5">
                          <a href="#">JavaScript</a><br />
                          <a href="#">CSS</a><br />
                          <a href="#">Tutorials</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div className="card-head rounded-top bg-secondary border-bottom pt-2 pb-2 ps-3">
                    <p class="card-title fs-4 text-light">Side Widget</p>
                  </div>
                  <div class="card-body mt-1">
                    <p className='fs-5'>
                      You can put anything you want inside of these side widgets. 
                      They are easy to use, and feature the Bootstrap 5 card component!
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="row">
                    <div className="col-6 mb-4">
                      <div class="card">
                        <img src={r2} class="card-img-top" alt="..."/>

                        <div class="card-body">
                          <p>January 1, 2022</p>
                          <h5 class="card-title fs-2">Post Title</h5>
                          <p class="card-text fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                          <a href="#" class="btn btn-primary fs-5">Read more
                          <img src={arrow1} className="ms-2" width={25} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 mb-4">
                      <div class="card">
                        <img src={r2} class="card-img-top" alt="..."/>

                        <div class="card-body">
                          <p>January 1, 2022</p>
                          <h5 class="card-title fs-2">Post Title</h5>
                          <p class="card-text fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                          <a href="#" class="btn btn-primary fs-5">Read more
                          <img src={arrow1} className="ms-2" width={25} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div class="card">
                        <img src={r2} class="card-img-top" alt="..."/>

                        <div class="card-body">
                          <p>January 1, 2022</p>
                          <h5 class="card-title fs-2">Post Title</h5>
                          <p class="card-text fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                          <a href="#" class="btn btn-primary fs-5">Read more
                          <img src={arrow1} className="ms-2" width={25} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div class="card">
                        <img src={r2} class="card-img-top" alt="..."/>

                        <div class="card-body">
                          <p>January 1, 2022</p>
                          <h5 class="card-title fs-2">Post Title</h5>
                          <p class="card-text fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam.</p>
                          <a href="#" class="btn btn-primary fs-5">Read more
                          <img src={arrow1} className="ms-2" width={25} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className='mt-5' />
                    <nav aria-label="Page navigation example" className='mt-5 d-flex justify-content-center'>
                      <ul class="pagination">
                        <li class="page-item"><a class="page-link fs-5 pt-2 pb-2 ps-3 pe-3 text-dark" href="#">Newer</a></li>
                        <li class="page-item"><a class="page-link bg-primary text-light fs-5 pt-2 pb-2 ps-3 pe-3" href="#">1</a></li>
                        <li class="page-item"><a class="page-link fs-5 pt-2 pb-2 ps-3 pe-3" href="#">2</a></li>
                        <li class="page-item"><a class="page-link fs-5 pt-2 pb-2 ps-3 pe-3" href="#">3</a></li>
                        <li class="page-item"><a class="page-link fs-5 pt-2 pb-2 ps-3 pe-3 text-dark" href="#">...</a></li>
                        <li class="page-item"><a class="page-link fs-5 pt-2 pb-2 ps-3 pe-3" href="#">15</a></li>
                        <li class="page-item"><a class="page-link fs-5 pt-2 pb-2 ps-3 pe-3" href="#">Older</a></li>
                      </ul>
                    </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className='bg-dark pt-5 pb-5'>
          <p className='text-light text-center fs-4'>Copyright © Your Website 2022</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
