export default function(editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  const cats = c.blockCategories;
  const blocks = c.blocks;
  const labels = c.labels;
  if (cats.cta) {
    blocks.profilepages_cta_1 &&
      bm.add('profilepages_cta_1', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Call-To-Action+1.png' />",
        category: labels.categorycta,
        content: `<section class="gr-background-color-primary gr-wrapper">
        <div class="gr-container-xl gr-mx-auto gr-px-16">
            <div class="row">
                <div class="col-md-7 gr-px-32 gr-py-16 d-flex justify-content-center flex-column">
                    <h2 class="gr-text-color-white gr-h3 gr-px-8">Let’s start building your campaign</h2>
                    <p class="gr-p gr-text-color-white gr-px-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper ipsum adipiscing vestibulum.</p>
                    <a href='#' class="gr-width-md-50 gr-button-primary gr-text-color-white .gr-text-align-center">Start free trial</a>
                    
                </div>
                <div class="col-md-5 d-flex justify-content-center gr-px-0">
                    <img src="https://rapidtech.s3.amazonaws.com/assets/profilepages/Rectangle+6.png" class="theme-cta-img object-fit-cover" alt="">
                </div>
            </div>
        </div>
    </div>`,
      });
    blocks.profilepages_cta_2 &&
      bm.add('profilepages_cta_2', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Call-To-Action+2.png' />",
        category: labels.categorycta,
        content: `<section class="gr-wrapper gr-background-color-primary gr-py-100 profilepages_cta_2">
                        <div class="gr-container-xl gr-mx-auto gr-px-16">
                            <div class="row d-flex justify-content-center">
                                <div class="col-6 d-flex justify-content-center align-items-center flex-column">
                                    <h2 class="gr-text-color-white gr-h3-med gr-text-align-center">Ready to join us?</h2>
                                    <p class="gr-text-color-white gr-p gr-text-align-center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper ipsum adipiscing vestibulum.</p>
                                    <a href='#' class="gr-button-primary gr-text-color-white text-center">
                                    SIGN UP FOR FREE
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>`,
      });
    blocks.profilepages_cta_3 &&
      bm.add('profilepages_cta_3', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Call-To-Action+3.png' />",
        category: labels.categorycta,
        content: `<div class="gr-background-color-primary gr-wrapper gr-py-100 profilepages_cta_3">
        <div class="gr-container-xl gr-mx-auto gr-px-16">
            <div class="row align-items-start">
                <div class="col-md-8 d-flex justify-content-start flex-column">
                    <h2 class="gr-width-md-66 gr-text-color-white gr-h3">START BUILDING YOUR OWN CAMPAIGN</h2>
                    <p class="gr-p gr-text-color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper ipsum adipiscing vestibulum.</p>
                    <a href='#' class="gr-width-50 gr-default-button gr-text-color-primary gr-background-color-white gr-px-8 gr-py-8 text-center">Start free trial</a> 
                </div>
            </div>
        </div>
        </div>`,
      });
    // blocks.profilepages_cta_4 &&
    //         bm.add("profilepages_cta_4", {
    //     label:"<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Call-To-Action+4.png' />",
    //     category: labels.categorycta,
    //     content:
    //     `<div class="gr-background-color-primary gr-wrapper gr-py-72 profilepages_cta_3">
    //         <div class="gr-container-full">
    //             <div class="row">
    //                 <div class="col-md-7 gr-mx-auto gr-px-64 d-flex justify-content-center flex-column">
    //                     <h2 class="gr-width-md-66 gr-text-color-white gr-h3">Let’s start building your campaign</h2>
    //                     <p class="gr-p gr-text-color-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper ipsum adipiscing vestibulum.</p>
    //                 </div>
    //                 <div class="col-md-5">
    //                     <div class=' row d-flex'>
    //                         <div class='col-md-6 gr-mx-auto gr-px-64 d-flex justify-content-center flex-column'>
    //                             <a href='#' class="btn gr-width-md-50 gr-background-color-white gr-text-color-white text-center">TRY IT NOW</a>
    //                         </div>
    //                         <div class='col-md-6 gr-mx-auto gr-px-64 d-flex justify-content-center flex-column'>
    //                             <a href='#' class="btn gr-width-md-50 gr-background-color-white gr-text-color-white text-center">SCHEDULE DEMO</a>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>`,
    //     })
  }
}
