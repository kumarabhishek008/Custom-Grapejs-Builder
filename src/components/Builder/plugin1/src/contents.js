export default function(editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  const cats = c.blockCategories;
  const blocks = c.blocks;
  const labels = c.labels;
  if (cats.contents) {
    blocks.profilepages_contents_1 &&
      bm.add('profilepages_contents_1', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Content+1.png' />",
        category: labels.categorycontents,
        content: `<section class="gr-wrapper gr-py-48">
        <div class="gr-container-xl gr-mx-auto gr-px-16 ">
        <div class="row gr-py-2">
            <div class="col-md-6 d-flex justify-content-center flex-column align-items-start gr-px-32 gr-py-16">
                <h2 class="gr-text-color-primary gr-h3"> Our Company Profile </h2>
                <p class="gr-text-color-gray2 gr-p gr-width-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper ipsum adipiscing vestibulum.</p>
                <a href='#' class="btn gr-button-primary gr-width-40">See More</a>
            </div>
            <div class="col-md-6">
            <img class="img-fluid" src="https://rapidtech.s3.amazonaws.com/assets/profilepages/gallary_1.jfif" />
            </div>
        </div>
        </div>
     </section>`,
      });
    // blocks.profilepages_contents_2 &&
    //   bm.add("profilepages_contents_2", {
    //     label:
    //       "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Content+2.png' />",
    //     category: labels.categorycontents,
    //     content:
    //       '<section class="container-fluid profilepages-contents-2"></section>',
    //   });
    // blocks.profilepages_contents_3 &&
    //   bm.add("profilepages_contents_3", {
    //     label:
    //       "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Content+3.png' />",
    //     category: labels.categorycontents,
    //     content:
    //       '<section class="container-fluid profilepages-contents-3"></section>',
    //   });
    // blocks.profilepages_contents_4 &&
    //   bm.add("profilepages_contents_4", {
    //     label:
    //       "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Content+4.png' />",
    //     category: labels.categorycontents,
    //     content:
    //       '<section class="container-fluid profilepages-contents-4"></section>',
    //   });
    // blocks.profilepages_contents_5 &&
    //   bm.add("profilepages_contents_5", {
    //     label:
    //       "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Content+5.png' />",
    //     category: labels.categorycontents,
    //     content:
    //       '<section class="container-fluid profilepages-contents-5"></section>',
    //   });
    // blocks.profilepages_contents_6 &&
    //   bm.add("profilepages_contents_6", {
    //     label:
    //       "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Content+6.png' />",
    //     category: labels.categorycontents,
    //     content:
    //       '<section class="container-fluid profilepages-contents-6"></section>',
    //   });
    // blocks.profilepages_contents_7 &&
    //   bm.add("profilepages_contents_7", {
    //     label:
    //       "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Content+7.png' />",
    //     category: labels.categorycontents,
    //     content:
    //       '<section class="container-fluid profilepages-contents-7"></section>',
    //   });
    // blocks.profilepages_contents_8 &&
    //   bm.add("profilepages_contents_8", {
    //     label:
    //       "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Content+8.png' />",
    //     category: labels.categorycontents,
    //     content:
    //       '<section class="container-fluid profilepages-contents-8"></section>',
    //   });
    // blocks.profilepages_contents_9 &&
    //   bm.add("profilepages_contents_9", {
    //     label:
    //       "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Content+9.png' />",
    //     category: labels.categorycontents,
    //     content:
    //       '<section class="container-fluid profilepages-contents-9"></section>',
    //   });
    // blocks.profilepages_contents_10 &&
    //   bm.add("profilepages_contents_10", {
    //     label:
    //       "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Content+10.png' />",
    //     category: labels.categorycontents,
    //     content:
    //       '<section class="container-fluid profilepages-contents-10"></section>',
    //   });
  }
}
