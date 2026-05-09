import { useEffect, useState } from "react";
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

  // centro do mapa
  const [center, setCenter] = useState<[number, number]>([-22.911, -43.18]);

  const [zoom, setZoom] = useState(14);

  // CEP digitado
  const [cep, setCep] = useState("");

  // pega localização do usuário automaticamente
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCenter([position.coords.latitude, position.coords.longitude]);

        setZoom(14);
      },
      (error) => {
        console.log("Usuário não permitiu localização", error);
      },
    );
  }, []);

  // busca CEP
  async function handleSearchCEP() {
    const cleanCep = cep.replace(/\D/g, "");

    if (cleanCep.length !== 8) {
      alert("CEP inválido");
      return;
    }

    try {
      // ViaCEP -> pega endereço
      const response = await fetch(
        `https://viacep.com.br/ws/${cleanCep}/json/`,
      );

      const data = await response.json();

      // transforma endereço em coordenadas
      const geoResponse = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${data.logradouro},${data.localidade},${data.uf}`,
      );

      const geoData = await geoResponse.json();

      if (geoData.length > 0) {
        const lat = parseFloat(geoData[0].lat);
        const lon = parseFloat(geoData[0].lon);

        setCenter([lat, lon]);
        setZoom(15);
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao buscar CEP");
    }
  }
  return (
    <div className="map-container">
      <h1 className="title">Mapa das Paróquias, missas e confissões</h1>

      <h4>920 locais de culto registrados</h4>
      {/* BUSCA CEP */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Digite um CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />

        <button onClick={handleSearchCEP}>Buscar CEP</button>
      </div>
      <div className="map-wrapper">
        <Map
          height={600}
          center={center}
          zoom={zoom}
          onBoundsChanged={({ center, zoom }) => {
            setCenter(center);
            setZoom(zoom);
          }}
        >
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
