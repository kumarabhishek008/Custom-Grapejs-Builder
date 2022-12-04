export default function (editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  const cats = c.blockCategories;
  const blocks = c.blocks;
  const labels = c.labels;
  if (cats.teams) {
    // blocks.profilepages_teams_1 &&
    //   bm.add("profilepages_teams_1", {
    //     label:
    //       "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Contents+-+Teams+1.png' />",
    //     category: labels.categoryteams,
    //     content:
    //       '<section class="container-fluid profilepages_teams-1">Call to action 1</section>',
    //   });
    blocks.profilepages_teams_2 &&
      bm.add("profilepages_teams_2", {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Contents+-+Teams+2.png' />",
        category: labels.categoryteams,
        content:
    `<section class="gr-wrapper gr-py-48" id="team">
    <div class="gr-container-xl gr-mx-auto gr-px-16">
    <div class="row">
        <div class="col-md-8 gr-text-align-center gr-mx-auto">
            <h1 class="gr-h3 gr-text-color-primary">OUR AMAZING TEAM</h1>
            <p class="gr-p gr-text-color-gray2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
    </div>
    <div class="row br-my-48">
        <div class="col-md-3 gr-text-align-center">
            <img src="https://rapidtech.s3.amazonaws.com/assets/profilepages/News-thumbnail_1.png" class="img-fluid" />
            <h5 class="gr-text-color-secondary m-t-16">Arlena Howard</h5>
            <p class="gr-p gr-text-color-gray3">Product Manager</p>
        </div>
        <div class="col-md-3 gr-text-align-center">
            <img src="https://rapidtech.s3.amazonaws.com/assets/profilepages/News-thumbnail_2.png" class="img-fluid" />
            <h5 class="gr-text-color-secondary m-t-16">Evan Richards</h5>
            <p class="gr-p gr-text-color-gray3">Product Manager</p>
        </div>
        <div class="col-md-3 gr-text-align-center">
            <img src="https://rapidtech.s3.amazonaws.com/assets/profilepages/News-thumbnail_3.png" class="img-fluid" />
            <h5 class="gr-text-color-secondary m-t-16">Max Warren</h5>
            <p class="gr-p gr-text-color-gray3">Product Manager</p>
        </div>
        <div class="col-md-3 gr-text-align-center">
            <img src="https://rapidtech.s3.amazonaws.com/assets/profilepages/News-thumbnail_4.png" class="img-fluid" />
            <h5 class="gr-text-color-secondary">Francisca Simmons</h5>
            <p class="gr-p gr-text-color-gray3">Product Manager</p>
        </div>
    </div>
</div>
</section>`,
      });
    // blocks.profilepages_teams_3 &&
    //   bm.add("profilepages_teams_3", {
    //     label:
    //       "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Contents+-+Teams+3.png' />",
    //     category: labels.categoryteams,
    //     content:`<section class="py-7" id="team">
//     <div class="container">
//     <div class="row">
//         <div class="col-md-8 offset-md-2 text-center mb-5">
//             <h1 class="display-4">The Versoly Team</h1>
//             <p class="lead">We're a fully distributed team, meaning that we'll be fixing bugs and replying to your questions from around the world!</p>
//         </div>
//     </div>
//     <div class="row">
//         <div class="col-md-6 mb-4">
//             <div class="row row-eq-height">
//                 <div class="col-md-4">
//                     <img src="https://cdn.versoly.com/img/headshot-woman-1.jpg" class="img-fluid" />
//                 </div>
//                 <div class="col-md-8 d-flex align-items-center">
//                     <div class="w-100">
//                         <h5>Rhiana Bostock</h5>
//                         <p>Founder</p>
//                         <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="col-md-6 mb-4">
//             <div class="row row-eq-height">
//                 <div class="col-md-4">
//                     <img src="https://cdn.versoly.com/img/headshot-man-1.jpg" class="img-fluid" />
//                 </div>
//                 <div class="col-md-8 d-flex align-items-center">
//                     <div class="w-100">
//                         <h5>Corey Jacobson</h5>
//                         <p>CTO</p>
//                         <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="col-md-6 mb-4">
//             <div class="row row-eq-height">
//                 <div class="col-md-4">
//                     <img src="https://cdn.versoly.com/img/headshot-man-2.jpg" class="img-fluid" />
//                 </div>
//                 <div class="col-md-8 d-flex align-items-center">
//                     <div class="w-100">
//                         <h5>Bobby O'Sullivan</h5>
//                         <p>Web Developer</p>
//                         <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="col-md-6 mb-4">
//             <div class="row row-eq-height">
//                 <div class="col-md-4">
//                     <img src="https://cdn.versoly.com/img/headshot-woman-2.jpg" class="img-fluid" />
//                 </div>
//                 <div class="col-md-8 d-flex align-items-center">
//                     <div class="w-100">
//                         <h5>Daniele Beaumont</h5>
//                         <p>UI/UX Designer</p>
//                         <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// </section>`,
    //   });
  }
}
