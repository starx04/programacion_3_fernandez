// src/components/shadcn/FormularioUsuario_mp.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


export default function FormularioUsuario_mp() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Nueva Reserva</Button>
      </DialogTrigger>


      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reservar una Mesa</DialogTitle>
        </DialogHeader>


        <div className="space-y-4">
          <Input placeholder="Nombre completo" />


          <Input
            type="email"
            placeholder="Correo electrónico"
          />


          <Input
            type="number"
            placeholder="Número de comensales"
          />


          <Button className="w-full">
            Confirmar Reserva
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
