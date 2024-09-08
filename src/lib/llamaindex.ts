import { Document, VectorStoreIndex } from 'llamaindex';

export function indexContent(content: string) {
const document = new Document({ text: content });
const index = new VectorStoreIndex().fromDocuments([document]);
    return index.getVectorEmbeddings();
}