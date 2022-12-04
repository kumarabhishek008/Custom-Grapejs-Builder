export default function(editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  const cats = c.blockCategories;
  const blocks = c.blocks;
  const labels = c.labels;
  if (cats.features) {
    blocks.profilepages_features_1 &&
      bm.add('profilepages_features_1', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Features+1.png' />",
        category: labels.categoryfeatures,
        content: `<section class="gr-wrapper gr-gr-py-806">
        <div class="gr-container-xl gr-mx-auto gr-px-32">
        <div class="row gr-my-2 d-flex justify-content-center flex-column align-items-center">
        <div class="col-md-8 ">
            <h2 class="gr-text-color-primary gr-h3 gr-text-align-center">What we offer to you</h2>
            <p class="gr-text-align-center gr-p gr-text-color-gray2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper
                ipsum
                adipiscing vestibulum. Feugiat elit, imperdiet laoreet nulla est, purus. Neque egestas cursus accumsan
                cursus. Mauris rutrum faucibus cursus egestas.</p>
        </div>
        </div>
        <div class="gr-mx-auto gr-py-24">
            <div class="row gr-my-2">
                <div class="col-md-3 d-flex justify-content-center align-items-center flex-column">
                        <div class="vectorImage gr-mx-auto gr-my-24">
                            <img class="vimg" src="https://grorapid.s3.amazonaws.com/static/profile-pag4-vector.png"
                                alt="">
                        </div>
                        <h2 class="gr-h4 gr-text-color-secondary gr-text-align-center">Value 1</h2>
                        <p class="gr-p gr-text-align-center gr-text-color-gray3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor
                            semper ipsum
                            adipiscing vestibulum.</p>
                </div>
                <div class="col-md-3 d-flex justify-content-center align-items-center flex-column">
                        <div class="vectorImage gr-mx-auto gr-my-24">
                            <img class="vimg" src="https://grorapid.s3.amazonaws.com/static/profile-pag4-vector.png"
                                alt="">
                        </div>
                        <h2 class="gr-h4 gr-text-color-secondary gr-text-align-center">Value 2</h2>
                        <p class="gr-p gr-text-align-center gr-text-color-gray3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor
                            semper ipsum
                            adipiscing vestibulum.</p>
                </div>
                <div class="col-md-3 d-flex justify-content-center align-items-center flex-column">
                        <div class="vectorImage gr-mx-auto gr-my-24">
                            <img class="vimg" src="https://grorapid.s3.amazonaws.com/static/profile-pag4-vector.png"
                                alt="">
                        </div>
                        <h2 class="gr-h4 gr-text-color-secondary gr-text-align-center">Value 3</h2>
                        <p class="gr-p gr-text-align-center gr-text-color-gray3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor
                            semper ipsum
                            adipiscing vestibulum.</p>
                </div>
                <div class="col-md-3 d-flex justify-content-center align-items-center flex-column">
                        <div class="vectorImage gr-mx-auto gr-my-24">
                            <img class="vimg" src="https://grorapid.s3.amazonaws.com/static/profile-pag4-vector.png"
                                alt="">
                        </div>
                        <h2 class="gr-h4 gr-text-color-secondary gr-text-align-center">Value 4</h2>
                        <p class="gr-p gr-text-align-center gr-text-color-gray3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor
                            semper ipsum
                            adipiscing vestibulum.</p>
                </div>
            </div>
        </div>
        </div>
    </section>`,
      });
    blocks.profilepages_features_2 &&
      bm.add('profilepages_features_2', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Features+2.png' />",
        category: labels.categoryfeatures,
        content: `<section class="gr-wrapper gr-background-color-primary bgcolor1 gr-py-80 profilepages-features-2">
          <div class="gr-container-xl gr-mx-auto gr-px-16">
            <h2 class="mh4 gr-text-color-primary .gr-text-align-center .gr-text-color-white gr-mb-64">Our Features</h2>
          <div class="row">
              <div class="col-md-3 gr-py-48">
                  <div class="d-flex justify-content-center align-items-start flex-column gr-background-color-white gr-py-48 gr-px-64 .gr-border-rounded">
                      <div class="l-vectorImage gr-px-16 gr-py-16 gr-my-48">
                          <img class="l-vimg" src="https://grorapid.s3.amazonaws.com/static/profile-pag4-vector.png"
                              alt="">
                      </div>
                      <h2 class="mh3 gr-text-color-secondary color2">Value 1</h2>
                      <p class="mp  colortext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor
                          semper ipsum
                          adipiscing vestibulum.</p>
                  </div>
              </div>
              <div class="col-md-3 gr-py-48">
                  <div class="d-flex justify-content-center align-items-start flex-column .gr-background-color-white  gr-py-48 gr-px-64 gr-border-rounded">
                      <div class="l-vectorImage gr-px-16 gr-py-16 my-3">
                          <img class="l-vimg" src="https://grorapid.s3.amazonaws.com/static/profile-pag4-vector.png"
                              alt="">
                      </div>
                      <h2 class="mh3 gr-text-color-secondary color2">Value 2</h2>
                      <p class="mp  colortext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor
                          semper ipsum
                          adipiscing vestibulum.</p>
                  </div>
              </div>
              <div class="col-md-3 gr-py-48">
                  <div class="d-flex justify-content-center align-items-start flex-column gr-background-color-white gr-py-48 px-4 gr-border-rounded">
                      <div class="l-vectorImage gr-px-16 gr-py-16 gr-my-48">
                          <img class="l-vimg" src="https://grorapid.s3.amazonaws.com/static/profile-pag4-vector.png"
                              alt="">
                      </div>
                      <h2 class="mh3 color2">Value 3</h2>
                      <p class="mp  colortext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor
                          semper ipsum
                          adipiscing vestibulum.</p>
                  </div>
              </div>
              <div class="col-md-3 gr-py-48">
                  <div class="d-flex justify-content-center align-items-start flex-column gr-background-color-white gr-py-48 px-4 gr-border-rounded">
                      <div class="l-vectorImage gr-px-16 gr-py-16 gr-my-48">
                          <img class="l-vimg" src="https://grorapid.s3.amazonaws.com/static/profile-pag4-vector.png"
                              alt="">
                      </div>
                      <h2 class="mh3 gr-text-color-secondary color2">Value 4</h2>
                      <p class="mp  colortext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor
                          semper ipsum
                          adipiscing vestibulum.</p>
                  </div>
              </div>
          </div>
        </div>
      </div>
  </section>`,
      });
    blocks.profilepages_features_3 &&
      bm.add('profilepages_features_3', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Features+3.png' />",
        category: labels.categoryfeatures,
        content: `<section class="gr-py-80 profilepages-features-3">
        <div class="gr-container-xl gr-mx-auto gr-px-16">
            <div class="row">
                <div class="col-8 gr-mx-auto">
                    <h2 class="mh4 gr-text-color-primary color1 gr-text-align-center">Our Services</h2>
                    <p class="gr-text-align-center mp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper
                        ipsum
                        adipiscing vestibulum. Feugiat elit, imperdiet laoreet nulla est, purus. Neque egestas cursus accumsan
                        cursus. Mauris rutrum faucibus cursus egestas.</p>
                </div>
                <div class="row">
                  <div class="col-md-6 gr-mt-48">
                      <div class="d-flex justify-content-center align-items-start gr-background-color-white gr-py-48 gr-px-64 gr-border-rounded default-card-shadow-radius">
                          <div class="vectorImage gr-px-16 gr-py-16 gr-mx-64 gr-my-64">
                              <img class="vimg" src="https://grorapid.s3.amazonaws.com/static/profile-pag4-vector.png"
                                  alt="">
                          </div>
                          <div>
                              <h2 class="mh3 gr-text-color-secondary color2">Value 1</h2>
                          <p class="mp  colortext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper
                              ipsum
                              adipiscing vestibulum. Feugiat elit, imperdiet laoreet nulla est, purus. Neque egestas cursus accumsan
                              cursus. Mauris rutrum faucibus cursus egestas.</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-6 gr-mt-48">
                      <div class="d-flex justify-content-center align-items-start gr-background-color-white gr-py-48 gr-px-64 gr-border-rounded ">
                          <div class="vectorImage gr-px-16 gr-py-16 gr-mx-64 gr-my-64">
                              <img class="vimg" src="https://grorapid.s3.amazonaws.com/static/profile-pag4-vector.png"
                                  alt="">
                          </div>
                          <div>
                              <h2 class="mh3 gr-text-color-secondary color2">Value 2</h2>
                          <p class="mp  colortext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper
                              ipsum
                              adipiscing vestibulum. Feugiat elit, imperdiet laoreet nulla est, purus. Neque egestas cursus accumsan
                              cursus. Mauris rutrum faucibus cursus egestas.</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-6 gr-mt-48">
                      <div class="d-flex justify-content-center align-items-start gr-background-color-white gr-py-48 gr-px-64 gr-border-rounded ">
                          <div class="l-vectorImage gr-px-16 gr-py-16 gr-mx-64 gr-my-64">
                              <img class="l-vimg" src="https://grorapid.s3.amazonaws.com/static/profile-pag4-vector.png"
                                  alt="">
                          </div>
                          <div>
                              <h2 class="mh3 gr-text-color-secondary color2">Value 3</h2>
                          <p class="mp  colortext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper
                              ipsum
                              adipiscing vestibulum. Feugiat elit, imperdiet laoreet nulla est, purus. Neque egestas cursus accumsan
                              cursus. Mauris rutrum faucibus cursus egestas.</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-6 gr-mt-48">
                      <div class="d-flex justify-content-center align-items-start gr-background-color-white gr-py-48 gr-px-64 gr-border-rounded ">
                          <div class="vectorImage gr-px-16 gr-py-16 m-4">
                              <img class="vimg" src="https://grorapid.s3.amazonaws.com/static/profile-pag4-vector.png"
                                  alt="">
                          </div>
                          <div>
                              <h2 class="mh3 gr-text-color-secondary color2">Value 4</h2>
                          <p class="mp  colortext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper
                              ipsum
                              adipiscing vestibulum. Feugiat elit, imperdiet laoreet nulla est, purus. Neque egestas cursus accumsan
                              cursus. Mauris rutrum faucibus cursus egestas.</p>
                          </div>
                      </div>
                  </div>
                </div>  
            </div>
        </div>
      </section>`,
      });
    blocks.profilepages_features_4 &&
      bm.add('profilepages_features_4', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Features+4.png' />",
        category: labels.categoryfeatures,
        content: `<section class=".gr-container-full no-padding profilepages-features-4">
          <div class="gr-container-xl gr-mx-auto gr-px-16">
              <div class="col-md-10 gr-mx-auto">
              <h1 class="color1 gr-text-color-primary gr-px-32">Our Services</h1>
               <p class="mp gr-px-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper ipsum adipiscing vestibulum. Feugiat elit, imperdiet laoreet nulla est, purus. Neque egestas cursus accumsan cursus. Mauris rutrum faucibus cursus egestas.</p>
               <div class="row">
                  <div class="col-md-6">
                      <div class="d-flex justify-content-center align-items-start gr-background-color-white gr-py-48">
                          <div class="vectorImage gr-px-16 gr-py-16 gr-mx-32 gr-my32 border border3 gr-border-rounded">
                              <div class="fa fa-briefcase color3 gr-text-color-secondary gr-text-align-center fa-icon" aria-hidden="true"></div>
                          </div>
                          <div>
                              <h2 class="mh3 gr-text-color-secondary color2">Value 1</h2>
                          <p class="mp  colortext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper
                              ipsum
                              adipiscing vestibulum. Feugiat elit, imperdiet laoreet nulla est, purus. Neque egestas cursus accumsan
                              cursus. Mauris rutrum faucibus cursus egestas.</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="d-flex justify-content-center align-items-start gr-background-color-white gr-py-48">
                          <div class="vectorImage gr-px-16 gr-py-16 gr-mx-32 gr-my32 border border3 gr-border-rounded">
                              <div class="fa fa-briefcase color3 gr-text-color-secondary gr-text-align-center fa-icon" aria-hidden="true"></div>
                          </div>
                          <div>
                              <h2 class="mh3 gr-text-color-secondary color2">Value 2</h2>
                          <p class="mp  colortext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper
                              ipsum
                              adipiscing vestibulum. Feugiat elit, imperdiet laoreet nulla est, purus. Neque egestas cursus accumsan
                              cursus. Mauris rutrum faucibus cursus egestas.</p>
                          </div>
                      </div>
                  </div>
               </div>
               <div class="row">
                  <div class="col-md-6">
                      <div class="d-flex justify-content-center align-items-start gr-background-color-white gr-py-48">
                          <div class="vectorImage gr-px-16 gr-py-16 gr-mx-32 gr-my32 border border3 gr-border-rounded">
                              <div class="fa fa-briefcase color3 gr-text-color-secondary gr-text-align-center fa-icon" aria-hidden="true"></div>
                          </div>
                          <div>
                              <h2 class="mh3 gr-text-color-secondary color2">Value 3</h2>
                          <p class="mp  colortext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper
                              ipsum
                              adipiscing vestibulum. Feugiat elit, imperdiet laoreet nulla est, purus. Neque egestas cursus accumsan
                              cursus. Mauris rutrum faucibus cursus egestas.</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="d-flex justify-content-center align-items-start gr-background-color-white gr-py-48 ">
                          <div class="vectorImage gr-px-16 gr-py-16 gr-mx-32 gr-my32 border border3 gr-border-rounded">
                              <div class="fa fa-briefcase color3 gr-text-color-secondary gr-text-align-center fa-icon" aria-hidden="true"></div>
                          </div>
                          <div>
                              <h2 class="mh3 gr-text-color-secondary color2">Value 4</h2>
                          <p class="mp  colortext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper
                              ipsum
                              adipiscing vestibulum. Feugiat elit, imperdiet laoreet nulla est, purus. Neque egestas cursus accumsan
                              cursus. Mauris rutrum faucibus cursus egestas.</p>
                          </div>
                      </div>
                  </div>
               </div>
              </div>
          </div>
      </section>`,
      });
    blocks.profilepages_features_5 &&
      bm.add('profilepages_features_5', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Features+5.png' />",
        category: labels.categoryfeatures,
        content: `<section class="gr-container-full no-padding gr-py-80 profilepages-features-5">
          <div class="gr-container-xl gr-mx-auto gr-px-16">
              <h1 class="gr-text-align-center gr-text-color-primary color1">Our Features</h1>
              <div class="row">
                  <div class="col-md-6 d-flex justify-content-around flex-column">
                      <div>
                          <h2 class="mh3 gr-text-color-secondary color2">Value 1</h2>
                          <p class="mp colortext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper ipsum adipiscing vestibulum.</p>
                      </div>
                      <div>
                          <h2 class="mh3 gr-text-color-secondary color2">Value 2</h2>
                          <p class="mp colortext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper ipsum adipiscing vestibulum.</p>
                      </div>
                      <div>
                          <h2 class="mh3 gr-text-color-secondary color2">Value 3</h2>
                          <p class="mp colortext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper ipsum adipiscing vestibulum.</p>
                      </div>
                  </div>
                  <div class="col-md-6 d-flex justify-content-center">
                      <img class="img-fluid object-fit-cover" src="https://rapidtech.s3.amazonaws.com/assets/p_assets/Group%2068.png" alt="" data-gjs-type='image'>
                  </div>
              </div>
          </div>
    </section>`,
      });
  }
}
