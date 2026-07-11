// src/components/shadcn/TarjetaProducto_mp.tsx


import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import { Button } from "@/components/ui/button";


export default function TarjetaProducto_mp() {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Ceviche de Camarón</CardTitle>
      </CardHeader>


      <CardContent>
        <p>Camarón fresco marinado en limón</p>
        <p>Cebolla morada y cilantro</p>
        <p>Acompañado de chifles</p>
        <p className="font-bold text-lg">$8.50</p>
      </CardContent>


      <CardFooter>
        <Button className="w-full">
          Pedir ahora
        </Button>
      </CardFooter>
    </Card>
  );
}
