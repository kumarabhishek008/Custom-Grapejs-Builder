export default function(editor, opt = {}) {
  const c = opt;
  const bm = editor.BlockManager;
  const cats = c.blockCategories;
  const { blocks } = c;
  const { labels } = c;
  if (cats.banner) {
    blocks.profilepages_banner_1 &&
      bm.add('profilepages_banner_1', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Introduction+1.png' />",
        category: labels.categoryBanner,
        content: `<section class="grp-wrapper  grp-py-72" id="banner_1">
        <div class="grp-container-xxl grp-mx-auto grp-px-16">
        <div class="row d-flex justify-content-center grp-py-8">
           <div class="col-md-8 d-flex align-items-center flex-column">
              <h1 class="grp-h2 grp-text-align-center grp-text-color-white grp-mt-8">Banner Title to Reach Your Customer</h1>
              <p class="grp-p theme-spacing-2 grp-text-align-center grp-text-color-white grp-font-weight-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper ipsum
                 adipiscing vestibulum. Feugiat elit, imperdiet laoreet nulla est, purus. Neque egestas cursus accumsan
                 cursus. Mauris rutrum faucibus cursus egestas.</p>
                 <a href='#' class="btn btn-outline-primary grp-width-40 grp-button-primary grp-text-color-white grp-text-align-center">Get to know</a>
           </div>
            </div>
        </div>
     </section>`,
      });
    blocks.profilepages_banner_2 &&
      bm.add('profilepages_banner_2', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Introduction+2.png' />",
        category: labels.categoryBanner,
        content: `<section class="grp-wrapper">
          <div class="grp-container-xxl grp-mx-auto grp-px-16">
         <div class="row">
            <div class="col-lg-6 col-md-12 col-xs-12 d-flex justify-content-center flex-column grp-py-16">
               <h1 class="grp-h2 grp-my-16 ">Creative agency focused on vision, product and people</h1>
               <p class="grp-p grp-font-weight-400 grp-my-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper ipsum
                  adipiscing vestibulum. Feugiat elit, imperdiet laoreet nulla est, purus. Neque egestas cursus accumsan
                  cursus. Mauris rutrum faucibus cursus egestas.</p>
                  <div>
                  <a href='#' class="btn btn-primary grp-text-color-white">Get Started</a>
                  </div>
            </div>
            <div class="col-lg-6 col-md-12 col-xs-12 grp-text-align-center">
               <img class="grp-width-100 object-fit-cover"
                  src="https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=610&q=80"
                  alt="" data-gjs-type='image'>
            </div>
         </div>
      </div>
          </section>`,
      });
    blocks.profilepages_banner_3 &&
      bm.add('profilepages_banner_3', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Introduction+3.png' />",
        category: labels.categoryBanner,
        content: `<section class="grp-wrapper grp-py-100" id="banner_2">
      <div class="grp-container-xxl grp-mx-auto grp-px-16">
         <div class="row">
            <div class="col-lg-8 col-md-12 col-xs-12 grp-pl-lg-48">
               <h1 class="grp-h2  grp-text-color-white">Boost your Business like a Rocket</h1>
               <p class=" grp-text-color-white grp-p grp-font-weight-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper
                  ipsum
                  adipiscing vestibulum. Feugiat elit, imperdiet laoreet nulla est, purus. Neque egestas cursus accumsan
                  cursus. Mauris rutrum faucibus cursus egestas.</p>
                  <a href='#' class="btn btn-outline-primary">Get to know</a>
            </div>
         </div>
      </div> 
          </section>`,
      });
    blocks.profilepages_banner_4 &&
      bm.add('profilepages_banner_4', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Introduction+4.png' />",
        category: labels.categoryBanner,
        content: `<section class="grp-wrapper grp-py-32 grp-background-color-blue2">
          <div class="grp-container-xl grp-mx-auto grp-px-16">
         <div class="row">
            <div class="col-lg-6 col-md-12 grp-text-align-center">
               <img class="grp-width-100 object-fit-cover"
                  src="https://images.unsplash.com/photo-1587377839307-97ea364b9243?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80"
                  alt="" data-gjs-type='image'>
            </div>
            <div class="col-lg-6 col-md-12 grp-py-32 d-flex justify-content-center align-items-start flex-column">
               <h1 class="grp-h2">Get Engaged your customers <span class="grp-text-color-white">with Meetings</span></h1>
               <p class="grp-p grp-font-weight-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper
                  ipsum
                  adipiscing vestibulum. Feugiat elit, imperdiet laoreet nulla est, purus. Neque egestas cursus accumsan
                  cursus. Mauris rutrum faucibus cursus egestas.</p>
                  <a href='#' class="btn btn-primary grp-text-color-white ">Get Started</a>
            </div>
         </div>
      </div>
          </section>`,
      });
    blocks.profilepages_banner_5 &&
      bm.add('profilepages_banner_5', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Introduction+5.png' />",
        category: labels.categoryBanner,
        content: `<section class="grp-wrapper grp-py-100" id="banner_3">
         <div class="grp-container-xl grp-mx-auto grp-pl-32 grp-px-16">
            <div class="row grp-mx-80 grp-my-80">
               <div class="col-lg-8 col-md-12 col-xs-12 grp-px-32 grp-text-align-center grp-mx-auto">
                  <h1 class="grp-h2  grp-text-color-white">Banner Title to Connect with <span class="grp-text-color-blue2">Your Customer</span></h1>
                  <p class="grp-p grp-font-weight-400 grp-text-color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper
                  ipsum
                  adipiscing vestibulum. Feugiat elit, imperdiet laoreet nulla est, purus. Neque egestas cursus accumsan
                  cursus. Mauris rutrum faucibus cursus egestas.</p>
                  <form action="POST" class="form-inline d-flex justify-content-center">
                     <div class="form-group">
                     <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp"
                     placeholder="Enter email">
                     </div>
                     <button type="submit" class="btn btn-primary grp-text-color-white">Get to know</button>
                  </form>
               </div>
            </div>
         </div>
         </section>`,
      });
  }
}
