export default function(editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  const cats = c.blockCategories;
  const blocks = c.blocks;
  const labels = c.labels;
  if (cats.footer) {
    blocks.profilepages_footer_1 &&
      bm.add("profilepages_footer_1", {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Footer+1.png' />",
        category: labels.categoryfooter,
        content:
        `<footer class="container-fluid gr-py-48 gr-wrapper profilepages_footer_1">
          <div class="gr-container-xl gr-mx-auto gr-px-16">
            <div class='row'>
                <div class='col-md-4 gr-py-16'>
                    <div class="col gr-text-align-center">
                        <h4 class="d-flex justify-content-center align-items-center">
                            <div class="gr-background-color-primary default-footer-circle gr-border gr-border-circle gr-mx-8"></div>
                            <a class="gr-h4 gr-text-color-gray1" href="#">COMPANY LOGO</a>
                        </h4>
                    </div>
                    <div class="text-align-center gr-p gr-text-color-gray3 gr-mt-64">
                        <p>
                            <tiny class="gr-p">© Copyright 2020 Grorapid</tiny>
                        </p>
                    </div>
                    <div class="col text-align-center gr-text-color-gray3 gr-mt-64">
                        <a class="gr-text-color-gray3 gr-px-8 gr-py-8" href="#">
                            <i class="fab fa-facebook-square fa-2x pr-2"></i>
                        </a>
                        <a class="gr-text-color-gray3 gr-px-8 gr-py-8" href="#">
                            <i class="fab fa-twitter-square fa-2x pr-2"></i>
                        </a>
                        <a class="gr-text-color-gray3 gr-px-8 gr-py-8" href="#">
                            <i class="fab fa-instagram fa-2x pr-2"></i>
                        </a>
                    </div>
                </div>
                <div class='col-md-8'>
                    <div class="row">
                        <div class='col-3 gr-px-16 align-items-start'>
                            <h5 class='gr-text-color-gray2'>CATEGORY</h4>
                            <div class='gr-py-2'>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                            </div>
                        </div>
                        <div class='col-3 gr-px-16 align-items-start'>
                            <h5 class='gr-text-color-gray2'>CATEGORY</h4>
                            <div class='gr-py-2'>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                            </div>
                        </div>
                        <div class='col-3 gr-px-16 align-items-start'>
                            <h5 class='gr-text-color-gray2'>CATEGORY</h4>
                            <div class='gr-py-2'>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                            </div>
                        </div>
                        <div class='col-3 gr-px-16 align-items-start'>
                            <h5 class='gr-text-color-gray2'>CATEGORY</h4>
                            <div class='gr-py-2'>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                                <p class='gr-text-color-gray2'>Handheld computer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </footer>`,
      });
    blocks.profilepages_footer_2 &&
      bm.add('profilepages_footer_2', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Footer+2.png' />",
        category: labels.categoryfooter,
        content: `<footer class="gr-py-48 gr-wrapper" id="footer">
        <div class="gr-container-xl gr-mx-auto gr-px-16">
            <div class="row">
                <div class="col gr-text-align-center">
                    <h4 class="d-flex justify-content-center align-items-center">
                        <div class="gr-background-color-primary default-footer-circle gr-border gr-border-circle gr-mx-8"></div>
                        <a class="gr-h4 gr-text-color-primary" href="#">COMPANY LOGO</a>
                    </h4>
                </div>
            </div>
        </div>
        <div class="gr-container gr-pb-16 gr-border-bottom gr-border-color-gray3">
            <div class="row">
                <ul class="nav gr-mx-auto flex-column flex-md-row">
                    <li class="nav-item">
                        <a class="nav-link gr-text-color-gray3 gr-p" href="#">Sign Up</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link gr-text-color-gray3 gr-p" href="#">Terms</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link gr-text-color-gray3 gr-p" href="#">Privacy</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link gr-text-color-gray3 gr-p" href="#">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link gr-text-color-gray3 gr-p" href="#">Documents</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="text-align-center gr-p gr-text-color-gray3 gr-mt-64">
            <p>
                <tiny class="gr-p">© Copyright 2020 Grorapid
                    <br />All rights reserved</tiny>
            </p>
        </div>
        <div class="col text-align-center gr-text-color-gray3 gr-mt-64">
            <a class="gr-text-color-gray3" href="#">
                <i class="fab fa-facebook-square fa-2x pr-2"></i>
            </a>
            <a class="gr-text-color-gray3" href="#">
                <i class="fab fa-twitter-square fa-2x pr-2"></i>
            </a>
            <a class="gr-text-color-gray3" href="#">
                <i class="fab fa-instagram fa-2x pr-2"></i>
            </a>
        </div>
    </footer>`,
      });
    blocks.profilepages_footer_3 &&
      bm.add("profilepages_footer_3", {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Footer+3.png' />",
        category: labels.categoryfooter,
        content:
          `<section class="container-fluid gr-py-48 gr-wrapper gr-background-color-primary profilepages_footer_3">
          <div class='column'>
              <div class='col-md-5'>
                  <div class="col gr-text-align-center">
                      <h4 class="d-flex justify-content-center align-items-center">
                          <div class="gr-background-color-white default-footer-circle gr-border gr-border-circle gr-mx-8"></div>
                          <a class="gr-h4 gr-text-color-white" href="#">COMPANY LOGO</a>
                      </h4>
                  </div>
              </div>
              <hr class='gr-background-color-white'/>
              <div class='col-md-12'>
                  <div class='row'>
                      <div class='gr-m-auto'>
                          <h5 class='gr-text-color-white'>CATEGORY</h4>
                          <div class='gr-py-2'>
                              <p class='gr-text-color-white'>Handheld computer</p>
                              <p class='gr-text-color-white'>Handheld computer</p>
                              <p class='gr-text-color-white'>Handheld computer</p>
                              <p class='gr-text-color-white'>Handheld computer</p>
                              <p class='gr-text-color-white'>Handheld computer</p>
                          </div>
                      </div>
                      <div class='gr-m-auto'>
                          <h5 class='gr-text-color-white'>CATEGORY</h4>
                          <div class='gr-py-2'>
                              <p class='gr-text-color-white'>Handheld computer</p>
                              <p class='gr-text-color-white'>Handheld computer</p>
                              <p class='gr-text-color-white'>Handheld computer</p>
                              <p class='gr-text-color-white'>Handheld computer</p>
                              <p class='gr-text-color-white'>Handheld computer</p>
                          </div>
                      </div>
                      <div class='gr-m-auto'>
                          <h5 class='gr-text-color-white'>CATEGORY</h4>
                          <div class='gr-py-2'>
                              <p class='gr-text-color-white'>Handheld computer</p>
                              <p class='gr-text-color-white'>Handheld computer</p>
                              <p class='gr-text-color-white'>Handheld computer</p>
                              <p class='gr-text-color-white'>Handheld computer</p>
                              <p class='gr-text-color-white'>Handheld computer</p>
                          </div>
                      </div>
                      <div class="col text-align-center gr-text-color-white gr-mt-64">
                        <a class="gr-text-color-white" href="#">
                            <i class="fab fa-facebook-square fa-2x pr-2"></i>
                        </a><br/>
                        <a class="gr-text-color-white" href="#">
                            <i class="fab fa-twitter-square fa-2x pr-2"></i>
                        </a><br/>
                        <a class="gr-text-color-white" href="#">
                            <i class="fab fa-instagram fa-2x pr-2"></i>
                        </a><br/>
                        <a class="gr-text-color-white" href="#">
                            <i class="fab fa-googlplus fa-2x pr-2"></i>
                        </a>
                    </div>
                  </div>
              </div>
          </div>
        </section>`,
      });
  }
}
