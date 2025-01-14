import styled, {DefaultTheme} from 'styled-components';

type TypographyProps = {
  size?: '12' | '13' | '14' | '16' | '18' | '24';
  weight?: '500' | '700';
  color?: string;
  marginBottom?: number;
  marginTop?: number;
  theme: DefaultTheme;
};

const Typography = styled.p<TypographyProps>`
  font-size: ${(props) => props.size + 'px' || '12'};
  font-weight: ${(props) => props.weight || '500'};
  color: ${(props) => props.color || 'black'};
  margin-bottom: ${(props) => props.marginBottom || '0'}px;
  margin-top: ${(props) => props.marginTop || '0'}px;
`;

export default Typography;
