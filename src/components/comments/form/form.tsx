import { Rating, Stack, Typography } from '@mui/material';
import type { CommentFormProps } from '../write/write.types';
import { Form } from './form.style';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import { SubmitButton, YellowTextField } from '@/components/boards/form/boardForm.style';

export default function CommentForm({ register, onSubmit, errors, rating, onRatingChange }: CommentFormProps) {
  return (
    <Form onSubmit={onSubmit}>
      <Stack flexDirection="row" sx={{ margin: '20px 0' }}>
        <SpeakerNotesIcon sx={{ color: '#FFD600', marginRight: '8px' }} />
        <Typography variant="subtitle2" gutterBottom fontWeight={700}>
          댓글
        </Typography>
      </Stack>

      <Rating sx={{ marginBottom: '10px' }} value={rating} onChange={(_, newValue) => onRatingChange(newValue)} />

      <Stack direction="row" justifyContent="space-between" sx={{ width: '100%', marginBottom: '24px' }}>
        <YellowTextField
          sx={{ width: '48%' }}
          error={!!errors.writer}
          helperText={errors?.writer?.message?.toString() ?? ''}
          placeholder="이름을 적어주세요"
          {...register('writer', {
            required: '작성자는 필수 입력값 입니다.',
          })}
        />

        <YellowTextField
          sx={{ width: '48%' }}
          type="password"
          error={!!errors.password}
          helperText={errors?.password?.message?.toString() ?? ''}
          placeholder="비밀번호를 입력해주세요"
          {...register('password', {
            required: '비밀번호는 필수 입력값 입니다.',
          })}
        />
      </Stack>

      <YellowTextField
        multiline
        rows={5}
        error={!!errors.contents}
        helperText={errors?.contents?.message?.toString() ?? ''}
        {...register('contents', {
          required: '댓글을 작성해주세요!',
        })}
      />

      <SubmitButton type="submit" color="black" variant="contained">
        등록하기
      </SubmitButton>
    </Form>
  );
}
