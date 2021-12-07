import Head from 'next/head'
import App from './_app.js'

export default function Home() {
  return (
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
        <div class="container has-text-centered">
          <h2 class="title">Team GUH</h2>
          <p>One of the GUH-reatest pokemon TCG teams in California. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
