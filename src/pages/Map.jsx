import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { supabase } from "../js/supabaseClient";
mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2xpdGNoeWkiLCJhIjoiY2xneTA2ZjVlMDRuZjNyczJ6NHRuYmd0cyJ9.GWx1mmPK77mst9pIodDp_A";

const Map = () => {
  const { state } = useLocation();
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    const createMap = async () => {
      const { data, error } = await supabase
        .from("Reports")
        .select("*")
        .order("id", { ascending: true });
      if (error) {
        console.log(error);
      }
      if (data) {
        console.log(data);
      }
      if (map.current) return;
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [75.09163450867304, 12.392918445555118],
        zoom: 15,
      });
      data.map((value) => {
        console.log(value.longitude + " " + value.latitude);
        new mapboxgl.Marker()
          .setLngLat([value.longitude, value.latitude])
          .addTo(map.current);
      });
    };
    createMap();
  });
  return (
    <>
      {state.state == "ADMIN" && (
        <div className="h-auto w-screen p-5 pb-24 relative">
          <div className="flex justify-between pb-16">
            <h1 className="robo text-3xl font-black w-1/2 text-[#BB0C0C]">
              Map
            </h1>
            <img src="/user.svg" alt="The Navigation Icon" />
          </div>
          <button className="bg-[#D9D9D9] text-[#696969] w-full h-12 rounded-xl text-xl robo">
            Search Locations
          </button>
          <div ref={mapContainer} className="h-96 w-full mt-10"></div>
          <Navbar state={state} />
        </div>
      )}
    </>
  );
};

export default Map;
