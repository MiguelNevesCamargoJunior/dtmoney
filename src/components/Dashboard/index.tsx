import { TransactionTable } from "../TransactionsTable";
import { Container } from "./styles";
import { Summary } from "./Summary";

export function Dashboard() {
  return ( 
    <Container>
      <Summary />
      <TransactionTable/>
    </Container>
  );
}