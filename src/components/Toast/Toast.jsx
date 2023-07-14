import toast from 'react-simple-toasts';
import styled from 'styled-components';

const StyledToast = styled.div`
  width: 339px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(103, 93, 69, 0.712);
  border-radius: 14px;
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  vertical-align: middle;
`;

export function Toast(message) {
  toast(message, {
    clickClosable: true,
    render: (message) => <StyledToast>{message}</StyledToast>,
  });
}

export default Toast;
