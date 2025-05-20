function Nav() {
  return (
    <section>
      <div className="nav">
        <div className="hero-nav">
          <div className="burger-menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="white"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </div>
          <div className="logo">
            <div>
              <img
                src="https://images.ctfassets.net/vy53kjqs34an/3b6vBa9H4jGNZQvpCDV9sm/ca9a29433c61e153eaa123f7fb59ec15/website_RiyadhSeason_w.png?fm=webp&w=85&h=110"
                alt=""
                width="90%"
              />
            </div>
          </div>
          <div className="nav-hero-btns">
            <button className="arabic-btn">
              <a href="">العربية</a>
            </button>
            <button className="booklet-btn">View Booklet</button>
          </div>
        </div>
        <div className="nav-body">
          <div className="nav-btm">
            <div className="welcome-msg">
              <p>Welcome to Riyadh Season 2024</p>
            </div>
            <div className="nav-btm-btns">
              <button className="explore">
                <a href="">Explore</a>
              </button>
              <button className="tickets">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  class="bi bi-ticket-perforated-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zm4-1v1h1v-1zm1 3v-1H4v1zm7 0v-1h-1v1zm-1-2h1v-1h-1zm-6 3H4v1h1zm7 1v-1h-1v1zm-7 1H4v1h1zm7 1v-1h-1v1zm-8 1v1h1v-1zm7 1h1v-1h-1z" />
                </svg>
                &nbsp; Book Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nav;
