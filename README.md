# 🌾 AgroTeranga AI – Precision Irrigation Platform

**AgroTeranga AI** is a smart irrigation system designed for smallholder farmers in Senegal. It leverages **IoT sensors**, **satellite data (EO)**, **weather APIs**, and **machine learning** to optimize water usage, increase crop yields, and promote sustainable agriculture.

---

## 🚀 Overview

AgroTeranga AI provides **personalized irrigation recommendations** by combining:

- 🌡️ **Soil sensors** for moisture, temperature, and evapotranspiration.
- 🛰️ **Sentinel-2 satellite data** (NDVI, CWSI) via Earth Observation APIs.
- 🌦️ **OpenWeather API** for real-time climate data.
- 🧠 A **pre-trained ML model** (XGBoost or Random Forest) for water volume and duration prediction.


---

## 🔧 Architecture


---

## 🗂️ Project Structure


---

## 🌐 APIs Used

- [Copernicus Sentinel-2](https://sentinels.copernicus.eu/) – NDVI, CWSI via EO API.
- [OpenWeatherMap](https://openweathermap.org/api) – Temperature, humidity, wind.
- [CHIRPS](https://data.chc.ucsb.edu/products/CHIRPS-2.0/) – Rainfall data.

---

## 📊 Machine Learning Model

- **Type**: Supervised regression
- **Model**: Random Forest / XGBoost
- **Inputs**: Soil moisture, NDVI, CWSI, temp, rainfall, crop type
- **Outputs**:
  - Recommended water volume (L)
  - Irrigation duration (minutes)

---

## 📱 Interface Features

- Multilingual support (French, Wolof)
- Offline-friendly with local caching
- Visual dashboard: stress maps, forecasted irrigation
- Alert system for critical drought risk

---

## 🛠️ How to Run (Local)

1. **Backend**
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
cd frontend/vue-client
npm install
npm run serve
