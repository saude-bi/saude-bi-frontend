'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getCookie } from 'cookies-next';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { MapContainer, TileLayer, GeoJSON, LayersControl, WMSTileLayer } from 'react-leaflet';
import { ContentCard } from '@/components/Common/ContentCard/ContentCard';

import 'leaflet/dist/leaflet.css';
import { useFindGeographicLayerDataQuery } from '@/store/geo-layer';
import { FindGeoLayerDataDto } from '@/types/geo-layer';
import { CRS } from 'leaflet';

export default function Home() {
  const { slug } = useParams();
  const [dashboardsMap, setDashboardsMap] = useState<any>();
  const id = parseInt(slug as string, 10);
  const workRelation = parseInt(getCookie('workRelation') as string, 10);
  const { data, isSuccess } = useFindGeographicLayerDataQuery(
    !!slug && !!workRelation
      ? {
          id,
          params: { workRelation },
        }
      : skipToken
  );

  useEffect(() => {
    console.log(data?.data);
  }, [isSuccess]);

  useEffect(() => {
    fetch('https://geoservertre.geo.pr.gov.br/geoserver/seil_der/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=seil_der:rodovias_lin_p4326_a2013&maxFeatures=100000&outputFormat=application%2Fjson')
      .then(res => res.json())
      .then(
        (result) => {
          setDashboardsMap(result);
        }
      );
  }, []);

  return (
    <ContentCard h="800px">
      <MapContainer center={[-25.516592, -54.585251]} crs={CRS.EPSG4326} zoom={13} scrollWheelZoom={false} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={dashboardsMap} />
      </MapContainer>
    </ContentCard>
  );
}
