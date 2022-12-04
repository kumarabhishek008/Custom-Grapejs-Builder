export default function(editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  const cats = c.blockCategories;
  const blocks = c.blocks;
  const labels = c.labels;
  if (cats.faq) {
    blocks.profilepages_faq_1 &&
      bm.add('profilepages_faq_1', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Contents+-+FAQ+1.png' />",
        category: labels.categoryfaq,
        content: `<section class="py-7" id="faq">
        <div class="gr-container-xl gr-mx-auto gr-px-16">
            <div class="row d-flex justify-content-center">
                <div class="col gr-text-align-center gr-py-32">
                    <h1 class="gr-text-color-primary">Frequently Asked Questions</h1>
                    <p>Looking for more info? Here are some things we're commonly asked</p>
                </div>
            </div>
            <div class="row gr-mb-48 d-flex justify-content-center">
                <div class="col-md-10 col-sm-12">
                    <div class="gr-mb-48">
                        <h4 class="gr-text-color-secondary">Question</h4>
                        <p>Suspendisse vel ante nibh. Nam tortor sapien, maximus nec sagittis vitae, semper eu turpis. Proin tempor fringilla velit convallis pretium. Sed in turpis convallis, tincidunt orci vel, commodo m</p>
                    </div>
                </div>
                <div class="col-md-10 col-sm-12">
                    <div class="gr-mb-48">
                        <h4 class="gr-text-color-secondary">Question</h4>
                        <p>Suspendisse vel ante nibh. Nam tortor sapien, maximus nec sagittis vitae, semper eu turpis. Proin tempor fringilla velit convallis pretium. Sed in turpis convallis, tincidunt orci vel, commodo m</p>
                    </div>
                </div>
                <div class="col-md-10 col-sm-12">
                    <div class="gr-mb-48">
                        <h4 class="gr-text-color-secondary">Question</h4>
                        <p>Suspendisse vel ante nibh. Nam tortor sapien, maximus nec sagittis vitae, semper eu turpis. Proin tempor fringilla velit convallis pretium. Sed in turpis convallis, tincidunt orci vel, commodo m</p>
                    </div>
                </div>
                <div class="col-md-10 col-sm-12">
                    <div class="gr-mb-48">
                        <h4 class="gr-text-color-secondary">Question</h4>
                        <p>Suspendisse vel ante nibh. Nam tortor sapien, maximus nec sagittis vitae, semper eu turpis. Proin tempor fringilla velit convallis pretium. Sed in turpis convallis, tincidunt orci vel, commodo m</p>
                    </div>
                </div>
            </div>
        </div>
    </section>`,
      });
    blocks.profilepages_faq_2 &&
      bm.add('profilepages_faq_2', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Contents+-+FAQ+2.png' />",
        category: labels.categoryfaq,
        content: `<section class="gr-py-56 gr-wrapper" id="faq">
        <div class="gr-container-xl gr-mx-auto gr-px-16">
        <div class="row gr-mb-24">
            <div class="col gr-text-align-center">
                <h1 class="gr-text-color-primary gr-h3">Frequently Asked Questions (FAQ)</h1>
                <p class="gr-p gr-text-color-gray1">Find answers to some frequentyly asked questions about us</p>
            </div>
        </div>
        <div class="row gr-mb-24">
            <div class="col-md-6 col-sm-12">
                <div class="gr-mb-40">
                    <h4 class="gr-h4 gr-text-color-secondary">Lorem ipsum</h4>
                    <p class="gr-font-medium gr-text-color-gray1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper ipsum adipiscing vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div class="col-md-6 col-sm-12">
                <div class="gr-mb-40">
                    <h4 class="gr-h4 gr-text-color-secondary">Lorem ipsum</h4>
                    <p class="gr-font-medium gr-text-color-gray1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper ipsum adipiscing vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div class="col-md-6 col-sm-12">
                <div class="gr-mb-40">
                    <h4 class="gr-h4 gr-text-color-secondary">Lorem ipsum</h4>
                    <p class="gr-font-medium gr-text-color-gray1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper ipsum adipiscing vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div class="col-md-6 col-sm-12">
            <div class="gr-mb-40">
                <h4 class="gr-h4 gr-text-color-secondary">Lorem ipsum</h4>
                <p class="gr-font-medium gr-text-color-gray1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper ipsum adipiscing vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            </div>
            </div>
        </div>
    </div>
</section>`,
      });
    // blocks.profilepages_faq_3 &&
    //   bm.add("profilepages_faq_3", {
    //     label:
    //       "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Contents+-+FAQ+3.png' />",
    //     category: labels.categoryfaq,
    //     content:
    //       '<section class="container-fluid profilepages-faq-3">faq 3</section>',
    //   });
    // blocks.profilepages_faq_4 &&
    //   bm.add("profilepages_faq_4", {
    //     label:
    //       "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Contents+-+FAQ+4.png' />",
    //     category: labels.categoryfaq,
    //     content:
    //       '<section class="container-fluid profilepages-faq-4">faq 4</section>',
    //   });
  }
}
