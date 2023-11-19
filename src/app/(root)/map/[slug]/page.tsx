'use client';

import React, { useEffect, useState } from 'react';
import { GeoJsonObject } from 'geojson';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { ContentCard } from '@/components/Common/ContentCard/ContentCard';

import 'leaflet/dist/leaflet.css';

export default function Home() {
  // const { slug } = useParams();
  const [dashboardsMap, setDashboardsMap] = useState<GeoJsonObject>();
  // const id = parseInt(slug as string, 10);
  // const workRelation = parseInt(getCookie('workRelation') as string, 10);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/tbrugz/geodata-br/master/geojson/geojs-41-mun.json')
      .then(res => res.json())
      .then(
        (result) => {
          setDashboardsMap(result);
        }
      );
  });

  return (
    <ContentCard h="800px">
      <MapContainer center={[-25.516592, -54.585251]} zoom={13} scrollWheelZoom={false} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {dashboardsMap && <GeoJSON data={dashboardsMap} />}
      </MapContainer>
    </ContentCard>
  );
}
