import { useState } from "react";
import { Map, Overlay } from "pigeon-maps";
import { churches } from "./data/churches";
import type { Church } from "./data/churches";
import "./styles/map.css";

export default function MapPage() {
  const [selectedChurch, setSelectedChurch] = useState<Church | null>(null);

  return (
    <div className="map-container">
      <h1 className="title">Mapa das Paróquias, missas e confissões</h1>

      <div className="map-wrapper">
        <Map height={600} defaultCenter={[-22.911, -43.18]} defaultZoom={12}>
          {churches.map((church) => (
            <Overlay key={church.id} anchor={[church.lat, church.lng]}>
              <div
                className="custom-marker"
                onClick={() => setSelectedChurch(church)}
              >
                ⛪
              </div>
            </Overlay>
          ))}
        </Map>

        {selectedChurch && (
          <div className="church-panel">
            <h2>{selectedChurch.name}</h2>
            <p className="address">{selectedChurch.address}</p>

            <h3>🕊 Missas</h3>
            {selectedChurch.mass_times.map((m, i) => (
              <div key={i} className="item">
                <strong>{m.day}:</strong> {m.time}
              </div>
            ))}

            <h3>🙏 Confissões</h3>
            {selectedChurch.confession_times.map((c, i) => (
              <div key={i} className="item">
                <strong>{c.day}:</strong> {c.start} - {c.end}
              </div>
            ))}

            <button onClick={() => setSelectedChurch(null)}>Fechar</button>
          </div>
        )}
      </div>
      <div className="form-link-container">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeE417xaSed7ZR-kxZveL9I1gBU3GsLg1qAzxVj6fm3hWQxLA/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
          className="form-button"
        >
          ➕ Enviar minha paróquia
        </a>
      </div>
    </div>
  );
}
