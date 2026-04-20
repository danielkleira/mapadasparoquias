import { useState } from "react";
import { Map, Overlay } from "pigeon-maps";
import { churches } from "./data/churches";
import type { Church } from "./data/churches";
import "./styles/map.css";

function getChurchStatus(church: Church) {
  const hasMass = church.mass_times.length > 0;
  const hasConfession = church.confession_times.length > 0;

  if (hasMass && hasConfession) return "full"; // verde
  if (hasMass) return "halfMass"; // metade verde metade vermelho
  if (hasConfession) return "halfConfession";
  return "none"; // vermelho
}

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
                className={`custom-marker ${getChurchStatus(church)}`}
                onClick={() => setSelectedChurch(church)}
              >
                <div className="marker-icon">⛪</div>
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
      <footer>
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
        <div className="map-legend">
          <div className="legend-item">
            <span className="legend-pin full"></span>
            <span>Confissão + Missa</span>
          </div>

          <div className="legend-item">
            <span className="legend-pin halfConfession"></span>
            <span>Confissão apenas</span>
          </div>

          <div className="legend-item">
            <span className="legend-pin halfMass"></span>
            <span>Missa apenas</span>
          </div>

          <div className="legend-item">
            <span className="legend-pin none"></span>
            <span>Sem dados</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
