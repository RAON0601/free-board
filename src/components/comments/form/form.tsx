import { Input, InputError, InputFieldSmall } from '@/components/commons/form/input.style';
import type { CommentFormProps } from '../write/write.types';
import { ButtonWrapper, Form, SubmitButton, TextArea, Title, TitleContainer, WriterInputWrapper } from './form.style';

export default function CommentForm({ register, onSubmit, errors }: CommentFormProps) {
  return (
    <Form onSubmit={onSubmit}>
      <TitleContainer>
        <span style={{ marginRight: '8px' }}>🎁</span> <Title>댓글</Title>
      </TitleContainer>
      <span style={{ marginBottom: '20px', marginTop: '20px' }}>⭐⭐⭐⭐⭐</span>
      <WriterInputWrapper>
        <InputFieldSmall>
          <Input placeholder="작성자" {...register('writer', { required: '작성자는 필수 입력값입니다!' })} />
          {errors.writer && <InputError>{errors.writer.message}</InputError>}
        </InputFieldSmall>
        <InputFieldSmall>
          <Input
            placeholder="비밀번호"
            type="password"
            {...register('password', {
              required: '비밀번호는 필수 입력값입니다!',
            })}
          />
          {errors.password && <InputError>{errors.password.message}</InputError>}
        </InputFieldSmall>
      </WriterInputWrapper>
      <TextArea
        placeholder="댓글을 작성해주세요!"
        {...register('contents', {
          required: true,
          maxLength: 10,
        })}
      />
      <ButtonWrapper>
        <span>0/100</span>
        <SubmitButton color="black">등록하기</SubmitButton>
      </ButtonWrapper>
      {errors.contents?.type === 'required' && <InputError>댓글을 작성해주세요!</InputError>}
      {errors.contents?.type === 'maxLength' && <InputError>최대 100자만 입력 가능합니다</InputError>}
    </Form>
  );
}
