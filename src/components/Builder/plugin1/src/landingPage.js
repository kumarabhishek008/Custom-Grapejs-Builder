export default function(editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  const cats = c.blockCategories;
  const blocks = c.blocks;
  const labels = c.labels;
  if (cats.clients) {
    blocks.profilepages_clients_1 &&
      bm.add('profilepages_clients_1', {
        label:
          "<h4> Landingpage 1</h4>",
        category: labels.categoryclients,
        content: `<div class="gr-wrapper gr-py-72">
        <section class="grp-wrapper grp-position-sticky grp-top-0">
        <div class="grp-text-color-gray4 grp-font-weight-500">
          <nav class="navbar navbar-expand-lg sticky">
            <div class="container-fluid">
              <a class="navbar-brand grp-text-color-gray4" href="#">Navbar</a>
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
                    <a class="nav-link grp-text-color-gray4 active" aria-current="page" href="#"
                      >Home</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link grp-text-color-gray4" href="#">Pricing</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link grp-text-color-gray4" href="#">Feature</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link grp-text-color-gray4" href="#">About</a>
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
        class="grp-wrapper grp-py-200 grp-text-color-white grp-text-align-center"
        id="landingpage_1"
      >
        <div class="grp-container-xxl grp-mx-auto">
          <div class="grp-row">
            <div class="grp-col-lg-8 grp-col-md-10 grp-col-xs-12 grp-mx-auto">
              <h3 class="grp-h3">The best products start with Figma</h3>
              <p class="grp-p">
                Most calendars are designed for teams. Slate is designed for
                freelancers
              </p>
              <div class="grp-py-16">
                <a href="#" class="btn btn-primary grp-border-radius-40">Try for free</a>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Feature  -->
      <section class="grp-wrapper grp-text-align-center grp-py-100 grp-px-32">
          <div class="grp-container-xxl grp-mx-auto">
              <div class="grp-row">
                  <div class="grp-col-lg-12">
                      <h3 class="grp-h3">Features</h3>
                      <p class="grp-p">Most calendars are designed for teams. 
                          Slate is designed for freelancers</p>
                  </div>
              </div>
              <div class="grp-row grp-justify-content-center grp-mt-32">
                  <div class="grp-col-lg-3 grp-px-16 grp-col-md-6 grp-col-xs-12">
                      <div class="">
                          <span class="iconify" data-inline="false" data-icon="mdi:drawing" style="color: #2091f9; font-size: 61px;"></span>
                          
                          <h4 class="grp-h4 grp-mt-16">OpenType features 
                              Variable fonts</h4>
                              <p class="grp-p">Slate helps you see how 
                                  many more days you need 
                                  to work to reach your 
                                  financial goal.</p>
                      </div>
  
                  </div>
                  <div class="grp-col-lg-3 grp-px-16 grp-col-md-6 grp-col-xs-12">
                      <div class="">
                          <span class="iconify" data-inline="false" data-icon="mdi:draw" style="color: #2091f9; font-size: 56px;"></span>
                          <h4 class="grp-h4 grp-mt-16">OpenType features 
                              Variable fonts</h4>
                              <p class="grp-p">Slate helps you see how 
                                  many more days you need 
                                  to work to reach your 
                                  financial goal.</p>
                      </div>
  
                  </div>
                  <div class="grp-col-lg-3 grp-px-16 grp-col-md-6 grp-col-xs-12">
                      <div class="">
                          <span class="iconify" data-inline="false" data-icon="mdi:brush" style="color: #2091f9; font-size: 61px;"></span>
  
                          <h4 class="grp-h4 grp-mt-16">OpenType features 
                              Variable fonts</h4>
                              <p class="grp-p">Slate helps you see how 
                                  many more days you need 
                                  to work to reach your 
                                  financial goal.</p>
                      </div>
  
                  </div>
              </div>
              <div class="grp-row grp-mt-48">
                  <div class="grp-col-lg-10 grp-col-md-12 grp-col-xs-12 grp-mx-auto">
                      <img src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" class="grp-width-100 default-card-outline grp-border-radius-10">
                  </div>
              </div>
          </div>
      </section>
  
      <!-- Contents -->
  
      <section class="grp-wrapper grp-pb-48 grp-px-32">
          <div class="grp-container-xxl grp-mx-auto">
              <div class="grp-row grp-flex-lg-row grp-flex-md-column-reverse">
                  <div class="grp-col-lg-6 grp-col-md-10 grp-col-xs-12 grp-display-flex grp-justify-content-center grp-align-items-center">
                      <div>
                          <h4 class="grp-h4-med">Fastest way to 
                              organize</h4>
                              <p class="grp-p">Most calendars are designed for teams. 
                                  Slate is designed for freelancers</p>
                                  <div>
                                      <a href="#" class="btn btn-primary grp-border-radius-40">Get Started</a>
                                  </div>
                      </div>
                  </div>
                  <div class="grp-col-lg-6 grp-mt-32 grp-col-md-10 grp-col-xs-12">
                      <img src="https://image.freepik.com/free-vector/modern-realistic-detailed-laptop-isolated-white-vector-illustration_1624-285.jpg" alt="content1" class="grp-width-100">
                  </div>
              </div>
          </div>
      </section>
  
      <!-- Contents -->
  
      <section class="grp-wrapper grp-pb-48 grp-px-32">
        <div class="grp-container-xxl grp-mx-auto">
            <div class="grp-row grp-flex-lg-row grp-flex-md-column-reverse">
              <div class="grp-col-lg-6 grp-mt-32 grp-col-md-10 grp-col-xs-12">
                <img src="https://image.freepik.com/free-vector/tips-creative-ideas-business-innovation-isolated-flat-design-element-problem-solution-advice-brainstorming-male-character-thinking-concept-illustration_335657-1674.jpg" alt="content1" class="grp-width-100">
              </div>
                <div class="grp-col-lg-6 grp-col-md-10 grp-col-xs-12 grp-display-flex grp-justify-content-center grp-align-items-center">
                    <div>
                        <h6 class="grp-font-weight-500">At your fingertips</h6>
                        <h3 class="grp-h3-med">Lightning fast 
                          prototyping </h3>
                            <p class="grp-p">Most calendars are designed for teams. 
                                Slate is designed for freelancers</p>
                                <h6 class="grp-font-weight-500">Subscribe to our Newsletter</h6>
                                <p class="grp-body1">Available exclusivery on LoremIpsum</p>
                                <form class="grp-display-flex grp-justify-centent-center grp-align-items-center">
                                  <input type="email" class="form-control grp-border-radius-40" placeholder="your email">
                                    <button type="submit" class="btn btn-primary grp-border-radius-40 grp-width-30 grp-ml-16">Get Started</button>
                                </form>
                    </div>
                </div>
  
            </div>
        </div>
    </section>
  
    <!-- Partners -->
  
        <section class="grp-wrapper grp-pb-48 grp-px-32">
          <div class="grp-container-xxl grp-mx-auto">
              <div class="grp-row grp-text-align-center">
                <div class="grp-col-lg-12 grp-mt-32 grp-col-md-10 grp-col-xs-12">
                  <h3 class="grp-h3">Partners</h3>
                  <p class="grp-p">Most calendars are designed for teams. 
                    Slate is designed for freelancers</p>
                    <div>
                      <a href="" class="btn btn-primary grp-border-radius-40">Try for free</a>
                    </div>
                </div>
              </div>
              <div class="grp-row grp-text-align-center grp-justify-content-center">
                <div class="grp-col-lg-2 grp-display-flex grp-justify-content-center grp-align-items-center grp-px-32 grp-py-32">
                  <img src="http://pngimg.com/uploads/google/google_PNG19644.png" alt="" class="grp-width-100">
                </div>
                <div class="grp-col-lg-2 grp-display-flex grp-justify-content-center grp-align-items-center grp-px-32 grp-py-32">
                  <img src="https://kfinancial.com/wp-content/uploads/2019/02/amazon-logo-vector-png-vector-png-free-amazon-logos-705.jpg" alt="" class="grp-width-100">
                </div>
                <div class="grp-col-lg-2 grp-display-flex grp-justify-content-center grp-align-items-center grp-px-32 grp-py-32">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrhvNgn_ga3vWPX8IlegYNfSqyqbXy5578H7R4RbQjwB1n8i4sejiTonXAm9x_5-P7uQ&usqp=CAU" alt="" class="grp-width-100">
                </div>
                <div class="grp-col-lg-2 grp-display-flex grp-justify-content-center grp-align-items-center grp-px-32 grp-py-32">
                  <img src="https://logodownload.org/wp-content/uploads/2015/05/uber-logo-7.png" alt="" class="grp-width-100">
                </div>
                <div class="grp-col-lg-2 grp-display-flex grp-justify-content-center grp-align-items-center grp-px-32 grp-py-32">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Dropbox_logo_2017.svg/2560px-Dropbox_logo_2017.svg.png" alt="" class="grp-width-100">
                </div>
                <div class="grp-col-lg-2 grp-display-flex grp-justify-content-center grp-align-items-center grp-px-32 grp-py-32">
                  <img src="http://pngimg.com/uploads/google/google_PNG19644.png" alt="" class="grp-width-100">
                </div>
              </div>
            </div>
        </section>
  
        <!-- Pricing -->
  
        <section class="grp-wrapper grp-pb-48 grp-px-32">
          <div class="grp-container-xxl grp-mx-auto">
              <div class="grp-row grp-text-align-center">
                <div class="grp-col-lg-12 grp-mt-32 grp-col-md-10 grp-col-xs-12">
                  <h3 class="grp-h3">Pricing</h3>
                  <p class="grp-p">Most calendars are designed for teams. 
                    Slate is designed for freelancers</p>
                    <div>
                      <a href="" class="btn btn-primary grp-border-radius-40 grp-px-32">Try for free</a>
                    </div>
                </div>
              </div>
              <div class="grp-row grp-text-align-center grp-mt-32 grp-justify-content-center">
                <div class="grp-col-lg-3 grp-col-md-12 grp-py-32 grp-px-16">
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
                <div class="grp-col-lg-3 grp-col-md-12 grp-py-32 grp-px-16 grp-text-color-white">
                  <div class="grp-border grp-border-radius-10 default-card-outline grp-py-32 grp-px-32 grp-background-color-blue2">
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
                    <a href="#" class="btn btn-outlined-primary grp-background-color-white grp-border-radius-40 grp-px-32 grp-mt-16">Order now</a>
                  </div>
                </div>
                <div class="grp-col-lg-3 grp-col-md-12 grp-py-32 grp-px-16">
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
        <section class="grp-wrapper grp-py-48 grp-px-32">
          <div class="grp-container-xxl grp-mx-auto">
            <div class="grp-row">
              <div class="grp-col-lg-6 grp-col-md-12">
                <img src="https://image.freepik.com/free-vector/email-marketing-internet-chatting-24-hours-support_335657-3009.jpg" alt="" class="grp-width-100">
              </div>
              <div class="grp-col-lg-6 grp-col-md-12">
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
            <div class="grp-col-lg-3 grp-col-md-6 grp-col-xs-12 grp-text-align-center">
              <ul>
                <h4 class="grp-h4 grp-font-weight-600">Pages</h4>
                <p class="grp-p"><a href="#" class="grp-text-color-white">Home</a></p>
                <p class="grp-p"><a href="#" class="grp-text-color-white">Product</a></p>
                <p class="grp-p"><a href="#" class="grp-text-color-white">Pricing</a></p>
                <p class="grp-p"><a href="#" class="grp-text-color-white">About</a></p>
                <p class="grp-p"><a href="#" class="grp-text-color-white">Contact</a></p>
              </ul>
            </div>
            <div class="grp-col-lg-3 grp-col-md-6 grp-col-xs-12 grp-text-align-center">
              <ul>
                <h4 class="grp-h4 grp-font-weight-600">Pages</h4>
                <p class="grp-p"><a href="#" class="grp-text-color-white">Home</a></p>
                <p class="grp-p"><a href="#" class="grp-text-color-white">Product</a></p>
                <p class="grp-p"><a href="#" class="grp-text-color-white">Pricing</a></p>
                <p class="grp-p"><a href="#" class="grp-text-color-white">About</a></p>
                <p class="grp-p"><a href="#" class="grp-text-color-white">Contact</a></p>
              </ul>
            </div>
            <div class="grp-col-lg-3 grp-col-md-6 grp-col-xs-12 grp-text-align-center">
              <ul>
                <h4 class="grp-h4 grp-font-weight-600">Pages</h4>
                <p class="grp-p"><a href="#" class="grp-text-color-white">Home</a></p>
                <p class="grp-p"><a href="#" class="grp-text-color-white">Product</a></p>
                <p class="grp-p"><a href="#" class="grp-text-color-white">Pricing</a></p>
                <p class="grp-p"><a href="#" class="grp-text-color-white">About</a></p>
                <p class="grp-p"><a href="#" class="grp-text-color-white">Contact</a></p>
              </ul>
            </div>
            <div class="grp-col-lg-3 grp-col-md-6 grp-col-xs-12">
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
              <div class="grp-py-16 grp-px-16">
                <i class="fa fa-street-view" style="font-size:36px"></i><span class="grp-px-16">7480 Mockingbird Hill </span>
              </div>
              <div class="grp-py-16 grp-px-16">
                <i class="fa fa-phone" style="font-size:36px"></i><span class="grp-px-16">+91 999999999999 </span>
              </div>
            </div>           
          </div>
        </div>
      </section>
    `,
      });
  }
}
