import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

interface MapProps {
  address: string;
}

function Map({ address }: MapProps) {
  useEffect(() => {
    const mapScript = document.createElement('script');
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false&libraries=services,clusterer,drawing`;

    mapScript.addEventListener('load', () => {
      window.kakao.maps.load(() => {
        // Create a map centered at the default coordinates
        const mapContainer = document.getElementById('map');
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        // Use Kakao's Geocoder to convert the address to coordinates
        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(address, (result: any, status: any) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const markerPosition = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );

            // Create a marker at the specified coordinates
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: markerPosition,
            });

            // Move the map center to the marker position
            map.setCenter(markerPosition);
          }
        });
      });
    });

    document.head.appendChild(mapScript);

    return () => {
      mapScript.removeEventListener('load', () => {});
    };
  }, [address]);

  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: '400px',
        position: 'relative',
        zIndex: 1,
      }}
    />
  );
}

export default Map;
