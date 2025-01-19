import { Note } from '@/@types/note';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
  note: Note;
}

export default function NoteCard({ note }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{note.description}</p>
      </CardContent>
    </Card>
  );
}
