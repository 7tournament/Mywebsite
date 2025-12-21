/* RESET */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* BODY */
body {
  font-family: 'Orbitron', sans-serif;
  background: black;
  color: white;
  height: 100vh;
  overflow: hidden;
}

/* CANVAS */
canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
}

/* CENTER WRAPPER */
.page-wrapper {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

/* PROFILE CARD */
.profile-container {
  width: 360px;
  max-width: 90%;
  padding: 45px 35px;
  border-radius: 28px;

  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(25px);

  border: 2px solid rgba(0,255,255,0.5);
  box-shadow:
    0 0 60px rgba(0,255,255,0.6),
    inset 0 0 25px rgba(0,255,255,0.2);

  text-align: center;
  transform-style: preserve-3d;
  transition: transform 0.2s ease;
}

.profile-container:hover {
  transform: rotateY(8deg) rotateX(5deg) scale(1.05);
}

/* PROFILE IMAGE */
.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;

  border: 3px solid #00ffff;
  box-shadow: 0 0 40px #00ffff, 0 0 80px #0066ff;

  margin-bottom: 20px;
}

/* NAME */
.profile-name {
  font-size: 38px;
  font-weight: 700;

  background: linear-gradient(90deg,#00ffff,#0066ff,#25F4EE,#FE2C55);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-shadow: 0 0 30px #00ffff;
  margin-bottom: 12px;
}

/* DESCRIPTION */
.profile-subtitle {
  font-size: 16px;
  color: #00ffcc;
  line-height: 1.6;
  margin-bottom: 20px;
}

/* SOCIAL ICONS */
.social-icons {
  display: flex;
  justify-content: center;
  gap: 18px;
}

.social-icons a {
  width: 55px;
  height: 55px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 22px;
  font-weight: bold;
  color: white;
  text-decoration: none;

  box-shadow: 0 0 25px rgba(0,255,255,0.8);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.social-icons a:hover {
  transform: scale(1.4);
  box-shadow: 0 0 50px rgba(0,255,255,1);
}

.tiktok { background: linear-gradient(45deg,#25F4EE,#FE2C55); }
.instagram { background: radial-gradient(circle at 30% 107%,#fdf497,#fd5949,#d6249f,#285AEB); }
.discord { background: #7289da; }

/* MUSIC BUTTON */
#musicBtn {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 5;

  padding: 12px 18px;
  border-radius: 12px;
  border: none;

  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  background: #00ffff;
  color: black;

  box-shadow: 0 0 30px #00ffff;
}
