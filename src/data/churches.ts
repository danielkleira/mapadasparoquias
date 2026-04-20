export type MassTime = {
  day: string;
  time: string;
  type: "Missa";
};

export type ConfessionTime = {
  day: string;
  start: string;
  end: string;
  type: "Confissão";
};

export type Church = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
  mass_times: MassTime[];
  confession_times: ConfessionTime[];
};

export const churches: Church[] = [
  {
    id: 1,
    name: "Igreja Santo Afonso",
    lat: -22.9229,
    lng: -43.236,
    address: "Rua Barão de Mesquita, 275 - Tijuca-RJ",
    confession_times: [
      { day: "Terça a Sexta", start: "08:30", end: "10:30", type: "Confissão" },
      { day: "Terça a Sexta", start: "15:00", end: "16:30", type: "Confissão" },

      { day: "Sábado", start: "08:00", end: "10:30", type: "Confissão" },
      { day: "Sábado", start: "15:00", end: "16:30", type: "Confissão" },
    ],
    mass_times: [
      { day: "Terça", time: "07:00, 15:00, 18:00", type: "Missa" },

      { day: "Quarta", time: "07:00, 18:00", type: "Missa" },

      { day: "Quinta", time: "07:00, 17:30", type: "Missa" },

      { day: "Sexta", time: "07:00, 18:00", type: "Missa" },

      { day: "Sábado", time: "07:00, 15:00, 18:00", type: "Missa" },

      {
        day: "Domingo",
        time: "07:00, 09:00, 11:00, 17:00, 19:00",
        type: "Missa",
      },
    ],
  },

  {
    id: 2,
    name: "Basílica Imaculada Conceição",
    lat: -22.9432,
    lng: -43.1823,
    address: "Praia de Botafogo, 266 - Botafogo-RJ",
    confession_times: [
      {
        day: "Não disponível",
        start: "",
        end: "",
        type: "Confissão",
      },
    ],
    mass_times: [
      {
        day: "Segunda a Sábado",
        time: "07:30, 18:00",
        type: "Missa",
      },
      {
        day: "Domingo",
        time: "07:30, 09:00, 10:30, 12:00, 18:00",
        type: "Missa",
      },
    ],
  },
  {
    id: 3,
    name: "Paróquia São José",
    lat: -22.9314,
    lng: -43.3847,
    address: "Estrada Mapúa, 784 - Taquara, Rio de Janeiro - RJ",
    confession_times: [
      {
        day: "Quarta e Quinta",
        start: "18:50",
        end: "19:20",
        type: "Confissão",
      },
    ],
    mass_times: [
      {
        day: "Segunda a Quinta",
        time: "19:30",
        type: "Missa",
      },
      {
        day: "Sexta",
        time: "09:00",
        type: "Missa",
      },
      {
        day: "Sábado",
        time: "18:00",
        type: "Missa",
      },
      {
        day: "Domingo",
        time: "07:00, 09:00, 19:00",
        type: "Missa",
      },
    ],
  },
  {
    id: 4,
    name: "Capela Nossa Senhora dos Remédios",
    lat: -22.9354,
    lng: -43.3988,
    address:
      "Estrada Rodrigues Caldas, 3428 - Jacarepaguá, Rio de Janeiro - RJ",
    confession_times: [
      {
        day: "Não disponível",
        start: "",
        end: "",
        type: "Confissão",
      },
    ],
    mass_times: [
      {
        day: "Domingo",
        time: "11:00",
        type: "Missa",
      },
    ],
  },

  {
    id: 5,
    name: "Paróquia de Nossa Senhora do Rosário de Fátima e Santo Antônio de Lisboa",
    lat: -22.9188,
    lng: -43.373,
    address: "R. Bacairis, 390 - Taquara, Rio de Janeiro - RJ",
    confession_times: [
      {
        day: "Não disponível",
        start: "",
        end: "",
        type: "Confissão",
      },
    ],
    mass_times: [
      {
        day: "Segunda, Quarta e Sexta",
        time: "19:00",
        type: "Missa",
      },
      {
        day: "Terça e Quinta",
        time: "08:00, 19:00",
        type: "Missa",
      },
      {
        day: "Sábado",
        time: "16:00, 18:00",
        type: "Missa",
      },
      {
        day: "Domingo",
        time: "07:00, 09:00, 11:00, 18:00, 20:00",
        type: "Missa",
      },
    ],
  },
  {
    id: 6,
    name: "Santuário de Nossa Senhora de Fátima | Tarde com Maria",
    lat: -23.0123,
    lng: -43.4448,
    address:
      "Av. Alfredo Balthazar da Silveira, 900 - Recreio dos Bandeirantes, Rio de Janeiro - RJ",
    confession_times: [
      {
        day: "Todos os dias",
        start: "08:00",
        end: "12:00",
        type: "Confissão",
      },
      {
        day: "Todos os dias",
        start: "15:00",
        end: "19:00",
        type: "Confissão",
      },
    ],
    mass_times: [
      {
        day: "Segunda a Sexta",
        time: "06:00, 10:00, 16:00, 18:00",
        type: "Missa",
      },
      {
        day: "Sábado",
        time: "10:00, 16:00, 18:00",
        type: "Missa",
      },
      {
        day: "Domingo",
        time: "08:00, 10:00, 12:00, 16:00, 17:30, 19:00",
        type: "Missa",
      },
    ],
  },

  {
    id: 7,
    name: "Anunciação da Nossa Senhora",
    lat: -22.9028,
    lng: -43.2521,
    address: "Rua Frei Pinto, 27 - Riachuelo - Rio de Janeiro-RJ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 8,
    name: "Imaculada Conceição",
    lat: -22.9045,
    lng: -43.2435,
    address:
      "Rua São Francisco Xavier, 935 - São Francisco Xavier - Rio de Janeiro, RJ ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 9,
    name: "Paroquia Nossa Senhora Aparecida",
    lat: -22.904,
    lng: -43.2561,
    address: "Rua Marechal Bittencourt, 112 - Riachuelo - 2Rio de Janeiro, RJ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 10,
    name: "Nossa Senhora das Graças",
    lat: -22.9019,
    lng: -43.2547,
    address: "Rua Vinte e Quatro de Maio, 382 - Riachuelo - Rio de Janeiro, RJ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 11,
    name: "Santo Antônio (Irmandade)",
    lat: -22.9076,
    lng: -43.2547,
    address: "Rua Filgueiras Lima, 145 - Riachuelo - Rio de Janeiro, RJ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 12,
    name: "São Jorge e São Geraldo",
    lat: -22.903,
    lng: -43.2535,
    address: "Avenida Marechal Rondon, 1.478 - Riachuelo - Rio de Janeiro, RJ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 13,
    name: "Igreja Matriz Apóstolo São Pedro",
    lat: -22.8726,
    lng: -43.3137,
    address: "Rua Antônio Saraiva, 23 - Cavalcante - Rio de Janeiro, RJ ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 14,
    name: "Igreja Matriz Bom Jesus",
    lat: -22.8732,
    lng: -43.6284,
    address: "Rua Onze, 660 - Manguariba - Paciência - Rio de Janeiro, RJ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 15,
    name: "Nossa Senhora das Graças e Santo Expedito",
    lat: -22.8755,
    lng: -43.6471,
    address:
      "Estrada da Guaraima, 114 - Morada Verde - Santa Cruz - Rio de Janeiro, RJ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 16,
    name: "Igreja Matriz Bom Jesus da Penha",
    lat: -22.8414,
    lng: -43.2799,
    address: "Avenida Brás de Pina, 181 - Penha - Rio de Janeiro, RJ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 17,
    name: "Nossa Senhora da Glória",
    lat: -22.8439,
    lng: -43.2895,
    address: "Rua Maragogi, 182 - Penha - Rio de Janeiro, RJ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 18,
    name: "Nossa Senhora da Penha (Santuário e Basílica)",
    lat: -22.8443,
    lng: -43.275,
    address: "Largo da Penha, 19 - Penha - Rio de Janeiro, RJ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 19,
    name: "São Vicente de Paulo",
    lat: -22.8506,
    lng: -43.2841,
    address: "Rua São Vicente de Paulo, 10 - Penha - Rio de Janeiro, RJ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 20,
    name: "Igreja Matriz Bom Pastor",
    lat: -22.9304,
    lng: -43.2327,
    address: "Rua Bom Pastor, 491 - Tijuca - Rio de Janeiro, RJ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 21,
    name: "São Sebastião",
    lat: -22.9287,
    lng: -43.2263,
    address:
      "Rua Junquilhos, 180 - Morro do Salgueiro - Tijuca - Rio de Janeiro, RJ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 22,
    name: "Igreja Matriz Bom Pastor",
    lat: -22.8526,
    lng: -43.4694,
    address: "Rua Rio Real, 76 - Bangu - Rio de Janeiro, RJ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 23,
    name: "Nossa Senhora da Conceição e São Sebastião",
    lat: -22.8493,
    lng: -43.4726,
    address: "Rua Miralde, 30 - Catiri - Bangu - Rio de Janeiro, RJ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 24,
    name: "Igreja Matriz Bom Pastor e Nossa Senhora de Fátima",
    lat: -22.8975,
    lng: -43.5633,
    address: "Rua Vitor Alves, 404 - Campo Grande - Rio de Janeiro, RJ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 25,
    name: "Igreja Matriz Catedral Metropolitana de São Sebastião do Rio de Janeiro",
    lat: -22.9105,
    lng: -43.1807,
    address: "Avenida República do Chile, 245 - Centro - Rio de Janeiro, RJ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 26,
    name: "Nossa Senhora das Dores (Irmandade) (Polícia Militar do RJ)",
    lat: -22.9117,
    lng: -43.1784,
    address: "Avenida Evaristo da Veiga, 78 - Centro - Rio de Janeiro, RJ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 27,
    name: "Santo Antônio",
    lat: -22.9065,
    lng: -43.1794,
    address: "Largo da Carioca, s/n - Centro - Rio de Janeiro, RJ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 28,
    name: "São Francisco da Penitência (Ordem Terceira)",
    lat: -22.9070,
    lng: -43.1790,
    address: "Largo da Carioca, 5 - Centro - Rio de Janeiro, RJ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 29,
    name: "Igreja Matriz Coração Eucarístico de Jesus",
    lat: -22.8802,
    lng: -43.5096,
    address: "Rua Coração Eucarístico, 260 - Santíssimo - Rio de Janeiro, RJ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 30,
    name: "Nossa Senhora das Graças da Medalha Milagrosa",
    lat: -22.8826,
    lng: -43.5216,
    address: "Estrada do Lameirão, 120 - Santíssimo - Rio de Janeiro, RJ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 31,
    name: "Nossa Senhora de Fátima",
    lat: -22.8902,
    lng: -43.5168,
    address: "Rua Irapuru, 425 A - Rio de Janeiro, RJ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 32,
    name: "São Lucas e Nossa Senhora da Cabeça",
    lat: -22.8866,
    lng: -43.5028,
    address: "Rua General Gentil Marcondes Filho, 1 - Santíssimo - Rio de Janeiro, RJ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 33,
    name: "São Pedro",
    lat: -22.8897,
    lng: -43.5270,
    address: "Avenida Santa Cruz, 11.664 - Senador Vasconcelos - Rio de Janeiro, RJ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 34,
    name: "São Sebastião e São Jorge",
    lat: -22.8761,
    lng: -43.5133,
    address: "Rua Teixeira Campos, s/n - Santíssimo - Rio de Janeiro, RJ",
    confession_times: [],
    mass_times: [],
  },
  {
    id: 35,
    name: "Igreja Matriz Cristo Libertador",
    lat: -22.8838,
    lng: -43.4137,
    address: "Rua Caminho da Bica, 20 - Realengo - Rio de Janeiro, RJ",
    confession_times: [],
    mass_times: [],
  },
];
