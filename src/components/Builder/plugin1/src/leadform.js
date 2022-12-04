const FORM_KEYS = {
  name: 'contact_name',
  firstName: 'contact_first_name',
  lastName: 'contact_last_name',
  email: 'contact_email',
  phone: 'contact_phone',
  companyName: 'contact_company',
  jobTitle: 'contact_title',
  country: 'contact_country',
  AGREEMENT: 'agreement',
};

export default function(editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  const cats = c.blockCategories;
  const blocks = c.blocks;
  const labels = c.labels;
  if (cats.form) {
    blocks.profilepages_form_1 &&
      bm.add('profilepages_form_1', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Lead+Forms+1.png' />",
        category: labels.categoryform,
        content: `<section class="grp-wrapper grp-background-color-blue2 grp-py-72">
        <div class="grp-container-xxl grp-mx-auto grp-px-16">
          <div class="row grp-py-2">
            <div class="col-md-6 grp-background-color-white grp-px-48 grp-py-48 grp-mx-auto grp-border grp-border-rounded grp-border-color-white">
                <h4 class="grp-text-color-blue2 grp-h3 grp-text-align-center">Let's Join Us by Filling this form</h4>
                <p class="grp-p grp-text-color-gray2 grp-text-align-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper ipsum adipiscing vestibulum.</p>
                <form >
                    <div class="form-group">
                        <input type="text" name="${
                          FORM_KEYS.name
                        }" class="form-control"  placeholder="Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" name="${
                          FORM_KEYS.email
                        }" class="form-control" placeholder="Enter email" required>
                    </div>
                    <div class="form-group">
                        <input type="tel" name="${
                          FORM_KEYS.phone
                        }" class="form-control"  placeholder="Phone Number">
                    </div>
                    <button type="submit" class="btn btn-primary grp-width-100 text-center">Submit</button>
                </form>
            </div>
          <div>
        </div>
    </section>`,
      });
    blocks.profilepages_form_2 &&
      bm.add('profilepages_form_2', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Lead+Forms+2.png' />",
        category: labels.categoryform,
        content: `<section class="grp-wrapper profilepages_leadform-2">
          <div class='grp-container-xxl grp-mx-auto grp-px-16'>
            <div class='row'>
              <div class='col-md-6 grp-px-50 grp-py-100 grp-mx-auto'>
                <img src="https://image.freepik.com/free-vector/group-people-working-together_52683-28615.jpg" class="img-fluid">
              </div>
              <div class='col-md-6 grp-background-color-blue2 grp-display-flex grp-justify-content-center grp-align-items-center  grp-py-32 grp-mx-auto'>
                <div class="col-md-11 grp-background-color-white grp-px-48 grp-py-48 grp-mx-auto grp-border grp-border-rounded grp-border-color-white">
                  <form >
                    <div class="form-group">
                      <input type="text" name="${
                        FORM_KEYS.name
                      }" class="form-control"  placeholder="Name" required>
                    </div>
                    <div class="form-group">
                      <input type="email" name="${
                        FORM_KEYS.email
                      }" class="form-control" placeholder="Enter email" required>
                    </div>
                    <div class="form-group">
                      <input type="tel" name="${
                        FORM_KEYS.phone
                      }" class="form-control"  placeholder="Phone Number">
                    </div>
                    <button type="submit" class="btn btn-primary grp-width-100 text-center">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>                                          
        </section>`,
      });
    blocks.profilepages_form_3 &&
      bm.add('profilepages_form_3', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Lead+Forms+3.png' />",
        category: labels.categoryform,
        content: `<section class="grp-wrapper profilepages_leadform-3">
              <div class='grp-container-xxl grp-mx-auto'>
              <div class='row'>
                <div class='col-md-4 d-flex justify-content-center grp-px-0'>
                  <img src='https://images.unsplash.com/photo-1586810147307-13022c44af63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80' class="w-100 h-100" data-gjs-type='image'>
                </div>
                <div class='col-md-8  grp-py-72'>
                  <div class="row">
                    <div class="col-md-9  grp-px-48 grp-py-48 grp-mx-auto">
                        <h4 class="grp-text-color-primary grp-h3 grp-text-align-center">Let's Join Us by Filling this form</h4>
                        <p class="grp-p grp-text-color-gray2 grp-text-align-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper ipsum adipiscing vestibulum.</p>
                        <form >
                            <div class="form-group">
                                <input type="text" name="${
                                  FORM_KEYS.name
                                }" class="form-control"  placeholder="Name" required>
                            </div>
                            <div class="form-group">
                                <input type="email" name="${
                                  FORM_KEYS.email
                                }" class="form-control" placeholder="Enter email" required>
                            </div>
                            <div class="form-group">
                                <input type="tel" name="${
                                  FORM_KEYS.phone
                                }" class="form-control"  placeholder="Phone Number">
                            </div>
                            <button type="submit" class="btn btn-primary grp-width-md-100 grp-px-8 text-center">Submit</button>
                        </form>
                    </div>
                  <div>
                </div>
              </div>
            </div> 
          </section>`,
      });
    blocks.profilepages_form_4 &&
      bm.add('profilepages_form_4', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Lead+Forms+4.png' />",
        category: labels.categoryform,
        content: `<section class="grp-wrapper profilepages_leadform-4">
        <div class='grp-container-xl grp-mx-auto grp-px-32'>
          <div class='row'>
            <div class='col-md-6 grp-px-50 grp-py-72 d-flex justify-content-center flex-column'>
              <h4 class="grp-text-color-black grp-h3">Fill The Following Form To Request A Meeting</h4>
              <p class="grp-p grp-text-color-gray2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor semper ipsum adipiscing vestibulum. Feugiat elit, imperdiet laoreet nulla est, purus. Neque egestas cursus accumsan cursus. Mauris rutrum faucibus cursus egestas.</p>
              <a href='#' class="btn btn-outlined-primary grp-border-color-secondary grp-width-40 bgcolor3 text-center">Response</a>
            </div>
            <div class='col-md-6 grp-background-color-white  d-flex justify-content-center align-items-center'>
                <form class="grp-background-color-white grp-width-xs-100 grp-width-lg-80 default-card-shadow-radius grp-px-48 grp-py-48 grp-mx-auto grp-border grp-border-rounded grp-border-color-white">
                  <div class="form-group">
                    <input type="text" name="${
                      FORM_KEYS.name
                    }" class="form-control"  placeholder="Name" required>
                  </div>
                  <div class="form-group">
                    <input type="email" name="${
                      FORM_KEYS.email
                    }" class="form-control" placeholder="Enter email" required>
                  </div>
                  <div class="form-group">
                    <input type="tel" name="${
                      FORM_KEYS.phone
                    }" class="form-control"  placeholder="Phone Number">
                  </div>
                  <button type="submit" class="btn btn-primary grp-width-md-100 grp-px-8 text-center">Submit</button>
                </form>
            </div>
          </div>
        </div>                                          
      </section>`,
      });
    blocks.profilepages_form_5 &&
      bm.add('profilepages_form_5', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Lead+Forms+5.png' />",
        category: labels.categoryform,
        content: `<section class="grp-wrapper profilepages_leadform-5">
        <div class='grp-container-xl grp-mx-auto grp-px-16'>
          <div class='row'>
            <div class='col-md-6 grp-px-50 grp-py-72 d-flex justify-content-center flex-column'>
              <img src="https://image.freepik.com/free-vector/usability-testing-concept-illustration_114360-1571.jpg" class="img-fluid">
            </div>
            <div class='col-md-6 grp-background-color-white  d-flex justify-content-center align-items-center'>
              <div class="col-md-11 grp-background-color-white grp-px-48 grp-py-48 grp-mx-auto grp-border grp-border-rounded grp-border-color-white">
                <form >
                  <div class="form-group">
                    <input type="text" name="${
                      FORM_KEYS.name
                    }" class="form-control"  placeholder="Name" required>
                  </div>
                  <div class="form-group">
                    <input type="email" name="${
                      FORM_KEYS.email
                    }" class="form-control" placeholder="Enter email" required>
                  </div>
                  <div class="form-group">
                    <input type="tel" name="${
                      FORM_KEYS.phone
                    }" class="form-control"  placeholder="Phone Number">
                  </div>
                  <button type="submit" class="btn btn-primary grp-width-100 text-center">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>                                          
      </section>`,
      });
  }
}
