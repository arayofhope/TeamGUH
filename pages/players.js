import Head from 'next/head'
import App from './_app.js'
import Link from 'next/link'


export default function Players() {

    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

    return(
      
      <div className="container">
      <Head>
        <title>Team GUH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <nav class="navbar is-dark">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://htmlpreview.github.io/?https://raw.githubusercontent.com/arayofhope/TeamGUH/main/src/index.html?token=AEMZHDDYBJQU25NT3A2RHQLBWZTM2">
            <img src="nav-logo.png" alt="Team GUH" width="112" height="28" />
          </a>

          <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item" href="/">
                Home
              </a>
              <a class="navbar-item" href="players">
                Players
              </a>
              <a class="navbar-item" href="https://htmlpreview.github.io/?https://raw.githubusercontent.com/arayofhope/TeamGUH/main/src/index.html?token=AEMZHDDYBJQU25NT3A2RHQLBWZTM2">
                News
              </a>
              <a class="navbar-item" href="https://htmlpreview.github.io/?https://raw.githubusercontent.com/arayofhope/TeamGUH/main/src/index.html?token=AEMZHDDYBJQU25NT3A2RHQLBWZTM2">
                About
              </a>
              <a class="navbar-item" href="https://htmlpreview.github.io/?https://raw.githubusercontent.com/arayofhope/TeamGUH/main/src/index.html?token=AEMZHDDYBJQU25NT3A2RHQLBWZTM2">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section class="hero">
        <figure class="image">
          <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Frobsalkowitz%2Ffiles%2F2017%2F04%2FTables-and-Game-Play-e1491258668234.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        </figure>
      </section>


      <section class="section">
      
      {/* Below is the player bios*/}     

       <div class="columns is-centered" style={mystyle}>
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src="pablo.jpeg" alt="Placeholder image"/>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Pablo Munoz</p>
                    <a class="subtitle is-6" href = "https://twitter.com/PabloSeven_7" color = "blue" >@PabloSeven_7</a>
                  </div>
                </div>

                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="columns is-centered" style={mystyle}>
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src="alex.jpeg" alt="Placeholder image"/>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Alexandro Morales</p>
                    <p class="subtitle is-6">@johnsmith</p>
                  </div>
                </div>

                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





      <section class="section">
        <div class="container has-text-centered">
          <h2 class="title">Send us your inquiries</h2>

          <form>
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <p class="control has-icons-left">
                    <input class="input" type="text" placeholder="Name" />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email" />
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <textarea class="textarea" placeholder="Message us"></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <button class="button is-primary">
                      Send message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      </main>
    </div>
      
    )
 }
