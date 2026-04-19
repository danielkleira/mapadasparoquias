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
    name: "Paróquia São José",
    lat: -22.9068,
    lng: -43.1729,
    address: "Centro - RJ",
    confession_times: [
      { day: "Segunda", start: "08:00", end: "10:00", type: "Confissão" },
      { day: "Sábado", start: "09:00", end: "11:00", type: "Confissão" },
    ],
    mass_times: [
      { day: "Domingo", time: "07:00", type: "Missa" },
      { day: "Domingo", time: "10:00", type: "Missa" },
      { day: "Domingo", time: "18:00", type: "Missa" },
      { day: "Sábado", time: "18:00", type: "Missa" },
    ],
  },
  {
    id: 2,
    name: "Igreja Nossa Senhora da Glória",
    lat: -22.9142,
    lng: -43.1971,
    address: "Glória - RJ",
    confession_times: [
      { day: "Terça", start: "16:00", end: "18:00", type: "Confissão" },
      { day: "Quinta", start: "16:00", end: "19:00", type: "Confissão" },
    ],
    mass_times: [
      { day: "Domingo", time: "08:00", type: "Missa" },
      { day: "Domingo", time: "19:00", type: "Missa" },
      { day: "Quarta", time: "19:00", type: "Missa" },
    ],
  },
  {
    id: 3,
    name: "Paróquia Santo Antônio",
    lat: -22.9185,
    lng: -43.184,
    address: "Botafogo - RJ",
    confession_times: [
      { day: "Sexta", start: "07:00", end: "08:30", type: "Confissão" },
      { day: "Sexta", start: "17:00", end: "18:30", type: "Confissão" },
    ],
    mass_times: [
      { day: "Domingo", time: "09:00", type: "Missa" },
      { day: "Domingo", time: "17:30", type: "Missa" },
      { day: "Segunda", time: "18:00", type: "Missa" },
    ],
  },
];
