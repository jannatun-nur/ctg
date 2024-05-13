// 

import sunrise from '../../public/sunrise.png';
import sunset from '../../public/sunset.png';
import weather from '../../public/wa.png';
import clock from '../../public/clock (1).png';
import { useState, useEffect } from 'react';

const Weather = () => {

    const [localTime, setLocalTime] = useState(new Date());
    const [sunriseTime, setSunriseTime] = useState(null);
    const [sunsetTime, setSunsetTime] = useState(null);
    const [weatherData, setWeatherData] = useState(null);

    // For local time of bangladesh
    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return () => {
            clearInterval(timerID);
        };
    }, []);

    const tick = () => {
        setLocalTime(new Date());
    };

    const formatTime = (time) => {
        const options = {
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',   
        };
        return time.toLocaleTimeString('en-BD', options);
    };

    // Fetch weather data and sunrise/sunset time
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
                const apiKey = "016bcaa0473dcc15e28d1771a29849a0";
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bangladesh&appid=${apiKey}&units=metric`);
                const data = await response.json();
                // Extract sunrise and sunset times from API response
                const sunriseTimestamp = data.sys.sunrise * 1000;
                const sunsetTimestamp = data.sys.sunset * 1000;
                const sunriseDate = new Date(sunriseTimestamp);
                const sunsetDate = new Date(sunsetTimestamp);
                const sunriseTimeString = sunriseDate.toLocaleTimeString();
                const sunsetTimeString = sunsetDate.toLocaleTimeString();
                setSunriseTime(sunriseTimeString);
                setSunsetTime(sunsetTimeString);
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {/* main div */}
            <div className='lg:flex justify-evenly lg:gap-16 lg:p-10 mx-auto grid grid-cols-2 gap-4 px-2'>
                {/* section 01 */}
                <section className='lg:w-3/12'>
                    {/* div 1 */}
                    <div className='bg-gray-200 lg:w-64 lg:h-24 rounded-lg'>
                        <img className='lg:ml-16 hidden lg:block' src={sunrise} alt="" />
                    </div>
                    {/* div 02 */}
                    <div className='bg-rose-400 lg:w-12/12 h-40 md:h-56 lg:h-72 rounded-lg lg:mt-4'>
                        <img className='lg:hidden  md:ml-32' src={sunrise} alt="" />
                        <p className='text-center lg:text-2xl lg:pt-6 text-white'>Sunrise</p>
                        <p className='text-center lg:text-4xl lg:pt-9 text-white'> {sunriseTime} </p>
                    </div>
                </section>

                {/* section 02 */}
                <section className='lg:w-3/12 '>
                    {/* div 1 */}
                    <div className='bg-orange-500 md:h-56 lg:w-12/12 h-40 lg:h-60 rounded-lg'>
                        <img className='lg:hidden md:w-36 md:h-32 md:ml-24' src={sunset} alt="" />
                        <p className='text-center lg:text-2xl lg:pt-6 text-white'>Sunset</p>
                        <p className='text-center lg:text-4xl lg:pt-9 text-white'>{sunsetTime}</p>
                    </div>
                    {/* div 02 */}
                    <div className='bg-gray-200 lg:w-64 h-32 rounded-lg lg:mt-4 hidden lg:block'>
                        <img className='lg:w-48 lg:h-36 lg:ml-7' src={sunset} alt="" />
                    </div>
                </section>

                {/* section 03 */}
                <section className='lg:w-3/12'>
                    {/* div 1 */}
                    <div className='bg-gray-200 lg:w-64 h-32 rounded-lg lg:mb-3  hidden lg:block'>
                        <img className='lg:w-36 lg:h-28 lg:ml-14' src={weather} alt="" />
                    </div>
                    {/* div 02 */}
                    <div className='bg-purple-600 h-40 md:h-56 lg:h-56 rounded-lg '>
                        <img className='lg:hidden h-16 w-24 ml-5 pt-2 md:w-32 md:ml-32 md:h-28' src={weather} alt="" />
                        <p className='text-center lg:text-2xl lg:pt-6 text-white lg:mt-0 mt-4'>Weather</p>
                        {weatherData && (
                            <p className='text-center lg:text-4xl text-white lg:mt-8 mt-2'>{weatherData.main.temp}&deg;C</p>
                        )}
                    </div>
                </section>

                {/* section 04 */}
                <section className='lg:w-3/12'>
                    {/* div 1 */}
                    <div className='bg-blue-300 lg:h-64 md:h-56 h-40 rounded-lg flex justify-center items-center text-white'>
                        <div>
                            <img className='lg:hidden h-24 w-20 ml-3' src={clock} alt="" />
                            <p className='text-center lg:text-2xl lg:mb-3'>Local Time</p>
                            <p className='text-center lg:text-4xl lg:mt-5'>{formatTime(localTime)}</p>
                        </div>
                    </div>
                    {/* div 02 */}
                    <div className='bg-gray-200 lg:w-64 h-28 rounded-lg lg:mt-3 hidden lg:block'>
                        <img className='lg:w-24 lg:h-24 lg:ml-20' src={clock} alt="" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Weather;
