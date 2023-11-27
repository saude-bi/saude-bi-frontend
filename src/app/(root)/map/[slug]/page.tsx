'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { getCookie } from 'cookies-next';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { ContentCard } from '@/components/Common/ContentCard/ContentCard';

import 'leaflet/dist/leaflet.css';
import { useFindGeographicLayerDataQuery } from '@/store/geo-layer';

export default function Home() {
  const { slug } = useParams();
  const id = parseInt(slug as string, 10);
  const workRelation = parseInt(getCookie('workRelation') as string, 10);
  const { data } = useFindGeographicLayerDataQuery(
    !!slug && !!workRelation
      ? {
          id,
          params: { workRelation },
        }
      : skipToken
  );

  return (
    <ContentCard h="800px">
      <MapContainer
        center={[-25.516592, -54.585251]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={data?.data} />
      </MapContainer>
    </ContentCard>
  );
}
