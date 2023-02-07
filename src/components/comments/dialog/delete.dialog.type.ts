export interface CommentDeleteDialogProps {
  deleteDialogOpen: boolean;
  handleDeleteDialogClose: () => void;
  commentId?: string;
  boardId?: string;
}
