import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import NotesForm from './notes-form';

export default function CreateNoteModal() {
  return (
    <div className="fixed bottom-10 right-24">
      <Dialog>
        <DialogTrigger className="rounded-full size-20 bg-black text-white flex items-center justify-center">
          <Plus
            strokeWidth={1}
            size={36}
          />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Note</DialogTitle>
          </DialogHeader>
          <div>
            <NotesForm />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
