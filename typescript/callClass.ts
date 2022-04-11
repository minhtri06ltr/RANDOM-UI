import { Invoice, Payment } from './classInterface';
import { hasPrint } from './export';


const documentOne: hasPrint = new Invoice('vinamilk','drink',500);
const documentTwo: hasPrint = new Payment('airlines','service',25);

const allDocuments: hasPrint[] = [];

allDocuments.push(documentOne)