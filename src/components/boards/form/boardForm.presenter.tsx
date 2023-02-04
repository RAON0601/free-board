import type { BoardFormUIProps } from './boardForm.types';
import {
  Form,
  ImageUploadButton,
  ModalContentWrapper,
  PostButton,
  SubmitButton,
  YellowTextField,
} from './boardForm.style';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import DaumPostcodeEmbed from 'react-daum-postcode';

export default function BoardFormUI({
  onSubmit,
  register,
  errors,
  validateInput,
  isEdit,
  board,
  toggleAddressModal,
  addressModalStatus,
}: BoardFormUIProps) {
  console.log(isEdit, 'form 컴포넌트');

  return (
    <Form onSubmit={onSubmit}>
      {addressModalStatus && (
        <Modal open={true} onClose={toggleAddressModal}>
          <ModalContentWrapper>
            <DaumPostcodeEmbed onComplete={data => console.log(data)} />
          </ModalContentWrapper>
        </Modal>
      )}

      <Typography variant="h3" gutterBottom fontWeight={700}>
        게시글 {isEdit ? '수정' : '등록'}
      </Typography>

      <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
        <Stack direction="column" sx={{ width: '48%' }}>
          <Typography variant="subtitle2" gutterBottom fontWeight={700}>
            작성자
          </Typography>
          <YellowTextField
            error={!!errors.writer}
            helperText={errors?.writer?.message?.toString() ?? ''}
            placeholder="이름을 적어주세요"
            {...register('writer', {
              required: '작성자는 필수 입력값 입니다.',
            })}
            defaultValue={board?.writer ?? ''}
          />
        </Stack>

        <Stack direction="column" sx={{ width: '48%' }}>
          <Typography variant="subtitle2" gutterBottom fontWeight={700}>
            비밀번호
          </Typography>
          <YellowTextField
            type="password"
            error={!!errors.password}
            helperText={errors?.password?.message?.toString() ?? ''}
            placeholder="비밀번호를 입력해주세요"
            {...register('password', {
              required: '비밀번호는 필수 입력값 입니다.',
            })}
          />
        </Stack>
      </Stack>

      <Stack direction="row" justifyContent="flex-start" sx={{ width: '100%', marginTop: '16px' }}>
        <Stack direction="column" sx={{ width: '100%' }}>
          <Typography variant="subtitle2" gutterBottom fontWeight={700}>
            제목
          </Typography>
          <YellowTextField
            error={!!errors.title}
            helperText={errors?.title?.message?.toString() ?? ''}
            placeholder="제목을 작성해주세요"
            {...register('title', { required: '제목은 필수 입력값 입니다.' })}
            defaultValue={board?.title}
          />
        </Stack>
      </Stack>

      <Stack direction="row" justifyContent="flex-start" sx={{ width: '100%', marginTop: '16px' }}>
        <Stack direction="column" sx={{ width: '100%' }}>
          <Typography variant="subtitle2" gutterBottom fontWeight={700}>
            내용
          </Typography>

          <YellowTextField
            multiline
            rows={20}
            error={!!errors.contents}
            helperText={errors?.contents?.message?.toString() ?? ''}
            {...register('contents', {
              required: '내용은 필수 입력값 입니다.',
            })}
            defaultValue={board?.title}
          />
        </Stack>
      </Stack>

      <Stack direction="row" justifyContent="flex-start" sx={{ width: '100%', marginTop: '48px' }}>
        <Typography variant="subtitle2" gutterBottom fontWeight={700}>
          주소
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="start"
        alignItems="center"
        spacing={2}
        sx={{ width: '100%', marginTop: '16px' }}
      >
        <YellowTextField placeholder="07250" InputProps={{ readOnly: true }} {...register('address1')} />

        <PostButton color="black" variant="contained" onClick={toggleAddressModal}>
          우편번호 검색
        </PostButton>
      </Stack>

      <Stack direction="row" justifyContent="flex-start" sx={{ width: '100%', marginTop: '16px' }}>
        <Stack direction="column" sx={{ width: '100%' }}>
          <YellowTextField InputProps={{ readOnly: true }} {...register('address2')} />
        </Stack>
      </Stack>

      <Stack direction="row" justifyContent="flex-start" sx={{ width: '100%', marginTop: '16px' }}>
        <Stack direction="column" sx={{ width: '100%' }}>
          <YellowTextField {...register('address3')} />
        </Stack>
      </Stack>

      <Stack direction="row" justifyContent="flex-start" sx={{ width: '100%', marginTop: '24px' }}>
        <Stack direction="column" sx={{ width: '100%' }}>
          <Typography variant="subtitle2" gutterBottom fontWeight={700}>
            유튜브
          </Typography>
          <YellowTextField placeholder="링크를 복사해주세요" {...register('youtubeLink')} />
        </Stack>
      </Stack>

      <Stack direction="row" justifyContent="flex-start" sx={{ width: '100%', marginTop: '48px' }}>
        <Typography variant="subtitle2" gutterBottom fontWeight={700}>
          사진 첨부
        </Typography>
      </Stack>

      <Stack direction="row" justifyContent="flex-start" sx={{ width: '100%' }}>
        <ImageUploadButton component="label">
          <AddIcon />
          <input hidden accept="image/*" type="file" />
        </ImageUploadButton>

        <ImageUploadButton component="label">
          <AddIcon />
          <input hidden accept="image/*" type="file" />
        </ImageUploadButton>

        <ImageUploadButton component="label">
          <AddIcon />
          <input hidden accept="image/*" type="file" />
        </ImageUploadButton>
      </Stack>

      <Stack direction="row" justifyContent="flex-start" sx={{ width: '100%', marginTop: '48px' }}>
        <Typography variant="subtitle2" gutterBottom fontWeight={700}>
          메인 설정
        </Typography>
      </Stack>

      <RadioGroup row name="category" sx={{ width: '100%' }}>
        <FormControlLabel
          value="유튜브"
          label="유튜브"
          control={
            <Radio
              sx={{
                '&.Mui-checked': {
                  color: '#FFD600',
                },
              }}
            />
          }
          {...register('category')}
        />
        <FormControlLabel
          value="사진"
          label="사진"
          control={
            <Radio
              sx={{
                '&.Mui-checked': {
                  color: '#FFD600',
                },
              }}
            />
          }
          {...register('category')}
        />
      </RadioGroup>

      <Stack direction="row">
        <SubmitButton type="submit" color={validateInput() ? 'yellow' : 'black'} variant="contained">
          {isEdit ? '수정' : '등록'}하기
        </SubmitButton>
      </Stack>
    </Form>
  );
}
