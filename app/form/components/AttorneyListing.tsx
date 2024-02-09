import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface Props {
  handleClick: () => void;
}

export function AttorneyListing({ handleClick }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button">Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Attorney Listing</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Adress
            </Label>
            <Textarea className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleClick}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
