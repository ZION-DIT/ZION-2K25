import React from "react";
import Navbar from "../Navbar";

const NoSponsors = () => {
  return (
    <>
    {/* <video style={styles.background} className="video-bg" autoPlay loop muted onLoadedMetadata={(e) => (e.currentTarget.playbackRate = 0.5)}>
        <source src="https://cdn.pixabay.com/video/2022/11/18/139586-773417795_large.mp4" type="video/mp4" />
    </video> */}
    <Navbar/>
    <div style={styles.container}>
      <h1 style={styles.title}>No Sponsors Data Available</h1>
      <p style={styles.subtitle}>This page will be updated soon. Stay tuned!</p>
    </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#121212",
    color: "#fff",
    textAlign: "center",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#c46bff",
    textShadow: "0 0 15px rgba(131, 56, 236, 0.3)",
  },
  subtitle: {
    fontSize: "18px",
    color: "#bbb",
  },
  background :{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  }
};

export default NoSponsors;
