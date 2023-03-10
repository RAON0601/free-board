import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DaumPostcodeEmbed from 'react-daum-postcode';

import type { BoardFormUIProps } from './boardForm.types';
import { Form, ModalContentWrapper, PostButton, SubmitButton, YellowTextField } from './boardForm.style';
import { ErrorModal } from '../commons/error.modal';
import { SuccessModal } from '../commons/success.modal';

export default function BoardFormUI({
  onSubmit,
  register,
  errors,
  validateInput,
  isEdit,
  board,
  toggleAddressModal,
  addressModalStatus,
  onAddressInput,
  errorMessage,
  errorModalStatus,
  toggleErrorModal,
  successMessage,
  successModalStatus,
  toggleSuccessModal,
}: BoardFormUIProps) {
  return (
    <Form onSubmit={onSubmit}>
      {addressModalStatus && (
        <Modal open={true} onClose={toggleAddressModal}>
          <ModalContentWrapper>
            <DaumPostcodeEmbed onComplete={onAddressInput} />
          </ModalContentWrapper>
        </Modal>
      )}

      <SuccessModal {...{ successModalStatus, toggleSuccessModal, message: successMessage }} />
      <ErrorModal {...{ errorModalStatus, toggleErrorModal, message: errorMessage }} />

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
            defaultValue={board?.writer?.toString()}
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
        <YellowTextField placeholder="07250" InputProps={{ readOnly: true }} {...register('boardAddress.zipcode')} />

        <PostButton color="black" variant="contained" onClick={toggleAddressModal}>
          우편번호 검색
        </PostButton>
      </Stack>

      <Stack direction="row" justifyContent="flex-start" sx={{ width: '100%', marginTop: '16px' }}>
        <Stack direction="column" sx={{ width: '100%' }}>
          <YellowTextField InputProps={{ readOnly: true }} {...register('boardAddress.address')} />
        </Stack>
      </Stack>

      <Stack direction="row" justifyContent="flex-start" sx={{ width: '100%', marginTop: '16px' }}>
        <Stack direction="column" sx={{ width: '100%' }}>
          <YellowTextField {...register('boardAddress.addressDetail')} />
        </Stack>
      </Stack>

      <Stack direction="row" justifyContent="flex-start" sx={{ width: '100%', marginTop: '24px' }}>
        <Stack direction="column" sx={{ width: '100%' }}>
          <Typography variant="subtitle2" gutterBottom fontWeight={700}>
            유튜브
          </Typography>
          <YellowTextField placeholder="링크를 복사해주세요" {...register('youtubeUrl')} />
        </Stack>
      </Stack>

      <Stack direction="row" sx={{ marginTop: '24px' }}>
        <SubmitButton type="submit" color={validateInput() ? 'yellow' : 'black'} variant="contained">
          {isEdit ? '수정' : '등록'}하기
        </SubmitButton>
      </Stack>
    </Form>
  );
}
