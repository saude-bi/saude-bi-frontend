'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { getCookie } from 'cookies-next';
import { useFindDashboardUrlQuery } from '@/store/dashboards';
import { ContentCard } from '@/components/Common/ContentCard/ContentCard';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import "leaflet/dist/leaflet.css";

export default function Home() {
  const { slug } = useParams();
  const id = parseInt(slug as string, 10);
  const workRelation = parseInt(getCookie('workRelation') as string, 10);

  return (
    <ContentCard h="800px">
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ width: "100%", height: "100%" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    </ContentCard>
  );
}
