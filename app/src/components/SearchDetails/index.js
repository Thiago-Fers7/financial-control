import { Table, TableHeader, TableBody } from './styles';

function SearchDetails() {
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
      <TableBody>
        <span>Salário</span>
        <span>Meu salário</span>
        <span>R$ 21.500,00</span>
        <span>01/10/2021</span>
        <span>/</span>
        <span>-</span>
      </TableBody>
    </Table>
  );
}

export { SearchDetails };
