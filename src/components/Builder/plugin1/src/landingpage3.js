export default function (editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  const cats = c.blockCategories;
  const blocks = c.blocks;
  const labels = c.labels;
  if (cats.testimonials) {
    blocks.profilepages_testimonials_1 &&
      bm.add("profilepages_testimonials_1", {
        label:
          "<h3>Landingpage 3</h3>",
        category: labels.categorytestimonials,
        content: `
        <section class="grp-wrapper grp-position-absolute grp-top-0">
        <div class="grp-text-color-gray2 grp-font-weight-500">
          <nav class="navbar navbar-expand-lg sticky">
            <div class="container-fluid">
              <a class="navbar-brand grp-text-color-gray2" href="#">Brand Name</a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link grp-text-color-gray2 active" aria-current="page" href="#"
                      >Home</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link grp-text-color-gray2" href="#">Pricing</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link grp-text-color-gray2" href="#">Feature</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link grp-text-color-gray2" href="#">About</a>
                  </li>
                </ul>
                <form class="d-flex m-0">
                  <button class="btn btn-primary grp-ml-16" type="submit">
                    Get Started
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </section>
      <!-- 
  
              banner
             -->
      <section
        class="grp-wrapper grp-py-100 grp-text-color-black grp-px-32 grp-background-color-gray6"
      >
        <div class="grp-container-xxl grp-mx-auto">
          <div class="grp-row">
            <div class="grp-col-lg-7 grp-col-md-12 grp-col-xs-12 grp-text-align-center grp-col-md-12 grp-col-xs-12 grp-mx-auto">
              <div>
                  <h1 class="grp-h1">
                      Experts are here solve 
                      your business problem.
                  </h1>
                  <p class="grp-p">
                      We know how large objects will act, 
                      but things on a small scale.
                  </p>
                  <div class="grp-row grp-justify-content-center">
                      <div class="grp-col-lg-3 grp-col-md-12 grp-col-xs-12 grp-py-16">
                          <a href="#" class="btn btn-warning grp-text-color-white grp-border-radius-40 grp-py-16 grp-px-32">
                              Get Quote Now
                          </a>
                      </div>
                      <div class="grp-col-lg-3 grp-col-md-12 grp-col-xs-12 grp-py-16">
                          <a href="#" class="btn btn-outline-primary grp-border-radius-40 grp-py-16 grp-px-32">
                              Get Quote Now
                          </a>
                      </div>
                  </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Feature  -->
      <section class="grp-wrapper  grp-py-100 grp-px-32">
          <div class="grp-container-xxl grp-mx-auto">
              <div class="grp-row">
                  <div class="grp-col-lg-4 grp-text-align-center grp-col-md-8 grp-col-xs-12 grp-mx-auto">
                      <h3 class="grp-h3">WHY CHOOSE US</h3>
                      <p class="grp-p">Problems trying to resolve the conflict between 
                          the two major realms of Classical physics: Newtonian mechanics </p>
                  </div>
              </div>
              <div class="grp-row grp-justify-content-center grp-mt-32">
                  <div class="grp-col-lg-3 grp-px-16 grp-col-md-6 grp-col-xs-12 grp-mt-16">
                      <div class="grp-py-32 grp-px-32 grp-border grp-border-color-gray6 grp-border-radius-10">
                          <span class="iconify" data-inline="false" data-icon="majesticons:users-line" style="color: #2091f9; font-size: 61px;"></span>
                          
                          <h6 class="grp-h6 grp-mt-16">Digital Marketing</h6>
                              <p class="grp-p">the quick fox jumps over the lazy 
                                  dog the quick fox jumps over the 
                                  lazy dog</p>
  
                      </div>
  
                  </div>
                  <div class="grp-col-lg-3 grp-px-16 grp-col-md-6 grp-col-xs-12 grp-mt-16">
                      <div class="grp-py-32 grp-px-32 grp-border grp-border-color-gray6 grp-border-radius-10">
                          <span class="iconify" data-inline="false" data-icon="cil:graph" style="color: #2091f9; font-size: 56px;"></span>
                          <h6 class="grp-h6 grp-mt-16">Business Growing</h6>
                              <p class="grp-p">the quick fox jumps over the lazy 
                                  dog the quick fox jumps over the 
                                  lazy dog</p>
                      </div>
  
                  </div>
                  <div class="grp-col-lg-3 grp-px-16 grp-col-md-6 grp-col-xs-12 grp-mt-16">
                      <div class="grp-py-32 grp-px-32 grp-border grp-border-color-gray6 grp-border-radius-10">
                          <span class="iconify" data-inline="false" data-icon="clarity:users-line" style="color: #2091f9; font-size: 61px;"></span>
  
                          <h6 class="grp-h6 grp-mt-16">National top 50 firms</h6>
                              <p class="grp-p">the quick fox jumps over the lazy 
                                  dog the quick fox jumps over the 
                                  lazy dog</p>
                      </div>
  
                  </div>
                  <div class="grp-col-lg-3 grp-px-16 grp-col-md-6 grp-col-xs-12 grp-mt-16">
                      <div class="grp-py-32 grp-px-32 grp-border grp-border-color-gray6 grp-border-radius-10">
                          <span class="iconify" data-inline="false" data-icon="fa-solid:award" style="color: #2091f9; font-size: 61px;"></span>
  
                          <h6 class="grp-h6 grp-mt-16">Web Development</h6>
                              <p class="grp-p">the quick fox jumps over the lazy 
                                  dog the quick fox jumps over the 
                                  lazy dog</p>
                      </div>
  
                  </div>
              </div>
          </div>
      </section>
      
      <!-- Client -->
  
      <section class="grp-wrapper  grp-py-100 grp-px-32 grp-background-color-blue6">
          <div class="grp-container-xxl grp-mx-auto">
              <div class="grp-row">
                  <div class="grp-col-lg-4 grp-text-align-center grp-col-md-8 grp-col-xs-12 grp-mx-auto">
                      <h3 class="grp-h3">What Clients Say</h3>
                      <p class="grp-p">Problems trying to resolve the conflict between 
                          the two major realms of Classical physics: Newtonian mechanics </p>
                  </div>
              </div>
              <div class="grp-row grp-justify-content-center grp-mt-32">
                  <div class="grp-col-lg-3 grp-px-16 grp-col-md-6 grp-col-xs-12">
                      <div class="grp-py-32 grp-px-32 grp-border grp-border-color-gray6 grp-background-color-white grp-border-radius-10">
                          
                          <p class="grp-p">Slate helps you see how many 
                              more days you need to work to 
                              reach your financial goal.</p>
                          <div class=" grp-display-flex grp-justify-content-start grp-align-items-center">
                              <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" class=" grp-width-px-48 grp-height-px-48 grp-border-circle">
                              <h6 class="grp-h6 grp-text-color-orange grp-pl-16 grp-mb-0">Regina Miles
                                  <br>
                                 <span class="grp-text-color-gray2">Designer</span> 
                              </h6>
                          </div>
  
                      </div>
  
                  </div>
                  <div class="grp-col-lg-3 grp-px-16 grp-col-md-6 grp-col-xs-12">
                      <div class="grp-py-32 grp-px-32 grp-border grp-border-color-gray6 grp-background-color-white grp-border-radius-10">
                          <p class="grp-p">Slate helps you see how many 
                              more days you need to work to 
                              reach your financial goal.</p>
                          <div class=" grp-display-flex grp-justify-content-start grp-align-items-center">
                              <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" class=" grp-width-px-48 grp-height-px-48 grp-border-circle">
                              <h6 class="grp-h6 grp-text-color-orange grp-pl-16 grp-mb-0">Regina Miles
                                  <br>
                                 <span class="grp-text-color-gray2">Designer</span> 
                              </h6>
                          </div>
                      </div>
  
                  </div>
                  <div class="grp-col-lg-3 grp-px-16 grp-col-md-6 grp-col-xs-12">
                      <div class="grp-py-32 grp-px-32 grp-border grp-border-color-gray6 grp-background-color-white grp-border-radius-10">
                          
                          <p class="grp-p">Slate helps you see how many 
                              more days you need to work to 
                              reach your financial goal.</p>
                          <div class=" grp-display-flex grp-justify-content-start grp-align-items-center">
                              <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" class=" grp-width-px-48 grp-height-px-48 grp-border-circle">
                              <h6 class="grp-h6 grp-text-color-orange grp-pl-16 grp-mb-0">Regina Miles
                                  <br>
                                 <span class="grp-text-color-gray2">Designer</span> 
                              </h6>
                          </div>
                      </div>
  
                  </div>
              </div>
          </div>
      </section>
  
      <!-- About us -->
  
      <section class="grp-wrapper grp-pb-48 grp-px-32 grp-py-64">
          <div class="grp-container-xxl grp-mx-auto">
              <div class="grp-row">
                  <div class="grp-col-lg-5 grp-col-md-12 grp-mx-auto  grp-text-align-center">
                      <h3 class="grp-h3">We are providing best 
                          business service.</h3>
                      <p class="grp-p">
                          Problems trying to resolve the conflict between 
                          the two major realms of Classical physics: Newtonian mechanics 
                      </p>
                  </div>
              </div>
              <div class="grp-row">
                  <div class="grp-col-lg-8 grp-mt-32 grp-col-md-10 grp-col-xs-12 grp-mx-auto">
                      <img src="https://my-assets-bucket.s3.amazonaws.com/assets/assets/plugin2/card-item.png" alt="content1" class="grp-width-100 default-card-outline">
                  </div>
              </div>
          </div>
      </section>
  
      <!-- Teams -->
  
      <section class="grp-wrapper grp-py-32">
          <div class="grp-container-xxl grp-mx-auto">
              <div class="grp-row">
                  <div class="grp-col-lg-6 grp-col-md-11 grp-col-xs-12 grp-mx-auto grp-text-align-center">
                      <h3 class="grp-h3">
                          Meet Our Team
                      </h3>
                      <p class="grp-p">
                          Problems trying to resolve the conflict between 
                          the two major realms of Classical physics: Newtonian mechanics 
                      </p>
                  </div>
              </div>
              <div class="div grp-row grp-mt-32">
                  <div class="grp-col-lg-4 grp-col-md-6 grp-col-xs-12 grp-px-16">
                      <div class="grp-border grp-border-color-gray6">
                          <img src="https://my-assets-bucket.s3.amazonaws.com/assets/assets/plugin2/team1.png" alt="" class="grp-width-100">
                          <div class="grp-text-align-center grp-py-32 grp-px-32">
                              <h6 class="grp-h6">
                                  Rodney Stratton
                              </h6>
                              <p class="grp-p">
                                  Consultant
                              </p>
                              <div class="grp-display-flex grp-justify-content-center">
                                  <a href="#" class="grp-text-color-blue2 grp-mx-16">
                                      <i class="fa fa-facebook-square" style="font-size:36px"></i>
                                    </a>
                                    <a href="#" class="grp-text-color-blue2 grp-mx-16">
                                      <i class="fa fa-linkedin-square" style="font-size:36px"></i>
                                    </a>
                                    <a href="#" class="grp-text-color-blue2 grp-mx-16">
                                      <i class="fa fa-twitter-square" style="font-size:36px"></i>
                                    </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="grp-col-lg-4 grp-col-md-6 grp-col-xs-12 grp-px-16">
                      <div class="grp-border grp-border-color-gray6">
                          <img src="https://my-assets-bucket.s3.amazonaws.com/assets/assets/plugin2/team2.png" alt="" class="grp-width-100">
                          <div class="grp-text-align-center grp-py-32 grp-px-32">
                              <h6 class="grp-h6">
                                  Rodney Stratton
                              </h6>
                              <p class="grp-p">
                                  Consultant
                              </p>
                              <div class="grp-display-flex grp-justify-content-center">
                                  <a href="#" class="grp-text-color-blue2 grp-mx-16">
                                      <i class="fa fa-facebook-square" style="font-size:36px"></i>
                                    </a>
                                    <a href="#" class="grp-text-color-blue2 grp-mx-16">
                                      <i class="fa fa-linkedin-square" style="font-size:36px"></i>
                                    </a>
                                    <a href="#" class="grp-text-color-blue2 grp-mx-16">
                                      <i class="fa fa-twitter-square" style="font-size:36px"></i>
                                    </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="grp-col-lg-4 grp-col-md-6 grp-col-xs-12 grp-px-16">
                      <div class="grp-border grp-border-color-gray6">
                          <img src="https://my-assets-bucket.s3.amazonaws.com/assets/assets/plugin2/team3.png" alt="" class="grp-width-100">
                          <div class="grp-text-align-center grp-py-32 grp-px-32">
                              <h6 class="grp-h6">
                                  Rodney Stratton
                              </h6>
                              <p class="grp-p">
                                  Consultant
                              </p>
                              <div class="grp-display-flex grp-justify-content-center">
                                  <a href="#" class="grp-text-color-blue2 grp-mx-16">
                                      <i class="fa fa-facebook-square" style="font-size:36px"></i>
                                    </a>
                                    <a href="#" class="grp-text-color-blue2 grp-mx-16">
                                      <i class="fa fa-linkedin-square" style="font-size:36px"></i>
                                    </a>
                                    <a href="#" class="grp-text-color-blue2 grp-mx-16">
                                      <i class="fa fa-twitter-square" style="font-size:36px"></i>
                                    </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  
  
  
        <!-- Contact Us -->
        <section class="grp-wrapper grp-py-100 grp-px-32 grp-background-color-white grp-text-color-black">
          <div class="grp-container-xxl grp-mx-auto">
            <div class="grp-row">
              <div class="grp-col-lg-6 grp-col-md-12 grp-display-flex grp-align-items-center">
                  <div>
                      <h3 class="grp-h3">
                          We Have Branches All 
                          Over The World
                      </h3>
                      <p class="grp-p grp-mt-16 grp-pr-lg-64">
                          The gradual accumulation of information about atomic and 
                          small-scale behaviour during the first quarter of the 20th 
                          century, which gave some indications about how small things 
                          do behave, produced an increasing confusion which was 
                          Heisenberg, and Born.
                      </p>
                  </div>
              </div>
              <div class="grp-col-lg-6 grp-col-md-12">
              <img src="https://my-assets-bucket.s3.amazonaws.com/assets/assets/plugin2/map.png" alt="" class="grp-width-100">
              </div>
            </div>
          </div>
        </section>
  
        <!--  Contact -->
  
        <section class="grp-wrapper grp-px-32 grp-py-100" id="landingpage_contact_2">
            <div class="grp-container-xxl grp-mx-auto">
                <div class="grp-row">
                    <div class="grp-col-lg-6 grp-col-md-12 grp-col-xs-12 grp-display-flex grp-align-items-center">
                        <div>
                            <h3 class="grp-h3">
                                Contact Us
                            </h3>
                            <p class="grp-p">
                              The gradual accumulation of information about atomic and 
                              small-scale behaviour during the first quarter of the 20th 
                              century, which gave some indications about how small things 
                              do behave, produced an increasing confusion which was 
                              Heisenberg, and Born.
                            </p>
                        </div>
                        
                    </div>
                    <div class="grp-col-lg-6 grp-col-md-12 grp-col-xs-12">
                      <form action="" class="grp-width-lg-70 grp-mx-auto grp-px-32 grp-py-32 grp-border-radius-10">
                          <h3 class="grp-h3 grp-text-align-center grp-py-32">Contact us</h3>
                          <div class="form-group grp-py-4">
                            <input type="text" class="form-control grp-border-radius-4" placeholder="name">
                          </div>
                          <div class="form-group grp-py-4">
                            <input type="text" class="form-control grp-border-radius-4" placeholder="email">
                          </div>
                          <div class="form-group grp-py-4">
                            <textarea name="" id="" cols="30" rows="5" class="form-control grp-border-radius-10"></textarea>
                          </div>
                          <button type="submit" class="btn btn-warning grp-border-radius-4 grp-px-32 grp-text-color-white">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  
        <!--  footer -->
        <section class="grp-wrapper grp-py-48 grp-px-32 grp-background-color-blue6 grp-text-color-black">
          <div class="grp-container-xxl grp-mx-auto">
              <div class="grp-row grp-py-32">
                  <div class="grp-col-lg-9 grp-col-md-12">
                      <h3 class="grp-h3">Brand Logo</h3>
                  </div>
                  <div class="grp-col-lg-3 grp-col-md-12">
                      <div class="grp-display-flex grp-col-md-6 grp-col-xs-12">
                          <a href="#" class="grp-text-color-black grp-mx-16">
                            <i class="fa fa-facebook-square" style="font-size:36px"></i>
                          </a>
                          <a href="#" class="grp-text-color-black grp-mx-16">
                            <i class="fa fa-linkedin-square" style="font-size:36px"></i>
                          </a>
                          <a href="#" class="grp-text-color-black grp-mx-16">
                            <i class="fa fa-twitter-square" style="font-size:36px"></i>
                          </a>
                          <a href="#" class="grp-text-color-black grp-mx-16">
                            <i class="fa fa-youtube-square" style="font-size:36px"></i>
                          </a>
                      </div> 
                  </div>
              </div>
            <div class="grp-row">
              <div class="grp-col-lg-3 grp-col-md-6 grp-col-xs-12">
                <ul class="grp-pl-0">
                  <h4 class="grp-h4">Get In Touch</h4>
                      <div class="grp-py-8">
                        <i class="fa fa-street-view" style="font-size:36px"></i><span class="grp-px-16">7480 Mockingbird Hill </span>
                      </div>
                      <div class="grp-py-8">
                        <i class="fa fa-phone" style="font-size:36px"></i><span class="grp-px-16">+91 999999999999 </span>
                      </div>
                </ul>
              </div>
              <div class="grp-col-lg-3 grp-col-md-6 grp-col-xs-12">
                <ul class="grp-pl-0">
                  <h4 class="grp-h4">Company Info</h4>
                  <p class="grp-p"><a href="#" class="grp-text-color-black">About Us</a></p>
                  <p class="grp-p"><a href="#" class="grp-text-color-black">Carrier</a></p>
                  <p class="grp-p"><a href="#" class="grp-text-color-black">We are hiring</a></p>
                  <p class="grp-p"><a href="#" class="grp-text-color-black">Blog</a></p>
                  <!-- <p class="grp-p"><a href="#" class="grp-text-color-black">Contact</a></p> -->
                </ul>
              </div>
              <div class="grp-col-lg-3 grp-col-md-6 grp-col-xs-12">
                <ul class="grp-pl-0">
                  <h4 class="grp-h4">Features</h4>
                  <p class="grp-p"><a href="#" class="grp-text-color-black">Business Marketing</a></p>
                  <p class="grp-p"><a href="#" class="grp-text-color-black">User Analytic</a></p>
                  <p class="grp-p"><a href="#" class="grp-text-color-black">Live Chat</a></p>
                  <p class="grp-p"><a href="#" class="grp-text-color-black">Unlimited Support</a></p>
                  <!-- <p class="grp-p"><a href="#" class="grp-text-color-black">Contact</a></p> -->
                </ul>
              </div>
              <div class="grp-col-lg-3 grp-col-md-6 grp-col-xs-12">
                <ul class="grp-pl-0">
                  <h4 class="grp-h4">Resources</h4>
                  <p class="grp-p"><a href="#" class="grp-text-color-black">IOS & Android</a></p>
                  <p class="grp-p"><a href="#" class="grp-text-color-black">Watch a Demo</a></p>
                  <p class="grp-p"><a href="#" class="grp-text-color-black">Customers</a></p>
                  <p class="grp-p"><a href="#" class="grp-text-color-black">API</a></p>
                  <!-- <p class="grp-p"><a href="#" class="grp-text-color-black">Contact</a></p> -->
                </ul>
              </div>
            
            </div>
          </div>
        </section>
    `,
      });

  }
}
