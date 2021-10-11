import PropTypes from 'prop-types';
import { convertToReal } from '../../utils/convertToMoney';
import { simpleDate } from '../../utils/dateMethods';
import { EditIcon, RemoveIcon } from '../Icons';
import {
  Table, TableHeader, TableContainer, TableBody, TableRow,
} from './styles';

function SearchDetails({ values }) {
  return (
    <Table>
      <TableHeader>
        <span>Nome</span>
        <span>Descrição</span>
        <span>Valor</span>
        <span>Venceu em</span>
        <span>Editar</span>
        <span>Remover</span>
      </TableHeader>
      <TableContainer>
        <TableBody>
          {values.map((value) => (
            <TableRow key={value.id}>
              <span>{value.name}</span>
              <span>{value.description}</span>
              <span>{convertToReal(value.value)}</span>
              <span>{simpleDate(value.due_date)}</span>
              <span><EditIcon /></span>
              <span><RemoveIcon color="#f00" /></span>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
    </Table>
  );
}

export { SearchDetails };

SearchDetails.propTypes = {
  values: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    due_date: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
};
