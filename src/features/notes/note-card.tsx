import { Note } from '@/@types/note';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useNoteContext } from '@/context/noteWeather';

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
          <Button variant="destructive">Delete</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
