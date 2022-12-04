export default function (editor, opt = {}) {
    const c = opt;
    let bm = editor.BlockManager;
    const cats = c.blockCategories;
    const blocks = c.blocks;
    const labels = c.labels;
    if (cats.header) {
      blocks.profilepages_header_1 &&
        bm.add("profilepages_header_1", {
          label:
            "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Navigation_1.png' />",
          category: labels.categoryHeader,
          content: `
            <section class="grp-wrapper">
                <div class="grp-font-weight-500">
                <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Feature</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">About</a>
                    </li>
                  </ul>
                  <form class="d-flex m-0">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-primary" type="submit">Search</button>
                  </form>
                </div>
              </div>
                    </nav>
                </div>
            </section>
      `,
        });
        blocks.profilepages_header_2 &&
        bm.add("profilepages_header_2", {
          label:
            "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Navigation_2.png' />",
          category: labels.categoryHeader,
          content: `
          <section class="grp-wrapper">
          <div class="grp-font-weight-500">
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Feature</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
            </ul>
            <form class="d-flex m-0">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
              </nav>
          </div>
      </section>
      `,
        });
        blocks.profilepages_header_3 &&
        bm.add("profilepages_header_3", {
          label:
            "<img src='https://rapidtech.s3.amazonaws.com/assets/profilepages/Navigation_3.png' />",
          category: labels.categoryHeader,
          content: `
          <section class="grp-wrapper">
          <div class="grp-font-weight-500">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Feature</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
            </ul>
            <form class="d-flex grp-my-0">
              <a class="btn btn-primary">Get Started</a>
            </form>
          </div>
        </div>
              </nav>
          </div>
      </section>
      `,
        });
    }
}