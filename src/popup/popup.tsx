import React, { useState } from 'react';
import { ChatUI } from 'assistant-ui';

const Popup: React.FC = () => {
const [question, setQuestion] = useState('');
const [answer, setAnswer] = useState('');

const handleAsk = async () => {
    // Implement the logic to query the RAG system
    // and update the answer state
};

return (
    <div>
    <ChatUI
        question={question}
        answer={answer}
        onQuestionChange={setQuestion}
        onAsk={handleAsk}
    />
    </div>
);
};

export default Popup;