import React from "react";

// for logged in users
function HomePage() {
    return (
        <div id="HomeContainer">
            <div id="navbar">
                <div>
                    <div class="top-bar topbar-sticky-shrink">
                        <div class="top-bar-title">
                            <img style="height:50px" src="https://assets.stickpng.com/images/58aeffe6c869e092af51ee78.png"
                                alt="paw prints" />
                        </div>
                        <div class="top-bar-left">
                            <ul class="menu menu-hover-lines">
                                <li><a href="./newPostMockUp.html">Find Your Missing Companion</a></li>
                                <li><img style="height:50px"
                                    src="https://assets.stickpng.com/images/58aeffe6c869e092af51ee78.png"
                                    alt="paw prints" /></li>
                            </ul>
                        </div>
                        <div class="top-bar-right">
                            <ul class="menu menu-hover-lines">
                                <li><img style="height:50px"
                                    src="https://assets.stickpng.com/images/58aeffe6c869e092af51ee78.png"
                                    alt="paw prints" /></li>
                                <li><a href="./logInPageMockUp.html">Sign Out</a></li>
                                <li class="active"><a href="./homePageMockUp.html">Home</a></li>
                                <li><img style="height:50px"
                                    src="https://assets.stickpng.com/images/58aeffe6c869e092af51ee78.png"
                                    alt="paw prints" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-section content">
                <div class="grid-container" id="find">
                    <h1 id="title">Paw Prints</h1>
                    <div class="grid-x grid-padding-x">
                        <div class="medium-2 cell"></div>
                        <div class="medium-8 cell">
                            <h4>Find Your Lost Pets Here</h4>
                            <div class="grid-container">
                                <div class="grid-x grid-margin-x small-up-2 medium-up-3">
                                    <div class="cell">
                                        <div class="card">
                                            <img
                                                src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/07/15092404/do-dogs-grieve-other-dogs.jpg" />
                                            <div class="card-section">
                                                <h4>This is Hercules.</h4>
                                                <p>He was lost in Anchorage, Alaska.
                                            My contact info is email@email.net</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cell">
                                        <div class="card">
                                            <img
                                                src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/07/15092404/do-dogs-grieve-other-dogs.jpg" />
                                            <div class="card-section">
                                                <h4>This is Sheila.</h4>
                                                <p>It has an easy to override visual style, and is appropriately subdued.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cell">
                                        <div class="card">
                                            <img
                                                src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/07/15092404/do-dogs-grieve-other-dogs.jpg" />
                                            <div class="card-section">
                                                <h4>This is Juan.</h4>
                                                <p>It has an easy to override visual style, and is appropriately subdued.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul class="pagination-pointed pagination text-center" role="navigation" aria-label="Pagination">
                                    <li class="pagination-previous disabled">Previous <span class="show-for-sr">page</span></li>
                                    <li class="current"><span class="show-for-sr">You're on page</span> 1</li>
                                    <li><a class="pagination-pointed-button" href="#" aria-label="Page 2">2</a></li>
                                    <li><a class="pagination-pointed-button" href="#" aria-label="Page 3">3</a></li>
                                    <li><a class="pagination-pointed-button" href="#" aria-label="Page 4">4</a></li>
                                    <li class="ellipsis" aria-hidden="true"></li>
                                    <li class="pagination-next"><a class="pagination-pointed-button" href="#"
                                        aria-label="Next page">Next <span class="show-for-sr">page</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <img style="height:50px" src="https://assets.stickpng.com/images/58aeffe6c869e092af51ee78.png"
                    alt="paw prints" />
                    &copy; 2020 Group 3
                <img style="height:50px" src="https://assets.stickpng.com/images/58aeffe6c869e092af51ee78.png"
                    alt="paw prints" />
            </footer>
            <script src="./navBar.js"></script>
        </div>

    );
}

export default HomePage;
