export interface Menu {
  id: number;
  image: string;
  title: string;
  price: number;
  desc: string;
  category: "makanan" | "minuman";
  extras: Extra[];
}

export interface Extra {
  id: number;
  name: string;
  price: number;
}

export interface CartItem {
  menu: Menu;
  quantity: number;
}
