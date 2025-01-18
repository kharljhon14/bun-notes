import { buttonVariants } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Plus } from 'lucide-react';

export default function CreateNoteModal() {
  return (
    <div className="fixed bottom-10 right-24">
      <Dialog>
        <DialogTrigger
          className={`${buttonVariants({ variant: 'default' })} rounded-full w-16 h-16`}
        >
          <Plus />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Note</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
