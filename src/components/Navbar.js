

const Navbar = () => {
    return (
        <div className="flex p-2 bg-cyan-700 text-slate-300 justify-between">
            <div className="flex text-xl font-bold">WeatherApp</div>
            <p className="flex text-xs items-end">powered by openWeather API</p>
        </div>
    )
}

export default Navbar
