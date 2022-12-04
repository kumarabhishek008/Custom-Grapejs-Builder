export default function(editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  const cats = c.blockCategories;
  const blocks = c.blocks;
  const labels = c.labels;
  if (cats.textcontent) {
    blocks.profilepages_textcontent_1 &&
      bm.add('profilepages_textcontent_1', {
        label:
          "<h4> Landingpage 2</h4>",
        category: labels.categorytextcontent,
        content: `
        <section class="grp-wrapper grp-position-absolute grp-top-0">
        <div class="grp-text-color-white grp-font-weight-500">
          <nav class="navbar navbar-expand-lg sticky">
            <div class="container-fluid">
              <a class="navbar-brand grp-text-color-white" href="#">Brand Name</a>
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
                <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link grp-text-color-white active" aria-current="page" href="#"
                      >Home</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link grp-text-color-white" href="#">Pricing</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link grp-text-color-white" href="#">Feature</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link grp-text-color-white" href="#">About</a>
                  </li>
                </ul>
                <form class="d-flex m-0">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-primary grp-ml-16" type="submit">
                    Search
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
        class="grp-wrapper grp-py-100 grp-text-color-white grp-px-32"
        id="landingpage_2"
      >
        <div class="grp-container-xxl grp-mx-auto">
          <div class="grp-row">
            <div class="grp-col-lg-6 grp-col-md-12 grp-col-xs-12 grp-display-flex grp-align-items-center">
              <div>
                  <h1 class="grp-h1">
                      International Network 
                  </h1>
                  <p class="grp-p">
                      We know how large objects will act, 
                      but things on a small scale.
                  </p>
                  <div class="grp-row">
                      <div class="grp-col-lg-4 grp-col-md-12 grp-col-xs-12 grp-py-16">
                          <a href="#" class="btn btn-primary grp-border-radius-40 grp-py-16 grp-px-32">
                              Get Quote Now
                          </a>
                      </div>
                      <div class="grp-col-lg-5 grp-col-md-12 grp-col-xs-12 grp-py-16">
                          <a href="#" class="btn btn-outline-light grp-border-radius-40 grp-py-16 grp-px-32">
                              Get Quote Now
                          </a>
                      </div>
                  </div>
              </div>
            </div>
            <div class="grp-col-lg-6 grp-col-md-12 grp-col-xs-12 grp-text-color-black">
              <form action="" class="grp-width-lg-70 grp-mx-auto default-card-outline grp-px-32 grp-py-32 grp-border-radius-10 grp-background-color-white">
                  <h5 class="grp-text-align-center grp-mb-32">Subscribe</h5>
                  <div class="form-group grp-py-4">
                      <label for="name">Name*</label>
                    <input type="text" class="form-control grp-border-radius-10" placeholder="name">
                  </div>
                  <div class="form-group grp-py-4">
                      <label for="email">Email*</label>
                    <input type="email" class="form-control grp-border-radius-10" placeholder="Email">
                  </div>
                  <div class="form-group grp-py-4">
                      <label for="Phone">Phone*</label>
                    <input type="text" class="form-control grp-border-radius-10" placeholder="Phone">
                  </div>
                  <button type="submit" class="btn btn-primary grp-border-radius-10 grp-px-32 grp-mt-16 grp-width-100">Send</button>
                </form>
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
                      <h3 class="grp-h3">Better Strategy 
                          With Quality Business</h3>
                      <p class="grp-p">Most calendars are designed for teams. 
                          Slate is designed for freelancers</p>
                  </div>
              </div>
              <div class="grp-row grp-justify-content-center grp-mt-32">
                  <div class="grp-col-lg-3 grp-px-16 grp-col-md-6 grp-col-xs-12">
                      <div class="grp-py-32 grp-px-32 default-card-outline grp-border-radius-10">
                          <span class="iconify" data-inline="false" data-icon="majesticons:users-line" style="color: #2091f9; font-size: 61px;"></span>
                          
                          <h6 class="grp-h6 grp-mt-16">OpenType features 
                              Variable fonts</h6>
                              <ul class="grp-pl-0">
                                  <p>-  The best products start 
                                      with Figma</p>
                                      <p>- Design with real data</p>
                                      <p>- Lightning fast prototyping</p>
                                      <p>- Fastest way to organize</p>
                                      <p>- Work at the speed of thought.</p>
                              </ul>
                              <a href="#">Learn more</a>
  
                      </div>
  
                  </div>
                  <div class="grp-col-lg-3 grp-px-16 grp-col-md-6 grp-col-xs-12">
                      <div class="grp-py-32 grp-px-32 default-card-outline grp-border-radius-10">
                          <span class="iconify" data-inline="false" data-icon="majesticons:users-line" style="color: #2091f9; font-size: 56px;"></span>
                          <h6 class="grp-h6 grp-mt-16">OpenType features 
                              Variable fonts</h6>
                              <ul class="grp-pl-0">
                                  <p>-  The best products start 
                                      with Figma</p>
                                      <p>- Design with real data</p>
                                      <p>- Lightning fast prototyping</p>
                                      <p>- Fastest way to organize</p>
                                      <p>- Work at the speed of thought.</p>
                              </ul>
                              <a href="#">Learn more</a>
                      </div>
  
                  </div>
                  <div class="grp-col-lg-3 grp-px-16 grp-col-md-6 grp-col-xs-12">
                      <div class="grp-py-32 grp-px-32 default-card-outline grp-border-radius-10">
                          <span class="iconify" data-inline="false" data-icon="majesticons:users-line" style="color: #2091f9; font-size: 61px;"></span>
  
                          <h6 class="grp-h6 grp-mt-16">OpenType features 
                              Variable fonts</h6>
                              <ul class="grp-pl-0">
                                  <p>-  The best products start 
                                      with Figma</p>
                                      <p>- Design with real data</p>
                                      <p>- Lightning fast prototyping</p>
                                      <p>- Fastest way to organize</p>
                                      <p>- Work at the speed of thought.</p>
                              </ul>
                              <a href="#">Learn more</a>
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
                      <div class="grp-py-32 grp-px-32 grp-border grp-border-color-gray6 grp-border-radius-10">
                          <div class="grp-width-px-100 grp-height-px-100 grp-border-circle grp-mx-auto">
                              <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" class="grp-width-100 grp-border-circle">
                          </div>
                          
                          <h6 class="grp-h6 grp-mt-16">OpenType features 
                              Variable fonts</h6>
                              <p class="grp-p">Slate helps you see how 
                                  many more days you need 
                                  to work to reach your financial 
                                  goal for the month and year.</p>
  
                      </div>
  
                  </div>
                  <div class="grp-col-lg-3 grp-px-16 grp-col-md-6 grp-col-xs-12">
                      <div class="grp-py-32 grp-px-32 grp-border grp-border-color-gray6 grp-border-radius-10">
                          <div class="grp-width-px-100 grp-height-px-100 grp-border-circle grp-mx-auto">
                              <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" class="grp-width-100 grp-border-circle">
                          </div>
                          <h6 class="grp-h6 grp-mt-16">OpenType features 
                              Variable fonts</h6>
                          <p class="grp-p">Slate helps you see how 
                              many more days you need 
                              to work to reach your financial 
                              goal for the month and year.</p>
                      </div>
  
                  </div>
                  <div class="grp-col-lg-3 grp-px-16 grp-col-md-6 grp-col-xs-12">
                      <div class="grp-py-32 grp-px-32 grp-border grp-border-color-gray6 grp-border-radius-10">
                          <div class="grp-width-px-100 grp-height-px-100 grp-border-circle grp-mx-auto">
                              <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" class="grp-width-100 grp-border-circle">
                          </div>
  
                          <h6 class="grp-h6 grp-mt-16">OpenType features 
                              Variable fonts</h6>
                              <p class="grp-p">Slate helps you see how 
                                  many more days you need 
                                  to work to reach your financial 
                                  goal for the month and year.</p>
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
                      <h3 class="grp-h3">About Us</h3>
                      <p class="grp-p">
                          Problems trying to resolve the conflict between 
                          the two major realms of Classical physics: Newtonian mechanics 
                      </p>
                  </div>
              </div>
              <div class="grp-row grp-flex-lg-row grp-flex-md-column-reverse">
                  <div class="grp-col-lg-6 grp-col-md-10 grp-col-xs-12 grp-display-flex grp-align-items-center grp-pr-lg-48">
                      <div>
                          <h4 class="grp-h4-med">Most trusted in our field</h4>
                              <p class="grp-p">Most calendars are designed for teams. Slate 
                                  is designed for freelancers who want a 
                                  simple way to plan their schedule.</p>
                          <ol class="">
                              <li class="grp-p grp-font-weight-600 grp-py-8">the quick fox jumps over the lazy 
                                  dog</li>
                              <li class="grp-p grp-font-weight-600 grp-py-8">the quick fox jumps over the lazy 
                                  dog</li>
                          </ol>
                      </div>
                  </div>
                  <div class="grp-col-lg-6 grp-mt-32 grp-col-md-10 grp-col-xs-12">
                      <img src="https://my-assets-bucket.s3.amazonaws.com/assets/assets/plugin2/aboutus.png" alt="content1" class="grp-width-100">
                  </div>
              </div>
          </div>
      </section>
  
        <!-- Pricing -->
  
        <section class="grp-wrapper grp-pb-48 grp-px-32">
          <div class="grp-container-xxl grp-mx-auto">
              <div class="grp-row grp-text-align-center">
                <div class="grp-col-lg-4 grp-mx-auto grp-mt-32 grp-col-md-10 grp-col-xs-12">
                  <h3 class="grp-h3">Pricing</h3>
                  <p class="grp-p">Problems trying to resolve the conflict between 
                      the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
              </div>
              <div class="grp-row grp-text-align-center grp-mt-48 grp-justify-content-center">
                <div class="grp-col-lg-3 grp-col-md-12 grp-py-32 grp-mt-48 ">
                  <div class="grp-border grp-border-radius-10 default-card-outline grp-py-32 grp-px-32">
                    <h4 class="grp-h4-med">Free</h4>
                    <p class="grp-p">Organize across all 
                      apps by hand</p>
                    <h3 class="grp-h3">$0<span class="grp-h4-med">/month</span></h3>
                    <ul class="grp-pl-0 grp-pt-16">
                      <p>Pricing Feature</p>
                      <p>Pricing Feature</p>
                      <p>Pricing Feature</p>
                      <p>Pricing Feature</p>
                      <p>Pricing Feature</p>
                    </ul>
                    <a href="#" class="btn btn-primary grp-border-radius-40 grp-px-32 grp-mt-16">Order now</a>
                  </div>
                </div>
                <div class="grp-col-lg-3 grp-col-md-12 grp-py-32  grp-text-color-white">
                  <div class="grp-border grp-border-radius-10 default-card-outline grp-py-64 grp-px-32 grp-background-color-gray1">
                    <h4 class="grp-h4-med">Standard</h4>
                    <p class="grp-p">Organize across all 
                      apps by hand</p>
                    <h3 class="grp-h3">$0<span class="grp-h4-med">/month</span></h3>
                    <ul class="grp-pl-0 grp-pt-16">
                      <p>Pricing Feature</p>
                      <p>Pricing Feature</p>
                      <p>Pricing Feature</p>
                      <p>Pricing Feature</p>
                      <p>Pricing Feature</p>
                    </ul>
                    <a href="#" class="btn btn-primary grp-border-radius-40 grp-px-32 grp-mt-16">Order now</a>
                  </div>
                </div>
                <div class="grp-col-lg-3 grp-col-md-12 grp-py-32 grp-mt-48">
                  <div class="grp-border grp-border-radius-10 default-card-outline grp-py-32 grp-px-32">
                    <h4 class="grp-h4-med">Business</h4>
                    <p class="grp-p">Organize across all 
                      apps by hand</p>
                    <h3 class="grp-h3">$0<span class="grp-h4-med">/month</span></h3>
                    <ul class="grp-pl-0 grp-pt-16">
                      <p>Pricing Feature</p>
                      <p>Pricing Feature</p>
                      <p>Pricing Feature</p>
                      <p>Pricing Feature</p>
                      <p>Pricing Feature</p>
                    </ul>
                    <a href="#" class="btn btn-primary grp-border-radius-40 grp-px-32 grp-mt-16">Order now</a>
                  </div>
                </div>
              </div>
            </div>
        </section>
  
        <!-- Contact Us -->
        <section class="grp-wrapper grp-py-100 grp-px-32 grp-background-color-gray1 grp-text-color-white">
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
  
        <section class="grp-wrapper grp-px-32 grp-py-100">
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
                      <form action="" class="grp-width-lg-70 grp-mx-auto default-card-outline grp-px-32 grp-py-32 grp-border-radius-10">
                          <h5 class="grp-text-align-center grp-py-32">Contact us</h5>
                          <div class="form-group grp-py-4">
                            <input type="text" class="form-control grp-border-radius-40" placeholder="name">
                          </div>
                          <div class="form-group grp-py-4">
                            <input type="text" class="form-control grp-border-radius-40" placeholder="name">
                          </div>
                          <div class="form-group grp-py-4">
                            <textarea name="" id="" cols="30" rows="5" class="form-control grp-border-radius-10"></textarea>
                          </div>
                          <button type="submit" class="btn btn-primary grp-border-radius-40 grp-px-32">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  
        <!--  footer -->
        <section class="grp-wrapper grp-py-48 grp-px-32 grp-background-color-gray1 grp-text-color-white">
          <div class="grp-container-xxl grp-mx-auto">
            <div class="grp-row">
              <div class="grp-col-lg-3 grp-col-md-6 grp-col-xs-12">
                <ul>
                  <h4 class="grp-h4">Get In Touch</h4>
                  <p class="grp-p"><a href="#" class="grp-text-color-white">the quick fox jumps over the 
                      lazy dog</a></p>
                      <div class="grp-display-flex grp-col-md-6 grp-col-xs-12">
                          <a href="#" class="grp-text-color-white grp-mx-16">
                            <i class="fa fa-facebook-square" style="font-size:36px"></i>
                          </a>
                          <a href="#" class="grp-text-color-white grp-mx-16">
                            <i class="fa fa-linkedin-square" style="font-size:36px"></i>
                          </a>
                          <a href="#" class="grp-text-color-white grp-mx-16">
                            <i class="fa fa-twitter-square" style="font-size:36px"></i>
                          </a>
                          <a href="#" class="grp-text-color-white grp-mx-16">
                            <i class="fa fa-youtube-square" style="font-size:36px"></i>
                          </a>
                      </div> 
                      <div class="grp-py-16 grp-px-16">
                        <i class="fa fa-street-view" style="font-size:36px"></i><span class="grp-px-16">7480 Mockingbird Hill </span>
                      </div>
                      <div class="grp-py-16 grp-px-16">
                        <i class="fa fa-phone" style="font-size:36px"></i><span class="grp-px-16">+91 999999999999 </span>
                      </div>
                </ul>
              </div>
              <div class="grp-col-lg-3 grp-col-md-6 grp-col-xs-12">
                <ul>
                  <h4 class="grp-h4">Company Info</h4>
                  <p class="grp-p"><a href="#" class="grp-text-color-white">About Us</a></p>
                  <p class="grp-p"><a href="#" class="grp-text-color-white">Carrier</a></p>
                  <p class="grp-p"><a href="#" class="grp-text-color-white">We are hiring</a></p>
                  <p class="grp-p"><a href="#" class="grp-text-color-white">Blog</a></p>
                  <!-- <p class="grp-p"><a href="#" class="grp-text-color-white">Contact</a></p> -->
                </ul>
              </div>
              <div class="grp-col-lg-3 grp-col-md-6 grp-col-xs-12">
                <ul>
                  <h4 class="grp-h4">Features</h4>
                  <p class="grp-p"><a href="#" class="grp-text-color-white">Business Marketing</a></p>
                  <p class="grp-p"><a href="#" class="grp-text-color-white">User Analytic</a></p>
                  <p class="grp-p"><a href="#" class="grp-text-color-white">Live Chat</a></p>
                  <p class="grp-p"><a href="#" class="grp-text-color-white">Unlimited Support</a></p>
                  <!-- <p class="grp-p"><a href="#" class="grp-text-color-white">Contact</a></p> -->
                </ul>
              </div>
              <div class="grp-col-lg-3 grp-col-md-6 grp-col-xs-12">
                <ul>
                  <h4 class="grp-h4">Resources</h4>
                  <p class="grp-p"><a href="#" class="grp-text-color-white">IOS & Android</a></p>
                  <p class="grp-p"><a href="#" class="grp-text-color-white">Watch a Demo</a></p>
                  <p class="grp-p"><a href="#" class="grp-text-color-white">Customers</a></p>
                  <p class="grp-p"><a href="#" class="grp-text-color-white">API</a></p>
                  <!-- <p class="grp-p"><a href="#" class="grp-text-color-white">Contact</a></p> -->
                </ul>
              </div>
            
            </div>
          </div>
        </section>
     `,
      });
  }
}
