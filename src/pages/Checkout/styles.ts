import styled from 'styled-components'
import { cores } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive?: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: flex-end;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};
  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }
  input,
  select {
    background-color: ${cores.branca};
    border: 1px solid ${cores.branca};
    height: 32px;
    padding: 0 8px;
    width: 100%;
  }
`

export const TabButton = styled.button<TabButtonProps>`
  background-color: ${(props) => (props.isActive ? cores.verde : cores.preta)};
  border: none;
  border-radius: 8px;
  color: ${cores.branca};
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  height: 32px;
  margin-right: 16px;
  padding: 0 8px;

  img {
    margin-right: 8px;
  }
`
