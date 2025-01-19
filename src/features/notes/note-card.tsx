import { Note } from '@/@types/note';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useNoteContext } from '@/context/noteWeather';
import DeletenoteButton from './delete-note-button';

interface Props {
  note: Note;
}

export default function NoteCard({ note }: Props) {
  const { setNote } = useNoteContext();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{note.description}</p>
      </CardContent>
      <CardFooter>
        <div className="flex gap-2">
          <Button onClick={() => setNote(note)}>Edit</Button>
          <DeletenoteButton id={note.id} />
        </div>
      </CardFooter>
    </Card>
  );
}
