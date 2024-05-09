"use client";
import React from "react";
import { Button } from "@/components/ui/button";

const CounterItem = () => {
  const [count, setCount] = React.useState(1);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div className="flex space-x-10 items-center">
      <Button onClick={handleIncrement} variant="outline" size="lg">
        Tambah
      </Button>
      <span className="text-lg">{count}</span>
      <Button onClick={handleDecrement} variant="outline" size="lg">
        Kurang
      </Button>
    </div>
  );
};

export default CounterItem;
