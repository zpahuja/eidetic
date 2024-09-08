import { Document, VectorStoreIndex } from 'llamaindex';

export function indexContent(content: string) {
const document = new Document({ text: content });
const index = new VectorStoreIndex().fromDocuments([document]);
return index.getVectorEmbeddings();
}

// src/lib/qdrant.ts
import { QdrantClient } from '@qdrant/js-client-rest';

const client = new QdrantClient({ url: 'http://localhost:6333' });

export async function storeVectors(vectors: number[][]) {
await client.upsert('my_collection', {
    wait: true,
    batch: {
    ids: [Date.now().toString()],
    vectors: vectors,
    },
});
}