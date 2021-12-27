import { Invoice } from "./classImplementsInterface";
import { HasPrint } from "./interfaceForClass";

const documentOne: HasPrint = new Invoice('bao', 'teacher', 30)
const documentTwo: HasPrint = new Invoice('hung', 'student', 30);

const allDocuments: HasPrint[] = [documentTwo]
allDocuments.push(documentOne)