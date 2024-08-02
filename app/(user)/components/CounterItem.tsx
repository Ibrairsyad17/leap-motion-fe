import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import React from "react";

interface CounterItemProps {
  onAdd: () => void;
  onRemove: () => void;
  quantity: number;
  type?: "cart" | "menu";
}

export const CounterItem = (props: CounterItemProps) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Button
        className="col-span-1 py-6"
        {...(props.type === "cart" && { variant: "outline" })}
        {...(props.type === "menu" && { variant: "destructive" })}
        onClick={props.onRemove}
        size="lg"
      >
        {props.quantity === 1 ? "Hapus" : "Kurang"}
      </Button>
      <span className="w-full font-medium text-lg rounded-lg inline-flex justify-center items-center">
        {props.quantity}
      </span>
      <Button className="w-full py-6" size="lg" onClick={props.onAdd}>
        Add
      </Button>
    </div>
  );
};
