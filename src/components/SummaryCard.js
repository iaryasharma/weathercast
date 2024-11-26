import React from 'react';

function SummaryCard({ forecastData, isFahrenheitMode, degreeSymbol }) {
  const { day, date, minTemp, maxTemp, weatherCondition, weatherIcon } = forecastData;

  // Convert temperatures to Fahrenheit if needed
  const getConvertedTemp = (temp) => {
    if (isFahrenheitMode) {
      return (temp * 9) / 5 + 32; // Convert to Fahrenheit
    }
    return temp; // Return in Celsius if Fahrenheit mode is off
  };

  const minTemperature = getConvertedTemp(minTemp);
  const maxTemperature = getConvertedTemp(maxTemp);

  return (
    <li className="summary-card">
      <div className="summary-card-info">
        <h4>{day}</h4>
        <h4>{date}</h4>
        <p>{maxTemperature}° {degreeSymbol} /</p>
        <p>{minTemperature}° {degreeSymbol}</p>
        <img src={weatherIcon} alt={`${day} weather`} />
        <p>{weatherCondition}</p>
      </div>
    </li>
  );
}

export default SummaryCard;
