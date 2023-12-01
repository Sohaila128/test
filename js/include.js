function includeNavbar() {
  document.write(`
  <!------- Header ------->
  <div class="header bg-primary flex-column flex-md-row bg-primary p-0">
    <div class=" container d-flex justify-content-center flex-md-row">
    <!-- Header Content  -->
    <span class="text-light fw-semibold"> FREE SHIPPING ON ORDERS OVER $49!</span>
    </div>
  </div>
  <!------------ header end ------------>

  <!---- NavBar ----->
  <nav class="navbar navbar-expand-lg navbar-light bg-nav">
    <div class="container">
      
      <Navbar.Brand href="index.html">
        <a href="index.html">
          <img
          src="./images/chemical-guys-logo.svg"
          alt="logo"
          class="nav-img mx-4"
          />
        </a>
      </Navbar.Brand> 
      <button class="navbar-toggler rounded-3 py-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
             
        <div class="collapse navbar-collapse" id="navbarNav">
          <form class="form-inline mx-auto">
            <h3 class="text-center text-light">Welcome To <span class="text-light"> Chemical Guys </span></h3>
            <div class="input-group d-flex justify-content-end align-items-center position-relative">
              <input type="text" name="" id="" placeholder="Search for Product" class="rounded-2 px-4 form-control form-control-search">
              <i class='fa-solid fa-magnifying-glass position-absolute px-3 fs-5 text-black text-right'></i>
            </div>
          </form>
          
          <div class="d-flex text-light ms-auto media-navbar-text align-items-center">
            <a href="favourite.html" class="text-decoration-none">
            <div class="link-primary text-black mx-2">
            <a href="sign-up.html" class="header-contact-item text-uppercase fw-semibold d-flex flex-column justify-content-center align-items-center link-primary text-light letter-spacing-sm mx-2 text-decoration-none  media-navbar">
              <i class="fa-solid fa-user fs-3"></i>
                Register
              </a>
            </div>
            <div class="link-primary text-black mx-2">
            <a href="mycart.html" class="header-contact-item text-uppercase fw-semibold d-flex flex-column justify-content-center align-items-center link-primary text-light letter-spacing-sm mx-2 text-decoration-none  media-navbar">
              <i class="fa-solid fa-cart-shopping fs-3"></i>
                Your Cart
              </a>
            </div>
          
    
          </div>
      </div>
    </div>
    </div>
  <hr>
  
</nav>
<div class="bg-info d-none d-md-block">
  <div class="d-flex justify-content-evenly container py-2 media-navbar nav-a">
    <a href="index.html" class="text-decoration-none  text-black letter-spacing-sm fw-bold fw-semibold d-none d-md-block link-primary"> Home</a>
    <a href="categories.html" class="header-contact-item fw-semibold link-primary text-black letter-spacing-sm fw-bold mx-2 text-decoration-none media-navbar">
        <span>
          Categories
        </span>
      </a>
    
    
    <a href="offers.html" class="text-decoration-none  text-black letter-spacing-sm fw-bold fw-semibold d-none d-md-block link-primary"> Offers</a>
    <a href="myorder.html" class="text-decoration-none  text-black letter-spacing-sm fw-bold fw-semibold d-none d-md-block link-primary"> Orders </a>
    <a href="best.html" class="text-decoration-none  text-black letter-spacing-sm fw-bold fw-semibold d-none d-md-block link-primary"> Best Seller </a>
  </div>
</div>
  `);
}


