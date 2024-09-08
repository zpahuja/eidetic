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