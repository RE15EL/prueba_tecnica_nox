"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { ButtonSpecial } from "@/components/ui";
import { Button } from "@/components/ui/button";


import { useRouter } from "next/navigation";
import { AssignToMessenger } from "../assign-to-messenger/AssignToMessenger";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

const customIcon = L.icon({
  iconUrl: "/images/location.png",
  iconSize: [18, 24],
  iconAnchor: [19, 95],
  popupAnchor: [0, -76],
});

const Map = () => {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  

  const markers = [
    {
      id: 1,
      position: [51.505, -0.07],
      info: {
        orderId: "O-4517",
        address: "Calle 5 e/ 25 y 36 Siboney Playa #4578 ",
        place: "BOMBA DE AGUA UYUSTOOLS",
      },
    },
    {
      id: 2,
      position: [51.505, -0.09],
      info: {
        orderId: "O-4517",
        address: "Calle 5 e/ 25 y 36 Siboney Playa #4578 ",
        place: "BOMBA DE AGUA UYUSTOOLS",
      },
    },
    {
      id: 3,
      position: [51.51, -0.1],
      info: {
        orderId: "O-4518",
        address: "Calle 5 e/ 25 y 36 Siboney Playa #4578 ",
        place: "BOMBA DE AGUA UYUSTOOLS",
      },
    },
    {
      id: 4,
      position: [51.52, -0.08],
      info: {
        orderId: "O-4519",
        address: "Calle 5 e/ 25 y 36 Siboney Playa #4578 ",
        place: "BOMBA DE AGUA UYUSTOOLS",
      },
    },
    {
      id: 5,
      position: [51.53, -0.07],
      info: {
        orderId: "O-4517",
        address: "Calle 5 e/ 25 y 36 Siboney Playa #4578 ",
        place: "BOMBA DE AGUA UYUSTOOLS",
      },
    },
  ];

  useEffect(() => {
    // Aquí puedes manejar efectos secundarios relacionados con el mapa si es necesario
    return () => {
      // Limpiar el mapa si es necesario
    };
  }, []);

  const handleViewDetails = () => {
    console.log("View Details");
    router.push("/orders/details");
    // closeModal();
  };

  const handleAssign = () => {
    console.log("Assign");
    setModalIsOpen(true);
  };

  return (
    <>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position as [number, number]}
            icon={customIcon}
            title={marker.info.orderId}
          >
            <Popup>
              <p className="text-[14px] text-gray-300 font-normal">
                {marker.info.address}
              </p>
              <p className="text-[14px] text-[#2D3748]">{marker.info.place}</p>
              <div className="flex justify-center items-center gap-2.5">
                <Button
                  className="px-4 rounded-[16px] w-[108px] bg-white text-[#FF7500] text-sm border border-[#FF7500] hover:bg-[#FF7500] hover:text-white"
                  onClick={handleViewDetails}
                >
                  View Details
                </Button>
                <ButtonSpecial
                  label="Assign"
                  classes="w-[108px] text-sm border border-[#FF7500]"
                  action={handleAssign}
                />
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <AssignToMessenger open={modalIsOpen} setOpen={setModalIsOpen}/>
    </>
  );
};

export default Map;
