export default function (editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  const cats = c.blockCategories;
  const blocks = c.blocks;
  const labels = c.labels;
  if (cats.pricings) {
    blocks.profilepages_pricings_1 &&
      bm.add("profilepages_pricings_1", {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Pricing+Plan+1.png' />",
        category: labels.categorypricings,
        content:`<section class="gr-wrapper gr-py-56">
        <div class="gr-container-xl gr-mx-auto gr-px-16">
            <div class="row">
                <div class="col-md-8 gr-mx-auto">
                    <h2 class="gr-text-color-primary gr-h3 gr-text-align-center">Multiple Pricing Options</h2>
                    <p class="gr-text-align-center gr-p gr-text-color-gray2">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Diam dolor semper
                        ipsum
                        adipiscing vestibulum. Feugiat elit, imperdiet laoreet nulla est, purus. Neque egestas cursus accumsan
                        cursus. Mauris rutrum faucibus cursus egestas.</p>
                </div>
            </div>
            <div class="row d-flex justify-content-center">
                <div class="col-md-3 gr-border gr-border-color-gray4 gr-mx-8">
                    <div class="d-flex justify-content-center align-items-center flex-column gr-py-32">
                        <h2 class="gr-h4 gr-text-color-secondary gr-text-align-center">Basic Plan</h2>
                        <p class="gr-p gr-text-align-center gr-text-color-gray3">Short description about the plan. Short
                            description about the plan</p>
                        <div class="gr-border-top gr-border-bottom gr-border-color-gray4 gr-py-20">
                            <h3 class="gr-h1-med gr-text-color-primary">$19.9</h3>
                            <p class="gr-text-color-gray4 gr-text-align-center">monthly</p>
                        </div>
                        <div class="gr-my-20">
                            <div class="gr-text-color-primary gr-py-2">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <span class="gr-pl-4">Essential Features</span>
                            </div>
                            <div class="gr-text-color-primary gr-py-2">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <span class="gr-pl-4">Marketing Campaign</span>
                            </div>
                            <div class="gr-text-color-gray4 gr-py-2">
                                <i class="fa fa-times" aria-hidden="true"></i>
                                <span class="gr-pl-4">Published Pages</span>
                            </div>
                            <div class="gr-text-color-gray4 gr-py-2">
                                <i class="fa fa-times" aria-hidden="true"></i>
                                <span class="gr-pl-4">Feedback Mode</span>
                            </div>
                            <div class="gr-text-color-gray4 gr-py-2">
                                <i class="fa fa-times" aria-hidden="true"></i>
                                <span class="gr-pl-4">Basic Integrations</span>
                            </div>
                        </div>
                        <a type="submit"
                            class="gr-button-primary gr-width-100 gr-text-align-center">Try
                            it now</a>
                    </div>
                </div>
                <div class="col-md-3 gr-border gr-border-color-gray4 gr-mx-8">
                    <div class="d-flex justify-content-center align-items-center flex-column gr-py-32">
                        <h2 class="gr-h4 gr-text-color-secondary gr-text-align-center">Medium Plan</h2>
                        <p class="gr-p gr-text-align-center gr-text-color-gray3">Short description about the plan. Short
                            description about the plan</p>
                        <div class="gr-border-top gr-border-bottom gr-border-color-gray4  gr-py-20">
                            <h3 class="gr-h1-med gr-text-color-primary">$24.9</h3>
                            <p class="gr-text-color-gray4 gr-text-align-center">monthly</p>
                        </div>
                        <div class="gr-my-20">
                            <div class="gr-text-color-primary">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <span class="gr-pl-4">Essential Features</span>
                            </div>
                            <div class="gr-text-color-primary gr-py-2">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <span class="gr-pl-4">Marketing Campaign</span>
                            </div>
                            <div class="gr-text-color-gray4 gr-py-2">
                                <i class="fa fa-times" aria-hidden="true"></i>
                                <span class="gr-pl-4">Published Pages</span>
                            </div>
                            <div class="gr-text-color-gray4 gr-py-2">
                                <i class="fa fa-times" aria-hidden="true"></i>
                                <span>Feedback Mode</span>
                            </div>
                            <div class="gr-text-color-gray4 gr-py-2">
                                <i class="fa fa-times" aria-hidden="true"></i>
                                <span class="gr-pl-4">Basic Integrations</span>
                            </div>
                        </div>
                        <a type="submit"
                            class="gr-button-primary gr-width-100 gr-text-align-center">Try
                            it now</a>
                    </div>
                </div>
                <div class="col-md-3 gr-border gr-border-color-gray4 gr-mx-8">
                    <div class="d-flex justify-content-center align-items-center flex-column gr-py-32">
                        <h2 class="gr-h4 gr-text-color-secondary gr-text-align-center">Advanced</h2>
                        <p class="gr-p gr-text-align-center gr-text-color-gray3">Short description about the plan. Short
                            description about the plan</p>
                        <div class="gr-border-top gr-border-bottom gr-border-color-gray4 gr-py-20">
                            <h3 class="gr-h1-med gr-text-color-primary">$49.9</h3>
                            <p class="gr-text-color-gray4 gr-text-align-center">monthly</p>
                        </div>
                        <div class="gr-my-20">
                            <div class="gr-text-color-primary">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <span class="gr-pl-4">Essential Features</span>
                            </div>
                            <div class="gr-text-color-primary gr-py-2">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <span class="gr-pl-4">Marketing Campaign</span>
                            </div>
                            <div class="gr-text-color-gray4 gr-py-2">
                                <i class="fa fa-times" aria-hidden="true"></i>
                                <span class="gr-pl-4">Published Pages</span>
                            </div>
                            <div class="gr-text-color-gray4 gr-py-2">
                                <i class="fa fa-times" aria-hidden="true"></i>
                                <span class="gr-pl-4">Feedback Mode</span>
                            </div>
                            <div class="gr-text-color-gray4 gr-py-2">
                                <i class="fa fa-times" aria-hidden="true"></i>
                                <span class="gr-pl-4">Basic Integrations</span>
                            </div>
                        </div>
                        <a type="submit"
                            class="gr-button-primary gr-width-100 gr-text-align-center">Try
                            it now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>`,
      });
    // blocks.profilepages_pricings_2 &&
    //   bm.add("profilepages_pricings_2", {
    //     label:
    //       "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Pricing+Plan+2.png' />",
    //     category: labels.categorypricings,
    //     content:
    //       '<section class="container-fluid profilepages_pricings_2">Call to action 2</section>',
    //   });
    // blocks.profilepages_pricings_3 &&
    //   bm.add("profilepages_pricings_3", {
    //     label:
    //       "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Pricing+Plan+3.png' />",
    //     category: labels.categorypricings,
    //     content:
    //       '<section class="container-fluid profilepages_pricings_3">Call to action 3</section>',
    //   });
  }
}
