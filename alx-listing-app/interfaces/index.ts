// interfaces/index.ts
export interface CardProps {
  imageUrl: string;
  title: string;
  location: string;
  price: number;
  // Add any other ideas you have
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}