function includeFooter() {
  document.write(`
  <footer  class="footer bg-success py-5" >
  <div class="container">
    <div class="row">
      <div class="col-sm-2">
        <div class="">
          <img src="images/chemical-guys-logo.svg" alt="">
        </div>
      </div>
      <div class="col-sm-10 d-flex flex-column flex-md-row">
        <div class="col-sm-3 mx-2">
          <h4 class="text-white">Quick links</h4>
          <div class="border-footer mb-3"></div>
          <ul class="list-unstyled">
            <li><a href="index.html" class="text-decoration-none text-light link-primary">Home</a></li>
            <li><a href="categories.html" class="text-decoration-none text-light link-primary">Shop</a></li>
            <li><a href="offers.html" class="text-decoration-none text-light link-primary">Offers</a></li>
            <li><a href="order-current.html" class="text-decoration-none text-light link-primary">Orders</a></li>
          </ul> 
        </div>
        <div class="col-sm-3 mx-2">
          <h4 class="text-white"> Customer care </h4>
          <div class="border-footer mb-3"></div>
          <ul class="list-unstyled">
            <li><a href="profile-info.html" class="text-decoration-none text-light link-primary">My Profile</a></li>
            <li><a href="favourite.html" class="text-decoration-none text-light link-primary">Favorite</a></li>
            <li><a href="contact-us.html" class="text-decoration-none text-light link-primary">Contact Us</a></li>
            <li><a href="about-us.html" class="text-decoration-none text-light link-primary">About Us</a></li>
          </ul>  
        </div>
        <div class="col-sm-3 mx-2">
          <h4 class="text-white">POLICIES</h4>
          <div class="border-footer mb-3"></div>
          <ul class="list-unstyled">
            <li><a href="Terms-Conditions.html" class="text-decoration-none text-light link-primary" style="white-space: nowrap;">Terms & Conditions</a></li>
            <li><a href="support.html" class="text-decoration-none text-light link-primary" style="white-space: nowrap;">Technical Support</a></li>
          </ul>  
        </div>
        <div class="col-sm-3 mx-2">
          <h4 class="text-white">Find us</h4>
          <div class="border-footer mb-3"></div>
          <div class="row g-4">
            <div class="col-sm-10 d-flex justify-content-sm-between col-6 justify-content-between">
              <a href="" class="text-decoration-none"><i class="fa-brands fa-facebook-f text-white fs-4 rounded-2 link-primary"></i></a>
              <a href="" class="text-decoration-none"><i class="fa-brands fa-instagram  text-white fs-4 rounded-2 link-primary"></i></a>
              <a href="" class="text-decoration-none"><i class="fa-brands fa-snapchat text-white fs-4 rounded-2 link-primary"></i></a>
              <a href="" class="text-decoration-none"> <i class="fa-brands fa-youtube text-white fs-4 rounded-2 link-primary"></i></a>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
<!-------footer copyright -------->
<div class="section-header text-center py-1 d-flex justify-content-center align-items-center letter-spacing bg-black">
  <p class="text-light text-uppercase mt-2 mx-3">© All copy rights for Chemical Guys are served by <a href="https://emcan-group.com/en" class="text-uppercase fs-6 text-decoration-none"> Emcan</a> </p>
</div>
  `);
}
function includeSidebar() {
  document.write(`
  <!--========= start sidebar  =========-->
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header bg-info border">
    <h5 class="offcanvas-title text-black fw-bold letter-spacing" id="offcanvasWithBothOptionsLabel"> 
    <a class="text-decoration-none" href="index.html"><img src="images/chemical-guys-logo.svg" class="w-75" /> </h5></a>
    <button type="button" class="btn-close text-black bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>

  <div class="offcanvas-body bg-info">
    <ul class="navbar-nav ms-auto me-auto mb-lg-0 d-flex px-3">
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link letter-spacing text-black active link-primary" href="index.html">Home</a>
      </li>
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link letter-spacing text-black active link-primary" href="categories.html">Categories</a>
      </li>
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link letter-spacing text-black active link-primary" href="favourite.html">Favourite</a>
      </li>
      <li class="nav-item me-3 fw-bold">
          <a class="nav-link letter-spacing text-black link-primary" href="sign-up.html">Register</a>
      </li>
      <li class="nav-item me-3 fw-bold">
          <a class="nav-link letter-spacing text-black link-primary" href="login.html">login</a>
      </li>
      <li class="nav-item me-3 fw-bold">
          <a class="nav-link letter-spacing text-black link-primary" href="offers.html">Offers</a>
      </li>
      <li class="nav-item me-3 fw-bold">
          <a class="nav-link letter-spacing text-black link-primary" href="myorder.html">Orders</a>
      </li>
      <li class="nav-item me-3 fw-bold">
          <a class="nav-link letter-spacing text-black link-primary" href="best.html">Best Seller</a>
      </li>
      <li class="nav-item me-3 fw-bold">
          <a class="nav-link letter-spacing text-black link-primary" href="mycart.html">Your Cart </a>
      </li>
    
      
    </ul>
  </div>
</div>
  <!--========= end sidebar  =========-->
  `);
}
function includeModal() {
  document.write(`
  <div class="modal" tabindex="-1" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content bg-nav">
          <div class="modal-header border-0">
            <button type="button" class="btn-close text-light bg-light" data-bs-dismiss="modal" aria-label="Close" onclick="closeModal()"></button>
          </div>
          <div class="modal-body">
          
            <h2 class="text-uppercase text-center text-light">JOIN THE FAMILY</h2>
                <img src="images/IMG-20231113-WA0016.jpg" class="img-fluid" alt="">
          </div>
        </div>
      </div>
    </div>
    
  `);
}
