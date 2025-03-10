export default function Home() {
  return (
    <main className="py-8">
      <div className="header-container">
        <h1>Connor Sweeney</h1>
        <div className="social-icons">
          <a href="https://www.instagram.com/sweeneyconnor/" aria-label="Instagram">
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://www.twitter.com/_ConnorSweeney" aria-label="Twitter">
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/connorjsweeney" aria-label="LinkedIn">
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>

      <p>
        Previously chief of staff to <a href="https://twitter.com/lucy_guo/status/1572660635187531777?s=20&t=UHhW1GuohBblbSBuRGl-4g" className="bio-link">Lucy Guo</a>. 
        Employee #2 at <a href="https://blog.passes.com/passes-announces-40m-series-a/" className="bio-link">Passes</a>.
      </p>
      <br />
      <p>
        I grew up in Delaware, went to <a href="http://web.mit.edu/voigtlab/" className="bio-link">MIT</a>, and cofounded an agricultural synthetic biology startup called <a href="https://agfundernews.com/robigo-raises-1-2m-pre-seed-funding-to-make-molecular-vigilante-biopesticides" className="bio-link">Robigo</a>. 
      </p>

      <hr className="section-break" />

      <h2>Articles</h2>
      <div className="investment-list">
        <div className="investment-item">
          <a href="https://www.nature.com/articles/s41564-024-01918-0">
            How to deploy engineered microbes into the environment & consumer settings
          </a>
          <span className="investment-description">Nature Microbiology, 2025</span>
        </div>
        <div className="investment-item">
          <a href="https://www.nature.com/articles/s41565-019-0375-4">
            Plants can be engineered with nanotubes
          </a>
          <span className="investment-description">Nature Nanotechnology, 2019</span>
        </div>
        <div className="investment-item">
          <a href="https://www.frontiersin.org/articles/10.3389/fpls.2017.00595/full">
            Plants warn neighbors when scared
          </a>
          <span className="investment-description">Frontiers in Plant Science, 2017</span>
        </div>
      </div>

      <h2 className="smaller-heading">Investments</h2>
      <div className="investment-list">
        <div className="investment-item">
          <a href="https://shipodyssey.com/">Odyssey</a>
          <span className="investment-description">Flexport for healthcare</span>
        </div>
        <div className="investment-item">
          <a href="https://readyspaces.com/">ReadySpaces</a>
          <span className="investment-description">Modular warehouses</span>
        </div>
        <div className="investment-item">
          <a href="https://sunflowersober.com/">Sunflower Sober</a>
          <span className="investment-description">The toolkit to end addiction</span>
        </div>
        <div className="investment-item">
          <a href="https://www.1849.bio/">1849 Bio</a>
          <span className="investment-description">Microbes for metal extraction</span>
        </div>
        <div className="investment-item">
          <a href="https://www.pipedreamlabs.co/">Pipedream Labs</a>
          <span className="investment-description">Autonomous underground logistics</span>
        </div>
        <div className="investment-item">
          <a href="https://www.makerain.com/">Rainmaker</a>
          <span className="investment-description">On-demand rain</span>
        </div>
        <div className="investment-item">
          <a href="https://atomicsemi.com/">Atomic Semi</a>
          <span className="investment-description">American-made chips</span>
        </div>
        <div className="investment-item">
          <a href="https://www.switchbioworks.com">Switch Bioworks</a>
          <span className="investment-description">Nitrogen-fixing microbes</span>
        </div>
        <div className="investment-item">
          <a href="https://www.plonts.com/">Tezza</a>
          <span className="investment-description">Plant-based cheese and yogurt</span>
        </div>
        <div className="investment-item">
          <a href="https://www.endless.health">Endless Health</a>
          <span className="investment-description">Heart hormone coaching</span>
        </div>

      </div>
    </main>
  )
} 