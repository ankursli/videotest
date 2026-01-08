import React from 'react'

function App() {
  const styles = {
    container: {
      fontFamily: '"Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      color: '#2d3436',
      margin: 0,
      padding: 0,
      lineHeight: '1.6',
      width: '100%',
      overflowX: 'hidden'
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 5%',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: '800',
      color: '#646cff',
      cursor: 'pointer'
    },
    navLinks: {
      display: 'flex',
      listStyle: 'none',
      gap: '30px',
      margin: 0
    },
    hero: {
      padding: '100px 5%',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    },
    heroTitle: {
      fontSize: '3.5rem',
      marginBottom: '20px',
      fontWeight: '800'
    },
    videoSection: {
      width: '100%',
      backgroundColor: '#000',
      padding: '60px 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    videoWrapper: {
      width: '90%',
      maxWidth: '1000px',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
    },
    videoElement: {
      width: '100%',
      display: 'block'
    },
    button: {
      padding: '12px 28px',
      fontSize: '1rem',
      backgroundColor: '#646cff',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: '600',
      transition: '0.3s'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
      padding: '80px 5%'
    },
    card: {
      padding: '30px',
      borderRadius: '12px',
      border: '1px solid #eee',
      textAlign: 'center'
    }
  }

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>VIDEOTEST</div>
        <ul style={styles.navLinks}>
          <li style={{ cursor: 'pointer' }}>Products</li>
          <li style={{ cursor: 'pointer' }}>Features</li>
          <li style={{ cursor: 'pointer' }}>Pricing</li>
        </ul>
        <button style={styles.button}>Login</button>
      </nav>

      {/* Hero Section */}
      <header style={styles.hero}>
        <h1 style={styles.heroTitle}>Build your next big idea.</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 30px' }}>
          Welcome to your new React application. This is a dummy home page created with JavaScript and Vite on your macOS.
        </p>
        <button style={styles.button}>Start for Free</button>
      </header>

      {/* Video Section */}
      <section style={styles.videoSection}>
        <div style={styles.videoWrapper}>
          <video
            style={styles.videoElement}
            controls
            autoPlay
            muted
            loop
            poster="https://via.placeholder.com/1000x560?text=Loading+Video..."
          >
            <source
              src="/hero-banner.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.grid}>
        <div style={styles.card}>
          <h2 style={{ color: '#646cff' }}>01</h2>
          <h3>Fast Loading</h3>
          <p>Optimized with SWC for the best developer experience on Mac.</p>
        </div>
        <div style={styles.card}>
          <h2 style={{ color: '#646cff' }}>02</h2>
          <h3>Modern UI</h3>
          <p>Clean and responsive design built entirely with React components.</p>
        </div>
        <div style={styles.card}>
          <h2 style={{ color: '#646cff' }}>03</h2>
          <h3>Pure JSX</h3>
          <p>No TypeScript complications, just clean JavaScript and React code.</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '40px', borderTop: '1px solid #eee', color: '#636e72' }}>
        <p>&copy; 2026 Videotest Project. Built on Localhost.</p>
      </footer>
    </div>
  )
}

export default App