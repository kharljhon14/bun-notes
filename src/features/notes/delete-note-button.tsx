import { Button } from '@/components/ui/button';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface Props {
  id: number;
}

export default function DeletenoteButton({ id }: Props) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      await fetch(`http://localhost:5001/api/v1/notes/${id}`, {
        method: 'DELETE'
      });
    },
    onSuccess: () => {
      console.log('Mutation successful');
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    }
  });

  return (
    <Button
      onClick={() => mutation.mutate()}
      variant="destructive"
    >
      Delete
    </Button>
  );
}
