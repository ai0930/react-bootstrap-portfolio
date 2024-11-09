import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import SchedulePage from "./components/SchedulePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Typography, Box, Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
        </Routes>
      </Router>

      {/* Swiperの部分 */}
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Image Swiper
        </Typography>
        <Swiper spaceBetween={50} slidesPerView={1} loop={true}>
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 300,
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <img
                  src={slide.imageUrl}
                  alt={slide.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}

export default App;
