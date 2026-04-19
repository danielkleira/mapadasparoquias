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
    name: "Basílica Imaculada COnceição",
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
];
