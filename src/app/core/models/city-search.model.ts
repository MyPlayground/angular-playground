export interface AreaCode {
  code: string;
  japanese: string;
  english: string;
}

export interface Municipal {
  status: string;
  data: [
    {
      id: string;
      name: string;
    }
  ];
}
